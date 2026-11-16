export interface VocabularyExample {
	swedish: string;
	english: string;
}

export interface NounVocabularyEntry {
	kind: 'noun';
	lemma: string;
	phonetic: string;
	translation: string;
	forms: {
		indefiniteSingular: NounForm;
		definiteSingular: NounForm;
		indefinitePlural: NounForm;
		definitePlural: NounForm;
	};
}

export interface NounForm {
	form: string;
	phonetic: string;
	example: VocabularyExample;
}

export enum VerbTenseType {
	INFINITIVE = 'INFINITIVE',
	PRESENT = 'PRESENT',
	PRETERITE = 'PRETERITE',
	PERFECT = 'PERFECT',
	PLUPERFECT = 'PLUPERFECT',
	FUTURE_SKA = 'FUTURE_SKA',
	FUTURE_KOMMER_ATT = 'FUTURE_KOMMER_ATT',
	IMPERATIVE = 'IMPERATIVE',
	CONDITIONAL_PERFECT = 'CONDITIONAL_PERFECT',
}

export interface VerbVocabularyEntry {
	kind: 'verb';
	lemma: string;
	phonetic: string;
	translation: string;
	tenses: Array<{
		type: VerbTenseType;
		auxiliary?: string;
		form: string;
		phonetic: string;
		example: VocabularyExample;
	}>;
}

export enum AdjectiveFormType {
	COMMON = 'COMMON',
	NEUTER = 'NEUTER',
	PLURAL = 'PLURAL',
	ADVERB = 'ADVERB',
	COMPARATIVE = 'COMPARATIVE',
	SUPERLATIVE = 'SUPERLATIVE',
}

export interface AdjectiveVocabularyEntry {
	kind: 'adjective';
	lemma: string;
	phonetic: string;
	translation: string;
	forms: Array<{
		type: AdjectiveFormType;
		form: string;
		phonetic: string;
		example: VocabularyExample;
	}>;
}

export interface PhraseVocabularyEntry {
	kind: 'phrase';
	swedish: string;
	phonetic: string;
	english: string;
	example: VocabularyExample;
}
