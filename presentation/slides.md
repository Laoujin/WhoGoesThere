---
theme: none
title: "Who Goes There? Mutation testing × The Thing"
info: |
  Lightning talk: the pyramid tells you what your tests cost. Mutation testing tells you what they are worth.
  Source: https://github.com/itenium-be/UnitTesting/issues/4
author: Wouter Van Schandevijl
favicon: favicon.svg
canvasWidth: 1600
aspectRatio: 16/9
colorSchema: dark
transition: fade
download: false
routerMode: hash
fonts:
  sans: Inter
  mono: JetBrains Mono
  weights: "400,500,600,700,800,900"
  provider: google
layout: title
kicker: "lightning talk · mutation testing"
heading: "Who Goes<br><em>There?</em>"
subtitle: "Mutation testing <b>×</b> The Thing"
---

<!--
[0:00 – 0:20] Don't introduce the topic yet. Let the snow fall for a beat, then go straight into the cold open.
The outpost and dog are original artwork: a theme, not a recreation of the film.
-->

---
layout: viz
kicker: "cold open"
heading: "A pull request lands"
title: "A pull request lands"
scene: pr
clicks: 5
---

<!--
[0:20 – 1:20] Step through slowly and let the numbers land.
+16k lines, 350 tests, 100% coverage, all green, LGTM after 40 seconds.
Last step, deadpan: "Merge? …as if PRs are still a thing." (laugh line; pause for it).
Don't answer the question yet.
-->

---
layout: viz
kicker: "who goes there?"
heading: "The dog from the other camp"
title: "The dog from the other camp"
scene: dog
clicks: 4
---

<!--
[1:20 – 2:10] Tell the dog in two sentences: "1982. An Antarctic research station takes in a dog that isn't a dog."
The story goes back to "Who Goes There?" (John W. Campbell, 1938); the dog is from the 1982 film. No need to explain the plot further.
Key idea: the copy is perfect, so looking at it tells you nothing. You have to provoke a reaction.
End on the question: is this PR the dog? The setup: the same agent wrote the code and the 350 tests.
-->

---
layout: statement
title: "The pyramid tells you what your tests cost . Mutation testin"
---

<div class="big">The pyramid tells you what your tests <i>cost</i>.<br>Mutation testing tells you what they’re <em>worth</em>.</div>
<div class="small">The pyramid has a cost axis. It has no quality axis.</div>

<!--
[2:10 – 2:30] The headline. Say it once, clearly, and move on. It comes back at the end.
The testing pyramid shows how many tests you have per level and what each one costs. It says nothing about whether they check anything.
-->

---
layout: section
n: "01"
heading: "Everyone’s been in the room"
title: "Everyone’s been in the room"
subtitle: "Coverage measures presence, not verification."
art: [["crew",60,120],["crew",60,120],["dogthing",200,140]]
---

<!--
Message 1 of 3. Quick transition, no talking over it.
-->

---
layout: viz
kicker: "01 · coverage"
heading: "Everyone’s been in the room"
title: "Everyone’s been in the room"
scene: room
clicks: 4
---

<!--
[2:30 – 3:30] The function is a room; every line is a person in it.
The test walks through every line: 100% coverage.
But the only assertion is Assert.NotNull on a decimal, which can never fail.
Last step: three lines changed (> to >=, coupon ignored, no rounding) and it stays green with 100% coverage.
Punchline: coverage tells you who was in the room, not whether anyone checked them.
-->

---
layout: viz
kicker: "01 · audience vote"
heading: "Which ones are Things?"
title: "Which ones are Things?"
scene: vote
clicks: 4
---

<!--
[3:30 – 5:00] Audience moment. Read the five function names, then ask for a show of hands per number (or the QR poll if it is shared with the Hypersleep talk).
Don't comment on the votes; go straight to the blood test.
Reveal: 1 and 3 are human (boundary test exists; exception path tested). 2, 4, 5 are Things:
2 has no test at exactly 100; 4 asserts the return value but never verifies the mail was sent; 5 computes its expected value with the code under test (tautology).
All five had 100% coverage.
TODO: replace with the real five functions from the demo repo.
-->

---
layout: section
n: "02"
heading: "The blood test"
title: "The blood test"
subtitle: "You can’t wait for the real Thing to show up. So you make your own."
art: [["petri",160,80],["wire",220,60]]
---

<!--
Message 2 of 3. Read the subtitle out loud: it is the key line of the talk.
-->

---
kicker: "02 · the metaphor"
heading: "The Thing is the bug. A mutant is a Thing you plant."
title: "The Thing is the bug. A mutant is a Thing you plant."
---

