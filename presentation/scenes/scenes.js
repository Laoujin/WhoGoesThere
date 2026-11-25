import { scene } from './engine.js'


scene('pr', {
  init: h => {
    h.region('pr', { x: 30, y: 30, w: 940, h: 580, label: 'Pull request #4127', sub: 'agent/rewrite-checkout → main', cls: 'pr' });
  },
  steps: [
    { t: 'A pull request lands. The author: <b>an agent</b>.', do: h => {
      h.text('title', { x: 60, y: 110, label: 'feat: rewrite checkout pricing', size: 34 });
      h.text('by', { x: 60, y: 146, label: 'opened 4 minutes ago · 212 files changed', size: 18, cls: 'muted' });
    } },
    { t: 'It is big.', do: h => {
      h.add('s1', { x: 60, y: 180, w: 280, h: 110, label: '+16,042', sub: 'lines added', cls: 'stat add' });
      h.add('s2', { x: 360, y: 180, w: 280, h: 110, label: '−1,203', sub: 'lines removed', cls: 'stat del' });
    } },
    { t: 'But it came with <b>350 new tests</b>. Coverage: <i>100%</i>.', do: h => {
      h.add('s3', { x: 660, y: 180, w: 280, h: 110, label: '350', sub: 'new tests', cls: 'stat' });
      h.add('cov', { x: 60, y: 315, w: 880, h: 54, label: 'line coverage 100%', cls: 'pass' });
    } },
    { t: 'Every check is green.', do: h => {
      h.add('c1', { x: 60, y: 392, w: 280, h: 54, label: '✓ build', cls: 'pass' });
      h.add('c2', { x: 360, y: 392, w: 280, h: 54, label: '✓ tests 350 / 350', cls: 'pass' });
      h.add('c3', { x: 660, y: 392, w: 280, h: 54, label: '✓ lint', cls: 'pass' });
    } },
    { t: 'The reviewer: “LGTM.”', do: h => {
      h.add('lgtm', { x: 60, y: 475, w: 540, h: 90, label: '“LGTM, ship it.”', sub: 'reviewed in 40 seconds', cls: 'comment' });
    } },
    { t: '<b>Merge?</b><small>…as if PRs are still a thing.</small>', do: h => {
      h.add('merge', { x: 640, y: 490, w: 300, h: 64, label: 'Merge pull request', cls: 'btn' });
      h.ptr('p', { x: 790, y: 482, label: 'merge?' });
    } },
  ],
});

scene('dog', {
  legend: [['human', 'looks fine'], ['thing', 'is not fine']],
  init: h => {
    h.art('stars', { art: 'stars', x: 0, y: 0, w: 1000, h: 300 });
    h.art('ground', { art: 'snowfield', x: 0, y: 440, w: 1000, h: 200 });
    h.art('outpost', { art: 'outpost', x: 600, y: 215, w: 380, h: 247 });
  },
  steps: [
    { t: '<b>1982.</b> A research station in the Antarctic. Deep winter. Nobody comes or goes.' },
    { t: 'A dog comes running across the ice. From the other camp.', do: h => {
      h.art('dog', { art: 'dog', x: 30, y: 380, w: 180, h: 126 });
    } },
    { t: 'They take it in. It looks like a dog. It acts like a dog. It passes every check you can do <b>by looking</b>.', do: h => {
      h.set('dog', { x: 380 });
      h.text('chk', { x: 470, y: 345, label: '✓ looks like a dog', size: 24, cls: 'ok', anchor: 'middle' });
    } },
    { t: 'It isn’t a dog. A perfect copy, with <em>one thing different</em>. Looking at it tells you nothing.', do: h => {
      h.del('dog');
      h.art('thing', { art: 'dogthing', x: 380, y: 380, w: 180, h: 126, spawn: 'dog' });
      h.set('chk', { label: '✓ looks like a dog …?', cls: 'warn' });
    } },
    { t: 'So: <b>is this PR the dog?</b><small>Keep in mind: the same agent wrote the code <i>and</i> the 350 tests.</small>', do: h => {
      h.add('pr', { x: 40, y: 50, w: 480, h: 70, label: '+16,042 · 350 tests · 100% · LGTM', cls: 'pass' });
      h.ref('pr', 'thing', { cls: 'hot', label: 'same thing?', c: [-200, 0], lx: -20 });
    } },
  ],
});

