# Prompt: Write a Pronunciation (P) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page focuses on the pronunciation topic in its title.

This prompt explains how to write a **pronunciation page** (type **P**). Read all of it, then write the page you are asked for.

---

## 1. Input

You will be given:

```
Page title: {title}
Level: {A1 | A2 | B1 | B2}
Notes (optional): {anything specific to include or avoid}
```

Example request: *Create a pronunciation page for "The sj-sound", level A1.*

## 2. Output

- Produce **one Markdown document** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `long-and-short-vowels.mdx` or `the-sj-sound.mdx`. If the project handoff gives you an exact target path, use it.
- If you can write files, save the file. If you can't, output the complete file content only.
- Do not copy an HTML template comment from another page or prompt.

---

## 3. Content principles

1. **Cover the full topic.** Include the relevant sounds, spelling patterns, contrasts, contexts, variations, and exceptions needed to understand the topic as a whole. Do not arbitrarily narrow the topic to one small part.
2. **No content limits.** There is no fixed limit on page length, number of sections, rules, examples, practice words, minimal pairs, or explanations. Do not cut relevant content to meet a length, time, count, or complexity target. Continue until the topic is covered clearly and completely; avoid only repetition and unrelated material.
3. **The level guides presentation, not coverage.** Use the stated CEFR level to choose clear explanations and scaffold difficult ideas. Do not omit relevant parts of the topic just because they are usually taught at a higher level. If full coverage includes details beyond the stated level, include them and explain them accessibly.
4. **Link spelling to sound where relevant.** Explain what a learner sees in writing and how it is pronounced. For topics about stress, rhythm, intonation, or connected speech, describe the sound pattern directly.
5. **Describe sounds accurately and accessibly.** Use plain language first. Use a technical term such as *retroflex*, *fricative*, or *phoneme* only when useful, and explain it in context. Describe tongue or lip position only when you are confident it is correct.
6. **Use pronunciation notation carefully.** You may use IPA wherever it helps explain a sound, but only if you are certain it is accurate. Put IPA in square brackets and explain any symbols a learner may not know (for example, *ː means that the sound is long*). A plain-letter respelling may supplement an explanation, but must not be presented as an exact or universal pronunciation guide.
7. **Make comparisons carefully.** Compare a Swedish sound with an English sound only when the match is close, and describe it as "close to", never "the same as". If there is no close match, describe the Swedish sound in words or with accurate notation.
8. **Choose useful examples.** Use natural, correctly spelled Swedish words and phrases relevant to the topic. Give an accurate English meaning for each example. Use enough words, contrasts, and contexts to teach the full topic; do not force artificial minimal pairs.
9. **Each page stands alone.** Do not refer to other pages, chapters, or levels. Explain any basic idea needed to understand the topic within this page.
10. **Represent variation responsibly.** Describe standard Swedish as spoken in Sweden. Where pronunciation varies by region or speaker, explain the variation accurately; never call a valid regional or informal pronunciation wrong.
11. **Accuracy matters most.** Check every transcription, spelling, å/ä/ö, and example. If you are unsure a rule, sound, or fact is correct, verify it or leave it out. Never invent a rule to make a page look complete.

---

## 4. Page structure

Include the front matter below, followed by a clear explanation of the topic. There is **no required set of body sections or fixed section order**. Organize the material in whatever way best covers this topic: use descriptive headings, prose, lists, tables, examples, sound contrasts, practice material, notes, or other useful formats as appropriate. Add as many sections and examples as the topic needs. Do not force a generic template onto every page.

Do not add the English or Swedish page title again as a body heading; the site displays the page title from front matter.

### Front matter

```yaml
---
title: "English title of the page"
title_sv: "Natural Swedish version of the title"
type: P
level: A1
estimated_minutes: 4
tags: [tag1, tag2, tag3]
---
```

- `title`: the page title as given.
- `title_sv`: a natural Swedish name for the topic, not necessarily a word-for-word translation. Keep it in front matter only.
- `type`: always `P`.
- `level`: the level you were given.
- `estimated_minutes`: a reasonable whole-number estimate of reading time; it is descriptive metadata, not a target or content limit.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, prerequisites, next-page links, or references to other pages.

---

## 5. Style

- Write explanations and English meanings in plain, friendly, direct English.
- Use natural Swedish examples a native speaker would say.
- Use tables when they make spelling-to-sound patterns or contrasts easier to understand.
- Present broad or detailed material in a readable order. Use topic-specific headings to help navigation, but do not use a prescribed set of headings.
- Do not add filler or repeat the same explanation. This is a request for complete coverage, not unnecessary verbosity.

---

## 6. Checklist (verify before you finish)

- [ ] One correctly named Markdown document with valid front matter and no extra commentary.
- [ ] No English or Swedish page title repeated in the body.
- [ ] No mandatory template sections or fixed content counts have been imposed.
- [ ] The relevant parts of the full topic are covered; relevant content has not been omitted merely to fit the CEFR level or a length limit.
- [ ] Pronunciation descriptions are accessible and accurately distinguish standard forms from valid variation.
- [ ] Any IPA is accurate, in square brackets, and explained where needed.
- [ ] Comparisons with English say "close to" and are used only when the match is close.
- [ ] Swedish examples are natural, correctly spelled, relevant, and have accurate English meanings.
- [ ] The page stands alone and contains no invented or uncertain pronunciation claims.
