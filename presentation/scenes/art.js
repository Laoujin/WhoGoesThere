const DOG = `
  <path class="dog-fur" d="M42 64 C 20 52, 14 28, 30 21 C 39 18, 42 29, 35 33 C 30 39, 40 52, 52 58 Z"/>
  <path class="dog-fur" d="M40 62 C 46 46, 122 42, 142 52 L 152 80 C 140 93, 62 96, 45 86 Z"/>
  <rect class="dog-leg" x="50" y="80" width="12" height="50" rx="5"/>
  <rect class="dog-leg" x="67" y="82" width="12" height="48" rx="5"/>
  <rect class="dog-leg" x="122" y="78" width="12" height="52" rx="5"/>
  <rect class="dog-leg" x="137" y="76" width="12" height="54" rx="5"/>
  <path class="dog-saddle" d="M44 60 C 60 46, 120 43, 140 53 L 134 63 C 110 56, 72 58, 47 70 Z"/>
  <path class="dog-fur" d="M128 60 L 140 31 C 145 22, 160 20, 168 28 L 189 44 C 193 48, 191 55, 184 56 L 166 57 L 152 82 Z"/>
  <path class="dog-saddle" d="M140 31 C 145 22, 160 20, 168 28 L 160 36 C 152 32, 146 34, 141 40 Z"/>
  <path class="dog-saddle" d="M142 32 L 146 9 L 157 27 Z"/>
  <path class="dog-saddle" d="M153 26 L 161 7 L 166 29 Z"/>
  <circle class="dog-eye" cx="165" cy="37" r="2.8"/>
  <circle class="dog-nose" cx="189" cy="48" r="3.4"/>`;

