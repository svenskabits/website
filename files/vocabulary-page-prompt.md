# Prompt: Write a Vocabulary (V) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page covers **one single topic**, and the learner should finish it in a few minutes.

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

- Produce **one Markdown file** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `introducing-yourself.md` or `days-of-the-week.md`.
- If you can write files, save the file. If you can't, output the complete file content only.
- Use the exact structure in section 4, in the same order, with the same headings.
- Do **not** copy the HTML template comment from the sample into your page.

---

## 3. Core principles

1. **One topic per page.** If the topic seems too wide, cover its most useful core. Do not widen it.
2. **Concise and concrete.** Short sentences, practical words, no filler.
3. **Useful first.** Choose the words and phrases a learner is most likely to need in real life, in order of frequency and usefulness.
4. **Match the level.** Vocabulary, example sentences and explanations must suit the page's CEFR level:
   - **A1:** very common, concrete words. Short sentences (about 3 to 7 words) in the simple present tense.
   - **A2:** everyday topics. Short sentences, and the past tense and simple connectors are fine.
   - **B1:** wider and more abstract vocabulary. Longer sentences and subordinate clauses are fine.
   - **B2:** nuance, collocations, register and idiomatic use.
5. **Each page stands alone.** Never refer to other pages, chapters, sections or levels. Do not write "see page…", "as we learned earlier", "later in the course" or "in the next chapter". You don't know how the course will be ordered, and references are hard to maintain.
6. **No grammar lessons.** This is a vocabulary page. If a sentence uses a grammar structure, use it naturally without explaining it. You may mention a grammar point in one short line only where a mistake needs it (see "Common mistakes").
7. **No dialogues, no exercises, no audio or image placeholders, no links.**
8. **Accuracy matters more than coverage.** Use standard Swedish as used in Sweden. Check spelling, å/ä/ö, and the en/ett gender of every noun. If you aren't sure a word, phrase or fact is correct and current, leave it out. For facts about Swedish society (institutions, rules, customs), state only what you are confident is correct, and keep it general otherwise.

---

## 4. Page structure

A page has a front matter block, a title, and **six sections in this exact order**. Separate sections with a horizontal rule (`---`).

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
- `title_sv`: a natural Swedish title, not a word-for-word translation.
- `type`: always `V`.
- `level`: the level you were given.
- `estimated_minutes`: a whole number from 2 to 5.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, "prerequisites", "next" or any other link to other pages.

### Title

```markdown
# English title
*Swedish title*
```

### 1. Goal

One sentence that starts with **"After this page you can…"** and describes something the learner can *do*, not know.

### 2. Key words

A table with three columns: **Swedish | English | Example**.

- Include **5 to 8** words. For closed sets such as colors or days of the week, up to **15** is fine.
- Put the Swedish word in **bold**. Order words by usefulness or by a logical order of the set.
- **Nouns:** give the indefinite article, such as *en bil* or *ett hus*. Write the plural only when it is irregular or particularly useful.
- **Verbs:** give the infinitive without "att", such as *heta* or *komma från*.
- **Adjectives:** give the base form.
- The example is **one short, natural sentence** at the page's level. Put the target word in **bold** inside it. The sentence must show what the word means. Avoid examples that only repeat the word.
- Only include words a learner at this level would actually use.

### 3. Key phrases

A table with three columns: **Swedish | English | Use it when…**

- Include **5 to 10** ready-to-use phrases or sentences. For purely word-based topics (such as fruit), **3 to 5** useful phrases are enough.
- Put the Swedish phrase in **bold**.
- The third column is a short note on the situation, such as "You ask someone's name".
- Phrases must be natural, current and what a native speaker would really say, not textbook-only Swedish.
- Where a word has formal and informal versions, include the one learners need most.

### 4. Good to know

**2 to 4 short bullets** with practical tips. Start each bullet with a **bold lead-in**. Good topics are:

- usage and register (formal or informal, spoken or written)
- Swedish culture or customs linked to the topic
- a short pronunciation tip, only if it is brief and certain
- words that look similar or are easy to mix up

Do not repeat what is already in the tables. Do not mention mistakes here, because they belong in the next section.

### 5. Common mistakes

A table with three columns: **❌ Wrong | ✅ Correct | Why**.

