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
  'bmw-e39-m5': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="g-bmw" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.20)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
        </linearGradient>
      </defs>
      <path d="M60,140 L60,115 Q80,95 120,88 Q160,60 200,52 Q260,45 310,52 Q350,58 390,88 L420,115 L420,140 Z" fill="url(#g-bmw)" stroke="rgba(255,255,255,0.55)" stroke-width="1.5"/>
      <path d="M140,88 Q175,55 220,46 Q270,40 310,52 Q345,60 380,88" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2"/>
      <path d="M150,88 Q185,60 225,50 Q265,45 300,58 L320,88 Z" fill="rgba(150,200,255,0.13)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <path d="M320,88 L360,88 Q378,100 384,115 L320,115 Z" fill="rgba(150,200,255,0.10)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
      <path d="M60,115 Q90,108 120,105 L150,88" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M380,88 L420,115" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M65,125 Q200,118 390,122" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
      <line x1="250" y1="88" x2="250" y2="140" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <ellipse cx="130" cy="140" rx="40" ry="10" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <ellipse cx="355" cy="140" rx="42" ry="10" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <circle cx="130" cy="145" r="32" fill="rgba(8,8,12,0.75)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <circle cx="130" cy="145" r="18" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      <circle cx="130" cy="145" r="6" fill="rgba(255,255,255,0.5)"/>
      <circle cx="355" cy="145" r="34" fill="rgba(8,8,12,0.75)" stroke="rgba(255,255,255,0.5)" stroke-width="2"/>
      <circle cx="355" cy="145" r="20" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      <circle cx="355" cy="145" r="6" fill="rgba(255,255,255,0.5)"/>
      <rect x="72" y="110" width="12" height="14" rx="6" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="1.5"/>
      <rect x="88" y="110" width="12" height="14" rx="6" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="1.5"/>
      <ellipse cx="78" cy="105" rx="14" ry="8" fill="rgba(220,240,255,0.18)" stroke="rgba(255,255,255,0.6)" stroke-width="1.5"/>
      <rect x="406" y="105" width="14" height="14" rx="2" fill="rgba(255,50,50,0.3)" stroke="rgba(255,100,100,0.7)" stroke-width="1.5"/>
    </svg>`,

  'porsche-997': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="g-997" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.24)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
        </linearGradient>
      </defs>
      <path d="M75,138 L75,108 Q100,88 140,76 Q185,50 230,42 Q275,36 315,44 Q355,52 390,80 Q415,95 420,120 L420,138 Z" fill="url(#g-997)" stroke="rgba(255,255,255,0.60)" stroke-width="1.5"/>
      <path d="M155,76 Q195,46 240,38 Q280,33 315,44 Q352,54 385,80 Q405,98 415,120" fill="none" stroke="rgba(255,255,255,0.68)" stroke-width="2"/>
      <path d="M158,76 Q198,50 242,42 Q278,37 308,48 L335,76 Z" fill="rgba(150,200,255,0.13)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <path d="M335,76 Q370,82 392,105 L340,120 Z" fill="rgba(150,200,255,0.10)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
      <path d="M75,108 Q105,100 140,90 L158,76" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M78,120 Q200,112 390,118" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
      <path d="M390,80 Q418,88 420,120" fill="none" stroke="rgba(255,255,255,0.38)" stroke-width="2"/>
      <ellipse cx="148" cy="138" rx="42" ry="9" fill="none" stroke="rgba(255,255,255,0.38)" stroke-width="1.5"/>
      <ellipse cx="362" cy="138" rx="46" ry="10" fill="none" stroke="rgba(255,255,255,0.42)" stroke-width="1.5"/>
      <circle cx="148" cy="143" r="33" fill="rgba(8,8,12,0.78)" stroke="rgba(255,255,255,0.58)" stroke-width="2"/>
      <circle cx="148" cy="143" r="18" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      <circle cx="148" cy="143" r="5" fill="rgba(255,255,255,0.65)"/>
      <circle cx="362" cy="143" r="37" fill="rgba(8,8,12,0.78)" stroke="rgba(255,255,255,0.58)" stroke-width="2"/>
      <circle cx="362" cy="143" r="21" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="1.5"/>
      <circle cx="362" cy="143" r="6" fill="rgba(255,255,255,0.65)"/>
      <path d="M78,96 Q92,90 110,92" fill="none" stroke="rgba(220,240,255,0.85)" stroke-width="3"/>
      <path d="M400,95 L418,108" stroke="rgba(255,80,80,0.85)" stroke-width="4.5"/>
    </svg>`,

  'toyota-sienna': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="g-sienna" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.14)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.04)"/>
        </linearGradient>
      </defs>
      <path d="M52,145 L52,108 Q65,90 95,80 Q125,62 165,58 L165,52 Q200,44 320,44 Q360,44 400,65 Q428,82 434,108 L434,145 Z" fill="url(#g-sienna)" stroke="rgba(255,255,255,0.45)" stroke-width="1.5"/>
      <rect x="165" y="44" width="155" height="14" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.40)" stroke-width="1"/>
      <path d="M165,58 Q168,48 175,44 L230,44 L230,58 Z" fill="rgba(150,200,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <path d="M320,44 L370,44 Q375,48 380,58 L320,58 Z" fill="rgba(150,200,255,0.10)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
      <rect x="230" y="58" width="90" height="50" rx="4" fill="rgba(150,200,255,0.08)" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
      <rect x="175" y="58" width="55" height="50" rx="4" fill="rgba(150,200,255,0.08)" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
      <path d="M52,108 Q70,100 95,88 L165,80" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <rect x="52" y="140" width="382" height="8" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <ellipse cx="128" cy="145" rx="44" ry="10" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <ellipse cx="370" cy="145" rx="44" ry="10" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
      <circle cx="128" cy="152" r="35" fill="rgba(8,8,12,0.72)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
      <circle cx="128" cy="152" r="20" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="1.5"/>
      <circle cx="128" cy="152" r="6" fill="rgba(255,255,255,0.45)"/>
      <circle cx="370" cy="152" r="35" fill="rgba(8,8,12,0.72)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
      <circle cx="370" cy="152" r="20" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="1.5"/>
      <circle cx="370" cy="152" r="6" fill="rgba(255,255,255,0.45)"/>
      <rect x="55" y="96" width="26" height="12" rx="3" fill="rgba(220,240,255,0.20)" stroke="rgba(255,255,255,0.58)" stroke-width="1.5"/>
      <rect x="418" y="90" width="16" height="30" rx="2" fill="rgba(255,80,80,0.25)" stroke="rgba(255,120,120,0.60)" stroke-width="1.5"/>
    </svg>`,

  'kia-sportage-phev': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="g-kia" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.17)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.04)"/>
        </linearGradient>
      </defs>
      <path d="M55,148 L55,115 Q72,95 105,84 Q140,64 185,56 Q220,50 285,50 Q335,50 375,62 Q410,75 428,105 L435,132 L435,148 Z" fill="url(#g-kia)" stroke="rgba(255,255,255,0.48)" stroke-width="1.5"/>
      <rect x="185" y="44" width="180" height="12" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.36)" stroke-width="1"/>
      <path d="M185,56 Q195,48 210,44 L270,44 L270,56 Z" fill="rgba(150,200,255,0.12)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <path d="M285,44 L345,44 Q360,48 370,60 L285,60 Z" fill="rgba(150,200,255,0.10)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
      <rect x="210" y="56" width="75" height="46" rx="3" fill="rgba(150,200,255,0.08)" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
      <rect x="285" y="56" width="85" height="46" rx="3" fill="rgba(150,200,255,0.08)" stroke="rgba(255,255,255,0.20)" stroke-width="1"/>
      <path d="M55,115 Q85,105 110,96 L185,70" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M60,130 Q200,120 390,126" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1.5"/>
      <path d="M55,140 L435,140 L435,148 L55,148 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" stroke-width="1"/>
      <ellipse cx="142" cy="148" rx="48" ry="11" fill="none" stroke="rgba(255,255,255,0.40)" stroke-width="1.5"/>
      <ellipse cx="375" cy="148" rx="48" ry="11" fill="none" stroke="rgba(255,255,255,0.40)" stroke-width="1.5"/>
      <circle cx="142" cy="155" r="37" fill="rgba(8,8,12,0.72)" stroke="rgba(255,255,255,0.50)" stroke-width="2"/>
      <circle cx="142" cy="155" r="21" fill="none" stroke="rgba(255,255,255,0.26)" stroke-width="1.5"/>
      <circle cx="142" cy="155" r="6" fill="rgba(255,255,255,0.50)"/>
      <circle cx="375" cy="155" r="37" fill="rgba(8,8,12,0.72)" stroke="rgba(255,255,255,0.50)" stroke-width="2"/>
      <circle cx="375" cy="155" r="21" fill="none" stroke="rgba(255,255,255,0.26)" stroke-width="1.5"/>
      <circle cx="375" cy="155" r="6" fill="rgba(255,255,255,0.50)"/>
      <circle cx="65" cy="102" r="7" fill="rgba(80,220,140,0.35)" stroke="rgba(100,255,180,0.80)" stroke-width="1.5"/>
      <path d="M62,105 L65,99 L68,105" fill="none" stroke="rgba(100,255,180,0.90)" stroke-width="1.5" stroke-linejoin="round"/>
      <path d="M62,100 L90,96 L95,104 L62,108 Z" fill="rgba(220,240,255,0.15)" stroke="rgba(255,255,255,0.62)" stroke-width="1.5"/>
      <path d="M418,96 L436,100 L436,118 L418,114 Z" fill="rgba(255,80,80,0.25)" stroke="rgba(255,120,120,0.65)" stroke-width="1.5"/>
    </svg>`,
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
}

function goTo(newIndex) {
  if (isAnimating) return;
  const target = ((newIndex % cars.length) + cars.length) % cars.length;
  if (target === currentIndex) return;

  closeSpecs();
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
    <div class="card-specs-panel">
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