export const sprite = `
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style="position:absolute" aria-hidden="true">
<defs>
  <radialGradient id="g-tip" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#fff6d6"/><stop offset=".35" stop-color="#ffb347"/><stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="g-blood" cx="45%" cy="40%" r="60%">
    <stop offset="0" stop-color="#b3202a"/><stop offset="1" stop-color="#4a070c"/>
  </radialGradient>
  <radialGradient id="g-window" cx="50%" cy="50%" r="50%">
    <stop offset="0" stop-color="#ffe2a0"/><stop offset="1" stop-color="#ff9d3a"/>
  </radialGradient>
  <linearGradient id="g-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9f2fb"/><stop offset="1" stop-color="#9fb4cc"/>
  </linearGradient>
  <filter id="f-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3"/></filter>
</defs>

<symbol id="art-outpost" viewBox="0 0 400 260">
  <path d="M0 230 C 60 205, 120 215, 190 210 C 270 204, 330 214, 400 222 L 400 260 L 0 260 Z" fill="url(#g-snow)"/>
  <line x1="318" y1="210" x2="318" y2="40" stroke="#5d6b80" stroke-width="4"/>
  <line x1="318" y1="60" x2="276" y2="210" stroke="#3a4660" stroke-width="1.5"/>
  <line x1="318" y1="60" x2="360" y2="210" stroke="#3a4660" stroke-width="1.5"/>
  <line x1="300" y1="70" x2="336" y2="70" stroke="#5d6b80" stroke-width="3"/>
  <line x1="306" y1="96" x2="330" y2="96" stroke="#5d6b80" stroke-width="3"/>
  <circle cx="318" cy="38" r="4" fill="#ff5d6c"/>
  <rect x="70" y="120" width="190" height="94" fill="#2a3446" stroke="#5d6b80" stroke-width="2"/>
  <rect x="200" y="140" width="96" height="70" fill="#232c3c" stroke="#5d6b80" stroke-width="2"/>
  <path d="M60 124 L 165 84 L 270 124 Z" fill="#3a4660" stroke="#5d6b80" stroke-width="2"/>
  <path d="M60 124 C 90 112, 120 104, 165 86 C 210 104, 240 112, 270 124 C 230 118, 200 112, 165 100 C 130 112, 100 118, 60 124 Z" fill="#e9f2fb"/>
  <path d="M194 142 L 302 142 L 296 132 L 200 132 Z" fill="#e9f2fb"/>
  <rect x="95" y="146" width="30" height="24" fill="url(#g-window)"/>
  <rect x="145" y="146" width="30" height="24" fill="url(#g-window)" opacity=".7"/>
  <rect x="222" y="158" width="22" height="18" fill="url(#g-window)" opacity=".85"/>
  <rect x="182" y="166" width="26" height="48" fill="#161d2a" stroke="#5d6b80" stroke-width="2"/>
  <path d="M40 222 C 70 210, 110 214, 140 214 C 120 222, 70 226, 40 222 Z" fill="#e9f2fb" opacity=".8"/>
  <path d="M230 214 C 270 208, 320 212, 360 218 C 320 224, 270 222, 230 214 Z" fill="#e9f2fb" opacity=".8"/>
  <ellipse cx="110" cy="190" rx="60" ry="12" fill="#ffb347" opacity=".06"/>
</symbol>

<symbol id="art-dog" viewBox="0 0 200 140">${DOG}</symbol>

<symbol id="art-dogthing" viewBox="0 0 200 140">
  <g opacity=".75" filter="url(#f-blur)">
    <path d="M40 132 C 20 136, 0 128, -10 136 M60 132 C 60 138, 40 140, 30 140 M130 132 C 150 140, 175 132, 200 138 M145 132 C 160 128, 180 124, 196 128" stroke="#e5484d" stroke-width="5" fill="none"/>
  </g>
  <ellipse cx="100" cy="133" rx="80" ry="6" fill="#4a070c" opacity=".8"/>
  ${DOG}
  <circle cx="165" cy="37" r="7" fill="#ff3b3b" filter="url(#f-blur)"/>
  <circle cx="165" cy="37" r="3" fill="#ffd0d0"/>
</symbol>

<symbol id="art-crew" viewBox="0 0 60 120">
  <rect x="16" y="96" width="11" height="22" rx="4" fill="#2a3446"/>
  <rect x="33" y="96" width="11" height="22" rx="4" fill="#2a3446"/>
  <rect x="8" y="38" width="44" height="64" rx="16" fill="#c4572e"/>
  <rect x="8" y="64" width="44" height="6" fill="#e9f2fb" opacity=".8"/>
  <rect x="2" y="44" width="10" height="40" rx="5" fill="#a9481f"/>
  <rect x="48" y="44" width="10" height="40" rx="5" fill="#a9481f"/>
  <circle cx="30" cy="24" r="20" fill="#e9f2fb"/>
  <circle cx="30" cy="26" r="13" fill="#2a3446"/>
  <circle cx="30" cy="28" r="9" fill="#d8b49a"/>
</symbol>

<symbol id="art-petri" viewBox="0 0 160 80">
  <ellipse cx="80" cy="46" rx="76" ry="28" fill="#0b101b" stroke="#9fb4cc" stroke-width="3"/>
  <ellipse cx="80" cy="42" rx="76" ry="28" fill="rgba(159,211,255,.08)" stroke="#e9f2fb" stroke-width="2"/>
  <ellipse cx="80" cy="44" rx="48" ry="15" fill="url(#g-blood)"/>
  <ellipse cx="66" cy="39" rx="14" ry="4" fill="#fff" opacity=".18"/>
</symbol>

<symbol id="art-wire" viewBox="0 0 220 60">
  <rect x="2" y="20" width="70" height="20" rx="8" fill="#3a4660" stroke="#5d6b80" stroke-width="2"/>
  <rect x="12" y="24" width="8" height="12" rx="2" fill="#5d6b80"/>
  <path d="M72 30 C 110 30, 140 34, 190 30" stroke="#d98a4a" stroke-width="5" fill="none"/>
  <path d="M150 32 C 165 31, 178 31, 190 30" stroke="#ff6a2a" stroke-width="5" fill="none"/>
  <circle cx="196" cy="30" r="22" fill="url(#g-tip)"/>
  <circle cx="192" cy="30" r="5" fill="#fff6d6"/>
</symbol>

<symbol id="art-reaction" viewBox="0 0 160 120">
  <path d="M80 10 L 92 40 L 124 18 L 108 50 L 152 52 L 112 66 L 140 98 L 98 80 L 90 116 L 74 82 L 34 106 L 54 70 L 8 62 L 50 48 L 26 16 L 66 38 Z" fill="#e5484d" opacity=".9"/>
  <circle cx="80" cy="60" r="20" fill="#ff8a8f"/>
  <circle cx="130" cy="30" r="5" fill="#e5484d"/>
  <circle cx="24" cy="92" r="6" fill="#e5484d"/>
  <circle cx="140" cy="88" r="4" fill="#e5484d"/>
</symbol>

<symbol id="art-agent" viewBox="0 0 120 120">
  <rect x="16" y="26" width="88" height="70" rx="18" fill="#1b2335" stroke="#9fd3ff" stroke-width="3"/>
  <line x1="60" y1="26" x2="60" y2="8" stroke="#9fd3ff" stroke-width="3"/>
  <circle cx="60" cy="8" r="5" fill="#9fd3ff"/>
  <circle cx="44" cy="56" r="8" fill="#9fd3ff"/>
  <circle cx="76" cy="56" r="8" fill="#9fd3ff"/>
  <rect x="40" y="74" width="40" height="6" rx="3" fill="#9fd3ff" opacity=".7"/>
  <rect x="6" y="48" width="10" height="24" rx="4" fill="#3a4660"/>
  <rect x="104" y="48" width="10" height="24" rx="4" fill="#3a4660"/>
</symbol>

<symbol id="art-snowfield" viewBox="0 0 1000 200">
  <path d="M0 60 C 150 30, 300 50, 450 40 C 600 30, 800 55, 1000 42 L 1000 200 L 0 200 Z" fill="url(#g-snow)" opacity=".9"/>
  <path d="M0 90 C 200 70, 380 92, 560 80 C 740 70, 880 88, 1000 82 L 1000 200 L 0 200 Z" fill="#c9d8ea" opacity=".35"/>
</symbol>

<symbol id="art-stars" viewBox="0 0 1000 300">
  <path d="M0 140 C 200 60, 420 160, 620 70 C 760 10, 900 60, 1000 30 L 1000 110 C 880 140, 760 100, 620 150 C 420 220, 200 130, 0 200 Z" fill="#3ddc97" opacity=".07"/>
  <path d="M0 170 C 240 110, 400 190, 640 110 C 780 70, 900 100, 1000 80" stroke="#3ddc97" stroke-width="2" opacity=".18" fill="none"/>
  <g fill="#e9f2fb">
    <circle cx="40" cy="30" r="1.6"/><circle cx="120" cy="80" r="1.2"/><circle cx="210" cy="24" r="1.8"/><circle cx="300" cy="64" r="1.1"/>
    <circle cx="380" cy="18" r="1.4"/><circle cx="460" cy="90" r="1.2"/><circle cx="530" cy="40" r="1.9"/><circle cx="610" cy="14" r="1.1"/>
    <circle cx="700" cy="70" r="1.5"/><circle cx="780" cy="28" r="1.2"/><circle cx="860" cy="110" r="1.6"/><circle cx="940" cy="46" r="1.3"/>
    <circle cx="80" cy="150" r="1.1"/><circle cx="260" cy="140" r="1.4"/><circle cx="560" cy="160" r="1.1"/><circle cx="900" cy="170" r="1.2"/>
  </g>
</symbol>
</svg>`;
