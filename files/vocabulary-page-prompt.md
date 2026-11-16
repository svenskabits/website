# Prompt: Write a Vocabulary (V) Page

You are writing one page for a website that teaches Swedish as a second language to adult learners. The course covers CEFR levels A1 to B2. Every page covers **one single topic**. Let the topic and CEFR level determine how much vocabulary the page needs; do not impose an arbitrary word count.

This prompt currently defines the finalized **noun**, **verb**, **phrase**, and **adjective** card data. Do not use vocabulary tables. If the requested page needs another category whose card props are not finalized in this prompt, stop and ask for that component contract instead of inventing props or falling back to a table.

---

## 1. Input

You will be given:

```
Page title: {title}
Level: {A1 | A2 | B1 | B2}
Notes (optional): {anything specific to include or avoid}
```

## 2. Output

- Produce **one MDX document** and nothing else: no introduction, explanation, or comments about your work.
- Name the file after the page title in lowercase kebab-case, ASCII only. If the project handoff specifies a target path, use it.
- The document must have the front matter from section 4, followed by headings and explicit card component instances.
- Do not create separate JSON data files. The page's literal component props are the source data and are exported by the MDX AST API.
- Do not use Markdown tables, JavaScript `.map()` expressions, variables for card data, spread props, or imports of data modules. Use explicit component instances with a literal `entry` object so Remark can export the props as JSON.
- Do not copy an HTML template comment into the page.

---

## 3. Core principles

1. **One topic per page.** If the topic seems too wide, cover its most useful core. Do not widen it.
2. **Concise and concrete.** Short sentences, practical words, no filler.
3. **Useful first.** Choose the words a learner is most likely to need in real life, in order of frequency and usefulness.
4. **Match the level.** Vocabulary and examples must suit the page's CEFR level:
   - **A1:** very common, concrete words. Short sentences (about 3 to 7 words) in the simple present tense.
   - **A2:** everyday topics. Short sentences, and the past tense and simple connectors are fine.
   - **B1:** wider and more abstract vocabulary. Longer sentences and subordinate clauses are fine.
   - **B2:** nuance, collocations, register and idiomatic use.
5. **Each page stands alone.** Never refer to other pages, chapters, sections, or levels.
6. **No grammar lessons.** Use grammar naturally in examples without explaining it.
7. **No extra sections.** Do not add dialogues, exercises, tips, common mistakes, a goal, a recap, audio or image placeholders, or links. Put examples in their card data; do not repeat them elsewhere.
8. **Accuracy matters more than coverage.** Use standard Swedish as used in Sweden. Check spelling, å/ä/ö, noun gender, forms, and IPA. If unsure, leave the item out.

---

## 4. Page structure

The page has front matter, followed by optional descriptive `##` headings and card components. Do not repeat the page title or Swedish title in the body.

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
- `title_sv`: a natural Swedish version of the title.
- `type`: always `V`.
- `level`: the given CEFR level.
- `estimated_minutes`: a whole number from 2 to 5.
- `tags`: 2 to 4 lowercase English keywords.
- Do not add page numbers, chapter names, prerequisites, next-page links, or other cross-page references.

### MDX imports and AST-safe component use

Import only the components used by the page, after the closing front matter:

```mdx
import AdjectiveCard from '../../../components/vocabulary/AdjectiveCard.astro';
import NounCard from '../../../components/vocabulary/NounCard.astro';
import PhraseCard from '../../../components/vocabulary/PhraseCard.astro';
import VerbCard from '../../../components/vocabulary/VerbCard.astro';
import VocabularyGrid from '../../../components/vocabulary/VocabularyGrid.astro';
```

Wrap related cards in `VocabularyGrid`. Use a literal `entry` object on each card. Do not put components inside expressions or loops. This keeps the sequence of text and components statically visible to the Remark AST exporter and makes each card's data available in the page API.

Use descriptive `##` headings for distinct semantic groups. Do not add a generic “Key words” heading. If a page has only one coherent group, a heading is optional.

---

## 5. Finalized card data contracts

Every example object has exactly these fields:

```js
{ swedish: 'A natural Swedish sentence.', english: 'Its accurate English translation.' }
```

The Swedish sentence and English translation must have the same meaning. Keep the target form in the Swedish sentence.

### Nouns: `NounCard`

Use one `NounCard` per noun. The noun's lemma is the base noun without its article. The top-level `phonetic` is the IPA for the lemma only.

```js
<NounCard entry={{
  kind: 'noun',
  lemma: 'tjänst',
  phonetic: '[ɕɛnst]',
  translation: 'a favor',
  forms: {
    indefiniteSingular: {
      form: 'en tjänst',
      phonetic: '[ɕɛnst]',
      example: { swedish: 'Kan du göra mig en tjänst?', english: 'Can you do me a favor?' }
    },
    definiteSingular: {
      form: 'tjänsten',
      phonetic: '[ˈɕɛnstɛn]',
      example: { swedish: 'Jag uppskattar tjänsten.', english: 'I appreciate the favor.' }
    },
    indefinitePlural: {
      form: 'tjänster',
      phonetic: '[ˈɕɛnstɛr]',
      example: { swedish: 'Hon gjorde många tjänster för oss.', english: 'She did many favors for us.' }
    },
    definitePlural: {
      form: 'tjänsterna',
      phonetic: '[ˈɕɛnstɛɳa]',
      example: { swedish: 'Tjänsterna hjälpte oss mycket.', english: 'The favors helped us a lot.' }
    }
  }
}} />
```

Requirements:

- Include **all four forms**: indefinite singular, definite singular, indefinite plural, and definite plural.
- Every form object must include `form`, `phonetic`, and its own Swedish/English `example` pair.
- The form's `phonetic` is IPA for the noun form only. For example, the phonetic for `en tjänst` is for `tjänst`; do not include `en` or `ett`.
- `lemma`, top-level `phonetic`, and `translation` describe the base noun.
- Do not add an example title or form label inside the example.

