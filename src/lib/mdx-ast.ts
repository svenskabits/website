import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';

type AstNode = {
	type: string;
	children?: AstNode[];
	[key: string]: unknown;
};

type EstreeNode = {
	type: string;
	[key: string]: any;
};

const parser = remark().use(remarkGfm).use(remarkMdx);

function evaluateStaticExpression(program: EstreeNode): unknown {
	const statement = program.body?.[0];
	if (program.body?.length !== 1 || statement?.type !== 'ExpressionStatement') {
		throw new Error('Expression is not a single static value');
	}
	return evaluateStaticValue(statement.expression);
}

function evaluateStaticValue(node: EstreeNode): unknown {
	switch (node.type) {
		case 'Literal':
			if (
				node.value === null ||
				typeof node.value === 'string' ||
				typeof node.value === 'number' ||
				typeof node.value === 'boolean'
			) {
				return node.value;
			}
			break;
		case 'ObjectExpression': {
			const entries: Array<[string, unknown]> = [];
			for (const property of node.properties ?? []) {
				if (
					property.type !== 'Property' ||
					property.kind !== 'init' ||
					property.method ||
					property.computed
				) {
					break;
				}
				const key =
					property.key.type === 'Identifier'
						? property.key.name
						: property.key.type === 'Literal' && typeof property.key.value === 'string'
							? property.key.value
							: undefined;
				if (!key || key === '__proto__' || key === 'constructor' || key === 'prototype') {
					break;
				}
				entries.push([key, evaluateStaticValue(property.value)]);
			}
			if (entries.length === (node.properties ?? []).length) {
				return Object.fromEntries(entries);
			}
			break;
		}
		case 'ArrayExpression': {
			const values: unknown[] = [];
			for (const element of node.elements ?? []) {
				if (!element || element.type === 'SpreadElement') break;
				values.push(evaluateStaticValue(element));
			}
			if (values.length === (node.elements ?? []).length) return values;
			break;
		}
		case 'UnaryExpression': {
			const argument = evaluateStaticValue(node.argument);
			if (node.operator === '!' && typeof argument === 'boolean') return !argument;
			if (node.operator === '-' && typeof argument === 'number') return -argument;
			if (node.operator === '+' && typeof argument === 'number') return argument;
			break;
		}
		case 'TemplateLiteral':
			if (node.expressions?.length === 0) {
				return (node.quasis ?? []).map((part: EstreeNode) => part.value?.cooked ?? '').join('');
			}
			break;
	}

	throw new Error(`Unsupported dynamic expression: ${node.type}`);
}

function expressionValue(node: EstreeNode): unknown {
	const program = node.data?.estree;
	if (!program) throw new Error('Missing expression AST');
	return evaluateStaticExpression(program);
}

function serializeJsxElement(node: AstNode): Record<string, unknown> {
	const props: Record<string, unknown> = {};
	const unsupportedProps: string[] = [];

	for (const attribute of (node.attributes ?? []) as EstreeNode[]) {
		if (attribute.type === 'mdxJsxExpressionAttribute') {
			unsupportedProps.push('spread');
			continue;
		}
		if (attribute.type !== 'mdxJsxAttribute' || typeof attribute.name !== 'string') continue;

		if (attribute.value === null) {
			props[attribute.name] = true;
		} else if (typeof attribute.value === 'string') {
			props[attribute.name] = attribute.value;
		} else if (attribute.value.type === 'mdxJsxAttributeValueExpression') {
			try {
				props[attribute.name] = expressionValue(attribute.value);
			} catch {
				unsupportedProps.push(attribute.name);
			}
		}
	}

	return {
		type: 'component',
		name: node.name ?? null,
		props,
		...(unsupportedProps.length > 0 ? { unsupportedProps } : {}),
		children: serializeChildren(node.children ?? []),
	};
}

function serializeNode(node: AstNode): Record<string, unknown> | null {
	if (node.type === 'mdxjsEsm') return null;
	if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
		return serializeJsxElement(node);
	}
	if (node.type === 'mdxFlowExpression' || node.type === 'mdxTextExpression') {
		try {
			return { type: 'mdx-expression', value: expressionValue(node) };
		} catch {
			return { type: 'unsupported', reason: 'dynamic-mdx-expression' };
		}
	}

	const serialized: Record<string, unknown> = { type: node.type };
	for (const [key, value] of Object.entries(node)) {
		if (key === 'type' || key === 'position' || key === 'data' || key === 'children') continue;
		serialized[key] = value;
	}
	if (node.children) serialized.children = serializeChildren(node.children);
	return serialized;
}

function serializeChildren(children: AstNode[]): Record<string, unknown>[] {
	return children.flatMap((child) => {
		const serialized = serializeNode(child);
		return serialized ? [serialized] : [];
	});
}

export function serializeMdxToAst(source: string): Record<string, unknown> {
	const tree = parser.parse(source) as unknown as AstNode;
	return serializeNode(tree) ?? { type: 'root', children: [] };
}
