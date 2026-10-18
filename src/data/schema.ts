/**
 * JSON-LD schema builders — Article/Review/FAQPage/BreadcrumbList/Organization.
 * Every money page gets: Review (where applicable) + FAQPage + BreadcrumbList.
 */
import { site } from './site';
import type { VpnProvider } from './vpns';

const org = {
  '@type': 'Organization',
  '@id': `${site.url}/#organisasjon`,
  name: site.name,
  url: site.url,
  email: site.email,
  logo: `${site.url}/favicon.svg`,
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  ...org,
};

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#nettside`,
    url: site.url,
    name: site.name,
    inLanguage: 'nb-NO',
    publisher: { '@id': `${site.url}/#organisasjon` },
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export interface Faq {
  question: string;
  answer: string;
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/**
 * Review schema for a VPN review page.
 * `reviewBody` = short editorial summary. Rating is our editorial opinion.
 * NOTE: only claim "tested" when testedByUs is true with published dates.
 */
export function reviewSchema(vpn: VpnProvider, pageUrl: string, reviewBody: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `${pageUrl}#anmeldelse`,
    // itemReviewed as Service (not Product): a VPN subscription is a service,
    // and we publish no real on-page offers and no multi-reviewer aggregate
    // ratings — inventing either would trip Google's Product-snippet rules
    // (GSC flagged "offers/review/aggregateRating should be specified").
    itemReviewed: {
      '@type': 'Service',
      name: `${vpn.name} VPN`,
      serviceType: 'VPN-tjeneste',
      provider: { '@type': 'Organization', name: vpn.name },
    },
    author: {
      '@type': 'Organization',
      '@id': `${site.url}/#organisasjon`,
      name: site.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: vpn.rating.toFixed(1),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody,
    inLanguage: 'nb-NO',
    publisher: { '@id': `${site.url}/#organisasjon` },
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    image: opts.image ?? `${site.url}/og-default.webp`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    inLanguage: 'nb-NO',
    author: { '@id': `${site.url}/#organisasjon` },
    publisher: { '@id': `${site.url}/#organisasjon` },
  };
}
