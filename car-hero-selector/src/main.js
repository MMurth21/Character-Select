import './style.css';

// ── Car data ──────────────────────────────────────────────────────────────────
const cars = [
  {
    id: 'bmw-e39-m5',
    name: 'BMW E39 M5',
    year: '2003',
    vibe: 'Sophisticated',
    color: '#003399',
    glowColor: '#2255cc',
    engine: 'S62 V8 · 5.0L',
    power: '394 hp / 292 kw',
    torque: '500 Nm / 369 lb-ft',
    weight: '1795 kg',
    drivetrain: 'RWD · 6-Speed Manual',
    topSpeed: '250 km/h (limited)',
    gradient: 'linear-gradient(150deg, #003399 0%, #001a66 55%, #000820 100%)',
    specsBg: 'images/bmw-m-leather.jpg',
  },
  {
    id: 'porsche-997',
    name: 'Porsche 911',
    year: '997 · 2006',
    vibe: 'Atmospheric Dominance',
    color: '#001B3A',
    glowColor: '#2244aa',
    engine: 'M97 Flat-6 · 3.6L',
    power: '325 hp / 242 kw',
    torque: '370 Nm / 273 lb-ft',
    weight: '1395 kg',
    drivetrain: 'RWD · 6-Speed Manual',
    topSpeed: '285 km/h',
    gradient: 'linear-gradient(150deg, #001B3A 0%, #000e22 55%, #000000 100%)',
    specsBg: 'images/porsche-carrera-leather.jpg',
    isPorsche: true,
  },
  {
    id: 'toyota-sienna',
    name: 'Toyota Sienna',
    year: '2011',
    vibe: 'Practical',
    color: '#708090',
    glowColor: '#9aaabb',
    engine: '2GR-FE V6 · 3.5L',
    power: '266 hp / 198 kw',
    torque: '332 Nm / 245 lb-ft',
    weight: '2068 kg',
    drivetrain: 'FWD · 6-Speed Auto',
    topSpeed: '185 km/h',
    gradient: 'linear-gradient(150deg, #708090 0%, #4a5560 55%, #262d34 100%)',
  },
  {
    id: 'kia-sportage-phev',
    name: 'Kia Sportage',
    year: 'PHEV · 2023',
    vibe: 'Eco-Tech',
    color: '#3C3C3C',
    glowColor: '#64c896',
    engine: 'G4FJ PHEV · 1.6T + Motor',
    power: '261 hp combined',
    torque: '350 Nm / 258 lb-ft',
    weight: '1895 kg',
    drivetrain: 'AWD · 6-Speed Auto',
    topSpeed: '191 km/h',
    gradient: 'linear-gradient(150deg, #3C3C3C 0%, #1f1f1f 55%, #0d0d0d 100%)',
  },
];

