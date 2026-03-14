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
    skills: [
      'Patent Litigation',
      'PTAB',
      'ITC',
      'Telecommunications',
      'Network Communications',
    ],
  },
  knowsAbout: [
    { '@type': 'Thing', name: 'Telecommunications', sameAs: 'https://en.wikipedia.org/wiki/Telecommunications' },
    { '@type': 'Thing', name: 'Computer network', sameAs: 'https://en.wikipedia.org/wiki/Computer_network' },
    { '@type': 'Thing', name: 'Internet protocol suite', sameAs: 'https://en.wikipedia.org/wiki/Internet_protocol_suite' },
    { '@type': 'Thing', name: 'Voice over IP', sameAs: 'https://en.wikipedia.org/wiki/Voice_over_IP' },
    { '@type': 'Thing', name: 'Network security', sameAs: 'https://en.wikipedia.org/wiki/Network_security' },
    { '@type': 'Thing', name: 'Streaming media', sameAs: 'https://en.wikipedia.org/wiki/Streaming_media' },
    { '@type': 'Thing', name: 'Ethernet', sameAs: 'https://en.wikipedia.org/wiki/Ethernet' },
    { '@type': 'Thing', name: 'Data communication', sameAs: 'https://en.wikipedia.org/wiki/Data_communication' },
    { '@type': 'Thing', name: 'Cloud computing', sameAs: 'https://en.wikipedia.org/wiki/Cloud_computing' },
    { '@type': 'Thing', name: 'Wireless network', sameAs: 'https://en.wikipedia.org/wiki/Wireless_network' },
    { '@type': 'Thing', name: 'Wi-Fi', sameAs: 'https://en.wikipedia.org/wiki/Wi-Fi' },
    { '@type': 'Thing', name: 'Bluetooth', sameAs: 'https://en.wikipedia.org/wiki/Bluetooth' },
    { '@type': 'Thing', name: 'Routing', sameAs: 'https://en.wikipedia.org/wiki/Routing' },
    { '@type': 'Thing', name: 'Network switch', sameAs: 'https://en.wikipedia.org/wiki/Network_switch' },
    { '@type': 'Thing', name: 'Software-defined networking', sameAs: 'https://en.wikipedia.org/wiki/Software-defined_networking' },
    { '@type': 'Thing', name: 'Quality of service', sameAs: 'https://en.wikipedia.org/wiki/Quality_of_service' },
    { '@type': 'Thing', name: 'Network management', sameAs: 'https://en.wikipedia.org/wiki/Network_management' },
    { '@type': 'Thing', name: 'Instant messaging', sameAs: 'https://en.wikipedia.org/wiki/Instant_messaging' },
    { '@type': 'Thing', name: 'Patent infringement', sameAs: 'https://en.wikipedia.org/wiki/Patent_infringement' },
    { '@type': 'Thing', name: 'Expert witness', sameAs: 'https://en.wikipedia.org/wiki/Expert_witness' },
  ],
  sameAs: [
    'https://www.linkedin.com/in/tallavian',
    'https://x.com/tlavian',
    'https://www.facebook.com/tal.lavianwork',
    'https://scholar.google.com/citations?user=Do_JNPQAAAAJ',
    'https://www.researchgate.net/profile/Tal-Lavian',
    'https://berkeley.academia.edu/TalLavian',
    'https://patents.justia.com/inventor/tal-lavian',
    'https://dl.acm.org/profile/81100233720',
    'https://dblp.org/pid/55/6412.html',
    'https://californiaconsultants.org/members/tal-lavian/',
    'https://www.ratemyprofessors.com/professor/1813887',
  ],
  knowsLanguage: ['en', 'he'],
  memberOf: [
    { '@type': 'Organization', name: 'IEEE', url: 'https://www.ieee.org' },
    { '@type': 'Organization', name: 'ACM', url: 'https://www.acm.org' },
  ],
  award: [
    'Nortel Networks Top Talent Award',
    'Nortel Networks Top Inventor Award',
    'IEEE Certified Wireless Communications Engineer (WCET)',
    'Toastmasters International Best Speaker Award',
    'IEEE & ICE Best Paper Award',
  ],
  inventorOf: {
    '@type': 'CreativeWork',
    name: 'Patent Portfolio — Dr. Tal Lavian',
    url: `${BASE_URL}/patents/`,
    description: '120+ patents in telecommunications, network communications, and computer science.',
  },
  authorOf: {
    '@type': 'CreativeWork',
    name: 'Scientific Publications — Dr. Tal Lavian',
    url: `${BASE_URL}/scientific-publications/`,
    description: '25+ peer-reviewed publications in IEEE, ACM, and related venues.',
  },
};

