# Prompt: Write a Grammar (G) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page focuses on the grammar topic in its title.

This prompt explains how to write a **grammar page** (type **G**). Read all of it, then write the page you are asked for.

---

## 1. Input

You will be given:

```
Page title: {title}
Level: {A1 | A2 | B1 | B2}
Notes (optional): {anything specific to include or avoid}
```

Example request: *Create a grammar page for "Subject pronouns", level A1.*

## 2. Output

- Produce **one Markdown document** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `subject-pronouns.mdx` or `past-tense.mdx`. If the project handoff gives you an exact target path, use it.
- If you can write files, save the file. If you can't, output the complete file content only.
- Do not copy the HTML template comment from any other page or prompt.

---

## 3. Content principles

1. **Cover the full topic.** Include the relevant concepts, forms, patterns, rules, contexts, and exceptions needed to understand the topic as a whole. Do not arbitrarily narrow the topic to one small part.
2. **No content limits.** There is no fixed limit on the page length, number of sections, rules, examples, forms, table rows, or explanations. Do not cut relevant content to meet a length, time, count, or complexity target. Continue until the topic is covered clearly and completely; avoid only repetition and unrelated material.
3. **The level guides presentation, not coverage.** Use the stated CEFR level to choose clear explanations and scaffold difficult ideas. Do not omit relevant parts of the topic just because they are usually taught at a higher level. If full coverage includes details beyond the stated level, include them and explain them accessibly.
4. **Explain clearly.** State grammar rules in plain language and show how they work with natural examples. Use a grammar term only when it helps; explain unfamiliar terminology in context.
5. **Rules and examples work together.** Support explanations with enough examples to show the forms and contexts accurately, including contrasts or exceptions when relevant. Every Swedish example must have an accurate English translation.
6. **Use natural Swedish.** Use standard Swedish as used in Sweden. Check every form, ending, spelling, å/ä/ö and word order in every example. Reuse simple, common vocabulary where that helps the learner focus on grammar, but use whatever vocabulary is needed to explain the topic.
7. **Each page stands alone.** Do not refer to other pages, chapters or levels. Explain any basic idea needed to understand the topic within this page.
8. **Accuracy matters most.** If you are unsure a rule, form or fact is correct and current, verify it or leave it out. Never invent a rule to make the page look complete.

---

## 4. Page structure

Include the front matter below, followed by a clear explanation of the topic. There is **no required set of body sections or fixed section order**. Organize the material in whatever way best covers this topic: use descriptive headings, prose, lists, tables, examples, comparisons, notes, or other useful formats as appropriate. Add as many sections and examples as the topic needs. Do not force a generic template onto every page.

Do not add the English or Swedish page title again as a body heading; the site displays the page title from front matter.

### Front matter

```yaml
---
title: "English title of the page"
title_sv: "Natural Swedish version of the title"
type: G
level: A1
estimated_minutes: 4
tags: [tag1, tag2, tag3]
---
```

- `title`: the page title as given.
- `title_sv`: a natural Swedish name for the topic, not necessarily a word-for-word translation. Keep it in front matter only.
- `type`: always `G`.
- `level`: the level you were given.
- `estimated_minutes`: a reasonable whole-number estimate of reading time; it is descriptive metadata, not a target or content limit.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, prerequisites, next-page links, or references to other pages.

---

## 5. Style

- Write explanations and translations in plain, friendly, direct English.
- Keep Swedish examples natural: use sentences a native speaker would really say.
- Use tables when they make forms or contrasts easier to understand, and include an English translation for every example.
- Present broad or detailed material in a readable order. Use topic-specific headings to help navigation, but do not use a prescribed set of headings.
- Do not add filler or repeat the same explanation. This is a request for complete coverage, not unnecessary verbosity.

---

## 6. Checklist (verify before you finish)

- [ ] One correctly named Markdown document with valid front matter and no extra commentary.
- [ ] No English or Swedish page title repeated in the body.
- [ ] No mandatory template sections or fixed content counts have been imposed.
- [ ] The relevant parts of the full topic are covered; relevant content has not been omitted merely to fit the CEFR level or a length limit.
- [ ] Explanations are clear and accessible, including any terminology that needs explanation.
- [ ] Examples cover the rules and forms being taught, are natural Swedish, and have accurate English translations.
- [ ] All forms, endings, spelling, å/ä/ö and word order are correct.
- [ ] The page stands alone and contains no invented or uncertain rules.