scene('room', {
  lang: 'cs', codeTitle: 'Agent-written · C#',
  code: 'public decimal Total(Cart cart)\n{\n    var sum = cart.Sum(l => l.Price * l.Qty);\n    if (sum > 100)\n        sum -= Discount(sum);\n    if (cart.Coupon != null)\n        sum -= cart.Coupon.Amount;\n    return Math.Round(sum, 2);\n}\n\n[Fact]\npublic void Total_works()\n{\n    var cart = TestData.BigCartWithCoupon();\n    var total = sut.Total(cart);\n    Assert.NotNull(total);\n}',
  legend: [['', 'line'], ['visited', 'covered'], ['mutant', 'changed — still green']],
  init: h => {
    h.region('room', { x: 140, y: 70, w: 720, h: 460, label: 'Total(cart)', sub: 'the room', cls: 'room' });
    const L = ['var sum = Σ price × qty', 'if (sum > 100)', 'sum -= Discount(sum)', 'if (coupon != null)', 'sum -= coupon.Amount', 'return Round(sum, 2)'];
    L.forEach((l, i) => h.add('L' + i, { x: 180, y: 120 + i * 64, w: 640, h: 50, label: l, cls: 'line' }));
  },
  steps: [
    { hl: [1, 2, 3, 4, 5, 6, 7, 8, 9], t: 'Think of the function as a <b>room</b>. Every line is someone in it.' },
    { hl: [11, 12, 13, 14], t: 'A test walks in: <code>Total_works()</code>.', do: h => {
      h.art('test', { art: 'crew', x: 40, y: 250, w: 56, h: 112, label: 'test' });
    } },
    { hl: [14, 15], t: 'It walks past every line. Big cart: the discount runs. Coupon: that runs too.', do: h => {
      h.set('test', { x: 892 });
      h.cls('L0 L1 L2 L3 L4 L5', 'line visited');
      h.text('cov', { x: 500, y: 580, label: '100% line coverage ✓', size: 30, cls: 'ok', anchor: 'middle' });
    } },
    { hl: [16], t: '<b>Everyone has been in the room.</b> Nobody checked anyone.<small><code>Assert.NotNull</code> on a <code>decimal</code>: it can never fail.</small>', do: h => {
      h.set('L0 L1 L2 L3 L4 L5', { badge: '?' });
      h.text('asserts', { x: 500, y: 618, label: 'assertions that can fail: 0', size: 24, cls: 'danger', anchor: 'middle' });
    } },
    { t: 'Coverage measures <b>presence</b>, not <b>verification</b>.<small>Flip the <code>></code>, drop the coupon, round wrong: still 100%, still green.</small>', do: h => {
      h.set('L1', { label: 'if (sum >= 100)', cls: 'line mutant', badge: '' });
      h.set('L4', { label: '// coupon ignored', cls: 'line mutant', badge: '' });
      h.set('L5', { label: 'return sum', cls: 'line mutant', badge: '' });
      h.set('cov', { label: '100% line coverage ✓ · still green' });
    } },
  ],
});

