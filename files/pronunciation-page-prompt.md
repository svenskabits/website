# Prompt: Write a Pronunciation (P) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page covers **one single topic**, and the learner should finish it in a few minutes.

This prompt explains how to write a **pronunciation page** (type **P**). Read all of it, including the sample page at the end, then write the page you are asked for.

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

- Produce **one Markdown file** and nothing else: no introduction, no explanation, no comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only, for example `long-and-short-vowels.md` or `the-sj-sound.md`.
- If you can write files, save the file. If you can't, output the complete file content only.
- Use the exact structure in section 4, in the same order, with the same headings.
- Do **not** copy the HTML template comment from the sample into your page.

---

## 3. Core principles

1. **One sound or one contrast per page.** Teach only the topic in the title. If a neighbouring topic is needed to avoid confusion, mention it in one short line (for example in "Common mistakes") without explaining it.
2. **Concise and concrete.** Short rules, short examples, no filler. A learner should finish the page in a few minutes.
3. **Link spelling to sound.** Learners see a written word and must know how to say it. Wherever possible, state the rule in the form "what you see → what you say".
4. **Plain language.** Avoid phonetics jargon. Use a term such as *stress*, *vowel*, *consonant* or *syllable* freely, but use a technical term such as *retroflex* or *fricative* only if you explain it in plain words with an example.
5. **Match the level.** Content and detail must suit the page's CEFR level:
   - **A1:** the sounds and patterns every beginner needs. One core idea per page, very common words.
   - **A2:** harder sounds and common spelling-to-sound patterns, still with very common words.
   - **B1:** rhythm, intonation, reductions and the sounds that are hardest for learners.
   - **B2:** natural, native-like speech, with connected speech, regional variation and fine contrasts.
6. **Teach the main rule, not every exception.** Include an exception only if a learner at this level will meet it often and you are certain it is correct. Put important exceptions in "Good to know".
7. **Practice words must be common.** Use everyday words that a learner at this level is likely to know or need. Spell them correctly and give an English meaning.
8. **Describe sounds in plain, reliable ways.**
   - Use **IPA** only in the Overview, in **[square brackets]**, and only if you are certain it is correct. Explain any symbol you use (for example *ː means that the sound is long*).
   - Compare a Swedish sound with an English one only when the match is close, and say **"close to"**, never "the same as". If there is no close match, describe the sound in words or leave out the comparison.
   - Describe the position of the tongue or lips only if you are certain.
   - Where you must show how a word is said without IPA, use a short plain-letter respelling in quotes, for example ("maa-ma"), and only in "Common mistakes".
9. **Each page stands alone.** Never refer to other pages, chapters, sections or levels. Do not write "see page…", "as we learned earlier", "later in the course" or "in the next chapter". You don't know how the course will be ordered, and references are hard to maintain. If you need a basic idea to explain the topic, explain it in one short line inside the page.
10. **No audio markers, no links, no images, no dialogues, no exercises.**
11. **Accuracy matters more than coverage.** Describe standard Swedish as spoken in Sweden. Where the pronunciation varies by region, say so briefly in "Good to know" and never call a regional variant wrong. Check every transcription, spelling, å/ä/ö and example. If you aren't sure a rule, sound or fact is correct, leave it out. Never invent a rule to make a page look complete.

---

## 4. Page structure

A page has a front matter block, a title, and **seven sections in this exact order**. Separate sections with a horizontal rule (`---`).

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
- `title_sv`: the Swedish name for the topic as a Swedish teacher would write it. It must be natural, not a word-for-word translation.
- `type`: always `P`.
- `level`: the level you were given.
- `estimated_minutes`: a whole number from 3 to 5.
- `tags`: 2 to 4 lowercase English keywords.
- Do **not** add page numbers, chapter names, "prerequisites", "next" or any other link to other pages.

### Title

```markdown
# English title
*Swedish title*
```

### 1. Goal

One sentence that starts with **"After this page you can…"** and describes something the learner can *do* with the sound, such as say it, hear it, or read a spelling correctly.

