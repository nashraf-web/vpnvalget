/**
 * VPN provider data for VPNValget (vpnvalget.com).
 *
 * HONESTY RULES (site policy):
 * - Ratings are EDITORIAL OPINIONS ("vår vurdering"), clearly labeled as such.
 * - Prices are "fra" (from) guideline prices converted from official USD pricing,
 *   always paired with the disclaimer "Veiledende priser – sjekk leverandørens nettside".
 * - We do NOT claim own speed tests. Test status is tracked per provider in
 *   `testedByUs` (false until real Oslo-server tests are published with dates).
 * - Server counts etc. are providers' own published figures, labeled accordingly.
 */

export interface VpnProvider {
  name: string;
  slug: string;
  /** internal affiliate slug for /go/{brand} */
  goSlug: string;
  /** Editorial rating out of 5 — OUR opinion, labeled "Vår vurdering" */
  rating: number;
  order: number;
  /** "Best for X" category badge */
  bestFor: string;
  /** Guideline price in NOK/month on longest plan — "fra" price */
  priceNokFrom: number;
  moneyBackDays: number;
  maxDevices: string;
  servers: string;
  countries: string;
  protocols: string[];
  jurisdiction: string;
  noLogsAudit: string;
  norwayServers: string;
  pros: string[];
  cons: string[];
  features: string[];
  /** Have we published our own Oslo-based tests? */
  testedByUs: boolean;
  /** Official site (placeholder target for /go/ until Compado links are live) */
  officialUrl: string;
  summary: string;
}

