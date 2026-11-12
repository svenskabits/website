# Prompt: Write a Vocabulary (V) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page covers **one single topic**. Let the topic and CEFR level determine how much vocabulary the page needs; do not impose an arbitrary word or row count.

This prompt explains how to write a **vocabulary page** (type **V**). Read all of it, including the sample page at the end, then write the page you are asked for.

---

## 1. Input

You will be given:

```
Page title: {title}
Level: {A1 | A2 | B1 | B2}
Notes (optional): {anything specific to include or avoid}
```

Example request: *Create a vocabulary page for "Fruit", level A1.*

## 2. Output

- Produce **one Markdown document** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `introducing-yourself.mdx` or `days-of-the-week.mdx`. If the project handoff gives you an exact target path, use it.
- If you can write files, save the file. If you can't, output the complete file content only.
- The document must have the front matter from section 4, followed by its vocabulary table or tables. Do not add a generic "Key words" heading.
- Do **not** copy the HTML template comment from the sample into your page.

---

## 3. Core principles

1. **One topic per page.** If the topic seems too wide, cover its most useful core. Do not widen it.
2. **Concise and concrete.** Short sentences, practical words, no filler.
3. **Useful first.** Choose the words a learner is most likely to need in real life, in order of frequency and usefulness.
4. **Match the level.** Vocabulary and example sentences must suit the page's CEFR level:
   - **A1:** very common, concrete words. Short sentences (about 3 to 7 words) in the simple present tense.
   - **A2:** everyday topics. Short sentences, and the past tense and simple connectors are fine.
   - **B1:** wider and more abstract vocabulary. Longer sentences and subordinate clauses are fine.
   - **B2:** nuance, collocations, register and idiomatic use.
5. **Each page stands alone.** Never refer to other pages, chapters, sections or levels. Do not write "see page…", "as we learned earlier", "later in the course" or "in the next chapter". You don't know how the course will be ordered, and references are hard to maintain.
6. **No grammar lessons.** This is a vocabulary page. Use grammar naturally in examples without explaining it.
7. **No key phrases section.** Do not add phrases, dialogues, exercises, tips, common mistakes, a goal, a recap, audio or image placeholders, or links. A natural example sentence belongs in the vocabulary table; do not repeat it in another section.
8. **Accuracy matters more than coverage.** Use standard Swedish as used in Sweden. Check spelling, å/ä/ö, and the en/ett gender of every noun. If you aren't sure a word, phrase or fact is correct and current, leave it out. For facts about Swedish society (institutions, rules, customs), state only what you are confident is correct, and keep it general otherwise.

---

## 4. Page structure

The page has front matter followed directly by its vocabulary table or tables. Do not add a page title or Swedish title in the body: the site displays the page title from front matter already. Do not add a generic "Key words" heading.

### Front matter

```yaml
---
title: "English title of the page"
title_sv: "Natural Swedish version of the title"
type: V
level: A1
estimated_minutes: 3
tags: [tag1, tag2, tag3]
---
```

- `title`: the page title as given.
- `title_sv`: a natural Swedish version of the title. Keep it in front matter, but do not repeat it in the body.
- `type`: always `V`.
- `level`: the level you were given.
- `estimated_minutes`: a whole number from 2 to 5.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, "prerequisites", "next" or any other link to other pages.

### Vocabulary tables

Each table has these four columns:

**Swedish | English | Example (Swedish) | Example (English)**

- Include the useful vocabulary needed to cover the topic at the stated CEFR level. There is **no fixed minimum or maximum number** of words or rows. Let the topic and level determine the scope; do not omit relevant vocabulary just to keep to a count.
- Put the Swedish word in **bold**. Order words by usefulness or by a logical order of the set.
- **Nouns:** give the indefinite article, such as *en bil* or *ett hus*. Write the plural only when it is irregular or particularly useful.
- **Verbs:** give the infinitive without "att", such as *heta* or *komma från*.
- **Adjectives:** give the base form.
- Give every Swedish example a natural, accurate English translation in the matching row. The two examples must have the same meaning.
- Each example is **one short, natural sentence** at the page's level. Put the target word in **bold** in the Swedish example. The sentence must show what the word means. Avoid examples that only repeat the word.
- Only include words a learner at this level would actually use.
- Sort the vocabulary into meaningful semantic categories. If the page has only one table, do not add a heading for it. If it has more than one table, give each table its own descriptive `##` heading (for example, `## Greetings` and `## Goodbyes`). Do not add a parent heading such as "Key words". Do not mix categories in one table; for example, language names and basic verbs belong in separate tables. A category can include related vocabulary (such as all the days of the week) in one table. Do not split one coherent category into arbitrary smaller groups.

---

## 5. Style rules

- Write the English parts, including example translations, in plain, friendly, direct English.
- Use the exact table headers shown above. Repeat the headers for each table.
- Keep entries concise, but do not cut useful vocabulary to meet a target page length or word count. The topic and level determine how many entries are appropriate.
- Keep Swedish punctuation and quotation marks simple, and write currency, units and dates in the Swedish style where relevant.

---

## 6. Checklist (verify before you finish)

- [ ] One file, correctly named, with valid front matter and no extra commentary.
- [ ] The body contains only vocabulary tables and, when there is more than one table, a descriptive heading for each table; no generic "Key words" heading, repeated title, or Swedish subtitle.
- [ ] Every table has Swedish and English vocabulary plus Swedish and English examples.
- [ ] Every example translation accurately matches its Swedish example.
- [ ] No key phrases, goal, tips, common mistakes, recap, dialogue, exercise, audio, image or link.
- [ ] No reference to any other page, chapter or level.
- [ ] Vocabulary and sentences suit the stated level.
- [ ] The vocabulary coverage fits the topic and level, with no arbitrary word-count limit.
- [ ] Every noun has the right article, every verb is in the infinitive, and all spelling is correct.
- [ ] Every example sentence is natural Swedish and accurate.
- [ ] Nothing in the page is uncertain or invented.

---

## 7. Sample page

This is a formatting example for the request *"Fruit", level A1*. Follow its structure, tone and formatting, but choose as many vocabulary entries as the topic and level require. Your page will have different content, so do not copy its wording or examples.

````markdown
---
title: "Fruit"
title_sv: "Frukt"
type: V
level: A1
estimated_minutes: 3
tags: [food, fruit, shopping]
---

| Swedish | English | Example (Swedish) | Example (English) |
|---|---|---|---|
| **ett äpple** | an apple | Jag äter ett **äpple**. | I am eating an apple. |
| **en banan** | a banana | Hon vill ha en **banan**. | She wants a banana. |
| **en apelsin** | an orange | **Apelsinen** är söt. | The orange is sweet. |
| **ett päron** | a pear | Han köper ett **päron**. | He is buying a pear. |
| **en jordgubbe** | a strawberry | Barnet äter en **jordgubbe**. | The child is eating a strawberry. |
| **ett bär** | a berry | Jag plockar ett **bär**. | I am picking a berry. |
````