// ── SVG Car Silhouettes ───────────────────────────────────────────────────────
const silhouettes = {
  'bmw-e39-m5': `<img src="images/bmw-e39-photo.png" class="car-svg" style="object-fit:contain;" alt="BMW E39 M5">`,

  'bmw-e39-m5-svg': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">

      <!-- Ground shadow -->
      <ellipse cx="260" cy="186" rx="172" ry="7" fill="rgba(0,0,20,0.38)"/>

      <!-- ── BASE BODY SILHOUETTE — full visible car area in 3/4 front-left view ── -->
      <!-- Outline: front-bumper lower-left → sill → rear bumper → rear face → roofline → A-pillar -->
      <polygon points="62,181 188,162 440,128 440,108 410,58 178,78 64,143" fill="#1035B0"/>

      <!-- ── REAR SECTION ── -->
      <!-- Trunk lid top surface -->
      <polygon points="298,86 410,76 412,90 298,100" fill="#1035B0"/>
      <polygon points="300,88 409,78 409,82 300,92" fill="#1646C4"/>
      <!-- Rear window -->
      <polygon points="294,68 410,58 412,76 298,86" fill="#182840"/>
      <line x1="297" y1="79" x2="408" y2="69" stroke="rgba(70,130,180,0.22)" stroke-width="2"/>
      <!-- Rear face (narrow sliver — 3/4 view) -->
      <polygon points="412,90 440,108 440,128 412,108" fill="#08124A"/>
      <!-- Tail lights -->
      <polygon points="413,91 438,107 438,121 413,107" fill="#991010"/>
      <rect x="414" y="92" width="11" height="10" fill="#DD1E1E"/>
      <rect x="426" y="92" width="9"  height="10" fill="#882020"/>
      <rect x="413" y="104" width="23" height="5" fill="#CC1818"/>

      <!-- ── ROOF ── -->
      <polygon points="178,78 310,68 410,58 294,68" fill="#0C2898"/>

      <!-- ── WINDSHIELD ── -->
      <polygon points="172,108 306,90 310,68 178,78" fill="#182840"/>
      <!-- Glare band -->
      <polygon points="174,98 304,82 304,87 174,103" fill="rgba(70,130,190,0.14)"/>
      <!-- Dash shadow at base -->
      <polygon points="172,108 306,90 308,96 174,114" fill="#0B1018"/>
      <!-- A-pillars -->
      <polygon points="304,66 312,68 308,92 300,90" fill="#08112A"/>
      <polygon points="170,76 178,78 172,108 164,106" fill="#08112A"/>

      <!-- ── HOOD (lighter — top surface catching light) ── -->
      <polygon points="64,143 192,126 306,90 172,108" fill="#1848CC"/>
      <!-- Hood front edge shadow -->
      <polygon points="64,143 192,126 192,131 65,148" fill="#0E2896"/>
      <!-- Hood rear shadow near windshield -->
      <polygon points="172,108 306,90 306,95 172,113" fill="#0E2896"/>

      <!-- BMW Roundel — hood centre -->
      <circle cx="158" cy="120" r="8" fill="white"/>
      <path d="M158,112.2 L158,120 L150.2,120 Z" fill="#111118"/>
      <path d="M158,120 L165.8,120 L158,127.8 Z" fill="#1848CC"/>
      <path d="M150.2,120 L158,120 L158,127.8 Z" fill="#111118"/>
      <path d="M158,112.2 L165.8,120 L158,120 Z" fill="#1848CC"/>
      <circle cx="158" cy="120" r="8" fill="none" stroke="#B0BCC8" stroke-width="1.5"/>

      <!-- ── BODY CHARACTER LINE + LOWER ROCKER ── -->
      <polygon points="76,154 196,140 338,127 434,109 434,114 337,132 195,145 75,159" fill="#1848CC"/>
      <polygon points="79,175 198,161 348,147 438,123 438,131 347,154 197,168 78,181" fill="#0A1E78"/>

      <!-- ── FRONT FACE (front bumper panel, slightly cooler shade) ── -->
      <polygon points="62,181 188,162 192,126 64,143" fill="#0D2A9C"/>
      <!-- Lower bumper lip -->
      <polygon points="62,181 188,162 188,169 62,187" fill="#07103E"/>
      <!-- Lower centre intake -->
      <polygon points="74,168 168,153 168,163 74,178" fill="#060810"/>
      <!-- Intake end-caps -->
      <polygon points="168,153 188,163 188,169 168,163" fill="#060810"/>
      <polygon points="62,162 74,158 74,168 62,173" fill="#060810"/>

      <!-- ── BMW TWIN KIDNEY GRILLE ── -->
      <!-- Chrome surround -->
      <polygon points="83,148 83,140 140,134 140,150" fill="none" stroke="#9AB0C8" stroke-width="1.5"/>
      <!-- Centre bridge bar -->
      <line x1="111" y1="135" x2="111" y2="151" stroke="#9AB0C8" stroke-width="2"/>
      <!-- Left kidney opening + vertical slats -->
      <polygon points="86,148 86,141 110,136 110,151" fill="#060810"/>
      <line x1="91"  y1="141" x2="91"  y2="149" stroke="#384050" stroke-width="1.5"/>
      <line x1="96"  y1="140" x2="96"  y2="148" stroke="#384050" stroke-width="1.5"/>
      <line x1="101" y1="139" x2="101" y2="147" stroke="#384050" stroke-width="1.5"/>
      <line x1="106" y1="138" x2="106" y2="146" stroke="#384050" stroke-width="1.5"/>
      <!-- Right kidney opening + slats -->
      <polygon points="113,150 113,144 138,139 138,151" fill="#060810"/>
      <line x1="118" y1="144" x2="118" y2="151" stroke="#384050" stroke-width="1.5"/>
      <line x1="123" y1="143" x2="123" y2="150" stroke="#384050" stroke-width="1.5"/>
      <line x1="128" y1="142" x2="128" y2="149" stroke="#384050" stroke-width="1.5"/>
      <line x1="133" y1="141" x2="133" y2="148" stroke="#384050" stroke-width="1.5"/>

      <!-- ── HEADLIGHTS ── -->
      <!-- Housing surround -->
      <polygon points="64,140 90,136 91,153 65,157" fill="#0C1A2E"/>
      <!-- Main lens (perspective-skewed round unit) -->
      <ellipse cx="77" cy="147" rx="10" ry="6.5" fill="#D0E8F8" transform="skewX(-7)"/>
      <circle   cx="75" cy="147" r="3.8"           fill="rgba(255,255,235,0.95)"/>
      <ellipse cx="77" cy="147" rx="10" ry="6.5" fill="none" stroke="#B0C8E0" stroke-width="1.3" transform="skewX(-7)"/>
      <!-- Chrome outer frame -->
      <polygon points="63,139 90,135 92,154 65,158" fill="none" stroke="#8898AA" stroke-width="1"/>
      <!-- Amber turn signal -->
      <polygon points="64,157 90,153 91,161 65,166" fill="#D87818"/>
      <rect x="66" y="158" width="22" height="3" fill="#F09030"/>
      <!-- Fog light -->
      <rect x="65" y="165" width="10" height="7" rx="1" fill="#D0E0E8"/>

      <!-- Front bumper BMW badge -->
      <circle cx="124" cy="154" r="5" fill="white"/>
      <path d="M124,149 L124,154 L119,154 Z" fill="#111118"/>
      <path d="M124,154 L129,154 L124,159 Z" fill="#1035B0"/>
      <path d="M119,154 L124,154 L124,159 Z" fill="#111118"/>
      <path d="M124,149 L129,154 L124,154 Z" fill="#1035B0"/>
      <circle cx="124" cy="154" r="5" fill="none" stroke="#B0B8C8" stroke-width="1"/>

      <!-- ── SIDE WINDOWS ── -->
      <!-- Front door window -->
      <polygon points="185,92 250,83 252,114 186,124" fill="#182840"/>
      <polygon points="187,93 249,84 249,89 187,98"  fill="rgba(70,130,190,0.18)"/>
      <!-- B-pillar -->
      <polygon points="250,81 259,79 257,116 248,118" fill="#05081F"/>
      <!-- Rear door window -->
      <polygon points="261,82 328,77 330,110 262,116" fill="#182840"/>
      <polygon points="263,83 327,78 327,83 263,88"  fill="rgba(70,130,190,0.15)"/>
      <!-- C-pillar -->
      <polygon points="328,75 337,73 335,111 326,113" fill="#05081F"/>
      <!-- Rear quarter glass -->
      <polygon points="339,90 357,88 352,77 334,79" fill="#101C2C"/>
      <!-- Window top frame line -->
      <line x1="185" y1="91" x2="252" y2="81" stroke="#05081F" stroke-width="1.5"/>
      <line x1="261" y1="80" x2="330" y2="75" stroke="#05081F" stroke-width="1.5"/>

      <!-- ── DOOR HANDLES ── -->
      <rect x="214" y="130" width="20" height="4" rx="1" fill="#8898B2"/>
      <rect x="214" y="130" width="20" height="1"  fill="#B0C2D8"/>
      <rect x="290" y="123" width="19" height="4" rx="1" fill="#8898B2"/>
      <rect x="290" y="123" width="19" height="1"  fill="#B0C2D8"/>

      <!-- ── SIDE MIRROR ── -->
      <polygon points="180,99 196,96 198,108 182,111" fill="#0D2A9C"/>
      <polygon points="181,101 195,98 195,105 181,108" fill="#060718"/>

      <!-- ── WHEEL ARCH SHADOWS ── -->
      <path d="M90,180 Q130,155 170,180" fill="rgba(0,0,18,0.52)"/>
      <path d="M332,157 Q360,133 390,157" fill="rgba(0,0,18,0.42)"/>

      <!-- ── REAR WHEEL ── -->
      <circle cx="360" cy="153" r="22" fill="#161414"/>
      <circle cx="360" cy="153" r="18" fill="#1C1A1A"/>
      <circle cx="360" cy="153" r="16" fill="#8898B2"/>
      <!-- 5-spoke M-Sport (thin spoke to wide outer) -->
      <g stroke="#B0C4D8" stroke-width="2.5" stroke-linecap="round">
        <line x1="360" y1="153" x2="360" y2="138"/>
        <line x1="360" y1="153" x2="374" y2="145"/>
        <line x1="360" y1="153" x2="371" y2="162"/>
        <line x1="360" y1="153" x2="349" y2="163"/>
        <line x1="360" y1="153" x2="347" y2="144"/>
      </g>
      <g stroke="#8898B2" stroke-width="4.5" stroke-linecap="round">
        <line x1="360" y1="146" x2="360" y2="139"/>
        <line x1="368" y1="149" x2="373" y2="145"/>
        <line x1="367" y1="158" x2="370" y2="162"/>
        <line x1="352" y1="160" x2="349" y2="163"/>
        <line x1="348" y1="148" x2="347" y2="144"/>
      </g>
      <circle cx="360" cy="153" r="10" fill="none" stroke="#4E5668" stroke-width="1.5"/>
      <circle cx="360" cy="153" r="5"  fill="#5A6270"/>
      <circle cx="360" cy="153" r="3"  fill="#3E4250"/>
      <path d="M350,141 Q364,137 374,144" fill="none" stroke="rgba(200,224,248,0.35)" stroke-width="1.5"/>

      <!-- ── FRONT WHEEL ── -->
      <circle cx="130" cy="171" r="24" fill="#161414"/>
      <circle cx="130" cy="171" r="20" fill="#1C1A1A"/>
      <circle cx="130" cy="171" r="18" fill="#8898B2"/>
      <!-- 5-spoke M-Sport -->
      <g stroke="#B0C4D8" stroke-width="3" stroke-linecap="round">
        <line x1="130" y1="171" x2="130" y2="154"/>
        <line x1="130" y1="171" x2="146" y2="162"/>
        <line x1="130" y1="171" x2="141" y2="180"/>
        <line x1="130" y1="171" x2="119" y2="181"/>
        <line x1="130" y1="171" x2="114" y2="161"/>
      </g>
      <g stroke="#8898B2" stroke-width="5.5" stroke-linecap="round">
        <line x1="130" y1="163" x2="130" y2="155"/>
        <line x1="139" y1="167" x2="145" y2="162"/>
        <line x1="138" y1="175" x2="141" y2="180"/>
        <line x1="122" y1="178" x2="119" y2="181"/>
        <line x1="121" y1="166" x2="115" y2="161"/>
      </g>
      <circle cx="130" cy="171" r="12" fill="none" stroke="#4E5668" stroke-width="2"/>
      <circle cx="130" cy="171" r="6"  fill="#5A6270"/>
      <circle cx="130" cy="171" r="3.5" fill="#3E4250"/>
      <path d="M118,158 Q132,153 145,162" fill="none" stroke="rgba(200,224,248,0.4)" stroke-width="2"/>

    </svg>`,

  'porsche-997': `<img src="images/porsche-997-photo.png" class="car-svg" style="object-fit:contain;" alt="Porsche 997">`,

  'toyota-sienna': `<img src="images/toyota-sienna-photo.png" class="car-svg" style="object-fit:contain;" alt="Toyota Sienna">`,

  'kia-sportage-phev': `<img src="images/kia-sportage-photo.png" class="car-svg" style="object-fit:contain;" alt="Kia Sportage PHEV">`,
};

// ── Manufacturer logos — shown in specs panel, below stats ────────────────────
// Full-colour, centred, enlarged; each spins slowly over a car-tinted shadow
const brandLogos = {

  // BMW Roundel — full colour (chrome ring, black band, blue/white quadrants)
  'bmw-e39-m5': `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="brand-svg">
      <defs>
        <radialGradient id="b-chr" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stop-color="#dce6f0"/>
          <stop offset="30%" stop-color="#9aaabb"/>
          <stop offset="65%" stop-color="#c0ccd8"/>
          <stop offset="100%" stop-color="#526070"/>
        </radialGradient>
        <radialGradient id="b-blk" cx="32%" cy="28%" r="72%">
          <stop offset="0%" stop-color="#303030"/>
          <stop offset="100%" stop-color="#060606"/>
        </radialGradient>
        <linearGradient id="b-blu" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8ec4e0"/>
          <stop offset="50%" stop-color="#4c94c8"/>
          <stop offset="100%" stop-color="#2870a4"/>
        </linearGradient>
        <linearGradient id="b-wht" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#ccd8e4"/>
        </linearGradient>
        <clipPath id="b-ic"><circle cx="100" cy="100" r="70"/></clipPath>
        <path id="b-tp" d="M 18,100 A 82,82 0 0,1 182,100"/>
      </defs>
      <circle cx="100" cy="100" r="97" fill="url(#b-chr)"/>
      <circle cx="100" cy="100" r="87" fill="url(#b-blk)"/>
      <g clip-path="url(#b-ic)">
        <rect x="30" y="30" width="70" height="70" fill="url(#b-blu)"/>
        <rect x="100" y="30" width="70" height="70" fill="url(#b-wht)"/>
        <rect x="30" y="100" width="70" height="70" fill="url(#b-wht)"/>
        <rect x="100" y="100" width="70" height="70" fill="url(#b-blu)"/>
      </g>
      <line x1="100" y1="30" x2="100" y2="170" stroke="#0f0f0f" stroke-width="2.5"/>
      <line x1="30" y1="100" x2="170" y2="100" stroke="#0f0f0f" stroke-width="2.5"/>
      <circle cx="100" cy="100" r="70" fill="none" stroke="#0d0d0d" stroke-width="5"/>
      <circle cx="100" cy="100" r="67" fill="none" stroke="rgba(200,215,230,0.45)" stroke-width="1.5"/>
      <circle cx="100" cy="100" r="87" fill="none" stroke="rgba(220,232,244,0.18)" stroke-width="1.5"/>
      <text font-family="'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="13" fill="white" letter-spacing="6">
        <textPath href="#b-tp" startOffset="37%">BMW</textPath>
      </text>
    </svg>`,

  // Porsche Crest — full colour (gold/black/red quadrants, Stuttgart horse)
  'porsche-997': `
    <svg viewBox="0 0 180 218" xmlns="http://www.w3.org/2000/svg" class="brand-svg">
      <defs>
        <linearGradient id="p-gld" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d4a84a"/>
          <stop offset="50%" stop-color="#b88828"/>
          <stop offset="100%" stop-color="#c89838"/>
        </linearGradient>
        <linearGradient id="p-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c41818"/>
          <stop offset="100%" stop-color="#8a0f0f"/>
        </linearGradient>
        <clipPath id="p-shp">
          <path d="M 90,214 L 5,154 L 5,10 L 175,10 L 175,154 Z"/>
        </clipPath>
      </defs>
      <g clip-path="url(#p-shp)">
        <rect width="180" height="218" fill="#c89030"/>
        <rect x="90" y="34" width="90" height="218" fill="#100c00"/>
        <rect x="0" y="123" width="90" height="218" fill="#100c00"/>
        <rect x="0" y="0" width="180" height="34" fill="#b07820"/>
        <!-- Top-right red panels -->
        <rect x="90" y="46" width="90" height="19" fill="url(#p-red)"/>
        <rect x="90" y="80" width="90" height="19" fill="url(#p-red)"/>
        <!-- Bottom-left red panels -->
        <rect x="0" y="135" width="90" height="19" fill="url(#p-red)"/>
        <rect x="0" y="169" width="90" height="19" fill="url(#p-red)"/>
        <!-- Top-left: black stripes on gold -->
        <rect x="0" y="47" width="90" height="10" fill="#100c00"/>
        <rect x="0" y="72" width="90" height="10" fill="#100c00"/>
        <rect x="0" y="97" width="90" height="10" fill="#100c00"/>
        <!-- Bottom-right: black stripes on gold -->
        <rect x="90" y="136" width="90" height="10" fill="#100c00"/>
        <rect x="90" y="161" width="90" height="10" fill="#100c00"/>
        <rect x="90" y="186" width="90" height="10" fill="#100c00"/>
        <!-- Quadrant dividers -->
        <line x1="90" y1="34" x2="90" y2="218" stroke="#8a6010" stroke-width="2.5"/>
        <line x1="0" y1="123" x2="180" y2="123" stroke="#8a6010" stroke-width="2.5"/>
        <!-- Stuttgart mini-shield -->
        <path d="M 90,172 L 63,154 L 63,88 L 117,88 L 117,154 Z" fill="#c89030" stroke="#8a6010" stroke-width="1.5"/>
        <rect x="63" y="88" width="54" height="14" fill="#a87018"/>
        <text x="90" y="99" text-anchor="middle" font-family="Arial,sans-serif" font-size="7" font-weight="bold" fill="#0a0800" letter-spacing="0.2">STUTTGART</text>
        <!-- Horse (stylised) -->
        <ellipse cx="90" cy="126" rx="9" ry="13" fill="#0a0800" transform="rotate(-8,90,126)"/>
        <ellipse cx="96" cy="115" rx="7" ry="8" fill="#0a0800" transform="rotate(18,96,115)"/>
        <line x1="84" y1="138" x2="78" y2="152" stroke="#0a0800" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="90" y1="139" x2="88" y2="154" stroke="#0a0800" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="94" y1="138" x2="101" y2="150" stroke="#0a0800" stroke-width="3.5" stroke-linecap="round"/>
        <!-- PORSCHE header text -->
        <text x="90" y="24" text-anchor="middle"
          font-family="'Barlow Condensed',Arial,sans-serif" font-weight="900" font-size="15"
          fill="#0d0a00" letter-spacing="3.5">PORSCHE</text>
      </g>
      <path d="M 90,214 L 5,154 L 5,10 L 175,10 L 175,154 Z"
        fill="none" stroke="url(#p-gld)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M 90,210 L 9,152 L 9,14 L 171,14 L 171,152 Z"
        fill="none" stroke="rgba(240,200,100,0.28)" stroke-width="1" stroke-linejoin="round"/>
    </svg>`,

  // Toyota Triple Oval — chrome gradient rings
  'toyota-sienna': `
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" class="brand-svg">
      <defs>
        <linearGradient id="t-chr" x1="15%" y1="5%" x2="85%" y2="95%">
          <stop offset="0%" stop-color="#eef2f6"/>
          <stop offset="20%" stop-color="#c0ccd8"/>
          <stop offset="50%" stop-color="#8898a8"/>
          <stop offset="75%" stop-color="#ccd4dc"/>
          <stop offset="100%" stop-color="#606878"/>
        </linearGradient>
        <linearGradient id="t-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#141a20"/>
          <stop offset="100%" stop-color="#05080c"/>
        </linearGradient>
        <linearGradient id="t-chr2" x1="80%" y1="10%" x2="20%" y2="90%">
          <stop offset="0%" stop-color="#e0e8f0"/>
          <stop offset="35%" stop-color="#a8b4c0"/>
          <stop offset="65%" stop-color="#90a0b0"/>
          <stop offset="100%" stop-color="#d0d8e0"/>
        </linearGradient>
      </defs>
      <!-- Outer ring -->
      <ellipse cx="160" cy="100" rx="156" ry="94" fill="url(#t-chr)"/>
      <ellipse cx="160" cy="100" rx="140" ry="78" fill="url(#t-bg)"/>
      <!-- Horizontal cross-oval (T crossbar) -->
      <ellipse cx="160" cy="100" rx="100" ry="50" fill="url(#t-chr2)"/>
      <ellipse cx="160" cy="100" rx="84" ry="34" fill="url(#t-bg)"/>
      <!-- Vertical oval (T stem) -->
      <ellipse cx="160" cy="100" rx="22" ry="86" fill="url(#t-chr)"/>
      <ellipse cx="160" cy="100" rx="10" ry="72" fill="url(#t-bg)"/>
    </svg>`,

  // Kia 2021 Angular Wordmark — geometric letterforms in white
  'kia-sportage-phev': `
    <svg viewBox="0 0 310 100" xmlns="http://www.w3.org/2000/svg" class="brand-svg">
      <g fill="rgba(255,255,255,0.92)">
        <!-- K: left bar -->
        <rect x="10" y="12" width="22" height="76"/>
        <!-- K: upper arm -->
        <polygon points="30,44 30,50 100,12 82,12"/>
        <!-- K: lower arm -->
        <polygon points="30,52 30,58 82,88 100,88"/>
        <!-- I: vertical bar -->
        <rect x="112" y="12" width="22" height="76" rx="1"/>
        <!-- A: left diagonal -->
        <polygon points="150,88 170,88 216,12 196,12"/>
        <!-- A: right diagonal -->
        <polygon points="196,12 216,12 262,88 242,88"/>
        <!-- A: crossbar -->
        <polygon points="176,56 238,56 234,68 172,68"/>
      </g>
    </svg>`,
};

// ── Audio Controller — uses real engine sound files ────────────────────────────
class AudioController {
  constructor() {
    this._current = null;
    this._pool = {};   // preloaded Audio objects
    const base = import.meta.env.BASE_URL;
    this._audioMap = {
      'bmw-e39-m5':        `${base}audio/bmw-e39-m5.mp3`,
      'porsche-997':       `${base}audio/porsche-997.mp3`,
      'toyota-sienna':     `${base}audio/toyota-sienna.mp3`,
      'kia-sportage-phev': `${base}audio/kia-sportage-phev.mp3`,
    };
    // Gear shift sound — "Gear Shift Into Drive" by Mike Koenig, SoundBible.com (CC BY 3.0)
    this._gearShift = new Audio('https://soundbible.com/mp3/Gear%20Shift%20Into%20Drive-SoundBible.com-2101462767.mp3');
    this._gearShift.volume = 0.65;
    // Ignition — "ignition turn car start" by greatsoundstube, Freesound.org (CC0)
    this._ignition = new Audio('https://cdn.freesound.org/previews/629/629313_13885154-hq.mp3');
    this._ignition.volume = 0.70;
    // EV startup — "Electric motor engine start stop" by kentspublicdomain, Freesound.org (CC0)
    this._evStartup = new Audio('https://cdn.freesound.org/previews/476/476943_5583936-hq.mp3');
    this._evStartup.volume = 0.70;
  }

  // Preload all files silently in the background
  preload() {
    Object.entries(this._audioMap).forEach(([id, src]) => {
      const a = new Audio();
      a.preload = 'auto';
      a.volume = 0;
      a.src = src;
      this._pool[id] = a;
    });
    this._gearShift.load();
    this._ignition.load();
    this._evStartup.load();
  }

  playGearShift() {
    this._gearShift.currentTime = 0;
    this._gearShift.play().catch(() => {});
  }

  playStartup(carId) {
    const sfx = carId === 'kia-sportage-phev' ? this._evStartup : this._ignition;
    sfx.currentTime = 0;
    sfx.play().catch(() => {});
  }

  play(carId) {
    // Stop whatever is playing
    if (this._current) {
      this._current.pause();
      this._current.currentTime = 0;
    }

    const audio = this._pool[carId] || new Audio(this._audioMap[carId]);
    audio.volume = 0.72;
    audio.currentTime = 0;
    this._current = audio;

    audio.play().catch(() => {
      // Browser may block if context isn't ready — silently ignore
    });
  }

  stop() {
    if (this._current) {
      this._current.pause();
      this._current.currentTime = 0;
      this._current = null;
    }
  }
}

// ── State ─────────────────────────────────────────────────────────────────────
let currentIndex = 0;
let specsOpen = false;
let isAnimating = false;

let dragStartX = 0;
let dragCurrentX = 0;
let isDragging = false;
let dragMoved = false;
const DRAG_THRESHOLD = 60;

// ── DOM ───────────────────────────────────────────────────────────────────────
const track      = document.getElementById('track');
const dotsEl     = document.getElementById('dots');
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');

// ── Helpers ───────────────────────────────────────────────────────────────────
const audio = new AudioController();

function hexToRgb(hex) {
  return [parseInt(hex.slice(1,3),16), parseInt(hex.slice(3,5),16), parseInt(hex.slice(5,7),16)].join(',');
}

function darkenColor(hex, factor = 0.5) {
  const [r, g, b] = hexToRgb(hex).split(',').map(Number);
  return `rgba(${Math.round(r * factor)},${Math.round(g * factor)},${Math.round(b * factor)},0.9)`;
}

function applyCardPosition(card, offset, dragPx = 0) {
  const W = window.innerWidth;
  const tx = offset * W * 0.88 + dragPx;
  const absOff = Math.abs(offset);
  const scale   = absOff === 0 ? 1 : absOff === 1 ? 0.88 : 0.78;
  const opacity = absOff === 0 ? 1 : absOff === 1 ? 0.55 : 0;
  const blur    = absOff > 1 ? 0 : 0;

  card.style.transform  = `translate(calc(-50% + ${tx}px), -50%) scale(${scale})`;
  card.style.opacity    = opacity;
  card.style.filter     = blur > 0 ? `blur(${blur}px)` : '';
  card.style.pointerEvents = offset === 0 ? 'auto' : 'none';
  card.style.zIndex     = 10 - absOff;
}

function updateBodyBg(index) {
  document.body.style.background = `rgba(${hexToRgb(cars[index].color)}, 0.15)`;
}

function updateDots(index) {
  dotsEl.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

function closeSpecs() {
  if (!specsOpen) return;
  cards[currentIndex].classList.remove('specs-open');
  specsOpen = false;
  audio.stop();
}

function goTo(newIndex) {
  if (isAnimating) return;
  const target = ((newIndex % cars.length) + cars.length) % cars.length;
  if (target === currentIndex) return;

  closeSpecs();
  audio.playGearShift();
  currentIndex = target;
  isAnimating = true;

  cards.forEach((card, i) => {
    card.classList.toggle('active', i === currentIndex);
    applyCardPosition(card, i - currentIndex);
  });

  updateBodyBg(currentIndex);
  updateDots(currentIndex);

  // Vibe pulse on the newly active card
  const car = cars[currentIndex];
  const vibeEl = cards[currentIndex].querySelector('.car-vibe');
  vibeEl.classList.remove('pulse', 'pulse-porsche');
  void vibeEl.offsetWidth;
  vibeEl.classList.add(car.isPorsche ? 'pulse-porsche' : 'pulse');

  setTimeout(() => { isAnimating = false; }, 500);
}

// ── Build cards ───────────────────────────────────────────────────────────────
const specDefs = [
  ['ENGINE',   'engine'],
  ['POWER',    'power'],
  ['TORQUE',   'torque'],
  ['WEIGHT',   'weight'],
  ['DRIVE',    'drivetrain'],
  ['V-MAX',    'topSpeed'],
];

const cards = cars.map((car, i) => {
  const card = document.createElement('div');
  card.className = 'rolo-card' + (i === 0 ? ' active' : '');
  card.dataset.index = i;

  const specItems = specDefs.map(([label, key]) => `
    <div class="spec-item">
      <span class="spec-key">${label}</span>
      <span class="spec-val">${car[key]}</span>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="card-bg" style="background:${car.gradient};"></div>
    <div class="card-accent-bar" style="background:${car.color};"></div>

    <!-- Front face: silhouette + identity -->
    <div class="card-front">
      <div class="car-meta">
        <div class="car-number">${String(i+1).padStart(2,'0')} / ${String(cars.length).padStart(2,'0')}</div>
        <h2 class="car-name">${car.name}</h2>
        <div class="car-year">${car.year}</div>
      </div>
      <div class="car-silhouette-wrap">
        ${silhouettes[car.id]}
      </div>
      <div class="car-vibe-row">
        <div class="car-vibe">
          <span class="vibe-dot" style="background:${car.glowColor}; box-shadow:0 0 8px ${car.glowColor};"></span>
          ${car.vibe}
        </div>
        <span class="tap-hint">SPECS</span>
      </div>
    </div>

    <!-- Specs panel: slides up on tap — brand logo lives here, below stats -->
    <div class="card-specs-panel" style="${car.specsBg ? `background: linear-gradient(rgba(0,0,0,0.62),rgba(0,0,0,0.62)), url('${car.specsBg}') center/cover no-repeat` : `background:${car.gradient}`};">
      <div class="specs-header">
        <div class="specs-car-name">${car.name}</div>
        <div class="specs-close">CLOSE</div>
      </div>
      <div class="specs-grid">
        ${specItems}
      </div>
      <!-- Manufacturer logo — below stats -->
      <div class="specs-brand-logo" style="--logo-shadow-color: ${darkenColor(car.color)}">
        ${brandLogos[car.id]}
      </div>
    </div>
  `;

  // Initial position
  applyCardPosition(card, i);

  // ── Pointer events (swipe + tap) ──────────────────────────────────────
  card.addEventListener('pointerdown', e => {
    if (e.target.closest('.specs-close')) return;
    dragStartX = e.clientX;
    dragCurrentX = e.clientX;
    isDragging = true;
    dragMoved = false;
    card.setPointerCapture(e.pointerId);
    card.classList.add('dragging');
  });

  card.addEventListener('pointermove', e => {
    if (!isDragging) return;
    dragCurrentX = e.clientX;
    const dx = dragCurrentX - dragStartX;
    if (Math.abs(dx) > 5) dragMoved = true;

    if (parseInt(card.dataset.index) !== currentIndex) return;

    const atStart = currentIndex === 0 && dx > 0;
    const atEnd   = currentIndex === cars.length - 1 && dx < 0;
    const resist  = (atStart || atEnd) ? 0.3 : 1;

    cards.forEach((c, ci) => applyCardPosition(c, ci - currentIndex, dx * resist));
  });

  card.addEventListener('pointerup', e => {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');

    const dx = dragCurrentX - dragStartX;

    if (!dragMoved || Math.abs(dx) < 8) {
      handleTap(card, e);
      return;
    }

    if (Math.abs(dx) < DRAG_THRESHOLD) {
      // Snap back
      cards.forEach((c, ci) => applyCardPosition(c, ci - currentIndex));
      return;
    }

    if (dx < 0 && currentIndex < cars.length - 1) goTo(currentIndex + 1);
    else if (dx > 0 && currentIndex > 0)          goTo(currentIndex - 1);
    else cards.forEach((c, ci) => applyCardPosition(c, ci - currentIndex));
  });

  track.appendChild(card);
  return card;
});

function handleTap(card, e) {
  const idx = parseInt(card.dataset.index);
  if (idx !== currentIndex) return;

  if (e.target.closest('.specs-close')) {
    closeSpecs();
    return;
  }

  // Toggle specs + play audio on open
  specsOpen = !specsOpen;
  card.classList.toggle('specs-open', specsOpen);

  if (specsOpen) {
    audio.playStartup(cars[currentIndex].id);
    audio.play(cars[currentIndex].id);
  } else {
    audio.stop();
  }
}

// Close-button delegation
track.addEventListener('click', e => {
  if (e.target.closest('.specs-close')) {
    closeSpecs();
    audio.stop();
  }
});

// ── Dots ──────────────────────────────────────────────────────────────────────
cars.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(dot);
});

// ── Arrow + keyboard nav ──────────────────────────────────────────────────────
prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  if (e.key === 'ArrowLeft')  goTo(currentIndex - 1);
  if (e.key === 'Escape')     { closeSpecs(); audio.stop(); }
});

// ── Init ──────────────────────────────────────────────────────────────────────
updateBodyBg(0);
audio.preload();

// Swipe hint
const hint = document.createElement('div');
hint.className = 'swipe-hint';
hint.innerHTML = `<div class="hint-arrow"></div><span>SWIPE</span><div class="hint-arrow" style="transform:rotate(180deg)"></div>`;
document.getElementById('stage').appendChild(hint);

// Boot vibe pulse
setTimeout(() => {
  cards[0].querySelector('.car-vibe').classList.add('pulse');
}, 600);
