# Svenska Bits

A documentation site powered by [Astro](https://astro.build/) and
[Starlight](https://starlight.astro.build/). The Svenska Bits guide is written
in MDX at `src/content/docs/guides/hello-world.mdx`.

## Commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Preview the production build locally |

## Requesting a page implementation

Tell the agent what course page or scope to implement. For example:

- `Implement page 1.2.`
- `Implement chapter 1.`
- `Implement the next 3 pages.`

The agent uses [`files/swedish-course-structure.md`](files/swedish-course-structure.md) to identify the requested pages and follows [`files/page-coordination-prompt.md`](files/page-coordination-prompt.md) to coordinate their implementation. You can name a subagent model in your request; otherwise, the agent will ask which model to use before starting page work.
