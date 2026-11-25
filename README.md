# Who Goes There?

Mutation testing × The Thing. A lightning talk (~12–13 min).

> The pyramid tells you what your tests cost. Mutation testing tells you what they're worth.

- **Slides:** https://laoujin.github.io/WhoGoesThere/
- **Source of the talk idea** (pitch, metaphor, arc, message map, open questions): https://github.com/itenium-be/UnitTesting/issues/4

## Run it

```bash
cd presentation
bun install
bun run dev      # http://localhost:3030
bun run preview  # build and serve at http://localhost:4173/WhoGoesThere/
bun run build    # into presentation/dist
bun run export   # PDF (needs playwright-chromium)
```

Every push to `main` builds the deck and publishes it to GitHub Pages (`.github/workflows/pages.yml`).
In the repo settings, Pages → Source must be **GitHub Actions**.

## Structure

| # | Slide | Message |
|---|-------|---------|
| 1 | Title | |
| 2 | Cold open: the agent PR (animated) | hook |
| 3 | The dog from the other camp (animated) | hook |
| 4 | Headline | |
| 5–7 | Everyone's been in the room: coverage room, audience vote | 1 |
| 8–15 | The blood test: metaphor, hot wire, operators, why it works, live demo, sabotaged blood bank, caveats | 2 |
| 16–17 | Redraw the pyramid (animated) | 3 |
| 18–19 | "Nobody trusts anybody now", closing line | |
| 20 | About / sources (not presented) | |

Every slide has speaker notes with timings (press `P` for presenter view).

## Files

- `presentation/slides.md`: slides and speaker notes
- `presentation/scenes/engine.js`: step/animation engine for the animated scenes
- `presentation/scenes/scenes.js`: the step-by-step scenes; each step is one click
- `presentation/scenes/art.js`: SVG sprite: outpost, dog, dog-that-isn't, crew member, petri dish, hot wire, reaction, agent
- `presentation/components/Scene.vue`: drives a scene from Slidev's click count
- `presentation/layouts/`: `title`, `section`, `statement`, `viz` (animated scene) and `default`

An animated slide needs `clicks:` set to the scene's step count minus one.

## Choices made for the open questions

Defaults, not decisions.

- **Demo codebase:** Sockstore (.NET) from itenium-be/UnitTesting, with agent-written code and tests added. The code on the slides is a simplified pricing/checkout example in that style.
- **Tool and language:** Stryker.NET, C# + xUnit (matches Sockstore). PIT and Stryker JS are mentioned as alternatives.
- **Audience vote:** show of hands per number; the QR poll is an option if it gets shared with the Hypersleep talk.
- **Length:** stays a lightning talk. To grow to 30 min: expand the demo and the "in practice" slide.
- **Live demo fallback:** slide 13 shows an illustrative Stryker run (`--since:main`, only changed lines).

## Still to do

- Measure mutation score per pyramid level on a real repo. **The pyramid numbers (slide 17) and Stryker output (slide 13) are illustrative placeholders.**
- Build the demo PR: agent-written code and tests, 100% coverage.
- Replace the five vote functions (slide 7) with the real ones.
- Verify sources: competent programmer hypothesis and coupling effect (DeMillo, Lipton & Sayward 1978), The Thing (1982), "Who Goes There?" (1938).

## Artwork

All illustrations are original SVG/CSS made for this deck: a generic sled dog, an outpost, a crew member in a parka, petri dishes, a hot wire. No film stills, logos, posters or likenesses.

## License

[MIT](LICENSE)