export const vpns: VpnProvider[] = [
  {
    name: 'NordVPN',
    slug: 'nordvpn',
    goSlug: 'nordvpn',
    rating: 4.9,
    order: 1,
    bestFor: 'Best totalt',
    priceNokFrom: 39,
    moneyBackDays: 30,
    maxDevices: '10',
    servers: '8 000+ (ifølge leverandøren)',
    countries: '165+ land',
    protocols: ['NordLynx', 'OpenVPN', 'IKEv2'],
    jurisdiction: 'Panama',
    noLogsAudit: 'Ja – uavhengig revidert flere ganger',
    norwayServers: 'Servere i Oslo (ifølge leverandøren)',
    pros: [
      'Svært stort servernettverk med servere i Norge',
      'Uavhengig reviderte retningslinjer mot logging',
      'Rask NordLynx-protokoll',
      'Fungerer godt med norske og internasjonale strømmetjenester',
      'Trusselbeskyttelse mot skadevare og sporere',
    ],
    cons: [
      'Lengste abonnement gir best pris – månedsprisen er høyere',
      'Mange funksjoner kan virke overveldende for nybegynnere',
    ],
    features: [
      'Kill switch',
      'Doble VPN-servere',
      'Trusselbeskyttelse',
      'Meshnet',
      'Dedikert IP (tillegg)',
    ],
    testedByUs: false,
    officialUrl: 'https://nordvpn.com',
    summary:
      'NordVPN er vårt førstevalg for Norge takket være kombinasjonen av stort servernettverk, dokumentert personvern og god ytelse på strømmetjenester.',
  },
  {
    name: 'Surfshark',
    slug: 'surfshark',
    goSlug: 'surfshark',
    rating: 4.7,
    order: 2,
    bestFor: 'Best på pris',
    priceNokFrom: 23,
    moneyBackDays: 30,
    maxDevices: 'Ubegrenset',
    servers: '3 200+ (ifølge leverandøren)',
    countries: '100 land',
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    jurisdiction: 'Nederland',
    noLogsAudit: 'Ja – uavhengig revidert',
    norwayServers: 'Servere i Norge (ifølge leverandøren)',
    pros: [
      'Ubegrenset antall enheter på ett abonnement',
      'Lavest veiledende pris i testen',
      'Godt utvalg av servere, inkludert Norge',
      'CleanWeb blokkerer annonser og sporere',
    ],
    cons: [
      'Noe færre servere enn de største konkurrentene',
      'Kundeservice kan ha ventetid i travle perioder',
    ],
    features: [
      'Kill switch',
      'CleanWeb (annonseblokkering)',
      'MultiHop',
      'Camouflage-modus',
      'Statisk IP (tillegg)',
    ],
    testedByUs: false,
    officialUrl: 'https://surfshark.com',
    summary:
      'Surfshark gir mest VPN for pengene: ubegrenset antall enheter og lav pris, uten at personvern eller funksjoner ofres.',
  },
  {
    name: 'ExpressVPN',
    slug: 'expressvpn',
    goSlug: 'expressvpn',
    rating: 4.6,
    order: 3,
    bestFor: 'Best for strømming',
    priceNokFrom: 69,
    moneyBackDays: 30,
    maxDevices: '8',
    servers: '3 000+ (ifølge leverandøren)',
    countries: '105 land',
    protocols: ['Lightway', 'OpenVPN', 'IKEv2'],
    jurisdiction: 'De britiske Jomfruøyer',
    noLogsAudit: 'Ja – uavhengig revidert',
    norwayServers: 'Servere i Norge (ifølge leverandøren)',
    pros: [
      'Svært brukervennlige apper på alle plattformer',
      'Pålitelig tilgang til internasjonale strømmetjenester',
      'Egen Lightway-protokoll med god ytelse',
      'TrustedServer-teknologi (kun RAM-servere)',
    ],
    cons: [
      'Høyere veiledende pris enn konkurrentene',
      'Færre samtidige enheter enn Surfshark',
    ],
    features: [
      'Kill switch (Network Lock)',
      'TrustedServer (RAM)',
      'Split tunneling',
      'Privat DNS på hver server',
      'MedieStreamer for smart-TV',
    ],
    testedByUs: false,
    officialUrl: 'https://www.expressvpn.com',
    summary:
      'ExpressVPN er det enkleste valget for den som vil ha noe som bare fungerer – spesielt til strømming – men prisen er høyere.',
  },
  {
    name: 'Proton VPN',
    slug: 'proton-vpn',
    goSlug: 'protonvpn',
    rating: 4.5,
    order: 4,
    bestFor: 'Best for personvern',
    priceNokFrom: 38,
    moneyBackDays: 30,
    maxDevices: '10',
    servers: '8 600+ (ifølge leverandøren)',
    countries: '110+ land',
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2', 'Stealth'],
    jurisdiction: 'Sveits',
    noLogsAudit: 'Ja – uavhengig revidert, åpen kildekode',
    norwayServers: 'Servere i Norge (ifølge leverandøren)',
    pros: [
      'Sveitsisk jurisdiksjon med sterkt personvern',
      'Åpen kildekode og uavhengige revisjoner',
      'Gratisabonnement tilgjengelig (begrenset)',
      'Secure Core-servere for ekstra beskyttelse',
    ],
    cons: [
      'Noe høyere pris på korte abonnement',
      'Gratisversjonen er hastighetsbegrenset',
    ],
    features: [
      'Kill switch',
      'Secure Core',
      'NetShield (annonseblokkering)',
      'Tor over VPN',
      'Åpen kildekode',
    ],
    testedByUs: false,
    officialUrl: 'https://protonvpn.com',
    summary:
      'Proton VPN er valget for den personvernbevisste: sveitsisk base, åpen kildekode og dokumenterte revisjoner.',
  },
  {
    name: 'CyberGhost',
    slug: 'cyberghost',
    goSlug: 'cyberghost',
    rating: 4.3,
    order: 5,
    bestFor: 'Lengst angrefrist',
    priceNokFrom: 23,
    moneyBackDays: 45,
    maxDevices: '7',
    servers: '11 500+ (ifølge leverandøren)',
    countries: '100 land',
    protocols: ['WireGuard', 'OpenVPN', 'IKEv2'],
    jurisdiction: 'Romania',
    noLogsAudit: 'Ja – uavhengig revidert',
    norwayServers: 'Servere i Norge (ifølge leverandøren)',
    pros: [
      '45 dagers pengene-tilbake-garanti – lengst i testen',
      'Spesialservere optimalisert for strømming',
      'Enkelt grensesnitt for nybegynnere',
    ],
    cons: [
      'Noe varierende ytelse på fjerntliggende servere (ifølge uavhengige tester)',
      'Færre avanserte funksjoner enn toppkonkurrentene',
    ],
    features: [
      'Kill switch',
      'Strømmeoptimaliserte servere',
      'Annonseblokkering',
      'Dedikert IP (tillegg)',
    ],
    testedByUs: false,
    officialUrl: 'https://www.cyberghostvpn.com',
    summary:
      'CyberGhost passer for nybegynnere som vil prøve VPN risikofritt med markedets lengste angrefrist.',
  },
  {
    name: 'Mullvad',
    slug: 'mullvad',
    goSlug: 'mullvad',
    rating: 4.4,
    order: 6,
    bestFor: 'Best for anonymitet',
    priceNokFrom: 55,
    moneyBackDays: 30,
    maxDevices: '5',
    servers: '700+ (ifølge leverandøren)',
    countries: '45+ land',
    protocols: ['WireGuard', 'OpenVPN'],
    jurisdiction: 'Sverige',
    noLogsAudit: 'Ja – uavhengig revidert',
    norwayServers: 'Servere i Norge (ifølge leverandøren)',
    pros: [
      'Ingen e-post eller personopplysninger kreves ved registrering',
      'Fast, transparent pris uten lokketilbud',
      'Sterk merittliste for personvern',
    ],
    cons: [
      'Ingen rabatterte langtidsabonnement',
      'Mindre servernettverk enn konkurrentene',
      'Begrenset for strømming av geoblokkert innhold',
    ],
    features: [
      'Kill switch',
      'Anonyme kontoer',
      'Multihop',
      'DAITA-beskyttelse',
    ],
    testedByUs: false,
    officialUrl: 'https://mullvad.net',
    summary:
      'Mullvad er for den som setter anonymitet høyest: ingen personopplysninger, fast pris og dokumentert personvern.',
  },
];

export const vpnBySlug = (slug: string): VpnProvider | undefined =>
  vpns.find((v) => v.slug === slug || v.goSlug === slug);

export const topVpns = [...vpns].sort((a, b) => a.order - b.order);