### 2. Overview

The topic at a glance, as a table that links spelling to sound.

- Default columns: **What you see | What you say | Example**.
- For topics that are not about spelling (for example stress, rhythm, intonation or reductions), adapt the first two columns, such as **Pattern | What you hear | Example**. Always keep an example column.
- In the example column, put the Swedish word in **bold**, the IPA (if you use it) in **[square brackets]**, and the English meaning in italic parentheses: `**tak** [tɑːk] *(roof)*`.
- For stress and intonation topics, mark the stressed syllable in **bold** or CAPITALS inside the word, and explain the marking in one short italic line under the table.
- Put a one-line italic note under the table to explain any IPA symbol you use.
- Show only the patterns the learner needs for this topic, in a logical order.

### 3. How it works

**3 to 5 short rules**, as a numbered list. Each rule has:

- a **bold lead-in** that states the rule in a few words, such as **"One consonant after the vowel means a long vowel."**
- one or two plain sentences of explanation, including how to make the sound where that helps,
- **one example line** with Swedish words and English meanings in parentheses: `*mat* (food) · *hal* (slippery)`. Bold or italicize the key part of the word where it helps.

Order the rules from the most important and general to the least. Do not repeat the Overview. Add to it.

### 4. Words to practice

A small set of **common words** for the learner to say aloud, with an English meaning for each.

- Use a table. For a contrast between two sounds, use **minimal pairs**, one column per sound. For a single sound, use one column, or group the words by spelling pattern.
- Include **5 to 10** words or pairs. Put the Swedish word in **bold** and the English meaning in italic parentheses.
- Start with one short instruction line, such as "Say each pair slowly. The two words should sound clearly different."
- Only include a word if you are certain of its spelling, meaning and pronunciation. Do not force a minimal pair that doesn't exist.

### 5. Good to know

**2 to 4 short bullets** with practical tips. Start each bullet with a **bold lead-in**. Good topics are:

- a spelling clue that helps the learner predict the sound
- a common important exception
- spoken versus written Swedish, or regional variation
- a note on a similar sound that is easy to mix up
- why the difference matters, for example when it changes the meaning of a word

Do not repeat what is already in the Overview or in "How it works". Do not list mistakes here, because they belong in the next section.

### 6. Common mistakes

A table with three columns: **❌ Wrong | ✅ Correct | Why**.

- Include **3 to 5** rows of mistakes real learners make, often because of English or another native language: a wrong length, replacing a Swedish sound with a familiar one, stressing the wrong syllable, reading a letter the English way, or ignoring a difference that changes the meaning.
- Because the mistake is in the sound, describe how the word is said instead of showing a wrong spelling: **tack** said with a long a. You may add a short plain-letter respelling in quotes where it helps, for example ("maa-ma").
- Every "Wrong" row must be a **real, typical learner error**. Never describe a correct regional or informal variant as wrong.
- Put the key word in **bold**.
- "Why" is **one short line**, with no long explanation.

### 7. Recap

**2 to 4 bullets** that summarize the page, with the main sounds and rules in **bold**. A learner should be able to read only this section and remember the essentials.

---

## 5. Style rules

- Write the English parts in plain, friendly, direct English.
- Use simple, common Swedish words in all examples.
- Keep the whole page short. If it feels long, cut explanation first, never accuracy.
- Use the same section names, column names and formatting on every page so pages feel consistent.

---

## 6. Checklist (verify before you finish)

- [ ] One file, correctly named, with valid front matter and no extra commentary.
- [ ] Seven sections, in the right order, with the right headings.
- [ ] No audio markers, images, links, dialogues or exercises.
- [ ] No reference to any other page, chapter, section or "earlier/later" content.
- [ ] Only the topic in the title is taught.
- [ ] Content suits the stated level, in plain language.
- [ ] IPA appears only in the Overview, in square brackets, is certain and has its symbols explained.
- [ ] English comparisons say "close to" and are used only where the match is close.
- [ ] Every practice word is common, correctly spelled and has an English meaning.
- [ ] Every "wrong" example in Common mistakes is a real learner error, and no regional variant is called wrong.
- [ ] Nothing in the page is uncertain or invented.

