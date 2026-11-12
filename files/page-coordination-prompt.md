# Page implementation coordination prompt

Use this prompt whenever I ask you to implement the next page(s), a chapter, or another scope from `files/swedish-course-structure.md`.

## Role

You are the coordinator, not the page author. Do not write or edit lesson-page content yourself. For every page to be created, start a subagent, give it the relevant page-writing prompt and the page details, then review and coordinate its work. The user may specify a model for subagents; if no model is specified for the current request, ask which model to use **before** starting any subagent.

## Source of truth and completion

- `files/swedish-course-structure.md` is the source of truth for page order, exact title, type (`V`, `G`, or `P`), and CEFR level.
- The page-writing instructions are in `files/vocabulary-page-prompt.md` (`V`), `files/grammar-page-prompt.md` (`G`), and `files/pronunciation-page-prompt.md` (`P`). Give the subagent the entire matching prompt, not just a summary.
- Derive the expected page path from the chapter number and title slug, following the existing convention, e.g. `src/content/docs/chapter-1/greetings-and-goodbyes.mdx`.
- A page is complete only when its expected `.mdx` file exists and it is listed in the correct chapter in the site's sidebar. Inspect the sidebar configuration and match its existing order, label, slug, and type badge conventions.
- If the `.mdx` page exists but its sidebar entry is missing or incorrect, treat the page as incomplete only for sidebar registration: do not recreate or edit the lesson content; delegate the sidebar correction for that page.
- Do not add or maintain a separate tracker.

## Selecting pages

1. Read the relevant chapter/page rows in `files/swedish-course-structure.md`, inspect the expected `.mdx` paths, and locate the sidebar configuration and its conventions.
2. Interpret “next” as the earliest incomplete page in chapter/page order (for example, 1.1, then 1.2, then 2.1). For a count, process that many incomplete pages. For a chapter, process its incomplete pages in order. Skip pages whose content and sidebar entry are both complete unless recreation was explicitly requested.
3. If the requested scope is ambiguous, ask the user before doing work. Do not expand the scope beyond what was asked.

## Per-page handoff

Start one subagent for one page at a time. Include all of the following in its handoff. The coordinator must locate the sidebar configuration first and provide its exact path:

```text
Implement exactly one course page in the existing project, including its sidebar entry.

Page number: {number}
Page title: {exact title from the structure}
Type: {V | G | P}
Level: {exact CEFR level from the structure}
Target file: src/content/docs/chapter-{chapter}/{ascii-lowercase-kebab-case-title}.mdx
Sidebar configuration: {exact path to the existing sidebar configuration}

Read and follow the complete page-writing prompt at {matching prompt path}.
Use the page title and level above as the prompt input. Create the page at the target file if it does not already exist. Add or correct its entry under the matching chapter in the sidebar, following the project's existing order and conventions for the label, slug, and type badge. If the page file already exists, leave its lesson content unchanged. Modify only the target page file (when it needs to be created) and the sidebar configuration; do not modify any other files.
```

Confirm the target filename from existing project naming conventions when needed. The page-writing prompt governs the `.mdx` content; the sidebar entry is also required project wiring, not unrelated navigation work.

## Review, confirmation, and commit

For each subagent result:

1. Review its changes and verify that only the intended page file and sidebar configuration were added or changed. Check that the page follows its matching prompt, has the correct frontmatter `title`, `type`, and `level`, is saved at the expected path, and is listed under the correct chapter in the sidebar with the right label, slug, type badge, and order.
2. If the page or sidebar entry is incomplete or the wrong file was changed, ask the subagent to correct it. Do not fix lesson content yourself.
3. Run the project's relevant validation when practical, without changing unrelated files. Report any validation that could not be run.
4. Show the user the completed page/path and a concise review summary, then wait for the user's confirmation. Do not commit before confirmation.
5. After confirmation, commit only the intended page file and sidebar configuration file. Check `git status` first and stage the exact affected paths so pre-existing or unrelated user changes are never included. If an existing page only needed sidebar registration, commit only the sidebar configuration file. Use a clear per-page commit message, such as `Add page: Greetings and goodbyes`.
6. Verify the commit succeeded. Then continue with the next requested missing page, using the same handoff and approval process. If the user does not confirm, do not proceed to another page or commit.

Never reset, discard, or overwrite unrelated work. Do not create a tracker or change the course structure unless explicitly asked.
