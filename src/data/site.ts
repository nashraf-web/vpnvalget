/**
 * Site-wide config: brand, locales, affiliate link mapping.
 *
 * AFFILIATE NOTE: /go/{brand} redirects to affiliate tracking URLs where available,
 * otherwise to providers' official sites. The /go/ structure stays identical.
 */
export const site = {
  name: 'VPNValget',
  domain: 'vpnvalget.com',
  url: 'https://vpnvalget.com',
  tagline: 'Norges ærlige VPN-guide',
  email: 'contact@vpnvalget.com',
  locale: 'nb-NO' as const,
  updatedYear: 2026,
};

export type Locale = 'no' | 'se' | 'dk' | 'de';

export const locales: Record<
  Locale,
  { label: string; lang: string; hreflang: string; ready: boolean }
> = {
  no: { label: 'Norsk', lang: 'nb-NO', hreflang: 'nb', ready: true },
  se: { label: 'Svenska', lang: 'sv-SE', hreflang: 'sv', ready: false },
  dk: { label: 'Dansk', lang: 'da-DK', hreflang: 'da', ready: false },
  de: { label: 'Deutsch', lang: 'de-DE', hreflang: 'de', ready: false },
};

/** Affiliate targets — NordVPN is live via Nord Security (aff_id 158881). Others are placeholders until Compado/other programs approve. */
export const affiliateTargets: Record<string, string> = {
  nordvpn: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=158881&url_id=902',
  surfshark: 'https://surfshark.com',
  expressvpn: 'https://www.expressvpn.com',
  protonvpn: 'https://protonvpn.com',
  cyberghost: 'https://www.cyberghostvpn.com',
  mullvad: 'https://mullvad.net',
};

export const goUrl = (brand: string): string => `/go/${brand}`;

/**
 * Analytics & site verification — fill in after accounts are created.
 * Leave empty strings to disable. GA4 script only renders when an ID is set.
 */
export const analytics = {
  /** e.g. 'G-XXXXXXXXXX' */
  ga4MeasurementId: 'G-KN1EL14532',
  /** Google Search Console HTML-tag verification content value */
  googleSiteVerification: '',
  /** Bing Webmaster Tools verification content value */
  bingSiteVerification: '',
};