- Include **3 to 5** rows of mistakes real learners make: influence from English or another native language, wrong en/ett, wrong word order, mixing up similar words, false friends, spelling and capitalization.
- Every "Wrong" example must be **genuinely wrong or clearly unnatural**. Never mark a correct variant as wrong.
- Put the wrong or corrected word in **bold** so the difference is easy to see.
- "Why" is **one short line**, with no long explanation.

### 6. Recap

**2 to 4 bullets** that summarize the page, with the main words and phrases in **bold**. A learner should be able to read only this section and remember the essentials.

---

## 5. Style rules

- Write the English parts in plain, friendly, direct English.
- Format all tables with the headers shown above.
- Keep the whole page short. If it feels long, cut words from the tables first.
- Use the same terms and column names on every page so pages feel consistent.
- Keep Swedish punctuation and quotation marks simple, and write currency, units and dates in the Swedish style where relevant.

---

## 6. Checklist (verify before you finish)

- [ ] One file, correctly named, with valid front matter and no extra commentary.
- [ ] Six sections, in the right order, with the right headings.
- [ ] No dialogues, exercises, audio, images or links.
- [ ] No reference to any other page, chapter, section or "earlier/later" content.
- [ ] Vocabulary and sentences suit the stated level.
- [ ] Every noun has the right article, every verb is in the infinitive, and all spelling is correct.
- [ ] Every example sentence is natural Swedish and accurate.
- [ ] Every "wrong" example in Common mistakes is really wrong.
- [ ] Nothing in the page is uncertain or invented.

---

## 7. Sample page

This is a complete, correct page for the request *"Introducing yourself", level A1*. Follow its structure, level of detail, tone and formatting. Your page will have different content, so do not copy its wording or examples.

````markdown
---
title: "Introducing yourself"
title_sv: "Presentera dig själv"
type: V
level: A1
estimated_minutes: 3
tags: [introductions, names, origin]
---

# Introducing yourself
*Presentera dig själv*

## Goal

After this page you can say your name, ask someone else's name, and say where you come from.

---

## Key words

| Swedish | English | Example |
|---|---|---|
| **heta** | to be called | Jag **heter** Anna. |
| **komma från** | to come from | Jag **kommer från** Sverige. |
| **träffas** | to meet (each other) | Trevligt att **träffas**! |
| **trevlig** | nice, pleasant | Trevligt! |
| **förnamn** | first name | Förnamn: Anna |
| **efternamn** | last name | Efternamn: Svensson |

---

## Key phrases

| Swedish | English | Use it when… |
|---|---|---|
| **Jag heter Anna.** | My name is Anna. | You say your name |
| **Jag är Anna.** | I am Anna. | You say your name (a bit shorter) |
| **Vad heter du?** | What's your name? | You ask someone's name |
| **Trevligt att träffas!** | Nice to meet you! | You meet someone for the first time |
| **Detsamma!** | Likewise! | Someone says "Trevligt att träffas!" to you |
| **Jag kommer från Sverige.** | I come from Sweden. | You say where you're from |
| **Var kommer du ifrån?** | Where are you from? | You ask where someone is from |
| **Och du?** | And you? | You return the question |
| **Det här är Maria.** | This is Maria. | You introduce someone else |

---

## Good to know

- **Jag heter… or Jag är…?** Both are correct. *Jag heter* is the most common way to introduce yourself, and *Vad heter du?* is the standard question.
- **Swedes use first names.** You normally introduce yourself with your first name only, and *du* is used with everyone, young or old.
- **Say it right.** In *jag*, the **g is silent**, so it sounds like "yaa".

---

## Common mistakes

| ❌ Wrong | ✅ Correct | Why |
|---|---|---|
| Vad **är** du? | Vad **heter** du? | *Vad är du?* means "What are you?", not "What's your name?" |
| Jag **är heter** Anna. | Jag **heter** Anna. | Use one verb only: *heter* or *är* |
| Jag **heta** Anna. | Jag **heter** Anna. | Use *heter*, not the infinitive *heta* |
| Var **ifrån** kommer du? | Var kommer du **ifrån**? | *Ifrån* goes at the end of the question |
| Jag kommer från **sverige**. | Jag kommer från **Sverige**. | Country names start with a capital letter |

---

## Recap

- Say your name with **Jag heter…** and ask with **Vad heter du?**
- Be polite with **Trevligt att träffas!** and answer with **Detsamma!**
- Say where you're from with **Jag kommer från…** and ask **Var kommer du ifrån?**
````