<table class="cmp">
<thead><tr><th></th><th>The Thing (a real bug)</th><th>A mutant</th></tr></thead>
<tbody>
<tr><th>Arrives</th><td>on its own</td><td class="hl">you plant it</td></tr>
<tr v-click><th>Who knows it’s there</th><td>nobody</td><td class="hl">you do: file, line, change</td></tr>
<tr v-click><th>Size</th><td>unknown</td><td class="hl">one small change</td></tr>
<tr v-click><th>The question</th><td>is anyone infected?</td><td class="hl">does the blood test catch it?</td></tr>
</tbody>
</table>

<div class="compare-foot">You can’t test the blood against the real Thing. So you test it against Things you planted.</div>

<!--
[5:00 – 5:40] One row per click.
The point: you never know where the real bugs are, so you can't measure your tests against them. You can measure them against bugs you planted yourself, because you know exactly where those are.
-->

---
layout: viz
kicker: "02 · the blood test"
heading: "Hot wire, one sample at a time"
title: "Hot wire, one sample at a time"
scene: blood
clicks: 5
chips: ["C#","xUnit"]
---

<!--
[5:40 – 7:00] Each test is a blood sample, and running the suite against a mutant is the hot wire.
Mutate > to >=. Run each test: 150 and 50 give the same answer for both versions. No reaction, so the mutant survived.
Add the boundary test at 100: the original says 100, the mutant says 90. The test fails, so the mutant is killed.
Mutation score = killed / planted. It scores the tests, not the code.
-->

---
kicker: "02 · mutation operators"
heading: "Ways it takes someone over"
title: "Ways it takes someone over"
---

<table class="cmp">
<thead><tr><th>Operator</th><th>Original</th><th>Mutant</th></tr></thead>
<tbody>
<tr><th>Relational boundary</th><td><code>total > 100</code></td><td class="hl"><code>total >= 100</code></td></tr>
<tr><th>Negate condition</th><td><code>if (isValid)</code></td><td class="hl"><code>if (!isValid)</code></td></tr>
<tr><th>Remove call</th><td><code>mailer.Send(invoice);</code></td><td class="hl"><code>;</code></td></tr>
<tr><th>Return value</th><td><code>return order;</code></td><td class="hl"><code>return null;</code></td></tr>
<tr><th>Arithmetic</th><td><code>price * 1.21m</code></td><td class="hl"><code>price / 1.21m</code></td></tr>
<tr><th>Boolean literal</th><td><code>return true;</code></td><td class="hl"><code>return false;</code></td></tr>
</tbody>
</table>

<div class="compare-foot">One change per mutant. A copy that is perfect except for <b>one thing</b>.</div>

<!--
[7:00 – 7:20] Don't read the table. Point at one or two rows: "each of these is a way the Thing takes someone over."
Stryker and PIT ship dozens of these operators; this is a sample.
-->

---
layout: statement
kicker: "02 · why fake Things count"
heading: "Why planted bugs tell you about real ones"
title: "Why planted bugs tell you about real ones"
---

<div class="small"><b>Competent programmer hypothesis</b>: real bugs are mostly small mistakes, one operator or one condition away from correct.</div>
<div v-click class="small"><b>Coupling effect</b>: tests that catch the small fake bugs also catch most of the bigger real ones.</div>
<div v-click class="small">DeMillo, Lipton &amp; Sayward, <i>Hints on Test Data Selection</i>, 1978.</div>

<!--
[7:20 – 7:50] Two ideas from the 1978 paper. They answer "why would fake bugs say anything about real ones?"
1. Competent programmers write code that is nearly right, so real bugs look like mutants.
2. Coupling: tests that catch simple faults also catch most complex ones.
TODO (from issue): verify the citation details before the talk.
-->

---
layout: viz
kicker: "02 · live demo"
heading: "Blood test on the agent’s PR"
title: "Blood test on the agent’s PR"
scene: report
clicks: 3
chips: ["Stryker.NET"]
---

<!--
[7:50 – 9:00] LIVE DEMO: switch to the terminal. The slide is a fallback if the demo fails.
Run Stryker.NET with --since:main so it only mutates changed lines (that keeps it fast enough for a lightning talk).
Read out: 100% line coverage, and a mutation score around a third. Open the HTML report and click one survivor.
The numbers on this slide are ILLUSTRATIVE; replace them with the real run.
Demo codebase: Sockstore (.NET) from itenium-be/UnitTesting, with agent-written tests added (see README choices).
-->

---
layout: viz
kicker: "02 · the setup pays off"
heading: "The sabotaged blood bank"
title: "The sabotaged blood bank"
scene: bank
clicks: 4
---

<!--
[9:00 – 9:50] Why do survivors cluster in the agent's tests? The same agent wrote the code and the tests.
Tautological tests: the expected value is computed by the code under test. Mocks return exactly what the test then asserts.
Those tests agree with the code whatever it does, so mutants in that code survive.
One-liner: "Your tests are the blood test. Mutation testing checks whether someone sabotaged the blood."
-->