const VOTE = [
  ['IsAdult', 'age >= 18', 'age > 18', true],
  ['Discount', 'total > 100', 'total >= 100', false],
  ['Stock.Remove', 'n > Value → throw', 'n >= Value', true],
  ['SendInvoice', 'mailer.Send(inv)', 'Send() removed', false],
  ['WithVat', 'price * 1.21', 'price / 1.21', false],
];
const vx = i => 25 + i * 194;
scene('vote', {
  legend: [['pass', 'green / killed'], ['mutant', 'planted mutant'], ['thing', 'survived: a Thing']],
  steps: [
    { t: 'Five functions from the agent’s PR. All tests green. <b>100% coverage</b> on each.', do: h => {
      VOTE.forEach(([n, c], i) => {
        h.art('p' + i, { art: 'crew', x: vx(i) + 57, y: 60, w: 56, h: 112 });
        h.add('f' + i, { x: vx(i), y: 210, w: 170, h: 70, label: n, sub: '✓ tests · 100%', cls: 'pass' });
        h.text('c' + i, { x: vx(i) + 85, y: 320, label: c, size: 16, cls: 'mono muted', anchor: 'middle' });
      });
    } },
    { t: '<b>Vote.</b> Which ones are Things?<small>Hands up per number. Or the QR poll.</small>', do: h => {
      VOTE.forEach((_, i) => h.set('f' + i, { badge: String(i + 1) }));
    } },
    { t: 'Blood test: plant <b>one mutant</b> in each and rerun its tests.', do: h => {
      VOTE.forEach(([, , m], i) => h.add('m' + i, { x: vx(i), y: 370, w: 170, h: 60, label: m, sub: 'mutant', cls: 'mutant mono' }));
    } },
    { t: '<i>1 and 3 react</i>: a test fails, mutant killed. <em>2, 4 and 5 stay green</em>: those are Things.', do: h => {
      VOTE.forEach(([, , , human], i) => {
        h.set('m' + i, { cls: (human ? 'pass' : 'thing') + ' mono', sub: human ? 'killed' : 'survived' });
        h.set('p' + i, { cls: human ? 'pass' : 'thing', label: human ? 'human' : 'THING' });
      });
      h.text('res', { x: 500, y: 500, label: '100% coverage · 2 of 5 actually tested', size: 28, cls: 'warn', anchor: 'middle' });
    } },
    { t: 'Why they passed:<small><b>2</b>: no test at exactly 100.<br><b>4</b>: asserts the return value, never that the mail was sent.<br><b>5</b>: expected value computed by the code under test.</small>', do: h => {
      h.text('why', { x: 500, y: 560, label: 'boundary · missing verify · tautology', size: 22, cls: 'muted mono', anchor: 'middle' });
    } },
  ],
});

const BLOOD_A = 'decimal Apply(decimal total) =>\n    total > 100 ? total * 0.9m : total;\n\n[Theory]\n[InlineData(150, 135)]\n[InlineData(50, 50)]\npublic void Discount(decimal t, decimal exp)\n    => Assert.Equal(exp, sut.Apply(t));';
const BLOOD_B = 'decimal Apply(decimal total) =>\n    total > 100 ? total * 0.9m : total;\n\n[Theory]\n[InlineData(150, 135)]\n[InlineData(50, 50)]\n[InlineData(100, 100)] // hot wire\npublic void Discount(decimal t, decimal exp)\n    => Assert.Equal(exp, sut.Apply(t));';
const dish = (id, x, label) => h => h.art(id, { art: 'petri', x, y: 280, w: 200, h: 100, label });
scene('blood', {
  lang: 'cs', codeTitle: 'C# · xUnit', code: BLOOD_A,
  legend: [['human', 'original'], ['mutant', 'mutant'], ['pass', 'no reaction'], ['thing', 'reaction: killed']],
  init: h => {
    h.add('orig', { x: 60, y: 50, w: 360, h: 64, label: 'total > 100', sub: 'original', cls: 'mono human' });
  },
  steps: [
    { hl: [2], t: 'The original code, and two tests. Each test is a <b>blood sample</b>.', do: h => {
      dish('d1', 90, 'Apply(150) = 135')(h);
      dish('d2', 400, 'Apply(50) = 50')(h);
    } },
    { hl: [2], t: 'Plant a Thing: one tiny change. <code>></code> becomes <code>>=</code>.<small>Unlike the real Thing, you know exactly where this one is.</small>', do: h => {
      h.add('mut', { x: 580, y: 50, w: 360, h: 64, label: 'total >= 100', sub: 'mutant #1', cls: 'mono mutant' });
      h.ref('orig', 'mut', { cls: 'hot', label: 'mutate' });
    } },
    { hl: [5, 7, 8], t: 'Hot wire into sample 1: run the test <b>against the mutant</b>. 150 gets the discount either way. <i>No reaction.</i>', do: h => {
      h.art('wire', { art: 'wire', x: -6, y: 270, w: 220, h: 60 });
      h.set('d1', { label: 'no reaction', cls: 'pass' });
    } },
    { hl: [6, 7, 8], t: 'Sample 2: 50 gets no discount either way. No reaction.<br><em>All green: the mutant survived.</em><small>A survivor is a bug your tests would not notice.</small>', do: h => {
      h.set('wire', { x: 304 });
      h.set('d2', { label: 'no reaction', cls: 'pass' });
      h.text('verdict', { x: 500, y: 530, label: 'SURVIVED', size: 48, cls: 'warn banner', anchor: 'middle' });
    } },
    { code: BLOOD_B, hl: [7], t: 'Add the boundary: <code>Apply(100)</code>. Original says 100, mutant says 90.<br><em>The blood jumps.</em> Test fails: mutant <b>killed</b>.', do: h => {
      dish('d3', 710, 'expected 100, got 90')(h);
      h.set('d3', { cls: 'thing' });
      h.set('wire', { x: 614 });
      h.art('boom', { art: 'reaction', x: 735, y: 222, w: 150, h: 112 });
      h.set('verdict', { label: 'KILLED', cls: 'danger banner' });
    } },
    { code: BLOOD_B, t: 'Repeat for every mutant, <b>one at a time</b>.<small>Mutation score = killed ÷ planted. It scores the <b>tests</b>, not the code.</small>', do: h => {
      h.del('wire');
      h.text('score', { x: 500, y: 600, label: 'mutation score = killed ÷ mutants', size: 28, cls: 'ice', anchor: 'middle' });
    } },
  ],
});

