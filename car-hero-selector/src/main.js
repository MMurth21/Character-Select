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

// ── SVG Car Silhouettes — Daytona USA arcade style ────────────────────────────
// Elevated side view: solid colour-blocked bodies, visible roof top surface,
// detailed spoke wheels, chrome trim, car-specific identity details.
const silhouettes = {

  // ── BMW E39 M5 — Interlagos Blue sedan ──────────────────────────────────────
  'bmw-e39-m5': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="bmw-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1A4FCC"/>
          <stop offset="55%" stop-color="#0033AA"/>
          <stop offset="100%" stop-color="#001566"/>
        </linearGradient>
        <linearGradient id="bmw-t" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2255EE"/>
          <stop offset="100%" stop-color="#0A3AAA"/>
        </linearGradient>
        <linearGradient id="bmw-w" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="#99CCFF" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#3366BB" stop-opacity="0.80"/>
        </linearGradient>
        <radialGradient id="bmw-wh" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stop-color="#606075"/>
          <stop offset="55%" stop-color="#303040"/>
          <stop offset="100%" stop-color="#080814"/>
        </radialGradient>
        <linearGradient id="bmw-ch" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#D5D5D5"/>
          <stop offset="100%" stop-color="#888888"/>
        </linearGradient>
      </defs>
      <!-- Ground shadow -->
      <ellipse cx="248" cy="173" rx="195" ry="10" fill="rgba(0,0,25,0.55)"/>
      <!-- Top surfaces (elevated camera shows roof/hood/trunk tops) -->
      <polygon points="58,100 58,86 192,78 192,92" fill="#1A4FCC" stroke="#000E44" stroke-width="1.5"/>
      <polygon points="192,62 372,62 372,76 192,76" fill="url(#bmw-t)" stroke="#000E44" stroke-width="1.5"/>
      <polygon points="372,76 372,62 432,74 432,90" fill="#001A88" stroke="#000E44" stroke-width="1.5"/>
      <polygon points="72,87 155,83 153,88 70,92" fill="rgba(180,215,255,0.42)"/>
      <polygon points="206,64 355,64 351,69 202,69" fill="rgba(200,225,255,0.50)"/>
      <!-- Body panels -->
      <polygon points="34,148 34,108 58,100 58,86 192,78 192,148" fill="url(#bmw-b)" stroke="#000E44" stroke-width="2"/>
      <polygon points="192,78 192,148 372,148 372,62" fill="url(#bmw-b)" stroke="#000E44" stroke-width="2"/>
      <polygon points="372,62 372,148 444,148 444,108 432,90 432,74" fill="#001A88" stroke="#000E44" stroke-width="2"/>
      <path d="M34,108 Q20,118 18,138 L18,148 L34,148 Z" fill="#001A88" stroke="#000E44" stroke-width="2"/>
      <path d="M444,108 Q458,118 460,138 L460,148 L444,148 Z" fill="#001166" stroke="#000E44" stroke-width="2"/>
      <!-- Pillars -->
      <polygon points="192,78 212,62 222,62 202,78" fill="#001166" stroke="#000E44" stroke-width="1.5"/>
      <rect x="282" y="62" width="10" height="48" fill="#001166" stroke="#000E44" stroke-width="1.5"/>
      <polygon points="362,62 372,78 362,78 354,62" fill="#001166" stroke="#000E44" stroke-width="1.5"/>
      <!-- Windows -->
      <polygon points="214,62 282,62 282,78 204,78" fill="url(#bmw-w)" stroke="#0022AA" stroke-width="1.5"/>
      <polygon points="292,62 360,62 362,78 292,78" fill="url(#bmw-w)" stroke="#0022AA" stroke-width="1.5"/>
      <polygon points="220,64 268,64 266,68 218,68" fill="rgba(255,255,255,0.60)"/>
      <polygon points="300,64 354,64 352,68 298,68" fill="rgba(255,255,255,0.52)"/>
      <line x1="196" y1="78" x2="370" y2="78" stroke="#000E44" stroke-width="1.8"/>
      <!-- Arcade body lines -->
      <line x1="28" y1="122" x2="452" y2="122" stroke="#3366DD" stroke-width="2.5"/>
      <line x1="28" y1="136" x2="452" y2="136" stroke="#001A77" stroke-width="1.2"/>
      <rect x="36" y="148" width="408" height="7" rx="2" fill="#000844" stroke="#000E44" stroke-width="1.5"/>
      <!-- M5 tri-colour door stripes -->
      <rect x="228" y="125" width="32" height="4" rx="1" fill="#0022FF"/>
      <rect x="228" y="129" width="32" height="4" rx="1" fill="#9922BB"/>
      <rect x="228" y="133" width="32" height="4" rx="1" fill="#DD2222"/>
      <!-- Door handles -->
      <rect x="222" y="112" width="17" height="3" rx="1.5" fill="url(#bmw-ch)" stroke="#999" stroke-width="0.5"/>
      <rect x="318" y="112" width="17" height="3" rx="1.5" fill="url(#bmw-ch)" stroke="#999" stroke-width="0.5"/>
      <!-- BMW twin kidney grille -->
      <rect x="34" y="110" width="14" height="18" rx="3.5" fill="#040810" stroke="url(#bmw-ch)" stroke-width="1.8"/>
      <line x1="41" y1="110" x2="41" y2="128" stroke="url(#bmw-ch)" stroke-width="1.2"/>
      <rect x="51" y="110" width="14" height="18" rx="3.5" fill="#040810" stroke="url(#bmw-ch)" stroke-width="1.8"/>
      <line x1="58" y1="110" x2="58" y2="128" stroke="url(#bmw-ch)" stroke-width="1.2"/>
      <!-- Headlights -->
      <rect x="28" y="98" width="28" height="11" rx="4" fill="#FFFFAA" stroke="#CCCC66" stroke-width="1.5"/>
      <ellipse cx="36" cy="103" rx="7" ry="4.5" fill="rgba(255,255,210,0.88)"/>
      <ellipse cx="48" cy="103" rx="6" ry="4" fill="rgba(200,220,255,0.60)"/>
      <!-- Front bumper -->
      <rect x="18" y="138" width="70" height="7" rx="2" fill="url(#bmw-ch)" stroke="#888" stroke-width="1"/>
      <!-- Taillights -->
      <rect x="444" y="97" width="18" height="17" rx="2" fill="#CC2222" stroke="#880000" stroke-width="1.5"/>
      <rect x="446" y="99" width="8" height="13" rx="1" fill="#FF5555"/>
      <rect x="454" y="100" width="6" height="11" rx="1" fill="rgba(255,200,200,0.80)"/>
      <!-- Rear bumper + M5 quad exhausts -->
      <rect x="434" y="138" width="26" height="7" rx="2" fill="url(#bmw-ch)" stroke="#888" stroke-width="1"/>
      <rect x="416" y="149" width="8" height="5" rx="1.5" fill="#181820" stroke="#999" stroke-width="1"/>
      <rect x="425" y="149" width="8" height="5" rx="1.5" fill="#181820" stroke="#999" stroke-width="1"/>
      <!-- Front wheel -->
      <ellipse cx="130" cy="157" rx="28" ry="9" fill="rgba(0,4,25,0.55)"/>
      <circle cx="130" cy="150" r="27" fill="#080810" stroke="#000" stroke-width="2.5"/>
      <circle cx="130" cy="150" r="20" fill="url(#bmw-wh)" stroke="#222233" stroke-width="1.5"/>
      <line x1="130" y1="130" x2="130" y2="146" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="130" y1="154" x2="130" y2="170" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="110" y1="150" x2="126" y2="150" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="134" y1="150" x2="150" y2="150" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="114" y1="135" x2="125" y2="146" stroke="#AAAACC" stroke-width="3"/>
      <line x1="135" y1="154" x2="146" y2="165" stroke="#AAAACC" stroke-width="3"/>
      <line x1="146" y1="135" x2="135" y2="146" stroke="#AAAACC" stroke-width="3"/>
      <line x1="114" y1="165" x2="125" y2="154" stroke="#AAAACC" stroke-width="3"/>
      <circle cx="130" cy="150" r="8" fill="#444455" stroke="#888899" stroke-width="1"/>
      <circle cx="130" cy="150" r="4.5" fill="#003399" stroke="url(#bmw-ch)" stroke-width="1.5"/>
      <!-- Rear wheel -->
      <ellipse cx="362" cy="157" rx="28" ry="9" fill="rgba(0,4,25,0.55)"/>
      <circle cx="362" cy="150" r="27" fill="#080810" stroke="#000" stroke-width="2.5"/>
      <circle cx="362" cy="150" r="20" fill="url(#bmw-wh)" stroke="#222233" stroke-width="1.5"/>
      <line x1="362" y1="130" x2="362" y2="146" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="362" y1="154" x2="362" y2="170" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="342" y1="150" x2="358" y2="150" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="366" y1="150" x2="382" y2="150" stroke="#AAAACC" stroke-width="3.5"/>
      <line x1="346" y1="135" x2="357" y2="146" stroke="#AAAACC" stroke-width="3"/>
      <line x1="367" y1="154" x2="378" y2="165" stroke="#AAAACC" stroke-width="3"/>
      <line x1="378" y1="135" x2="367" y2="146" stroke="#AAAACC" stroke-width="3"/>
      <line x1="346" y1="165" x2="357" y2="154" stroke="#AAAACC" stroke-width="3"/>
      <circle cx="362" cy="150" r="8" fill="#444455" stroke="#888899" stroke-width="1"/>
      <circle cx="362" cy="150" r="4.5" fill="#003399" stroke="url(#bmw-ch)" stroke-width="1.5"/>
    </svg>`,

  // ── Porsche 911 997 — Guards Red rear-engine coupe ───────────────────────────
  'porsche-997': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="p97-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EE2222"/>
          <stop offset="45%" stop-color="#CC0000"/>
          <stop offset="100%" stop-color="#770000"/>
        </linearGradient>
        <linearGradient id="p97-t" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF3333"/>
          <stop offset="100%" stop-color="#CC0000"/>
        </linearGradient>
        <linearGradient id="p97-w" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="#88BBFF" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#2244AA" stop-opacity="0.80"/>
        </linearGradient>
        <radialGradient id="p97-wh" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stop-color="#707085"/>
          <stop offset="55%" stop-color="#383845"/>
          <stop offset="100%" stop-color="#0A0A14"/>
        </radialGradient>
        <linearGradient id="p97-ch" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#D8D8D8"/>
          <stop offset="100%" stop-color="#888888"/>
        </linearGradient>
      </defs>
      <!-- Ground shadow -->
      <ellipse cx="248" cy="174" rx="200" ry="10" fill="rgba(30,0,0,0.55)"/>
      <!-- Top surfaces -->
      <polygon points="42,106 42,92 168,82 168,96" fill="#EE2222" stroke="#5A0000" stroke-width="1.5"/>
      <polygon points="168,62 360,62 360,76 168,76" fill="url(#p97-t)" stroke="#5A0000" stroke-width="1.5"/>
      <polygon points="360,76 360,62 432,82 432,98" fill="#AA0000" stroke="#5A0000" stroke-width="1.5"/>
      <!-- 997 rear spoiler raised lip -->
      <polygon points="380,58 422,58 420,65 382,65" fill="#CC1111" stroke="#5A0000" stroke-width="1"/>
      <polygon points="56,91 145,85 143,90 54,96" fill="rgba(255,200,200,0.42)"/>
      <polygon points="182,64 346,64 342,69 178,69" fill="rgba(255,210,210,0.50)"/>
      <!-- Body panels (short hood, long rear-engine deck) -->
      <polygon points="28,152 28,108 42,106 42,92 168,82 168,152" fill="url(#p97-b)" stroke="#5A0000" stroke-width="2"/>
      <polygon points="168,82 168,152 360,152 360,62" fill="url(#p97-b)" stroke="#5A0000" stroke-width="2"/>
      <polygon points="360,62 360,152 452,152 452,108 432,98 432,82" fill="#AA0000" stroke="#5A0000" stroke-width="2"/>
      <path d="M28,108 Q14,116 12,138 L12,152 L28,152 Z" fill="#AA0000" stroke="#5A0000" stroke-width="2"/>
      <path d="M452,108 Q466,118 468,140 L468,152 L452,152 Z" fill="#880000" stroke="#5A0000" stroke-width="2"/>
      <!-- Pillars (large greenhouse, barely a B-pillar) -->
      <polygon points="168,82 186,62 198,62 180,82" fill="#770000" stroke="#5A0000" stroke-width="1.5"/>
      <polygon points="352,62 360,78 350,78 344,62" fill="#770000" stroke="#5A0000" stroke-width="1.5"/>
      <!-- Windows -->
      <polygon points="190,62 350,62 350,82 182,82" fill="url(#p97-w)" stroke="#002299" stroke-width="1.5"/>
      <polygon points="196,64 345,64 343,68 194,68" fill="rgba(255,255,255,0.62)"/>
      <line x1="172" y1="82" x2="358" y2="82" stroke="#5A0000" stroke-width="2"/>
      <!-- Porsche hip line + body crease -->
      <line x1="22" y1="118" x2="460" y2="118" stroke="#FF2222" stroke-width="3"/>
      <line x1="22" y1="132" x2="460" y2="132" stroke="#880000" stroke-width="1.5"/>
      <!-- Wide rear fender flare -->
      <path d="M338,152 Q355,140 360,128 L360,152" fill="#AA0000" stroke="#5A0000" stroke-width="1.5"/>
      <rect x="30" y="152" width="422" height="7" rx="2" fill="#500000" stroke="#5A0000" stroke-width="1.5"/>
      <!-- Front "fried-egg" dual round headlights -->
      <circle cx="25" cy="100" r="9" fill="#FFFFAA" stroke="#CCCC66" stroke-width="1.5"/>
      <circle cx="25" cy="100" r="6" fill="rgba(255,255,210,0.90)"/>
      <circle cx="40" cy="100" r="7" fill="#FFFFAA" stroke="#CCCC66" stroke-width="1.5"/>
      <circle cx="40" cy="100" r="4.5" fill="rgba(210,225,255,0.70)"/>
      <!-- Bumper intake -->
      <rect x="12" y="138" width="60" height="9" rx="2" fill="url(#p97-ch)" stroke="#888" stroke-width="1"/>
      <rect x="15" y="130" width="35" height="7" rx="1" fill="#111111" stroke="#444" stroke-width="1"/>
      <line x1="22" y1="130" x2="22" y2="137" stroke="#444" stroke-width="1"/>
      <line x1="30" y1="130" x2="30" y2="137" stroke="#444" stroke-width="1"/>
      <line x1="38" y1="130" x2="38" y2="137" stroke="#444" stroke-width="1"/>
      <line x1="46" y1="130" x2="46" y2="137" stroke="#444" stroke-width="1"/>
      <!-- Rear round taillights (997 signature) -->
      <circle cx="454" cy="100" r="11" fill="#CC2222" stroke="#880000" stroke-width="1.5"/>
      <circle cx="454" cy="100" r="7" fill="#FF4444"/>
      <circle cx="454" cy="100" r="3.5" fill="rgba(255,200,200,0.85)"/>
      <circle cx="454" cy="116" r="7" fill="#FF4444" stroke="#880000" stroke-width="1"/>
      <circle cx="454" cy="116" r="4" fill="rgba(255,200,200,0.75)"/>
      <!-- Engine grille vents -->
      <rect x="430" y="94" width="24" height="4" rx="1" fill="#111" stroke="#444" stroke-width="0.8"/>
      <rect x="430" y="100" width="24" height="4" rx="1" fill="#111" stroke="#444" stroke-width="0.8"/>
      <rect x="430" y="106" width="24" height="4" rx="1" fill="#111" stroke="#444" stroke-width="0.8"/>
      <!-- Centre exhaust -->
      <rect x="437" y="148" width="12" height="6" rx="2" fill="#181818" stroke="#999" stroke-width="1"/>
      <!-- Front wheel -->
      <ellipse cx="150" cy="159" rx="28" ry="9" fill="rgba(25,0,0,0.55)"/>
      <circle cx="150" cy="152" r="27" fill="#080808" stroke="#000" stroke-width="2.5"/>
      <circle cx="150" cy="152" r="20" fill="url(#p97-wh)" stroke="#222222" stroke-width="1.5"/>
      <line x1="150" y1="132" x2="150" y2="148" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="150" y1="156" x2="150" y2="172" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="130" y1="152" x2="146" y2="152" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="154" y1="152" x2="170" y2="152" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="134" y1="137" x2="145" y2="148" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="155" y1="156" x2="166" y2="167" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="166" y1="137" x2="155" y2="148" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="134" y1="167" x2="145" y2="156" stroke="#BBBBCC" stroke-width="3"/>
      <circle cx="150" cy="152" r="8" fill="#444444" stroke="#888888" stroke-width="1"/>
      <circle cx="150" cy="152" r="4.5" fill="#888888" stroke="url(#p97-ch)" stroke-width="1.5"/>
      <!-- Rear wheel (wider, rear-engine) -->
      <ellipse cx="358" cy="159" rx="30" ry="9" fill="rgba(25,0,0,0.55)"/>
      <circle cx="358" cy="152" r="29" fill="#080808" stroke="#000" stroke-width="2.5"/>
      <circle cx="358" cy="152" r="21" fill="url(#p97-wh)" stroke="#222222" stroke-width="1.5"/>
      <line x1="358" y1="131" x2="358" y2="148" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="358" y1="156" x2="358" y2="173" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="337" y1="152" x2="354" y2="152" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="362" y1="152" x2="379" y2="152" stroke="#BBBBCC" stroke-width="3.5"/>
      <line x1="341" y1="136" x2="352" y2="147" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="364" y1="157" x2="375" y2="168" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="375" y1="136" x2="364" y2="147" stroke="#BBBBCC" stroke-width="3"/>
      <line x1="341" y1="168" x2="352" y2="157" stroke="#BBBBCC" stroke-width="3"/>
      <circle cx="358" cy="152" r="9" fill="#444444" stroke="#888888" stroke-width="1"/>
      <circle cx="358" cy="152" r="5" fill="#888888" stroke="url(#p97-ch)" stroke-width="1.5"/>
    </svg>`,

  // ── Toyota Sienna — Platinum Silver minivan ──────────────────────────────────
  'toyota-sienna': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="sia-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#B2B2C2"/>
          <stop offset="50%" stop-color="#888898"/>
          <stop offset="100%" stop-color="#4A4A5A"/>
        </linearGradient>
        <linearGradient id="sia-t" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#C8C8D8"/>
          <stop offset="100%" stop-color="#9090A0"/>
        </linearGradient>
        <linearGradient id="sia-w" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="#AACCFF" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#5588CC" stop-opacity="0.78"/>
        </linearGradient>
        <radialGradient id="sia-wh" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stop-color="#686878"/>
          <stop offset="55%" stop-color="#323238"/>
          <stop offset="100%" stop-color="#0A0A0E"/>
        </radialGradient>
        <linearGradient id="sia-ch" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#DDDDDD"/>
          <stop offset="100%" stop-color="#888888"/>
        </linearGradient>
      </defs>
      <!-- Ground shadow -->
      <ellipse cx="245" cy="174" rx="200" ry="10" fill="rgba(0,0,20,0.55)"/>
      <!-- Top surfaces (flat minivan roof) -->
      <polygon points="55,95 55,80 195,72 195,87" fill="#B2B2C2" stroke="#2A2A3A" stroke-width="1.5"/>
      <polygon points="195,52 410,52 410,67 195,67" fill="url(#sia-t)" stroke="#2A2A3A" stroke-width="1.5"/>
      <polygon points="410,67 410,52 452,62 452,78" fill="#6A6A7A" stroke="#2A2A3A" stroke-width="1.5"/>
      <polygon points="210,54 395,54 391,59 206,59" fill="rgba(255,255,255,0.52)"/>
      <polygon points="68,80 165,74 163,79 66,85" fill="rgba(255,255,255,0.40)"/>
      <!-- Body panels (tall boxy minivan) -->
      <polygon points="36,148 36,102 55,95 55,80 195,72 195,148" fill="url(#sia-b)" stroke="#2A2A3A" stroke-width="2"/>
      <polygon points="195,72 195,148 410,148 410,52" fill="url(#sia-b)" stroke="#2A2A3A" stroke-width="2"/>
      <polygon points="410,52 410,148 454,148 454,108 452,78 452,62" fill="#6A6A7A" stroke="#2A2A3A" stroke-width="2"/>
      <path d="M36,102 Q22,110 20,132 L20,148 L36,148 Z" fill="#6A6A7A" stroke="#2A2A3A" stroke-width="2"/>
      <path d="M454,108 Q468,116 470,138 L470,148 L454,148 Z" fill="#5A5A6A" stroke="#2A2A3A" stroke-width="2"/>
      <!-- Pillars (thick A, B, C, D) -->
      <polygon points="195,72 215,52 228,52 208,72" fill="#3A3A4A" stroke="#2A2A3A" stroke-width="1.5"/>
      <rect x="286" y="52" width="12" height="52" fill="#3A3A4A" stroke="#2A2A3A" stroke-width="1.5"/>
      <polygon points="396,52 410,68 398,68 388,52" fill="#3A3A4A" stroke="#2A2A3A" stroke-width="1.5"/>
      <!-- Windows (3 large panes) -->
      <polygon points="218,52 286,52 286,72 210,72" fill="url(#sia-w)" stroke="#334488" stroke-width="1.5"/>
      <polygon points="298,52 394,52 396,72 298,72" fill="url(#sia-w)" stroke="#334488" stroke-width="1.5"/>
      <polygon points="230,54 278,54 276,58 228,58" fill="rgba(255,255,255,0.60)"/>
      <polygon points="306,54 388,54 386,58 304,58" fill="rgba(255,255,255,0.55)"/>
      <!-- Sliding door seam -->
      <line x1="300" y1="72" x2="300" y2="148" stroke="#3A3A4A" stroke-width="2.5"/>
      <line x1="196" y1="72" x2="410" y2="72" stroke="#2A2A3A" stroke-width="2"/>
      <!-- Rear quarter window -->
      <rect x="412" y="62" width="30" height="28" rx="2" fill="url(#sia-w)" stroke="#334488" stroke-width="1.5"/>
      <rect x="414" y="64" width="26" height="10" rx="1" fill="rgba(255,255,255,0.55)"/>
      <!-- Character crease -->
      <line x1="25" y1="118" x2="462" y2="118" stroke="#B8B8CC" stroke-width="2.5"/>
      <rect x="38" y="148" width="416" height="7" rx="2" fill="#2A2A36" stroke="#2A2A3A" stroke-width="1.5"/>
      <!-- Door handles -->
      <rect x="240" y="108" width="18" height="3" rx="1.5" fill="url(#sia-ch)" stroke="#999" stroke-width="0.5"/>
      <rect x="336" y="108" width="18" height="3" rx="1.5" fill="url(#sia-ch)" stroke="#999" stroke-width="0.5"/>
      <!-- Headlights (wide LED style) -->
      <rect x="25" y="93" width="34" height="11" rx="3" fill="#FFFFAA" stroke="#BBBB66" stroke-width="1.5"/>
      <rect x="27" y="95" width="18" height="7" rx="2" fill="rgba(255,255,220,0.88)"/>
      <rect x="47" y="96" width="10" height="6" rx="1" fill="rgba(200,220,255,0.65)"/>
      <!-- Toyota grille -->
      <rect x="24" y="107" width="50" height="10" rx="2" fill="#222222" stroke="url(#sia-ch)" stroke-width="1.5"/>
      <ellipse cx="40" cy="112" rx="8" ry="5" fill="none" stroke="url(#sia-ch)" stroke-width="1.5"/>
      <line x1="32" y1="112" x2="48" y2="112" stroke="url(#sia-ch)" stroke-width="1.5"/>
      <!-- Front bumper -->
      <rect x="20" y="134" width="60" height="7" rx="2" fill="url(#sia-ch)" stroke="#888" stroke-width="1"/>
      <!-- Taillights (vertical pair) -->
      <rect x="452" y="92" width="18" height="20" rx="2" fill="#CC2222" stroke="#880000" stroke-width="1.5"/>
      <rect x="454" y="94" width="8" height="16" rx="1" fill="#FF5555"/>
      <rect x="462" y="95" width="6" height="14" rx="1" fill="rgba(255,200,200,0.80)"/>
      <rect x="454" y="135" width="16" height="7" rx="2" fill="url(#sia-ch)" stroke="#888" stroke-width="1"/>
      <!-- Front wheel -->
      <ellipse cx="122" cy="157" rx="28" ry="9" fill="rgba(0,0,20,0.55)"/>
      <circle cx="122" cy="150" r="27" fill="#060610" stroke="#000" stroke-width="2.5"/>
      <circle cx="122" cy="150" r="20" fill="url(#sia-wh)" stroke="#222228" stroke-width="1.5"/>
      <line x1="122" y1="130" x2="122" y2="146" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="122" y1="154" x2="122" y2="170" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="102" y1="150" x2="118" y2="150" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="126" y1="150" x2="142" y2="150" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="106" y1="135" x2="117" y2="146" stroke="#AAAABC" stroke-width="3"/>
      <line x1="127" y1="154" x2="138" y2="165" stroke="#AAAABC" stroke-width="3"/>
      <line x1="138" y1="135" x2="127" y2="146" stroke="#AAAABC" stroke-width="3"/>
      <line x1="106" y1="165" x2="117" y2="154" stroke="#AAAABC" stroke-width="3"/>
      <circle cx="122" cy="150" r="8" fill="#484850" stroke="#888899" stroke-width="1"/>
      <circle cx="122" cy="150" r="4.5" fill="#CCCCDD" stroke="url(#sia-ch)" stroke-width="1"/>
      <!-- Rear wheel -->
      <ellipse cx="374" cy="157" rx="28" ry="9" fill="rgba(0,0,20,0.55)"/>
      <circle cx="374" cy="150" r="27" fill="#060610" stroke="#000" stroke-width="2.5"/>
      <circle cx="374" cy="150" r="20" fill="url(#sia-wh)" stroke="#222228" stroke-width="1.5"/>
      <line x1="374" y1="130" x2="374" y2="146" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="374" y1="154" x2="374" y2="170" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="354" y1="150" x2="370" y2="150" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="378" y1="150" x2="394" y2="150" stroke="#AAAABC" stroke-width="3.5"/>
      <line x1="358" y1="135" x2="369" y2="146" stroke="#AAAABC" stroke-width="3"/>
      <line x1="379" y1="154" x2="390" y2="165" stroke="#AAAABC" stroke-width="3"/>
      <line x1="390" y1="135" x2="379" y2="146" stroke="#AAAABC" stroke-width="3"/>
      <line x1="358" y1="165" x2="369" y2="154" stroke="#AAAABC" stroke-width="3"/>
      <circle cx="374" cy="150" r="8" fill="#484850" stroke="#888899" stroke-width="1"/>
      <circle cx="374" cy="150" r="4.5" fill="#CCCCDD" stroke="url(#sia-ch)" stroke-width="1"/>
    </svg>`,

  // ── Kia Sportage PHEV — Midnight crossover SUV with EV green accents ─────────
  'kia-sportage-phev': `
    <svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" class="car-svg">
      <defs>
        <linearGradient id="kia-b" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2A3448"/>
          <stop offset="50%" stop-color="#182030"/>
          <stop offset="100%" stop-color="#080E18"/>
        </linearGradient>
        <linearGradient id="kia-t" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#364258"/>
          <stop offset="100%" stop-color="#1A2436"/>
        </linearGradient>
        <linearGradient id="kia-w" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stop-color="#AAEEBB" stop-opacity="0.90"/>
          <stop offset="100%" stop-color="#44AA66" stop-opacity="0.75"/>
        </linearGradient>
        <radialGradient id="kia-wh" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stop-color="#707080"/>
          <stop offset="55%" stop-color="#353540"/>
          <stop offset="100%" stop-color="#0A0A10"/>
        </radialGradient>
        <linearGradient id="kia-ch" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#D5D5D5"/>
          <stop offset="100%" stop-color="#888888"/>
        </linearGradient>
        <linearGradient id="kia-grn" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#44CC80"/>
          <stop offset="100%" stop-color="#22AA60"/>
        </linearGradient>
      </defs>
      <!-- Ground shadow -->
      <ellipse cx="248" cy="175" rx="198" ry="10" fill="rgba(0,5,20,0.60)"/>
      <!-- Top surfaces (SUV flat-ish roof) -->
      <polygon points="55,98 55,84 192,74 192,88" fill="#2A3448" stroke="#080E18" stroke-width="1.5"/>
      <polygon points="192,56 385,56 385,70 192,70" fill="url(#kia-t)" stroke="#080E18" stroke-width="1.5"/>
      <polygon points="385,70 385,56 440,70 440,86" fill="#111A28" stroke="#080E18" stroke-width="1.5"/>
      <polygon points="206,58 368,58 364,63 202,63" fill="rgba(180,220,255,0.38)"/>
      <polygon points="68,83 165,77 163,82 66,87" fill="rgba(150,190,230,0.35)"/>
      <!-- Body panels (angular SUV) -->
      <polygon points="35,138 35,105 55,98 55,84 192,74 192,138" fill="url(#kia-b)" stroke="#080E18" stroke-width="2"/>
      <polygon points="192,74 192,138 385,138 385,56" fill="url(#kia-b)" stroke="#080E18" stroke-width="2"/>
      <polygon points="385,56 385,138 448,138 448,105 440,86 440,70" fill="#111A28" stroke="#080E18" stroke-width="2"/>
      <path d="M35,105 Q22,112 20,130 L20,138 L35,138 Z" fill="#111A28" stroke="#080E18" stroke-width="2"/>
      <path d="M448,105 Q460,112 462,132 L462,138 L448,138 Z" fill="#0A1020" stroke="#080E18" stroke-width="2"/>
      <!-- Pillars -->
      <polygon points="192,74 210,56 222,56 204,74" fill="#080E18" stroke="#080E18" stroke-width="1.5"/>
      <rect x="284" y="56" width="11" height="48" fill="#080E18" stroke="#080E18" stroke-width="1.5"/>
      <polygon points="374,56 385,72 374,72 366,56" fill="#080E18" stroke="#080E18" stroke-width="1.5"/>
      <!-- Windows (green-tinted EV glass) -->
      <polygon points="214,56 284,56 284,74 206,74" fill="url(#kia-w)" stroke="#224444" stroke-width="1.5"/>
      <polygon points="295,56 372,56 374,74 295,74" fill="url(#kia-w)" stroke="#224444" stroke-width="1.5"/>
      <polygon points="220,58 276,58 274,62 218,62" fill="rgba(255,255,255,0.55)"/>
      <polygon points="303,58 366,58 364,62 301,62" fill="rgba(255,255,255,0.48)"/>
      <line x1="196" y1="74" x2="382" y2="74" stroke="#080E18" stroke-width="2"/>
      <!-- PHEV green accent stripe -->
      <rect x="30" y="124" width="418" height="4" rx="1" fill="url(#kia-grn)" opacity="0.85"/>
      <line x1="28" y1="116" x2="450" y2="116" stroke="#364258" stroke-width="2.5"/>
      <rect x="36" y="138" width="412" height="6" rx="2" fill="#060C18" stroke="#080E18" stroke-width="1.5"/>
      <!-- Door handles -->
      <rect x="225" y="106" width="18" height="3" rx="1.5" fill="url(#kia-ch)" stroke="#999" stroke-width="0.5"/>
      <rect x="322" y="106" width="18" height="3" rx="1.5" fill="url(#kia-ch)" stroke="#999" stroke-width="0.5"/>
      <!-- PHEV badge -->
      <rect x="235" y="80" width="28" height="10" rx="2" fill="url(#kia-grn)" stroke="#228844" stroke-width="1"/>
      <text x="249" y="88" text-anchor="middle" font-family="Arial,sans-serif" font-size="6" font-weight="900" fill="#003322" letter-spacing="0.5">PHEV</text>
      <!-- Kia Tiger Nose grille (angular horizontal) -->
      <rect x="24" y="104" width="50" height="12" rx="2" fill="#111111" stroke="url(#kia-ch)" stroke-width="1.5"/>
      <line x1="32" y1="104" x2="32" y2="116" stroke="#333" stroke-width="1"/>
      <line x1="40" y1="104" x2="40" y2="116" stroke="#333" stroke-width="1"/>
      <line x1="48" y1="104" x2="48" y2="116" stroke="#333" stroke-width="1"/>
      <line x1="56" y1="104" x2="56" y2="116" stroke="#333" stroke-width="1"/>
      <line x1="64" y1="104" x2="64" y2="116" stroke="#333" stroke-width="1"/>
      <!-- DRL strip (green for PHEV) -->
      <line x1="24" y1="98" x2="72" y2="98" stroke="#44CC80" stroke-width="2.5"/>
      <line x1="24" y1="95" x2="60" y2="95" stroke="#44CC80" stroke-width="1.5" opacity="0.6"/>
      <!-- LED headlights -->
      <rect x="24" y="91" width="48" height="8" rx="2" fill="#FFFFFF" stroke="#AAAAAA" stroke-width="1"/>
      <rect x="26" y="92" width="25" height="5" rx="1" fill="rgba(255,255,230,0.95)"/>
      <rect x="54" y="92" width="16" height="5" rx="1" fill="rgba(210,230,255,0.70)"/>
      <!-- Front bumper -->
      <rect x="20" y="130" width="62" height="7" rx="2" fill="url(#kia-ch)" stroke="#888" stroke-width="1"/>
      <!-- Rear taillights (wraparound LED) -->
      <rect x="446" y="90" width="16" height="22" rx="2" fill="#CC2222" stroke="#880000" stroke-width="1.5"/>
      <rect x="448" y="92" width="8" height="18" rx="1" fill="#FF5555"/>
      <line x1="448" y1="96" x2="462" y2="96" stroke="rgba(255,180,180,0.8)" stroke-width="1.5"/>
      <line x1="448" y1="100" x2="462" y2="100" stroke="rgba(255,180,180,0.8)" stroke-width="1.5"/>
      <line x1="448" y1="104" x2="462" y2="104" stroke="rgba(255,180,180,0.8)" stroke-width="1.5"/>
      <line x1="440" y1="90" x2="462" y2="90" stroke="#FF3333" stroke-width="2.5"/>
      <!-- Rear bumper + exhaust -->
      <rect x="450" y="131" width="12" height="5" rx="2" fill="url(#kia-ch)" stroke="#888" stroke-width="1"/>
      <rect x="440" y="131" width="10" height="5" rx="1.5" fill="#181820" stroke="#888" stroke-width="1"/>
      <!-- Front wheel (higher ground clearance) -->
      <ellipse cx="136" cy="158" rx="28" ry="10" fill="rgba(0,5,25,0.60)"/>
      <circle cx="136" cy="150" r="27" fill="#060810" stroke="#000" stroke-width="2.5"/>
      <circle cx="136" cy="150" r="20" fill="url(#kia-wh)" stroke="#202028" stroke-width="1.5"/>
      <line x1="136" y1="130" x2="136" y2="146" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="136" y1="154" x2="136" y2="170" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="116" y1="150" x2="132" y2="150" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="140" y1="150" x2="156" y2="150" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="120" y1="135" x2="131" y2="146" stroke="#AABBCC" stroke-width="3"/>
      <line x1="141" y1="154" x2="152" y2="165" stroke="#AABBCC" stroke-width="3"/>
      <line x1="152" y1="135" x2="141" y2="146" stroke="#AABBCC" stroke-width="3"/>
      <line x1="120" y1="165" x2="131" y2="154" stroke="#AABBCC" stroke-width="3"/>
      <circle cx="136" cy="150" r="8" fill="#444450" stroke="#888899" stroke-width="1"/>
      <circle cx="136" cy="150" r="4.5" fill="#44CC80" stroke="url(#kia-ch)" stroke-width="1.5"/>
      <!-- Rear wheel -->
      <ellipse cx="362" cy="158" rx="28" ry="10" fill="rgba(0,5,25,0.60)"/>
      <circle cx="362" cy="150" r="27" fill="#060810" stroke="#000" stroke-width="2.5"/>
      <circle cx="362" cy="150" r="20" fill="url(#kia-wh)" stroke="#202028" stroke-width="1.5"/>
      <line x1="362" y1="130" x2="362" y2="146" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="362" y1="154" x2="362" y2="170" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="342" y1="150" x2="358" y2="150" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="366" y1="150" x2="382" y2="150" stroke="#AABBCC" stroke-width="3.5"/>
      <line x1="346" y1="135" x2="357" y2="146" stroke="#AABBCC" stroke-width="3"/>
      <line x1="367" y1="154" x2="378" y2="165" stroke="#AABBCC" stroke-width="3"/>
      <line x1="378" y1="135" x2="367" y2="146" stroke="#AABBCC" stroke-width="3"/>
      <line x1="346" y1="165" x2="357" y2="154" stroke="#AABBCC" stroke-width="3"/>
      <circle cx="362" cy="150" r="8" fill="#444450" stroke="#888899" stroke-width="1"/>
      <circle cx="362" cy="150" r="4.5" fill="#44CC80" stroke="url(#kia-ch)" stroke-width="1.5"/>
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
    <div class="card-specs-panel" style="background:${car.gradient};">
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