---

## 7. Sample page

This is a complete, correct page for the request *"Long and short vowels", level A1*. Follow its structure, level of detail, tone and formatting. Your page will have different content, so do not copy its wording or examples.

````markdown
---
title: "Long and short vowels"
title_sv: "Långa och korta vokaler"
type: P
level: A1
estimated_minutes: 4
tags: [vowels, vowel-length, spelling-and-sound]
---

# Long and short vowels
*Långa och korta vokaler*

## Goal

After this page you can tell from the spelling whether a Swedish vowel is long or short, and say it correctly.

---

## Overview

| What you see | What you say | Example |
|---|---|---|
| Vowel + **one** consonant | **Long** vowel + short consonant | **tak** [tɑːk] *(roof)* |
| Vowel + **two** consonants (including *ck*) | **Short** vowel + long consonant | **tack** [takː] *(thanks)* |
| Vowel at the **end** of a word | **Long** vowel | **ta** [tɑː] *(to take)* |

*The symbol ː means that the sound is long.*

---

## How it works

1. **Every stressed syllable has one long sound.** It is either the vowel or the consonant after it, never both. Hold the vowel in *tak*, and hold the consonant in *tack*.
   *tak* (roof) · *tack* (thanks)
2. **One consonant after the vowel means a long vowel.**
   *mat* (food) · *hal* (slippery) · *vila* (to rest)
3. **Two consonants after the vowel mean a short vowel.** This is true for double letters (*ll, tt, mm*) and for different consonants (*nd, rm*).
   *hall* (hall) · *matt* (weak) · *hund* (dog)
4. **A vowel at the end of a word is long.**
   *ta* (to take) · *se* (to see) · *du* (you)

---

## Words to practice

Say each pair slowly. The two words should sound clearly different.

| Long vowel (one consonant) | Short vowel (two consonants) |
|---|---|
| **tak** *(roof)* | **tack** *(thanks)* |
| **mat** *(food)* | **matt** *(weak)* |
| **hal** *(slippery)* | **hall** *(hall)* |
| **hat** *(hate)* | **hatt** *(hat)* |
| **vila** *(to rest)* | **villa** *(villa)* |
| **ful** *(ugly)* | **full** *(full)* |

---

## Good to know

- **Length can change the word.** Swedish listeners notice length easily, and a wrong length can sound like a different word. Practice the pairs, not just single words.
- **Ck is a double k.** Swedish writes *ck* instead of *kk*, so it counts as two consonants: *tack*, *packa* (to pack).
- **The vowel can change a little too.** In some pairs, such as *ful* and *full*, the short vowel sounds slightly different as well as shorter. Focus on length first.
- **A few words are exceptions.** For example, *ost* (cheese) has a long o even though two consonants follow it. You will learn these by listening.

---

## Common mistakes

| ❌ Wrong | ✅ Correct | Why |
|---|---|---|
| **tack** said with a long a | **tack** said with a short a and a long k | *ck* is two consonants, so the vowel is short |
| **vila** said with a short i, like *villa* | **vila** said with a long i | Only one consonant (*l*) follows the *i* |
| **mamma** said with a long a ("maa-ma") | **mamma** said with a short a and a long m | The double *m* makes the vowel short |
| **ta** said with a short a | **ta** said with a long a | A vowel at the end of a word is long |
| **tak** and **tack** said the same way | **tak** and **tack** said differently | The length decides the meaning: roof or thanks |

---

## Recap

- A stressed syllable has **one long sound**: a **long vowel + short consonant** (*tak*) or a **short vowel + long consonant** (*tack*).
- **One consonant** after the vowel means a **long vowel**. **Two consonants** (or *ck*) mean a **short vowel**.
- A vowel at the **end of a word** is **long**.
- Length changes meaning, as in *tak* and *tack*.
````
