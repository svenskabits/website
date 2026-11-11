# Topic Section Coordinator Prompt

You are the **coordinator** for implementing this site's topic pages. Work from
`topics.md`, maintain `IMPLEMENTATION_TRACKER.md`, delegate each new page to a
subagent, verify its work, and proceed one topic at a time until exactly one
complete subsection is finished.

## Scope for this session

Read `topics.md` and `IMPLEMENTATION_TRACKER.md` at the start of every session.
Select the first incomplete subsection in the order shown in `topics.md`. A
subsection is one `##` heading and its bullet topics, under a main category such
as Grammar, Vocabulary, or Pronunciation.

At the time this prompt was written, **Grammar → Nouns** is complete, so the
next subsection is **Grammar → Articles & Determiners**. Finish that subsection
and stop. In later sessions, continue with the first incomplete subsection, but
never proceed into the following subsection during the same session.

## Before delegating

1. Read the project `AGENTS.md`, the applicable writer prompt
   (`CONTENT_WRITER_PROMPT.md` for grammar or `VOCABULARY_WRITER_PROMPT.md` for
   vocabulary), `topics.md`, the tracker, and the relevant site/sidebar files.
2. Check the working tree and preserve existing user changes.
3. Inspect existing pages for the selected subsection. A missing tracker row
   does not by itself prove that a page is missing. Do not create a duplicate;
   verify any existing page against the assigned topic before tracking it as
   complete.
4. Ensure every topic in the selected subsection has a tracker row before
   implementation starts. Record its expected page path and mark the current
   topic **In progress**; leave the others **Not started** until their turn.

## Page and sidebar structure

- Place topic pages in a subsection folder below their main category. For
  example, use
  `src/content/docs/grammar/articles-and-determiners/<topic-slug>.mdx` for the
  next subsection. Use lowercase English slugs with hyphens.
- Keep section overview pages such as `grammar.mdx` and `vocabulary.mdx` at the
  root. Lesson/topic pages must not be placed directly under the main category.
- The Starlight sidebar is **hardcoded** in `astro.config.mjs`. Do not add
  `autogenerate` entries. Add each new page to the correct subsection group,
  using an English label and a slug that matches its route. Preserve the exact
  topic order in `topics.md`; do not link to unimplemented topics.
- Follow the relevant writer prompt for lesson content, filenames, frontmatter,
  and examples. If its sidebar instructions conflict with the hardcoded,
  subsection-based structure above, follow this coordinator prompt.

## One topic at a time

For each topic, use a subagent with model **`opencode/gpt-6-luna`**. Do not
parallelize topics: each must be verified and tracked before starting the next.
Give the subagent only one topic and include its exact expected file path. Ask it
to:

- create or update only that lesson page;
- add or update only the corresponding explicit sidebar link in `astro.config.mjs`;
- follow the applicable writer prompt and existing project conventions;
- run the build and whitespace/diff checks;
- commit only the lesson and necessary sidebar changes (never the tracker); and
- report its commit hash, files changed, checks, and any ambiguity.

After the subagent reports back, independently inspect the committed changes.
Check that the lesson accurately covers its assigned topic, meets the writer
prompt's requirements, is in the correct folder, and appears in the correct
sidebar position. Run `npm run build` and a whitespace/diff check yourself. If
anything is wrong, ask the subagent to fix it and verify the follow-up commit.

Only after verification, update that tracker row to **Implemented**, recording
the lesson commit hash and that it was verified. Commit the tracker update
separately. Then move to the next topic in order and repeat. Never mark a page
complete before verification.

## Finish condition

When every bullet in the selected subsection is verified and tracked, run a
final build, confirm the sidebar order and tracker, and stop. Do not begin the
next subsection. Report the completed subsection, page paths and commits, build
result (including any pre-existing warnings), and the tracker commit.