---
kicker: "02 · in practice"
heading: "Testing the whole camp takes all night"
title: "Testing the whole camp takes all night"
---

<div class="bullets-wrap">
<ul class="bullets">
<li><b>Every sample tested separately</b><small>One mutant per run: mutants × tests is slow.</small></li>
<li v-click><b>Only test whoever came in on the last helicopter</b><small>Incremental: mutate changed lines only. <code>stryker --since</code>, PIT history.</small></li>
<li v-click><b>Everyone tied to the couch</b><small>Test isolation. Shared state lets a Thing hide.</small></li>
<li v-click><b>A Thing that behaves exactly like a human</b><small>Equivalent mutant: no test can kill it. Is it a threat at all?</small></li>
</ul>
<div class="aside-box"><b>Tools</b><br>Stryker (JS/TS)<br>Stryker.NET (C#)<br>PIT (Java)<br><br>Run it in CI on the PR diff, not on the whole repo every time.</div>
</div>

<!--
[9:50 – 10:40] The practical caveats, quickly. One click per line.
Slow: every mutant reruns the relevant tests. Fix: incremental, only mutate the diff.
Isolation: if tests share state, a mutant can hide behind another test's side effects.
Equivalent mutants: some changes don't change behaviour (e.g. i < n vs i != n in some loops). Ignore them; don't chase 100%.
-->

---
layout: section
n: "03"
heading: "Redraw the pyramid"
title: "Redraw the pyramid"
subtitle: "Spend where the kills are."
art: [["outpost",400,260]]
---

<!--
Message 3 of 3. One sentence: we measured the pyramid by what it costs; now measure it by what it kills.
-->

---
layout: viz
kicker: "03 · the surprise"
heading: "The pyramid, measured by kills"
title: "The pyramid, measured by kills"
scene: pyramid
clicks: 3
---

<!--
[10:40 – 11:40] The surprising moment.
Start with the classic pyramid: width = number of tests (cost).
Then width = mutants killed per level. In this illustrative example it turns into a diamond: the 25 integration tests kill the most, the 320 agent-written unit tests kill few.
If the real measurement stays a pyramid, that is still a reveal: then your unit tests are earning their place.
TODO (from issue): measure on a real repo first and replace the numbers.
-->

---
layout: statement
title: "“Nobody trusts anybody now.”"
---

<div class="big">“Nobody trusts anybody now.”</div>
<div class="small">A 100% mutation score measures the <b>tests</b>. It doesn’t prove the code is correct.<br>Trust the score, not the tests.</div>

<!--
[11:40 – 12:10] The film's line, used as the takeaway.
Mutation testing doesn't prove your code is right. It tells you whether your tests would notice if it was wrong.
Don't trust the green tests; trust the mutation score.
-->

---
layout: statement
title: "Your tests are the blood test . Mutation testing checks whet"
---

<div class="big">Your tests are the <i>blood test</i>.<br>Mutation testing checks whether someone <em>sabotaged the blood</em>.</div>
<div class="small">The pyramid tells you what your tests cost. Mutation testing tells you what they’re worth.</div>

<!--
[12:10 – 12:30] Closing line, then the headline again. Stop. Thank you. Questions.
The next slide (about/sources) is for afterwards; don't present it.
-->

---
kicker: "about this talk"
heading: "Sources &amp; links"
title: "Sources & links"
---

<div class="about"><div>
<h3>Source</h3>
<ul><li>Talk idea, pitch and message map: <a href="https://github.com/itenium-be/UnitTesting/issues/4">itenium-be/UnitTesting#4</a></li>
<li>Mutation testing section of the Unit Testing deck: itenium-be/UnitTesting</li>
<li>Spin-off of <a href="https://github.com/Laoujin/OutOfHypersleep">Out of Hypersleep</a>, where mutation testing is one of the crew</li></ul>
<h3>References</h3>
<ul><li>John W. Campbell, <i>Who Goes There?</i>, 1938</li>
<li><i>The Thing</i>, 1982 film</li>
<li>DeMillo, Lipton &amp; Sayward, <i>Hints on Test Data Selection: Help for the Practicing Programmer</i>, IEEE Computer, 1978</li></ul>
</div><div>
<h3>Tools</h3>
<ul><li>Stryker (JS/TS) · Stryker.NET (C#) · PIT (Java)</li></ul>
<h3>Artwork</h3>
<ul><li>All illustrations are original SVG made for this deck. No film stills, logos, posters or likenesses.</li></ul>
<h3>Controls</h3>
<ul><li>→ / space / clicker: next step · ← back · ↑↓ slide</li><li>P presenter view + notes · O overview · F fullscreen</li></ul>
</div></div>

<!--
Not presented. Reference slide for people browsing the deck.
Source of the talk: https://github.com/itenium-be/UnitTesting/issues/4
-->
