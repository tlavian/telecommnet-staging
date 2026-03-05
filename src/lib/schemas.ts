/**
 * TelecommNet.com — Centralized Schema Factory
 * Phase 2: Full JSON-LD @graph implementation for all 27 pages
 * 
 * Architecture: Person entity is the central @id node.
 * Every page schema references back via provider/author/creator.
 * 
 * Usage in any .astro page:
 *   import { buildSchema } from '../../lib/schemas';
 *   const schema = buildSchema.service({ name: '...', url: '...', ... });
 */

const BASE_URL = 'https://telecommnet.com';
const PERSON_ID = `${BASE_URL}/#person`;
const ORG_ID    = `${BASE_URL}/#org`;

// ─── Shared sub-objects ──────────────────────────────────────────────────────

export const PERSON_REF = { '@id': PERSON_ID };

export const PERSON_ENTITY = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Dr. Tal Lavian',
  givenName: 'Tal',
  familyName: 'Lavian',
  honorificPrefix: 'Dr.',
  honorificSuffix: 'Ph.D.',
  jobTitle: 'Telecommunications Expert Witness',
  description:
    'Dr. Tal Lavian is a telecommunications and network communications expert witness with a Ph.D. from UC Berkeley. He has testified in 100+ patent cases in U.S. federal courts, USPTO PTAB, and the ITC, with 120+ patents and 25+ peer-reviewed publications.',
  url: BASE_URL,
  telephone: '+1-408-209-9112',
  email: 'tlavian@telecommnet.com',
  image: `${BASE_URL}/wp-content/uploads/dr-tal-lavian.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Encino',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    '@id': 'https://berkeley.edu',
    name: 'University of California, Berkeley',
  },
  worksFor: {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'TelecommNet Engineering, Inc.',
    url: BASE_URL,
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Ph.D. in Computer Science',
      educationalLevel: 'Doctoral',
      recognizedBy: { '@id': 'https://berkeley.edu' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'membership',
      name: 'IEEE Senior Member',
      recognizedBy: { '@type': 'Organization', name: 'IEEE' },
    },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Expert Witness — Telecommunications and Network Communications',
    occupationalCategory: 'Legal Services',
    skills: 'Patent Litigation, PTAB, ITC, Telecommunications, Network Communications',
  },
  knowsAbout: [
    'Telecommunications',
    'Network Communications',
    'Internet Protocols',
    'TCP/IP',
    'VoIP',
    'Network Security',
    'Streaming Media',
    'Computer Networking',
    'Data Communications',
    'Mobile Wireless',
    'Routing and Switching',
    'Patent Litigation',
    'Expert Witness Testimony',
    'PTAB IPR Proceedings',
    'ITC Section 337',
  ],
  sameAs: [
    'https://www.linkedin.com/in/tallavian',
    'https://scholar.google.com/citations?user=tal-lavian',
    'https://www.researchgate.net/profile/Tal-Lavian',
    'https://www.academia.edu/TalLavian',
    'https://patents.justia.com/inventor/tal-lavian',
    'https://dl.acm.org/profile/tal-lavian',
    'https://ieeexplore.ieee.org/author/tal-lavian',
    'https://dblp.org/pid/tal-lavian',
  ],
};

export const ORG_ENTITY = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'TelecommNet Engineering, Inc.',
  url: BASE_URL,
  founder: PERSON_REF,
  logo: `${BASE_URL}/wp-content/uploads/telecommnet-logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-408-209-9112',
    email: 'tlavian@telecommnet.com',
    contactType: 'Expert Witness Engagement',
    areaServed: 'US',
  },
};

// ─── BreadcrumbList builder ──────────────────────────────────────────────────

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL + '/' },
      ...items.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: BASE_URL + crumb.url,
      })),
    ],
  };
}

// ─── Schema builders by page type ────────────────────────────────────────────

