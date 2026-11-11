import heroIkoyiVillaImg from '../assets/images/hero_ikoyi_smart_villa_1794332198782.jpg';
import maitamaCompoundImg from '../assets/images/maitama_autonomous_compound_1794332198394.jpg';
import ilasheBeachHouseImg from '../assets/images/ilashe_solar_beach_house_1794332200955.jpg';
import viPenthouseImg from '../assets/images/vi_smart_penthouse_loft_1794332201911.jpg';
import architectPortraitImg from '../assets/images/architect_portrait_lagos_1794332202644.jpg';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Smart Villa' | 'Acoustic Retrofit' | 'Coastal Off-Grid' | 'Commercial Hub';
  secondaryTag: string;
  year: string;
  location: string;
  area: string;
  certification: string;
  featured?: boolean;
  summary: string;
  challenge: string;
  solution: string;
  sustainabilityMetrics: {
    solarMicrogrid: string;
    dieselReduction: string;
    acousticIsolation: string;
    waterAutonomy: string;
  };
  materials: string[];
  specs: ProjectSpec[];
  imageUrl: string;
  galleryUrls: string[];
  award?: string;
  architecturalSvgType: 'hillside' | 'loft' | 'cabin' | 'library' | 'coastal' | 'pavilion';
}

export const HERO_ARCHITECT_PORTRAIT = architectPortraitImg;

