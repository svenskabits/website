# Prompt: Write a Grammar (G) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page covers **one single topic**, and the learner should finish it in a few minutes.

This prompt explains how to write a **grammar page** (type **G**). Read all of it, including the sample page at the end, then write the page you are asked for.

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

- Produce **one Markdown file** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `subject-pronouns.md` or `past-tense.md`.
- If you can write files, save the file. If you can't, output the complete file content only.
- Use the exact structure in section 4, in the same order, with the same headings.
- Do **not** copy the HTML template comment from the sample into your page.

---

## 3. Core principles

1. **One topic per page.** Explain only the topic in the title. If a neighbouring topic is needed to avoid confusion, mention it in one short line (for example, in "Common mistakes") without explaining it.
2. **Concise and concrete.** Short rules, short examples, no filler. A learner should understand the page in a few minutes.
3. **Rules first, then examples.** Every rule is stated in plain words and followed by an example.
4. **Plain language.** Avoid grammar jargon. Use a grammar term only if you show it with an example the first time it appears. Simple terms such as *subject*, *verb*, *noun*, *adjective* and *en-word/ett-word* are fine.
5. **Match the level.** Explanations, examples and the amount of detail must suit the page's CEFR level:
   - **A1:** one core idea, few rules, very short sentences, only the simple present tense and very common words.
   - **A2:** everyday structures, short sentences, past tense and simple connectors allowed.
   - **B1:** longer sentences, subordinate clauses and more exceptions allowed.
   - **B2:** nuance, register, style and less common exceptions allowed.
6. **Teach the main rule, not every exception.** Include an exception only if a learner at this level will meet it often. Put important exceptions in "Good to know".
7. **Examples use simple, common words.** Do not introduce new difficult vocabulary in an example sentence. The learner should be able to focus on the grammar. Reuse a small set of everyday words, names and situations.
8. **Each page stands alone.** Never refer to other pages, chapters, sections or levels. Do not write "see page…", "as we learned earlier", "later in the course" or "in the next chapter". You don't know how the course will be ordered, and references are hard to maintain. If you need a basic idea to explain the topic (such as en-words and ett-words), explain it in one short line inside the page.
9. **No dialogues, no exercises, no audio or image placeholders, no links.**
10. **Accuracy matters more than coverage.** Use standard Swedish as used in Sweden. Check every form, ending, spelling, å/ä/ö and word order in every example. If you aren't sure a rule, form or fact is correct and current, leave it out. Never invent a rule to make a page look complete.

---

## 4. Page structure

A page has a front matter block, a title, and **six sections in this exact order**. Separate sections with a horizontal rule (`---`).

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
- `title_sv`: the Swedish name for the topic as a Swedish teacher would write it. It must be natural, not a word-for-word translation.
- `type`: always `G`.
- `level`: the level you were given.
- `estimated_minutes`: a whole number from 3 to 6.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, "prerequisites", "next" or any other link to other pages.

### Title

```markdown
# English title
*Swedish title*
```

### 1. Goal

One sentence that starts with **"After this page you can…"** and describes something the learner can *do* with the grammar, not something they know about it.

### 2. Overview

The topic at a glance. Choose the format that fits the topic:

- **A table** for sets of forms, such as pronouns, endings or verb forms. Use these columns: **Swedish | English | Example**. If the topic needs different columns (for example, *Infinitive | Present | Past* for verbs), adapt them, but always include an example column.
- **A short formula in a code block** for sentence patterns, such as `subject + verb + object`, followed by **2 to 4 examples** with translations.

Formatting rules:

- Put the Swedish form in **bold**.
- In an example sentence, put the key word or ending in **bold**, and put the English translation in italic parentheses after it: `**Jag** är trött. *(I am tired.)*`.
- Every example has an English translation.
- Show the complete set of forms the learner needs, in a logical order, and nothing more.

### 3. How it works

**3 to 5 short rules**, as a numbered list. Each rule has:

- a **bold lead-in** that states the rule in a few words, such as **"Du is one person, ni is more than one."**
- one or two plain sentences of explanation,
- **one or two examples** on the next line, with the Swedish in italics and the translation in parentheses: `*Anna, **du** är här.* (Anna, you are here.)`. Bold the key word.

Order the rules from the most important and most general to the least. Do not repeat the Overview. Add to it.

### 4. Good to know

**2 to 4 short bullets** with practical tips. Start each bullet with a **bold lead-in**. Good topics are:

- spoken versus written Swedish, and formal versus informal use
- a common important exception
- a short pronunciation tip, only if it is brief and certain
- a point about Swedish culture or usage linked to the grammar

Do not repeat what is already in the Overview or in "How it works". Do not list mistakes here, because they belong in the next section.

### 5. Common mistakes

A table with three columns: **❌ Wrong | ✅ Correct | Why**.

- Include **3 to 5** rows of mistakes real learners make: influence from English or another native language, wrong form or ending, wrong en/ett, wrong word order, a missing word, or a mix-up between two similar forms.
- Every "Wrong" example must be **genuinely wrong or clearly unnatural** in standard Swedish. Never mark a correct variant or an informal but common form as wrong.
- Put the wrong or corrected word in **bold** so the difference is easy to see. Use the same sentence in both columns, changed only where the mistake is.
- "Why" is **one short line**, with no long explanation.