export const buildSchema = {

  /** Homepage: Person + ProfessionalService + WebSite + BreadcrumbList */
  homepage() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        ORG_ENTITY,
        {
          '@type': 'ProfessionalService',
          '@id': `${BASE_URL}/#service`,
          name: 'TelecommNet Expert Witness Services',
          description:
            'Expert witness and consulting services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, and computer networking for patent litigation in federal courts, USPTO PTAB, and ITC.',
          provider: PERSON_REF,
          url: BASE_URL,
          areaServed: { '@type': 'Country', name: 'United States' },
          serviceType: 'Expert Witness Consulting',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Expert Witness Practice Areas',
            itemListElement: [
              'Telecommunications Expert Witness',
              'Network Communications Expert Witness',
              'Internet Expert Witness',
              'VoIP Expert Witness',
              'Network Security Expert Witness',
              'Streaming Media Expert Witness',
              'Computer Networking Expert Witness',
              'Data Communications Expert',
              'Mobile Wireless Expert',
              'Routing & Switching Expert',
              'Network Management Expert Witness',
              'Networking Expert',
            ],
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: 'TelecommNet — Dr. Tal Lavian',
          url: BASE_URL,
          publisher: PERSON_REF,
          inLanguage: 'en-US',
        },
        breadcrumbs([]),
      ],
    };
  },

  /** About page: Person (expanded) + BreadcrumbList */
  about() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          ...PERSON_ENTITY,
          mainEntityOfPage: `${BASE_URL}/about-dr-lavian/`,
        },
        breadcrumbs([{ name: 'About Dr. Lavian', url: '/about-dr-lavian/' }]),
      ],
    };
  },

  /** Expert Witness hub: ProfessionalService + Service[] + BreadcrumbList */
  expertWitnessHub() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          name: 'Expert Witness Services — Dr. Tal Lavian',
          provider: PERSON_REF,
          url: `${BASE_URL}/communications-expert-witness/`,
          description:
            'Comprehensive expert witness services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, computer networking, and related fields for patent litigation and ITC proceedings.',
          areaServed: { '@type': 'Country', name: 'United States' },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Expert Witness Practice Areas',
            itemListElement: [
              { '@type': 'Service', name: 'Telecommunications Expert Witness', url: `${BASE_URL}/communications-expert-witness/telecommunications-expert-witness/` },
              { '@type': 'Service', name: 'Network Communications Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-communications-expert-witness/` },
              { '@type': 'Service', name: 'Internet Expert Witness', url: `${BASE_URL}/communications-expert-witness/internet-expert-witness/` },
              { '@type': 'Service', name: 'VoIP Expert Witness', url: `${BASE_URL}/communications-expert-witness/voip-expert-witness/` },
              { '@type': 'Service', name: 'Network Security Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-security-expert-witness/` },
              { '@type': 'Service', name: 'Streaming Media Expert Witness', url: `${BASE_URL}/communications-expert-witness/streaming-media-expert-witness/` },
              { '@type': 'Service', name: 'Computer Networking Expert Witness', url: `${BASE_URL}/communications-expert-witness/computer-networking-expert-witness/` },
              { '@type': 'Service', name: 'Data Communications Expert', url: `${BASE_URL}/communications-expert-witness/data-communications-expert/` },
              { '@type': 'Service', name: 'Mobile Wireless Expert', url: `${BASE_URL}/communications-expert-witness/mobile-wireless-expert/` },
              { '@type': 'Service', name: 'Routing & Switching Expert', url: `${BASE_URL}/communications-expert-witness/routing-switching-expert/` },
              { '@type': 'Service', name: 'Network Management Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-management-expert-witness/` },
              { '@type': 'Service', name: 'Networking Expert', url: `${BASE_URL}/communications-expert-witness/networking-expert/` },
            ],
          },
        },
        breadcrumbs([{ name: 'Expert Witness Services', url: '/communications-expert-witness/' }]),
      ],
    };
  },

  /** Expertise sub-page: Service + FAQPage + BreadcrumbList */
  expertisePage(opts: {
    name: string;
    slug: string;
    description: string;
    serviceType: string;
    keywords: string[];
    faqs: { q: string; a: string }[];
    breadcrumbLabel: string;
  }) {
    const pageUrl = `${BASE_URL}/communications-expert-witness/${opts.slug}/`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: opts.name,
          serviceType: opts.serviceType,
          description: opts.description,
          provider: PERSON_REF,
          url: pageUrl,
          areaServed: { '@type': 'Country', name: 'United States' },
          keywords: opts.keywords.join(', '),
        },
        {
          '@type': 'FAQPage',
          mainEntity: opts.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: { '@type': 'Answer', text: faq.a },
          })),
        },
        breadcrumbs([
          { name: 'Expert Witness Services', url: '/communications-expert-witness/' },
          { name: opts.breadcrumbLabel, url: `/communications-expert-witness/${opts.slug}/` },
        ]),
      ],
    };
  },

  /** Client pages (Law Firm / Corporate): ProfessionalService + BreadcrumbList */
  clientPage(opts: { name: string; slug: string; description: string; breadcrumbLabel: string }) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          name: opts.name,
          description: opts.description,
          provider: PERSON_REF,
          url: `${BASE_URL}/${opts.slug}/`,
          areaServed: { '@type': 'Country', name: 'United States' },
          serviceType: 'Expert Witness Consulting',
        },
        breadcrumbs([{ name: opts.breadcrumbLabel, url: `/${opts.slug}/` }]),
      ],
    };
  },

  /** Publications: CollectionPage + ScholarlyArticle[] + BreadcrumbList */
  publications() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Scientific Publications — Dr. Tal Lavian',
          description:
            'Peer-reviewed scientific publications by Dr. Tal Lavian in IEEE, ACM, and other journals, covering telecommunications, network communications, and computer science.',
          url: `${BASE_URL}/scientific-publications/`,
          author: PERSON_REF,
          about: 'Telecommunications and Network Communications Research',
          inLanguage: 'en-US',
        },
        {
          '@type': 'ItemList',
          name: 'Publications by Dr. Tal Lavian',
          description: '25+ peer-reviewed publications in IEEE, ACM, and related venues.',
          numberOfItems: 25,
          itemListElement: [
            {
              '@type': 'ScholarlyArticle',
              position: 1,
              name: 'Research Publication',
              author: PERSON_REF,
              publisher: { '@type': 'Organization', name: 'IEEE / ACM' },
              about: 'Telecommunications and Network Communications',
            },
          ],
        },
        breadcrumbs([{ name: 'Scientific Publications', url: '/scientific-publications/' }]),
      ],
    };
  },

  /** Talks: CollectionPage + Event[] + BreadcrumbList */
  talks() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Talks & Presentations — Dr. Tal Lavian',
          description:
            'Conference presentations and technical talks by Dr. Tal Lavian at IEEE, ACM, UC Berkeley, DARPA events, and industry conferences on telecommunications and networking.',
          url: `${BASE_URL}/talks-presentations/`,
          author: PERSON_REF,
        },
        {
          '@type': 'ItemList',
          name: 'Presentations by Dr. Tal Lavian',
          itemListElement: [
            {
              '@type': 'Event',
              position: 1,
              name: 'Technical Presentation',
              performer: PERSON_REF,
              organizer: { '@type': 'Organization', name: 'IEEE / ACM / DARPA' },
              about: 'Telecommunications and Network Communications',
              location: { '@type': 'Place', name: 'Academic / Industry Conference' },
            },
          ],
        },
        breadcrumbs([{ name: 'Talks & Presentations', url: '/talks-presentations/' }]),
      ],
    };
  },

  /** Cases: CollectionPage + BreadcrumbList */
  cases() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Expert Witness Testimony Cases — Dr. Tal Lavian',
          description:
            'Expert witness testimony cases by Dr. Tal Lavian. 100+ cases in U.S. federal district courts, USPTO PTAB, and ITC involving telecommunications and network communications patent disputes.',
          url: `${BASE_URL}/cases-expert-witness-testimony/`,
          author: PERSON_REF,
          about: 'Patent Litigation Expert Witness Testimony',
        },
        breadcrumbs([{ name: 'Cases', url: '/cases-expert-witness-testimony/' }]),
      ],
    };
  },

  /** Patents: CollectionPage + CreativeWork[] + BreadcrumbList */
  patents() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Patents — Dr. Tal Lavian',
          description:
            '120+ patents by Dr. Tal Lavian covering telecommunications, network communications, and computer science innovations including 60+ pro-se prosecutions.',
          url: `${BASE_URL}/patents/`,
          author: PERSON_REF,
        },
        {
          '@type': 'ItemList',
          name: 'Patent Portfolio — Dr. Tal Lavian',
          numberOfItems: 120,
          itemListElement: [
            {
              '@type': 'CreativeWork',
              position: 1,
              '@id': `${BASE_URL}/patents/#portfolio`,
              name: 'Patent Portfolio',
              creator: PERSON_REF,
              about: 'Telecommunications and Network Communications Innovations',
            },
          ],
        },
        breadcrumbs([{ name: 'Patents', url: '/patents/' }]),
      ],
    };
  },

  /** Contact: ContactPage + Person + BreadcrumbList */
  contact() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contact Dr. Tal Lavian — Expert Witness Services',
          description:
            'Contact Dr. Tal Lavian for telecommunications and network communications expert witness and consulting services.',
          url: `${BASE_URL}/contact/`,
          mainEntity: {
            ...PERSON_ENTITY,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-408-209-9112',
              email: 'tlavian@telecommnet.com',
              contactType: 'Expert Witness Engagement',
              areaServed: 'US',
              availableLanguage: 'English',
            },
          },
        },
        breadcrumbs([{ name: 'Contact', url: '/contact/' }]),
      ],
    };
  },

  /** Legal / utility pages: WebPage + BreadcrumbList */
  webPage(opts: { name: string; slug: string; description: string; breadcrumbLabel: string }) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          name: opts.name,
          description: opts.description,
          url: `${BASE_URL}/${opts.slug}/`,
          isPartOf: { '@id': `${BASE_URL}/#website` },
          inLanguage: 'en-US',
          dateModified: new Date().toISOString().split('T')[0],
        },
        breadcrumbs([{ name: opts.breadcrumbLabel, url: `/${opts.slug}/` }]),
      ],
    };
  },

  /** Single publication page */
  publication(opts: { title: string; slug: string; year?: string; venue?: string }) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ScholarlyArticle',
          headline: opts.title,
          author: PERSON_REF,
          datePublished: opts.year || '2000',
          publisher: { '@type': 'Organization', name: opts.venue || 'Academic Venue' },
          url: `${BASE_URL}/publication/${opts.slug}/`,
          isPartOf: { '@type': 'CollectionPage', url: `${BASE_URL}/scientific-publications/` },
        },
        breadcrumbs([
          { name: 'Scientific Publications', url: '/scientific-publications/' },
          { name: opts.title, url: `/publication/${opts.slug}/` },
        ]),
      ],
    };
  },

};

/** Serialize schema to script tag string for Astro <Fragment> */
export function schemaScript(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 0)}</script>`;
}