export const PROJECTS: Project[] = [
  {
    id: 'ikoyi-autonomous-villa',
    slug: 'ikoyi-autonomous-villa',
    title: 'Bourbon Road Autonomous Villa',
    category: 'Smart Villa',
    secondaryTag: 'Zero-Generator Microgrid',
    year: '2024',
    location: 'Old Ikoyi, Lagos',
    area: '680 sqm',
    certification: '100% Solar-Lithium Autonomous · LASBCA Certified',
    featured: true,
    award: 'NIA Excellence in Sustainable Architecture — 2024',
    summary:
      'An Afro-tropical smart residence engineered for uninterrupted 24/7 silent power, acoustic serenity, and automated climate control in the heart of Ikoyi.',
    challenge:
      'Situated in a dense Old Ikoyi enclave plagued by neighborhood diesel generator hum, seasonal coastal humidity, and heavy Victoria Island monsoon downpours.',
    solution:
      'Integrated a flush 32 kWp monocrystalline solar roof with 90 kWh LiFePO4 battery storage—eliminating diesel generator runtime completely. Motorized Iroko timber louvers track equatorial sun angles via KNX home automation, while triple-sealed acoustic glazing drops indoor ambient noise to a library-quiet 28 dBA.',
    sustainabilityMetrics: {
      solarMicrogrid: '32 kWp PV + 90 kWh LiFePO4',
      dieselReduction: '100% Zero-Diesel Operation',
      acousticIsolation: '48 dB Street Noise Reduction',
      waterAutonomy: 'Reverse-Osmosis + UV Borehole',
    },
    materials: [
      'Seasoned Nigerian Iroko Motorized Louvers',
      'Board-Formed Sulfate-Resistant Concrete',
      'Double-Glazed Argon Acoustic Curtain Wall',
      'Honed Abeokuta Grey Granite Pool Decking',
    ],
    specs: [
      { label: 'Typology', value: 'Autonomous Smart Family Villa' },
      { label: 'Plot Size', value: '1,100 sqm (Old Ikoyi)' },
      { label: 'Built Area', value: '680 sqm' },
      { label: 'Power Autonomy', value: '72-Hr Battery Backup Reserve' },
      { label: 'Automation Protocol', value: 'KNX / Lutron HomeWorks' },
      { label: 'Completion', value: 'November 2024' },
    ],
    imageUrl: heroIkoyiVillaImg,
    galleryUrls: [heroIkoyiVillaImg, viPenthouseImg, maitamaCompoundImg],
    architecturalSvgType: 'hillside',
  },
  {
    id: 'vi-acoustic-penthouse',
    slug: 'vi-acoustic-penthouse',
    title: 'Adeola Odeku Sky Penthouse',
    category: 'Acoustic Retrofit',
    secondaryTag: 'Smart Interior & Automation',
    year: '2024',
    location: 'Victoria Island, Lagos',
    area: '420 sqm',
    certification: 'STC-64 Acoustic Envelope · Smart Air Filtration',
    summary:
      'Full structural and smart-systems transformation of a two-story Victoria Island penthouse into a whisper-quiet executive sanctuary with automated power management.',
    challenge:
      'High-altitude wind shear, arterial traffic noise from Adeola Odeku Street, Harmattan dust infiltration, and frequent building-grid changeovers disrupted daily work and sleep.',
    solution:
      'Installed an interior acoustic curtain-wall skin, micro-perforated Nigerian walnut ceiling baffles, and an instant 0ms-transfer 45 kWh rack-mounted lithium wall concealed inside custom millwork. HEPA + activated-carbon positive-pressure ventilation keeps PM2.5 particulates near zero during Harmattan.',
    sustainabilityMetrics: {
      solarMicrogrid: '45 kWh Zero-Lag Inverter Wall',
      dieselReduction: '78% Lower Building Gen Share',
      acousticIsolation: 'STC-64 Double-Skin Glazing',
      waterAutonomy: 'Smart Leak & 5-Stage Filtration',
    },
    materials: [
      'Acoustic Micro-Perforated Benin Walnut',
      'Laminated 16.8mm Acoustic Solar Glass',
      'Brushed Nigerian Brass Touch Keypads',
      'Seamless Micro-Cement Thermal Flooring',
    ],
    specs: [
      { label: 'Typology', value: 'High-Rise Smart Retrofit' },
      { label: 'Floor Level', value: '14th & 15th Floors, VI' },
      { label: 'Built Area', value: '420 sqm' },
      { label: 'Power Switchover', value: '0 ms Uninterruptible Transfer' },
      { label: 'Indoor Air Quality', value: 'PM2.5 < 5 µg/m³ (Harmattan)' },
      { label: 'Completion', value: 'July 2024' },
    ],
    imageUrl: viPenthouseImg,
    galleryUrls: [viPenthouseImg, heroIkoyiVillaImg],
    architecturalSvgType: 'loft',
  },
  {
    id: 'maitama-solar-compound',
    slug: 'maitama-solar-compound',
    title: 'Aso Drive Autonomous Compound',
    category: 'Smart Villa',
    secondaryTag: 'Passive Cooling & Solar',
    year: '2023',
    location: 'Maitama, Abuja',
    area: '850 sqm',
    certification: 'Net-Positive Solar · FCDA Approved',
    award: 'West Africa Smart Property Award — 2024',
    summary:
      'A climate-responsive Abuja family residence combining compressed laterite earth thermal mass with a cantilevered solar canopy and AI-zoned VRF cooling.',
    challenge:
      'Abuja dry-season temperatures regularly exceed 39°C, driving massive air-conditioning loads that overwhelm conventional residential inverters.',
    solution:
      'Engineered 450mm stabilized Abuja laterite and granite walls that delay daytime heat transfer by 11 hours, sheltered beneath an elevated 40 kWp bifacial solar pergola. Occupancy-sensing VRF cooling pre-chills living zones strictly during peak daytime solar generation.',
    sustainabilityMetrics: {
      solarMicrogrid: '40 kWp Bifacial Canopy + 120 kWh',
      dieselReduction: '96% Annual Grid/Gen Independence',
      acousticIsolation: '52 dB Perimeter Compound Wall',
      waterAutonomy: '25,000L Greywater Garden Loop',
    },
    materials: [
      'Stabilized Abuja Laterite Rammed Earth',
      'Hand-Dressed Suleja Granite Cladding',
      'Bifacial Glass-on-Glass Solar Canopy',
      'Kiln-Dried Mahogany Acoustic Joinery',
    ],
    specs: [
      { label: 'Typology', value: 'Multi-Generational Smart Compound' },
      { label: 'Plot Size', value: '1,650 sqm (Maitama)' },
      { label: 'Built Area', value: '850 sqm' },
      { label: 'Cooling Load Reduction', value: '-58% via Thermal Mass' },
      { label: 'Perimeter Security', value: 'AI Thermal & Biometric Access' },
      { label: 'Completion', value: 'December 2023' },
    ],
    imageUrl: maitamaCompoundImg,
    galleryUrls: [maitamaCompoundImg, heroIkoyiVillaImg],
    architecturalSvgType: 'cabin',
  },
  {
    id: 'ilashe-coastal-pavilion',
    slug: 'ilashe-coastal-pavilion',
    title: 'Ilashe Autonomous Beach House',
    category: 'Coastal Off-Grid',
    secondaryTag: '100% Off-Grid Lagoon Retreat',
    year: '2023',
    location: 'Ilashe Island, Lagos Coast',
    area: '510 sqm',
    certification: '100% Off-Grid Power & Water · Marine Grade',
    summary:
      'Boat-access-only coastal sanctuary operating completely independent of municipal power or water grids, built to resist Atlantic salt corrosion.',
    challenge:
      'Zero PHCN grid access, corrosive Atlantic salt mist that destroys standard electronics within 18 months, and complex barge-only material logistics.',
    solution:
      'Elevated on marine-grade sulfate-resistant concrete piles to catch ocean cross-breezes. A sealed, positively pressurized climate room protects the 36 kWp solar-lithium microgrid and desalination/borehole plant from salt air, monitored remotely via Starlink telemetry.',
    sustainabilityMetrics: {
      solarMicrogrid: '36 kWp Marine-Sealed PV Array',
      dieselReduction: 'Zero Fuel Barging Required',
      acousticIsolation: 'Natural Atlantic Surf Acoustics',
      waterAutonomy: 'Solar Desalination + Rain Harvest',
    },
    materials: [
      'Marine-Treated West African Ekki Hardwood',
      '316L Marine Stainless & Silicon Bronze',
      'Salt-Mist Resistant Anodized Louvers',
      'Board-Formed Coastal Concrete Piers',
    ],
    specs: [
      { label: 'Typology', value: 'Off-Grid Coastal Retreat' },
      { label: 'Access', value: '20-Min Private Boat from VI' },
      { label: 'Built Area', value: '510 sqm' },
      { label: 'Remote Telemetry', value: 'Starlink + App Power Diagnostics' },
      { label: 'Corrosion Standard', value: 'ISO 12944 C5-Marine' },
      { label: 'Completion', value: 'August 2023' },
    ],
    imageUrl: ilasheBeachHouseImg,
    galleryUrls: [ilasheBeachHouseImg, heroIkoyiVillaImg],
    architecturalSvgType: 'coastal',
  },
  {
    id: 'lekki-diaspora-residence',
    slug: 'lekki-diaspora-residence',
    title: 'Periwinkle Lagoon Smart Villa',
    category: 'Smart Villa',
    secondaryTag: 'Turnkey Diaspora Commission',
    year: '2023',
    location: 'Lekki Phase 1, Lagos',
    area: '560 sqm',
    certification: 'Flood-Resilient +1.8m Datum · Smart Home',
    summary:
      'A remotely commissioned family residence for a London-based Nigerian couple, featuring flood-resilient elevated podium engineering and full mobile-app home control.',
    challenge:
      'Commissioned remotely from London, the clients needed absolute transparency on material quality, protection against Lekki coastal flash flooding, and zero-maintenance security while abroad.',
    solution:
      'Raised the entire ground living datum +1.8 meters above street grade over an aerated undercroft. Delivered with bi-weekly 3D LiDAR/drone walkthroughs and an integrated "Away Mode" that cycles dehumidifiers, security cameras, and solar load balancing automatically.',
    sustainabilityMetrics: {
      solarMicrogrid: '24 kWp Roof + 60 kWh Storage',
      dieselReduction: '94% Solar Self-Consumption',
      acousticIsolation: '45 dB Triple-Gasket Windows',
      waterAutonomy: 'Automated Backwash Treatment Plant',
    },
    materials: [
      'Elevated Waterproofed Podium Concrete',
      'Thermally Modified Frake Timber Screens',
      'Local Terrazzo Monolithic Staircase',
      'Low-E Solar Control Laminated Glass',
    ],
    specs: [
      { label: 'Typology', value: 'Diaspora Turnkey Smart Home' },
      { label: 'Flood Datum', value: '+1.80m Above Road Crown' },
      { label: 'Built Area', value: '560 sqm' },
      { label: 'Client Location', value: 'London, UK / Lagos' },
      { label: 'Smart Ecosystem', value: 'Control4 + Remote Energy Twin' },
      { label: 'Completion', value: 'April 2023' },
    ],
    imageUrl: heroIkoyiVillaImg,
    galleryUrls: [heroIkoyiVillaImg, maitamaCompoundImg],
    architecturalSvgType: 'library',
  },
  {
    id: 'yaba-fintech-campus',
    slug: 'yaba-fintech-campus',
    title: 'Alara Lane Tech & Engineering Hub',
    category: 'Commercial Hub',
    secondaryTag: 'Zero-Downtime Workspace',
    year: '2022',
    location: 'Yaba / Victoria Island, Lagos',
    area: '1,420 sqm',
    certification: '99.999% Power Uptime · EDGE Advanced Green',
    summary:
      'A high-performance headquarters for a 180-person Lagos fintech engineering team, combining passive daylighting, acoustic focus pods, and a commercial solar microgrid.',
    challenge:
      'Skyrocketing diesel operating costs (₦8M+/month) and poor indoor air CO2 levels in conventional glass office towers were hurting engineering productivity.',
    solution:
      'Retrofitted an industrial frame with deep perforated shading fins that slash solar heat gain by 64%, paired with a 110 kWp rooftop solar-hybrid plant and CO2-demand-controlled fresh air ventilation.',
    sustainabilityMetrics: {
      solarMicrogrid: '110 kWp Commercial Microgrid',
      dieselReduction: '₦78M Annual OpEx Saved',
      acousticIsolation: 'STC-58 Engineering Focus Pods',
      waterAutonomy: '100% Rainwater Cooling Tower',
    },
    materials: [
      'Laser-Cut Anodized Aluminum Sun Fins',
      'Acoustic Recycled Textile Wall Baffles',
      'Polished Industrial Aggregate Concrete',
      'Locally Fabricated Steel & Iroko Workstations',
    ],
    specs: [
      { label: 'Typology', value: 'Commercial Tech Headquarters' },
      { label: 'Occupancy', value: '180+ Engineers & Operators' },
      { label: 'Built Area', value: '1,420 sqm' },
      { label: 'Power Uptime', value: '99.999% Verified SLA' },
      { label: 'Certification', value: 'IFC EDGE Advanced Green Building' },
      { label: 'Completion', value: 'October 2022' },
    ],
    imageUrl: viPenthouseImg,
    galleryUrls: [viPenthouseImg, maitamaCompoundImg],
    architecturalSvgType: 'pavilion',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  role: string;
  projectTitle: string;
  projectId: string;
  quote: string;
  outcome: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'adeyemi',
    name: 'Dr. Folake & Banji Adeyemi',
    initials: 'FA',
    role: 'Bourbon Road Villa Owners · Old Ikoyi',
    projectTitle: 'Bourbon Road Autonomous Villa',
    projectId: 'ikoyi-autonomous-villa',
    quote:
      'We have not bought a single litre of diesel in 14 months. Our home runs central cooling silently through the night on solar-lithium, and the acoustic glass completely blocks out neighborhood noise.',
    outcome: '100% zero-diesel operation · 28 dBA indoor silence',
  },
  {
    id: 'okonkwo',
    name: 'Chuka Okonkwo',
    initials: 'CO',
    role: 'Fintech Founder · Victoria Island',
    projectTitle: 'Adeola Odeku Sky Penthouse',
    projectId: 'vi-acoustic-penthouse',
    quote:
      'Tunde approaches architecture like a systems engineer. From 0ms power switchover to automated Harmattan air filtration and concealed walnut acoustics, my penthouse feels like Zurich in the middle of VI.',
    outcome: '0ms power transfer · STC-64 acoustic isolation',
  },
  {
    id: 'danmasani',
    name: 'Alhaji Ibrahim & Amina Danmasani',
    initials: 'ID',
    role: 'Aso Drive Compound Clients · Maitama, Abuja',
    projectTitle: 'Aso Drive Autonomous Compound',
    projectId: 'maitama-solar-compound',
    quote:
      'Even when Abuja hits 40°C in April, the rammed laterite walls and solar canopy keep our interiors naturally cool before the smart AC even kicks in. The craftsmanship is extraordinary.',
    outcome: '58% lower cooling load · 96% grid independence',
  },
  {
    id: 'nwosu',
    name: 'Kemi & Emeka Nwosu',
    initials: 'KN',
    role: 'Diaspora Clients (London, UK · Lekki Phase 1)',
    projectTitle: 'Periwinkle Lagoon Smart Villa',
    projectId: 'lekki-diaspora-residence',
    quote:
      'Building in Lagos while living in London used to terrify us. Tunde’s studio gave us bi-weekly 3D drone scans, transparent BOQ milestones, and a flood-proof smart home we monitor from our phones.',
    outcome: 'Delivered on budget remotely · +1.8m flood-safe datum',
  },
];

