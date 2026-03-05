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
    'https://scholar.google.com/citations?user=Do_JNPQAAAAJ',
    'https://www.researchgate.net/profile/Tal-Lavian',
    'https://berkeley.academia.edu/TalLavian',
    'https://patents.justia.com/inventor/tal-lavian',
    'https://dl.acm.org/profile/81100233720',
    'https://ieee-collabratec.ieee.org/app/myprofile/about',
    'https://dblp.org/search',
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
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero-banner h1', '.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
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
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
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
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Expert Witness Practice Areas',
            itemListElement: [
              { '@type': 'Service', name: 'Telecommunications Expert Witness', url: `${BASE_URL}/communications-expert-witness/telecommunications-expert-witness/` },
              { '@type': 'Service', name: 'Network Communications Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-communications-expert-witness/` },
              { '@type': 'Service', name: 'Internet Expert Witness', url: `${BASE_URL}/communications-expert-witness/internet-expert-witness/` },
              { '@type': 'Service', name: 'VoIP Expert Witness', url: `${BASE_URL}/communications-expert-witness/voice-over-ip-voip-expert/` },
              { '@type': 'Service', name: 'Network Security Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-security-expert/` },
              { '@type': 'Service', name: 'Streaming Media Expert Witness', url: `${BASE_URL}/communications-expert-witness/streaming-media-audio-and-video-conferencing-expert/` },
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
    const publicationEntries = [
      {
        position: 1,
        name: 'Communications Architecture — Grid Computing',
        datePublished: '2013',
        publisher: "Scholar's Press",
        isbn: '978-3-639-51098-0',
      },
      {
        position: 2,
        name: 'Understanding Six Models of Advanced R&D',
        datePublished: '2015-06',
        publisher: 'ASEE Annual Conference and Exposition',
        coAuthors: ['Ikhlaq Sidhu', 'Victoria Howell'],
      },
      {
        position: 3,
        name: 'Applications Drive Secure Lightpath Creation Across Heterogeneous Domains',
        datePublished: '2006-03',
        publisher: 'IEEE Communications Magazine',
        volumeNumber: '44',
        issueNumber: '3',
      },
      {
        position: 4,
        name: 'Data Communications Architecture Grid Computing',
        datePublished: '2006-01',
        publisher: 'University of California, Berkeley',
        coAuthors: ['Randy H. Katz'],
      },
      {
        position: 5,
        name: 'Information Switching Networks',
        datePublished: '2005-12',
        publisher: 'WITSP 2005 — 4th Workshop on Internet, Telecommunications and Signal Processing',
        coAuthors: ['Doan B. Hoang'],
      },
      {
        position: 6,
        name: 'Grid Network Services',
        datePublished: '2005',
        publisher: 'Global Grid Forum (GGF)',
      },
      {
        position: 7,
        name: 'Grid Computing — Impact on Network Operators',
        datePublished: '2005',
        publisher: 'IEEE Hot Interconnects, Stanford University',
      },
      {
        position: 8,
        name: 'Project DRAC: Creating an Applications-Aware Network',
        datePublished: '2005-02',
        publisher: 'Nortel Technical Journal',
        coAuthors: ['Franco Travostino', 'Robert Keates', 'Inder Monga', 'Bill Schofield'],
      },
      {
        position: 9,
        name: 'Data Intensive Grid Service on Optical Networks',
        datePublished: '2004',
        publisher: 'IEEE/ACM CCGrid 2004',
      },
      {
        position: 10,
        name: 'Quality of Control Loop on Programmable Routers',
        datePublished: '2004-11',
        publisher: 'IEEE ICON 2004 — 12th IEEE International Conference on Networks',
      },
      {
        position: 11,
        name: 'Large-Scale Grid Data Networks',
        datePublished: '2004-10',
        publisher: 'GridNets 2004',
      },
      {
        position: 12,
        name: 'Optical Network Infrastructure for Grid',
        datePublished: '2004-08',
        publisher: 'Global Grid Forum (GGF) GHPN Standard GFD-I.036',
      },
    ];

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
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Publications by Dr. Tal Lavian',
          description: '25+ peer-reviewed publications in IEEE, ACM, and related venues.',
          numberOfItems: 25,
          itemListElement: publicationEntries.map(pub => ({
            '@type': 'ScholarlyArticle',
            position: pub.position,
            headline: pub.name,
            name: pub.name,
            author: PERSON_REF,
            datePublished: pub.datePublished,
            publisher: { '@type': 'Organization', name: pub.publisher },
            about: 'Telecommunications and Network Communications',
            inLanguage: 'en-US',
          })),
        },
        breadcrumbs([{ name: 'Scientific Publications', url: '/scientific-publications/' }]),
      ],
    };
  },

  /** Talks: CollectionPage + EducationEvent[] + BreadcrumbList */
  talks() {
    const presentationEntries = [
      {
        position: 1,
        name: 'Lambda Data Grid: An Agile Optical Platform for Grid Computing and Data-intensive Applications',
        organizer: 'IEEE / DARPA',
        about: 'Grid Computing, Optical Networks',
      },
      {
        position: 2,
        name: 'Workflow Integrated Network Resource Orchestration',
        organizer: 'Global Grid Forum (GGF)',
        about: 'Network Resource Orchestration, Workflow Integration',
      },
      {
        position: 3,
        name: 'DWDM-RAM: DARPA-Sponsored Research for Data Intensive Service on Demand',
        organizer: 'DARPA / SLAC National Accelerator Laboratory',
        about: 'DWDM, Optical Networks, Data-Intensive Services',
      },
      {
        position: 4,
        name: 'Impact of Grid Computing on Network Operators and HW Vendors',
        organizer: 'IEEE Hot Interconnects, Stanford University',
        about: 'Grid Computing, Network Operators',
      },
      {
        position: 5,
        name: 'Web Services and OGSA',
        organizer: 'Grid Computing Conference',
        about: 'Web Services, Open Grid Services Architecture',
      },
      {
        position: 6,
        name: 'A Platform for Large-Scale Grid Data Service on Dynamic High-Performance Networks',
        organizer: 'GridNets Conference',
        about: 'Grid Data Services, High-Performance Networks',
      },
      {
        position: 7,
        name: 'Grid Optical Network Service Architecture for Data Intensive Applications',
        organizer: 'OFC Conference',
        about: 'Optical Network Services, Grid Computing',
      },
      {
        position: 8,
        name: 'Optical Networking and DWDM',
        organizer: 'Industry Conference',
        about: 'Optical Networking, Dense Wavelength Division Multiplexing',
      },
      {
        position: 9,
        name: 'A Platform for Data Intensive Services Enabled by Next Generation Dynamic Optical Networks',
        organizer: 'IEEE Globecom',
        about: 'Data-Intensive Services, Next-Generation Optical Networks',
      },
      {
        position: 10,
        name: 'Optical Networks — UC Berkeley Seminar',
        organizer: 'University of California, Berkeley',
        about: 'Optical Networks, Telecommunications',
      },
      {
        position: 11,
        name: 'Application-engaged Dynamic Orchestration of Optical Network Resources',
        organizer: 'Optical Workshop',
        about: 'Dynamic Orchestration, Optical Network Resources',
      },
      {
        position: 12,
        name: 'A Grid Proxy Architecture for Network Resources',
        organizer: 'Global Grid Forum (GGF)',
        about: 'Grid Proxy, Network Resource Management',
      },
      {
        position: 13,
        name: 'Technologies Shaped Our Society — UC Berkeley Seminar',
        organizer: 'University of California, Berkeley',
        about: 'Technology and Society, Telecommunications History',
      },
      {
        position: 14,
        name: 'Open Programmable Architecture for Java-enabled Network Devices',
        organizer: 'IEEE / Industry Conference',
        about: 'Programmable Networks, Java, Active Networking',
      },
      {
        position: 15,
        name: 'Active Nets Technology Transfer through High-Performance Network Devices',
        organizer: 'DARPA',
        about: 'Active Networks, Technology Transfer',
      },
    ];

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
          about: 'Telecommunications and Network Communications Research Presentations',
          inLanguage: 'en-US',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Presentations by Dr. Tal Lavian',
          description: '30+ conference presentations and technical talks at IEEE, ACM, DARPA, and UC Berkeley.',
          numberOfItems: 30,
          itemListElement: presentationEntries.map(pres => ({
            '@type': 'EducationEvent',
            position: pres.position,
            name: pres.name,
            performer: PERSON_REF,
            organizer: { '@type': 'Organization', name: pres.organizer },
            about: pres.about,
            eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
            inLanguage: 'en-US',
          })),
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
