## Swedish course pages

When the user asks to implement a page, pages, or a chapter from `files/swedish-course-structure.md` (for example, “Implement page 1.2”), act as the coordinator, not the lesson-page author. Follow `files/page-coordination-prompt.md` for page selection, subagent handoff, review, validation, approval, and commit rules. In particular, ask which model to use for subagents before starting one if the user has not specified a model for that request. Do not write or edit lesson-page content yourself.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