export interface ProcessPhase {
  step: string;
  title: string;
  duration: string;
  summary: string;
  deliverables: string[];
  detail: string;
}

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    step: '01',
    title: 'Site & Load Audit',
    duration: 'Weeks 1–3',
    summary:
      'Analyzing your plot topography, flood datum, acoustic environment, and 24-hour energy load profile.',
    deliverables: [
      'Flood-Level & Geotechnical Soil Verification',
      '24-Hour HVAC & Appliance kWh Energy Audit',
      'LASBCA / FCDA Setback & Regulatory Feasibility',
    ],
    detail:
      'Before sketching a single wall, we instrument your site in Lagos, Abuja, or the East. We measure street decibel levels, prevailing lagoon or savanna breezes, seasonal water-table depth, and your exact daytime/nighttime cooling loads.',
  },
  {
    step: '02',
    title: 'Autonomous Architecture',
    duration: 'Weeks 4–9',
    summary:
      'Co-designing tropical spatial form, passive cooling geometry, and invisible solar-lithium infrastructure.',
    deliverables: [
      '3D Architectural Massing & Tropical Sun-Path Study',
      'Solar Roof Array, Inverter Room & Borehole Schematics',
      'KNX / Lutron Smart Lighting, Climate & Security Plan',
    ],
    detail:
      'Solar panels, lithium battery banks, acoustic glazing, and water treatment plants are never bolted on as an afterthought. We design the roofline, plant rooms, and motorized timber shading as one unified architectural system.',
  },
  {
    step: '03',
    title: 'BOQ & Precision Spec',
    duration: 'Weeks 10–16',
    summary:
      'Locking in structural drawings, itemized Bills of Quantities (BOQ), and corrosion-grade material specifications.',
    deliverables: [
      'ARCON & COREN Stamped Construction Blueprints',
      'Inflation-Protected Itemized Bill of Quantities (BOQ)',
      'Physical Sample Box (Iroko, Granite, Acoustic Glass)',
    ],
    detail:
      'To protect your budget against market volatility, we produce exhaustive MEP, structural, and smart-wiring drawings alongside a locked, transparent BOQ and direct manufacturer procurement schedules.',
  },
  {
    step: '04',
    title: 'Turnkey & Telemetry',
    duration: 'Construction Phase',
    summary:
      'Rigorous on-site supervision, bi-weekly drone progress reports for Diaspora clients, and microgrid commissioning.',
    deliverables: [
      'Bi-Weekly Drone & 360° Video Site Walkthroughs',
      'Thermal Imaging, Acoustic dBA & Pressure Testing',
      '72-Hour Off-Grid Autonomy Stress Test & Handover',
    ],
    detail:
      'Whether you are five minutes away in Ikoyi or watching from London or Houston, you receive verifiable milestone telemetry. Before handover, we disconnect grid power for 72 hours to prove seamless autonomous operation.',
  },
];