const TERM = (h, id, i, label, cls = '') => h.text(id, { x: 50, y: 90 + i * 34, label, size: 19, cls: 'term ' + cls });
scene('report', {
  legend: [['pass', 'killed'], ['thing', 'survived']],
  init: h => {
    h.region('term', { x: 20, y: 20, w: 960, h: 600, label: 'terminal', sub: 'illustrative output — replace with the real run', cls: 'pr' });
  },
  steps: [
    { t: '<b>Live demo.</b> Stryker.NET on the agent’s PR. Only the lines that changed.', do: h => TERM(h, 'l0', 0, '$ dotnet stryker --since:main', 'hot') },
    { t: 'It generates mutants on the changed lines and runs the relevant tests against each one.', do: h => {
      TERM(h, 'l1', 1, 'Found 350 tests · line coverage 100%', 'ok');
      TERM(h, 'l2', 2, 'Generated 212 mutants on changed lines');
      TERM(h, 'l3', 3, 'Testing ██████████████████████████ 212/212');
    } },
    { t: 'The score. <i>100% coverage.</i> <em>33% mutation score.</em><small>Two thirds of the planted Things walked straight past the blood test.</small>', do: h => {
      TERM(h, 'l5', 5, 'Killed       64', 'ok');
      TERM(h, 'l6', 6, 'Timeout       6', 'ok');
      TERM(h, 'l7', 7, 'Survived    142', 'danger');
      TERM(h, 'l8', 8, 'Mutation score: 33.0%', 'hot');
    } },
    { t: 'Survivors light up, with file, line and the exact change. Each one is a missing assertion.', do: h => {
      TERM(h, 'l10', 10, '✗ Pricing.cs:42    > → >=            survived', 'danger');
      TERM(h, 'l11', 11, '✗ Checkout.cs:87   mailer.Send() removed  survived', 'danger');
      TERM(h, 'l12', 12, '✗ Price.cs:31      * → /             survived', 'danger');
      TERM(h, 'l13', 13, '✗ Stock.cs:18      return null       survived', 'danger');
    } },
  ],
});