### Verbs: `VerbCard`

Use one `VerbCard` per verb. The lemma is the infinitive without `att`; top-level `phonetic` is the IPA for that infinitive.

```js
<VerbCard entry={{
  kind: 'verb',
  lemma: 'hjälpa',
  phonetic: '[ˈjɛlːpa]',
  translation: 'to help',
  tenses: [
    {
      type: 'INFINITIVE',
      form: 'hjälpa',
      phonetic: '[ˈjɛlːpa]',
      example: { swedish: 'Kan du hjälpa mig?', english: 'Can you help me?' }
    },
    {
      type: 'PERFECT',
      auxiliary: 'har',
      form: 'hjälpt',
      phonetic: '[ˈjɛlpt]',
      example: { swedish: 'Jag har redan hjälpt min vän.', english: 'I have already helped my friend.' }
    }
  ]
}} />
```

Each item in `tenses` must have:

- `type`: one unique enum value from the list below.
- `form`: the verb's form only, without any auxiliary.
- `phonetic`: IPA for `form` only, excluding auxiliaries such as *har*, *hade*, *ska*, *kommer att*, or *skulle ha*.
- `example`: a Swedish example and its matching English translation. The example may include the auxiliary.
- `auxiliary`: optional Swedish auxiliary/construction, kept separate from `form` and `phonetic`.

Allowed `type` enum values:

```text
INFINITIVE
PRESENT
PRETERITE
PERFECT
PLUPERFECT
FUTURE_SKA
FUTURE_KOMMER_ATT
IMPERATIVE
CONDITIONAL_PERFECT
```

Use each applicable tense/form once per verb. The two future constructions have distinct enum values. Do not add duplicate enum values for a verb.

### Phrases: `PhraseCard`

Use one `PhraseCard` per phrase. The phonetic field is the IPA transcription of the complete Swedish phrase.

```js
<PhraseCard entry={{
  kind: 'phrase',
  swedish: 'hej då',
  phonetic: '[hɛj doː]',
  english: 'goodbye; bye',
  example: { swedish: 'Hej då, vi ses i morgon.', english: 'Bye, see you tomorrow.' }
}} />
```

### Adjectives: `AdjectiveCard`

Use one `AdjectiveCard` per adjective. The top-level `phonetic` is IPA for the lemma alone. Include applicable common, neuter, plural, comparative, superlative, and adverb forms. The adverb form is optional when the adjective has no natural or useful adverb.

```js
<AdjectiveCard entry={{
  kind: 'adjective',
  lemma: 'långsam',
  phonetic: '[ˈlɔŋsam]',
  translation: 'slow',
  forms: [
    { type: 'COMMON', form: 'långsam', phonetic: '[ˈlɔŋsam]', example: { swedish: 'Den här bilen är långsam.', english: 'This car is slow.' } },
    { type: 'NEUTER', form: 'långsamt', phonetic: '[ˈlɔŋsamt]', example: { swedish: 'Tåget är långsamt.', english: 'The train is slow.' } },
    { type: 'PLURAL', form: 'långsamma', phonetic: '[ˈlɔŋsama]', example: { swedish: 'Bilarna är långsamma.', english: 'The cars are slow.' } },
    { type: 'COMPARATIVE', form: 'långsammare', phonetic: '[ˈlɔŋˌsamːarɛ]', example: { swedish: 'Den här bilen är långsammare.', english: 'This car is slower.' } },
    { type: 'SUPERLATIVE', form: 'långsammast', phonetic: '[ˈlɔŋˌsamːast]', example: { swedish: 'Den här bilen är långsammast av alla.', english: 'This car is the slowest of all.' } },
    { type: 'ADVERB', form: 'långsamt', phonetic: '[ˈlɔŋsamt]', example: { swedish: 'Han kör långsamt.', english: 'He drives slowly.' } }
  ]
}} />
```

Each form must include its own IPA transcription and Swedish/English example pair. IPA covers only the adjective form, excluding comparison words such as *mer* and *mest*.

Allowed `type` enum values are `COMMON`, `NEUTER`, `PLURAL`, `COMPARATIVE`, `SUPERLATIVE`, and `ADVERB`.

---

## 6. Other vocabulary categories

Other category component contracts are not finalized in this prompt yet. If the requested page needs entries outside the noun, verb, phrase, and adjective contracts above, do not guess their props and do not create a table. Ask for the appropriate finalized component contract before writing that page.

---

## 7. Style and checklist

- Write English translations in plain, friendly, direct English.
- Use standard Swedish spelling and punctuation.
- Keep examples concise and natural. Every form/tense example must demonstrate the target Swedish form.
- Do not cut useful vocabulary to meet an arbitrary word count.

Before finishing, verify:

- [ ] Front matter is valid and matches the requested page title and level.
- [ ] Every vocabulary item uses a finalized card component with literal, static props.
- [ ] There are no tables, data-file imports, `.map()` expressions, dynamic props, or repeated examples.
- [ ] Every noun has the correct article and all four noun forms, each with its own IPA and example pair.
- [ ] Noun IPA excludes its article.
- [ ] Every verb uses an allowed unique `type` value; each tense/form has IPA and an example pair.
- [ ] Verb IPA covers only the verb form, not any auxiliary.
- [ ] Every phrase has its full-phrase IPA and a Swedish/English example pair.
- [ ] Adjectives use applicable allowed form `type` values, with IPA and a Swedish/English example for each included form.
- [ ] Every example translation matches its Swedish sentence and suits the CEFR level.
- [ ] No grammar explanation, cross-page reference, or extra lesson section has been added.
