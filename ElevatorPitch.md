# Who Goes There? Mutation testing × The Thing

> The pyramid tells you what your tests cost. Mutation testing tells you what they're worth.

## Abstract

An agent opens a PR: +16,000 lines, 350 new tests, 100% coverage, all green, LGTM. Is it the dog from the other camp? Coverage only tells you every line ran, not that anything was checked, and when the same agent writes the code and the tests, the blood bank is sabotaged. Mutation testing plants bugs on purpose and checks whether your tests react. With a live Stryker run, an audience vote and the testing pyramid redrawn by mutants killed per level, this lightning talk shows what your tests are actually worth.

## Outline

- Cold open: agent PR, 100% coverage, green, LGTM. Is this PR the dog?
- Everyone's been in the room: coverage measures presence, not verification
- Audience vote: 5 functions with passing tests. Which are Things?
- The blood test: plant a mutant, hot wire, killed vs survived; live Stryker.NET demo
- Sabotaged blood bank: survivors cluster in the agent's own tests
- Redraw the pyramid by mutants killed per level
- "Nobody trusts anybody now": trust the score, not the tests