const BANK = '[Fact]\npublic void WithVat_is_correct()\n{\n    var price = new Price(100m);\n    var expected = price.WithVat();\n    Assert.Equal(expected, price.WithVat());\n}\n\n[Fact]\npublic void Checkout_sends_invoice()\n{\n    mailer.Setup(m => m.Send(any))\n          .Returns(true);\n    Assert.True(sut.Checkout(order));\n}';
const MB = [['* → /', 120, 280], ['> → >=', 280, 280], ['return 0', 120, 370], ['no Send()', 280, 370]];
scene('bank', {
  lang: 'cs', codeTitle: 'Agent-written tests', code: BANK,
  legend: [['pass', 'green test'], ['mutant', 'mutant'], ['thing', 'survived']],
  steps: [
    { t: 'Back to the PR. <b>One agent</b> wrote the code <b>and</b> the tests.', do: h => {
      h.art('agent', { art: 'agent', x: 440, y: 20, w: 120, h: 120, label: 'agent' });
      h.region('code', { x: 100, y: 220, w: 340, h: 260, label: 'Pricing.cs', sub: 'the crew', cls: 'room' });
      h.region('tests', { x: 560, y: 220, w: 340, h: 260, label: 'PricingTests.cs', sub: 'blood bank', cls: 'room' });
      h.ref('agent', 'code', { cls: 'weak' });
      h.ref('agent', 'tests', { cls: 'weak' });
      [0, 1, 2, 3].forEach(i => h.add('t' + i, { x: 580 + (i % 2) * 160, y: 280 + Math.floor(i / 2) * 90, w: 140, h: 56, label: 'test ' + (i + 1), sub: '✓ green', cls: 'pass' }));
    } },
    { hl: [5, 6, 12, 13], t: 'The tests are copied from the code. The expected value is <b>whatever the code returned</b>. The mock returns what the test expects.', do: h => {
      h.ref('code', 'tests', { cls: 'hot' });
      h.text('copy', { x: 500, y: 512, label: 'expected = whatever the code returned', size: 17, cls: 'hot mono', anchor: 'middle' });
    } },
    { t: 'Plant mutants in the code.', do: h => {
      MB.forEach(([l, x, y], i) => h.add('m' + i, { x, y, w: 140, h: 56, label: l, sub: 'mutant', cls: 'mutant mono' }));
    } },
    { t: 'Run the suite. The tests agree with the code whatever it does. <em>Survivors cluster</em> in the agent’s own tests.', do: h => {
      [0, 1, 3].forEach(i => h.set('m' + i, { cls: 'thing mono', sub: 'survived' }));
      h.set('m2', { cls: 'pass mono', sub: 'killed' });
      h.text('score', { x: 500, y: 560, label: '100% coverage · 25% mutation score', size: 30, cls: 'danger', anchor: 'middle' });
    } },
    { t: 'The <b>sabotaged blood bank</b>.<small>Mutation testing is the one check that doesn’t take the agent’s word for it.</small>', do: h => {
      h.text('final', { x: 500, y: 605, label: 'the test can’t fail if the code wrote the answer', size: 22, cls: 'muted', anchor: 'middle' });
    } },
  ],
});

const tier = (id, y, w, label, sub, cls = 'human') => h => h.add(id, { x: 500 - w / 2, y, w, h: 100, label, sub, cls: 'tier ' + cls });
scene('pyramid', {
  legend: [['human', 'test level'], ['pass', 'worth it'], ['thing', 'sabotaged']],
  steps: [
    { t: 'The pyramid tells you what your tests <b>cost</b>: lots of cheap unit tests, a few expensive end-to-end ones.', do: h => {
      tier('e2e', 100, 240, 'E2E', '5 tests · €€€ each')(h);
      tier('int', 215, 520, 'Integration', '25 tests · €€ each')(h);
      tier('unit', 330, 800, 'Unit', '320 tests · € each')(h);
      h.text('axis', { x: 500, y: 470, label: 'width = number of tests', size: 20, cls: 'muted', anchor: 'middle' });
    } },
    { t: 'Same repo. Now measure what each level is <b>worth</b>: run mutation testing per level and count the mutants it kills.', do: h => {
      h.set('e2e', { sub: '5 tests · kills 50' });
      h.set('int', { sub: '25 tests · kills 130' });
      h.set('unit', { sub: '320 tests · kills 70' });
    } },
    { t: 'Redraw it with <b>width = mutants killed</b>. It might not be a pyramid any more.', do: h => {
      h.set('e2e', { x: 500 - 200, w: 400 });
      h.set('int', { x: 500 - 380, w: 760 });
      h.set('unit', { x: 500 - 230, w: 460 });
      h.set('axis', { label: 'width = mutants killed' });
      h.text('warn', { x: 500, y: 520, label: 'ILLUSTRATIVE NUMBERS · measure on a real repo first', size: 20, cls: 'warn banner', anchor: 'middle' });
    } },
    { t: 'Cheap tests can be worthless. A few expensive ones can kill most mutants.<br><b>Spend where the kills are, not where the pyramid says.</b>', do: h => {
      h.set('int', { cls: 'tier pass' });
      h.set('unit', { cls: 'tier thing', sub: '320 tests · kills 70 · agent-written' });
    } },
  ],
});