### 6. Recap

**2 to 4 bullets** that summarize the page, with the main forms and rules in **bold**. A learner should be able to read only this section and remember the essentials.

---

## 5. Style rules

- Write the English parts in plain, friendly, direct English.
- Keep Swedish examples natural: sentences a native speaker would really say.
- Use varied, simple names and situations in the examples (for example Anna, Ali, Maria, a car, a house) so examples don't feel repetitive.
- Keep the whole page short. If it feels long, cut explanation first, never accuracy.
- Use the same section names, column names and formatting on every page so pages feel consistent.

---

## 6. Checklist (verify before you finish)

- [ ] One file, correctly named, with valid front matter and no extra commentary.
- [ ] Six sections, in the right order, with the right headings.
- [ ] No dialogues, exercises, audio, images or links.
- [ ] No reference to any other page, chapter, section or "earlier/later" content.
- [ ] Only the topic in the title is explained.
- [ ] Explanations and examples suit the stated level, in plain language.
- [ ] Every rule has an example, and every example has an English translation.
- [ ] Every Swedish example is natural, and all forms, endings and word order are correct.
- [ ] Every "wrong" example in Common mistakes is really wrong.
- [ ] Nothing in the page is uncertain or invented.

---

## 7. Sample page

This is a complete, correct page for the request *"Subject pronouns", level A1*. Follow its structure, level of detail, tone and formatting. Your page will have different content, so do not copy its wording or examples.

````markdown
---
title: "Subject pronouns"
title_sv: "Subjektspronomen"
type: G
level: A1
estimated_minutes: 4
tags: [pronouns, subject, sentence-basics]
---

# Subject pronouns
*Subjektspronomen*

## Goal

After this page you can choose the right pronoun (*jag, du, han, hon…*) to start a sentence.

---

## Overview

| Swedish | English | Example |
|---|---|---|
| **jag** | I | **Jag** är trött. *(I am tired.)* |
| **du** | you (one person) | **Du** är snäll. *(You are kind.)* |
| **han** | he | **Han** är lärare. *(He is a teacher.)* |
| **hon** | she | **Hon** är läkare. *(She is a doctor.)* |
| **hen** | they (one person, gender-neutral) | **Hen** är student. *(They are a student.)* |
| **den** | it (en-words) | Jag har en bil. **Den** är röd. *(I have a car. It is red.)* |
| **det** | it (ett-words) | Jag har ett hus. **Det** är gult. *(I have a house. It is yellow.)* |
| **vi** | we | **Vi** är från Sverige. *(We are from Sweden.)* |
| **ni** | you (more than one person) | **Ni** är från Spanien. *(You are from Spain.)* |
| **de** | they | **De** är från Italien. *(They are from Italy.)* |

---

## How it works

1. **Always say the subject.** Swedish never drops it, even when the verb makes it obvious.
   *Jag bor här.* (I live here.)
2. **Du is one person, ni is more than one.** Use *du* to talk to one person and *ni* to talk to a group.
   *Anna, **du** är här.* (Anna, you are here.) · *Anna och Ali, **ni** är här.* (Anna and Ali, you are here.)
3. **People use han, hon or hen. Things use den or det.** Every Swedish noun is either an **en-word** or an **ett-word**, and that decides the pronoun: *en bil* → **den**, *ett hus* → **det**.
   *Hon är min vän.* (She is my friend.) · *Boken är bra. **Den** är ny.* (The book is good. It is new.)
4. **The verb doesn't change.** In the present tense the verb has the same form for every subject.
   *jag **är**, du **är**, han **är**, vi **är**, de **är***

---

## Good to know

- **De sounds like "dom".** It is written *de* but said "dom". In informal texts you will often see *dom*, but use *de* in standard writing.
- **Jag has no capital letter.** Unlike English "I", *jag* is only capitalized at the start of a sentence.
- **Hen is a gender-neutral pronoun.** It is used when someone's gender is unknown or doesn't matter, or for a person who doesn't identify as a man or a woman. You will see it often in the media.
- **Du is used with everyone.** Using *ni* for one person sounds old-fashioned or distant today, so say *du* to a single person, even in formal situations.

---

## Common mistakes

| ❌ Wrong | ✅ Correct | Why |
|---|---|---|
| **Du** är studenter. | **Ni** är studenter. | *Du* is for one person. Use *ni* for more than one. |
| Jag har en bil. **Han** är röd. | Jag har en bil. **Den** är röd. | Things use *den* or *det*, never *han* or *hon*. |
| Jag har ett hus. **Den** är gult. | Jag har ett hus. **Det** är gult. | Ett-words take *det*, en-words take *den*. |
| **Dem** är från Italien. | **De** är från Italien. | *Dem* is never the subject. Use *de*. |
| Är trött. | **Jag** är trött. | A Swedish sentence always needs a subject. |

---

## Recap

- The subject pronouns are **jag, du, han, hon, hen, den, det, vi, ni, de**.
- **Du** is one person and **ni** is more than one.
- **Han, hon, hen** are for people. **Den** is for en-words and **det** is for ett-words.
- Always say the subject, and the verb stays the same for all of them.
````