export const ORG_ENTITY = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'TelecommNet Engineering, Inc.',
  url: BASE_URL,
  founder: PERSON_REF,
  logo: `${BASE_URL}/wp-content/uploads/2022/05/telecommnet-logo.webp`,
  hasMap: 'https://maps.app.goo.gl/YKkzUgJggPWzsDjX6',
  areaServed: { '@type': 'Country', name: 'United States' },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-408-209-9112',
    email: 'tlavian@telecommnet.com',
    contactType: 'Expert Witness Engagement',
    areaServed: { '@type': 'Country', name: 'United States' },
    availableLanguage: 'English',
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
          '@type': ['ProfessionalService', 'LegalService'],
          '@id': `${BASE_URL}/#service`,
          name: 'TelecommNet Expert Witness Services',
          description:
            'Expert witness and consulting services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, and computer networking for patent litigation in federal courts, USPTO PTAB, and ITC. Retained in cases involving Google, Apple, Microsoft, Amazon, Cisco, Huawei, Ericsson, Qualcomm, Samsung, Netflix, and other major technology companies.',
          provider: PERSON_REF,
          url: BASE_URL,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Encino',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Expert Witness Practice Areas',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telecommunications Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Communications Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Internet Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VoIP Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Streaming Media Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Networking Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Communications Expert' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Wireless Expert' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Routing & Switching Expert' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Management Expert Witness' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Networking Expert' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Messaging & Chat Expert Witness' } },
            ],
          },
          potentialAction: {
            '@type': 'AskAction',
            name: 'Request Expert Witness Engagement',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${BASE_URL}/contact/`,
              actionPlatform: 'https://schema.org/DesktopWebPlatform',
            },
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          name: 'TelecommNet — Telecommunications Expert Witness | Dr. Tal Lavian',
          url: BASE_URL,
          publisher: PERSON_REF,
          inLanguage: 'en-US',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero-banner h1', '.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'Who is Dr. Tal Lavian?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Tal Lavian is a telecommunications expert witness with a Ph.D. from UC Berkeley, 120+ patents, and 100+ expert witness engagements in patent litigation across U.S. federal courts, USPTO PTAB, and the ITC.',
              },
            },
            {
              '@type': 'Question',
              name: 'What types of cases does Dr. Lavian handle as an expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian provides expert witness services in telecommunications patent infringement cases, ITC Section 337 investigations, USPTO PTAB IPR/PGR proceedings, and technology disputes involving networking, VoIP, wireless communications, and internet protocols.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many patents does Dr. Lavian hold?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian holds 120+ issued and filed patents covering network switch architecture, network security, VoIP/IVR systems, grid computing, quality of service, streaming media, and wireless communications.',
              },
            },
            {
              '@type': 'Question',
              name: 'What courts and tribunals has Dr. Lavian testified in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has testified in U.S. federal district courts across multiple jurisdictions, the USPTO Patent Trial and Appeal Board (PTAB), the International Trade Commission (ITC), and Canadian federal and provincial courts.',
              },
            },
            {
              '@type': 'Question',
              name: 'How do I retain Dr. Lavian as an expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Contact Dr. Lavian directly at tlavian@telecommnet.com or call +1 (408) 209-9112 for a confidential case evaluation and engagement discussion.',
              },
            },
          ],
        },
        breadcrumbs([]),
      ],
    };
  },

  /** About page: Person (expanded) + ProfilePage + BreadcrumbList */
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
        {
          '@type': 'ProfilePage',
          '@id': `${BASE_URL}/about-dr-lavian/`,
          url: `${BASE_URL}/about-dr-lavian/`,
          name: 'About Dr. Tal Lavian — Telecommunications Expert Witness',
          dateCreated: '2022-05-01',
          dateModified: '2026-03-13',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          mainEntity: PERSON_REF,
        },
        breadcrumbs([{ name: 'About Dr. Lavian', url: '/about-dr-lavian/' }]),
      ],
    };
  },

  /** Expert Witness hub: Person + WebPage + ProfessionalService + Service[] + BreadcrumbList */
  expertWitnessHub() {
    const hubUrl = `${BASE_URL}/communications-expert-witness/`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': 'WebPage',
          '@id': hubUrl,
          url: hubUrl,
          name: 'Expert Witness Services — Dr. Tal Lavian',
          description: 'Comprehensive expert witness services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, computer networking, and related fields for patent litigation and ITC proceedings.',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: PERSON_REF,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
        },
        {
          '@type': 'ProfessionalService',
          name: 'Expert Witness Services — Dr. Tal Lavian',
          provider: PERSON_REF,
          url: hubUrl,
          mainEntityOfPage: { '@id': hubUrl },
          description:
            'Comprehensive expert witness services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, computer networking, and related fields for patent litigation and ITC proceedings.',
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Expert Witness Practice Areas',
            itemListElement: [
              { '@type': 'Service', name: 'PSTN, VoIP & Cellular Systems Expert', url: `${BASE_URL}/communications-expert-witness/pstn-voip-cellular-expert/` },
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
              { '@type': 'Service', name: 'Messaging & Chat Expert Witness', url: `${BASE_URL}/communications-expert-witness/messaging-and-chat-expert-witness/` },
            ],
          },
        },
        breadcrumbs([{ name: 'Expert Witness Services', url: '/communications-expert-witness/' }]),
      ],
    };
  },

  /** Expertise sub-page: Person + Organization + WebPage + Service + FAQPage + BreadcrumbList */
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
        PERSON_ENTITY,
        ORG_ENTITY,
        {
          '@type': 'WebPage',
          '@id': pageUrl,
          url: pageUrl,
          name: opts.name,
          description: opts.description,
          datePublished: '2023-06-01',
          dateModified: '2026-03-13',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: PERSON_REF,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero-banner h1', '.content-full > h2:first-of-type', '.content-full > p:first-of-type'],
          },
        },
        {
          '@type': 'Service',
          '@id': `${pageUrl}#service`,
          name: opts.name,
          serviceType: opts.serviceType,
          description: opts.description,
          provider: PERSON_REF,
          url: pageUrl,
          mainEntityOfPage: { '@id': pageUrl },
          areaServed: { '@type': 'Country', name: 'United States' },
          keywords: opts.keywords.join(', '),
          priceRange: '$$$$',
          audience: {
            '@type': 'Audience',
            audienceType: 'Attorneys and law firms seeking expert witness services',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          name: `FAQ — ${opts.name}`,
          url: pageUrl,
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
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Encino',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
          dateModified: '2026-03-13',
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
          about: { '@type': 'Thing', name: 'Telecommunications and Network Communications Research' },
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
            '@type': 'ListItem',
            position: pub.position,
            item: {
              '@type': 'ScholarlyArticle',
              headline: pub.name,
              name: pub.name,
              author: PERSON_REF,
              datePublished: pub.datePublished,
              publisher: { '@type': 'Organization', name: pub.publisher },
              about: { '@type': 'Thing', name: 'Telecommunications and Network Communications' },
              inLanguage: 'en-US',
            },
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
          about: { '@type': 'Thing', name: 'Telecommunications and Network Communications Research Presentations' },
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
            '@type': 'ListItem',
            position: pres.position,
            item: {
              '@type': 'EducationEvent',
              name: pres.name,
              performer: PERSON_REF,
              organizer: { '@type': 'Organization', name: pres.organizer },
              about: { '@type': 'Thing', name: pres.about },
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              inLanguage: 'en-US',
            },
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
          about: { '@type': 'Thing', name: 'Patent Litigation Expert Witness Testimony' },
          dateModified: '2026-03-13',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
        },
        breadcrumbs([{ name: 'Cases', url: '/cases-expert-witness-testimony/' }]),
      ],
    };
  },

  /** Patents: CollectionPage + CreativeWork[] + BreadcrumbList */
  patents() {
    const patentEntries = [
      // Network Switch & Router Architecture
      { position: 1, number: 'US 6,170,015', name: 'Automatically Configuring a Network Switch with a Co-processor', about: 'Network Switch Architecture' },
      { position: 2, number: 'US 6,175,868', name: 'Automatically Configuring a Network Switch', about: 'Network Switch Configuration' },
      { position: 3, number: 'US 6,408,006', name: 'Automatically Configuring Network Switch', about: 'Network Switch Architecture' },
      { position: 4, number: 'US 6,970,943', name: 'Routing Architecture for High-Speed Packet Processing', about: 'Packet Switching and Routing' },
      { position: 5, number: 'US 6,976,054', name: 'Accessing Low-Level Resources in a Network Device', about: 'Network Device Programming' },
      { position: 6, number: 'US 7,039,724', name: 'Programmable Command-Line Interface API for Managing Operation', about: 'Network Management' },
      // Network Security
      { position: 7, number: 'US 6,564,325', name: 'Providing Multi-Level Security Access to System', about: 'Network Security' },
      { position: 8, number: 'US 6,950,932', name: 'Security Association Mediator for Java-Enabled Devices', about: 'Network Security' },
      { position: 9, number: 'US 7,587,492', name: 'Method and Apparatus for Network Immunization', about: 'Network Security' },
      { position: 10, number: 'US 8,190,739', name: 'Providing Multi-Level Data Security Across a Distributed Network System', about: 'Network Security' },
      { position: 11, number: 'US 10,764,264', name: 'Authenticating Network Users', about: 'Network Authentication' },
      // Network Management & QoS
      { position: 12, number: 'US 7,275,115', name: 'Dynamic Assignment of Traffic Classes to a Priority Queue', about: 'Quality of Service' },
      { position: 13, number: 'US 7,283,469', name: 'Network Element Management System', about: 'Network Management' },
      { position: 14, number: 'US 7,433,941', name: 'SNMP Accessing Network Information on a Network Device', about: 'Network Management (SNMP)' },
      { position: 15, number: 'US 7,570,592', name: 'Flow Control of Packets Through Packet-Switched Networks', about: 'Packet Switching and QoS' },
      { position: 16, number: 'US 8,090,868', name: 'Time Value Curves to Provide Dynamic QoS for Time-Sensitive File Transfer', about: 'Quality of Service' },
      // VoIP & IVR Systems
      { position: 17, number: 'US 7,720,087', name: 'Display of IVR Menu', about: 'VoIP and IVR Systems' },
      { position: 18, number: 'US 7,933,968', name: 'IVR Visual Menu of a Called Party', about: 'VoIP and IVR Systems' },
      { position: 19, number: 'US 8,000,454', name: 'Displaying Graphical Elements on the Device of the Caller', about: 'VoIP and IVR Systems' },
      { position: 20, number: 'US 8,548,135', name: 'Visual IVR Menu System to a Calling Party', about: 'VoIP and IVR Systems' },
      { position: 21, number: 'US 8,731,148', name: 'Visual Presentation and Selection of IVR Menu', about: 'VoIP and IVR Systems' },
      { position: 22, number: 'US 9,143,609', name: 'Video Conferencing System Providing Video of Call Takers', about: 'Video Conferencing' },
      // Grid Computing & Resource Allocation
      { position: 23, number: 'US 7,310,335', name: 'Scheduling Resources on a Switched Underlay Network', about: 'Grid Computing and Network Resources' },
      { position: 24, number: 'US 7,447,208', name: 'Switched Underlay Network', about: 'Grid Computing and Network Architecture' },
      { position: 25, number: 'US 7,944,827', name: 'Content-Aware Dynamic Optical Bandwidth Allocation', about: 'Optical Networks' },
      { position: 26, number: 'US 8,078,708', name: 'Grid Applications to Access Resources Shared in Communication Network', about: 'Grid Computing' },
      { position: 27, number: 'US 8,131,853', name: 'Grid Proxy Architecture for Network Resources', about: 'Grid Computing' },
      // Communication Protocols & Web Services
      { position: 28, number: 'US 7,321,926', name: 'Exchange of Data Between Communication Devices', about: 'Data Communications' },
      { position: 29, number: 'US 7,636,365', name: 'System and Method for Delivering Web Services', about: 'Web Technologies' },
      { position: 30, number: 'US 7,788,086', name: 'Text and Voice Data Aggregation on the Internet', about: 'Internet Communications' },
      { position: 31, number: 'US 8,762,962', name: 'Automatic Translation of a Computer Program Language Code', about: 'Software Engineering' },
      { position: 32, number: 'US 9,883,039', name: 'Managing Network Communication Between Network Devices', about: 'Network Communications' },
      // Frequency Synthesizer & Wireless
      { position: 33, number: 'US 9,762,251', name: 'Ultra-Low Phase Noise Frequency Synthesizer', about: 'Wireless Communications' },
      // Streaming & Multimedia
      { position: 34, number: 'US 7,587,487', name: 'Real-Time Web Sharing System', about: 'Streaming Media' },
      { position: 35, number: 'US 7,640,350', name: 'Method for Real-Time Web Sharing', about: 'Streaming Media' },
    ];

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: 'Patents — Dr. Tal Lavian',
          description:
            '120+ patents by Dr. Tal Lavian covering telecommunications, network communications, and computer science innovations including 60+ pro-se prosecutions before the USPTO.',
          url: `${BASE_URL}/patents/`,
          author: PERSON_REF,
          dateModified: '2026-03-13',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Patent Portfolio — Dr. Tal Lavian',
          description: '120+ patents spanning network switch architecture, network security, VoIP/IVR systems, grid computing, QoS, streaming media, and wireless communications.',
          numberOfItems: 120,
          itemListElement: patentEntries.map(pat => ({
            '@type': 'ListItem',
            position: pat.position,
            item: {
              '@type': 'CreativeWork',
              name: `${pat.number} — ${pat.name}`,
              creator: PERSON_REF,
              about: { '@type': 'Thing', name: pat.about },
            },
          })),
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
          dateModified: '2026-03-13',
          inLanguage: 'en-US',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
          mainEntity: {
            ...PERSON_ENTITY,
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-408-209-9112',
              email: 'tlavian@telecommnet.com',
              contactType: 'Expert Witness Engagement',
              areaServed: { '@type': 'Country', name: 'United States' },
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
          dateModified: '2026-03-13',
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
