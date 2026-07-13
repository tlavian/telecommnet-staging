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

const ORG_LOGO_IMG = {
  '@type': 'ImageObject',
  url: `${BASE_URL}/wp-content/uploads/2022/05/telecommnet-logo.webp`,
  width: 1768,
  height: 296,
};

// â”€â”€â”€ Shared sub-objects â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    'Dr. Tal Lavian is a telecommunications and network communications expert witness with a Ph.D. from UC Berkeley. He has testified in 90+ patent cases in U.S. federal courts, USPTO PTAB, and the ITC, with 120+ patents and 25+ peer-reviewed publications.',
  url: BASE_URL,
  telephone: '+1-408-209-9112',
  email: 'tlavian@telecommnet.com',
  image: `${BASE_URL}/images/branding/dr-lavian-photo.jpg`,
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
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'M.Sc. in Electrical Engineering',
      educationalLevel: 'Masters',
      recognizedBy: { '@type': 'Organization', name: 'Tel Aviv University', url: 'https://www.tau.ac.il' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'B.Sc. in Mathematics and Computer Science',
      educationalLevel: 'Bachelors',
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

    { '@type': 'Thing', name: 'Routing', sameAs: 'https://en.wikipedia.org/wiki/Routing' },
    { '@type': 'Thing', name: 'Network switch', sameAs: 'https://en.wikipedia.org/wiki/Network_switch' },
    { '@type': 'Thing', name: 'Software-defined networking', sameAs: 'https://en.wikipedia.org/wiki/Software-defined_networking' },
    { '@type': 'Thing', name: 'Quality of service', sameAs: 'https://en.wikipedia.org/wiki/Quality_of_service' },
    { '@type': 'Thing', name: 'Network management', sameAs: 'https://en.wikipedia.org/wiki/Network_management' },
    { '@type': 'Thing', name: 'Instant messaging', sameAs: 'https://en.wikipedia.org/wiki/Instant_messaging' },
    { '@type': 'Thing', name: 'Patent infringement', sameAs: 'https://en.wikipedia.org/wiki/Patent_infringement' },
    { '@type': 'Thing', name: 'Expert witness', sameAs: 'https://en.wikipedia.org/wiki/Expert_witness' },
    { '@type': 'Thing', name: 'Public switched telephone network', sameAs: 'https://en.wikipedia.org/wiki/Public_switched_telephone_network' },
    { '@type': 'Thing', name: 'Patent Trial and Appeal Board', sameAs: 'https://en.wikipedia.org/wiki/Patent_Trial_and_Appeal_Board' },
    { '@type': 'Thing', name: 'Inter partes review', sameAs: 'https://en.wikipedia.org/wiki/Inter_partes_review' },
    { '@type': 'Thing', name: 'Multiprotocol Label Switching', sameAs: 'https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching' },
    { '@type': 'Thing', name: 'SONET', sameAs: 'https://en.wikipedia.org/wiki/Synchronous_optical_networking' },
    { '@type': 'Thing', name: 'Signalling System No. 7', sameAs: 'https://en.wikipedia.org/wiki/Signalling_System_No._7' },
    { '@type': 'Thing', name: 'Packet switching', sameAs: 'https://en.wikipedia.org/wiki/Packet_switching' },
    { '@type': 'Thing', name: 'Circuit switching', sameAs: 'https://en.wikipedia.org/wiki/Circuit_switching' },
    { '@type': 'Thing', name: 'Patent claim', sameAs: 'https://en.wikipedia.org/wiki/Patent_claim' },
  ],
  sameAs: [
    'https://www.wikidata.org/wiki/Q102325896',
    'https://www.linkedin.com/in/tallavian',
    'https://x.com/tlavian',
    'https://www.facebook.com/tal.lavianwork',
    'https://scholar.google.com/citations?user=DDVtnHEAAAAJ&hl=en',
    'https://www.researchgate.net/profile/Tal-Lavian',
    'https://berkeley.academia.edu/TalLavian',
    'https://patents.justia.com/inventor/tal-lavian',
    'https://dl.acm.org/profile/81100233720',
    'https://dblp.org/pid/55/6412',
    'https://californiaconsultants.org/members/tal-lavian/',
    'https://www.ratemyprofessors.com/professor/1813887',
    'https://scholargps.com/scholars/98050981746055/tal-lavian',
  ],
  knowsLanguage: ['en', 'he'],
  memberOf: [
    { '@type': 'Organization', name: 'IEEE', url: 'https://www.ieee.org' },
    { '@type': 'Organization', name: 'ACM', url: 'https://www.acm.org' },
    { '@type': 'Organization', name: 'IEEE Communications, Networks & Services Committee (IEEE-CNSV)', url: 'https://californiaconsultants.org/members/tal-lavian/' },
    { '@type': 'Organization', name: 'ACM SIGCOMM', url: 'https://www.acm.org/special-interest-groups/sigs/sigcomm' },
    { '@type': 'Organization', name: 'ACM SIGWEB', url: 'https://www.sigweb.org/' },
  ],
  award: [
    'Nortel Networks Top Talent Award',
    'Nortel Networks Top Inventor Award',
    'IEEE Certified Wireless Communications Engineer (WCET)',
    'Toastmasters International Best Speaker Award',
    'IEEE & ICE Best Paper Award',
  ],
};

export const ORG_ENTITY = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'TelecommNet Engineering, Inc.',
  description: 'TelecommNet Engineering, Inc. provides telecommunications expert witness and consulting services for patent litigation, specializing in telecommunications, network communications, Internet protocols, and VoIP.',
  url: BASE_URL,
  founder: PERSON_REF,
  logo: ORG_LOGO_IMG,
  image: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/branding/dr-lavian-photo.jpg`,
  },
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

// â”€â”€â”€ BreadcrumbList builder â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Telecommunications Expert Witness', item: BASE_URL + '/' },
      ...items.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: BASE_URL + crumb.url,
      })),
    ],
  };
}

// â”€â”€â”€ Schema builders by page type â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const buildSchema = {

  /** Homepage: Person + ProfessionalService + WebSite + BreadcrumbList */
  homepage() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          ...PERSON_ENTITY,
          mainEntityOfPage: BASE_URL + '/',
        },
        ORG_ENTITY,
        {
          '@type': ['ProfessionalService', 'LegalService'],
          '@id': `${BASE_URL}/#service`,
          name: 'TelecommNet Expert Witness Services',
          description:
            'Expert witness and consulting services in telecommunications, network communications, Internet protocols, VoIP, mobile wireless, and computer networking for patent litigation in federal courts, USPTO PTAB, and ITC. Retained in cases involving Apple, Google, Microsoft, Samsung, Meta (Facebook), Cisco, AT&T, Verizon, T-Mobile, Juniper (HPE), Huawei, and other major technology companies.',
          founder: PERSON_REF,
          provider: PERSON_REF,
          serviceType: 'Expert Witness Services',
          url: BASE_URL,
          telephone: '+1-408-209-9112',
          logo: ORG_LOGO_IMG,
          image: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/branding/dr-lavian-photo.jpg`,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Encino',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
          makesOffer: [
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
          publisher: { '@id': ORG_ID },
          datePublished: '2022-05-01T00:00:00+00:00',
          dateModified: '2026-07-03T00:00:00+00:00',
          inLanguage: 'en-US',
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.hero-content h1', '.bio-main > p:first-of-type', 'h2:first-of-type'],
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
                text: 'Dr. Tal Lavian is a telecommunications expert witness with nearly 20 years at UC Berkeley, a Ph.D. from UC Berkeley, 120+ patents, and 90+ expert witness engagements in patent litigation across U.S. Federal and District Courts, USPTO PTAB, the ITC, the Canadian Federal Court, and a court in Malaysia.',
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
              name: 'How many patents has Dr. Lavian invented?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has invented 120+ issued and filed patents covering network switch architecture, network security, VoIP/IVR systems, grid computing, quality of service, streaming media, and wireless communications. He has personally prosecuted over 60 patents pro-se before the USPTO, including drafting, claims, office action responses, and examiner interviews.',
              },
            },
            {
              '@type': 'Question',
              name: 'What courts and tribunals has Dr. Lavian testified in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has testified in U.S. federal district courts including the District of Delaware, the Central District of California, the Northern District of California, the Eastern District of Texas, and the Western District of Texas; the USPTO Patent Trial and Appeal Board (PTAB); the International Trade Commission (ITC); the Canadian Federal Court; and a court in Malaysia. He has provided live testimony at trial before judges and juries in multiple federal court proceedings.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is a telecommunications expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A telecommunications expert witness is a qualified technical professional retained by attorneys to provide independent technical opinions in patent litigation, ITC investigations, and other legal proceedings involving telecommunications technologies — including VoIP, wireless networks, internet protocols, and network communications systems. They analyze patent claims, prepare technical reports, provide deposition testimony, and — when cases proceed to trial — provide live testimony before judges and juries.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many law firms has Dr. Lavian been retained by?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained by over 50 law firms and corporate clients in telecommunications patent matters, including Fish & Richardson, Kirkland & Ellis, Gibson Dunn, Cooley, and Finnegan, among many others. He has also been retained in cases involving Apple, Google, Microsoft, Samsung, Cisco, AT&T, Verizon, T-Mobile, and other major technology companies.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many years of experience does Dr. Lavian have in telecommunications?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has over 35 years of experience in telecommunications and network communications, spanning nearly 20 years researching, studying, and lecturing at UC Berkeley; engineering leadership as Principal Scientist and Principal Architect at Nortel Networks (1996–2007); service as a DARPA Principal Investigator for three federally funded research projects; and over two decades as an expert witness with 90+ cases and 60+ depositions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What PTAB and ITC proceedings has Dr. Lavian participated in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has served as a technical expert in USPTO Patent Trial and Appeal Board (PTAB) proceedings including inter partes review (IPR), post-grant review (PGR), and covered business method (CBM) proceedings; International Trade Commission (ITC) Section 337 investigations involving telecommunications technologies; U.S. federal district court patent infringement trials; and international patent litigation, including the Canadian Federal Court and a court in Malaysia.',
              },
            },
          ],
        },
        breadcrumbs([]),
      ],
    };
  },

  /** About page: Person (expanded) + ProfilePage + FAQPage + BreadcrumbList */
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
          dateCreated: '2022-05-01T00:00:00+00:00',
          dateModified: '2026-03-18T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          mainEntity: PERSON_REF,
        },
        {
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/about-dr-lavian/#faq`,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What are Dr. Lavian\'s academic credentials?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian holds a Ph.D. in Computer Science from UC Berkeley specializing in network communications, an M.Sc. in Electrical Engineering from Tel Aviv University, and a B.Sc. in Mathematics and Computer Science. He is an IEEE Senior Member and an ACM member.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long has Dr. Lavian been at UC Berkeley?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian spent nearly 20 years researching, studying, and lecturing at UC Berkeley, where he conducted research projects in data centers (RAD Labs), telecommunication infrastructure (SAHARA), and wireless systems (ICEBERG), and served as an industry fellow and lecturer at the Sutardja Center for Entrepreneurship and Technology (SCET).',
              },
            },
            {
              '@type': 'Question',
              name: 'How many expert witness cases has Dr. Lavian handled?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained as an expert in over 90 cases. He has served as an expert on over 100 patents litigated. He has provided expert reports and testimony in over 60 depositions before U.S. federal district courts, the USPTO PTAB, the ITC, the Canadian Federal Court, and a court in Malaysia.',
              },
            },
            {
              '@type': 'Question',
              name: 'What companies has Dr. Lavian been retained in cases involving?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained in cases involving Apple, Google, Microsoft, Samsung, Meta (Facebook), Amazon, Cisco Systems, AT&T, Verizon, T-Mobile, Juniper Networks, Huawei, Arista Networks, Motorola, LG, Avaya, Netflix, LinkedIn, Ericsson, and others. He has been engaged by over 50 law firms including Fish & Richardson, Kirkland & Ellis, Gibson Dunn, Cooley, and Finnegan.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are Dr. Lavian\'s research accomplishments?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian was a principal investigator for three DARPA projects and one US Air Force Research Lab project. He led the development of the first network resource-scheduling service for grid computing, the first demonstrated dynamic transatlantic allocation of 10Gbs Lambdas, and the first wire-speed active network device on commercial hardware.',
              },
            },
          ],
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
          name: 'Communications Expert Witness Services — Dr. Tal Lavian',
          description: 'Communications expert witness services for patent litigation. Telecommunications, VoIP, internet, networking, mobile wireless. 90+ cases, 120+ patents.',
          datePublished: '2023-06-01T00:00:00+00:00',
          dateModified: '2026-03-18T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: PERSON_REF,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-main > p:first-of-type', '.content-main > h2:first-of-type'],
          },
        },
        {
          '@type': ['ProfessionalService', 'LegalService'],
          name: 'Communications Expert Witness Services — Dr. Tal Lavian',
          founder: PERSON_REF,
          provider: PERSON_REF,
          serviceType: 'Expert Witness Services',
          url: hubUrl,
          mainEntityOfPage: { '@id': hubUrl },
          description:
            'Communications expert witness services for patent litigation. Telecommunications, VoIP, internet, networking, mobile wireless. 90+ cases, 120+ patents.',
          logo: ORG_LOGO_IMG,
          image: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/branding/dr-lavian-photo.jpg`,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Encino',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          telephone: '+1-408-209-9112',
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
          makesOffer: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PSTN, VoIP & Cellular Systems Expert', url: `${BASE_URL}/communications-expert-witness/pstn-voip-cellular-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Communications Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-communications-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Internet Expert Witness', url: `${BASE_URL}/communications-expert-witness/internet-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VoIP Expert Witness', url: `${BASE_URL}/communications-expert-witness/voice-over-ip-voip-expert/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Security Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-security-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Streaming Media Expert Witness', url: `${BASE_URL}/communications-expert-witness/streaming-media-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Computer Networking Expert Witness', url: `${BASE_URL}/communications-expert-witness/computer-networking-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Communications Expert', url: `${BASE_URL}/communications-expert-witness/data-communications-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Wireless Expert', url: `${BASE_URL}/communications-expert-witness/mobile-wireless-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Routing & Switching Expert', url: `${BASE_URL}/communications-expert-witness/routing-switching-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Network Management Expert Witness', url: `${BASE_URL}/communications-expert-witness/network-management-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Networking Expert', url: `${BASE_URL}/communications-expert-witness/networking-expert-witness/` } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Messaging & Chat Expert Witness', url: `${BASE_URL}/communications-expert-witness/messaging-and-chat-expert-witness/` } },
          ],
        },
        {
          '@type': 'FAQPage',
          '@id': `${hubUrl}#faq`,
          name: 'FAQ — Communications Expert Witness Services',
          url: hubUrl,
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What expert witness services does Dr. Lavian provide?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian provides expert witness services in telecommunications, network communications, Internet protocols, VoIP, network security, streaming media, computer networking, data communications, mobile wireless, routing and switching, network management, and messaging technologies.',
              },
            },
            {
              '@type': 'Question',
              name: 'What qualifications does Dr. Lavian have as an expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has spent nearly 20 years researching, studying, and lecturing at UC Berkeley. He holds a Ph.D. in Computer Science from UC Berkeley specializing in network communications, has invented over 120 patents in telecommunications and networking, and has been retained in more than 90 expert witness engagements.',
              },
            },
            {
              '@type': 'Question',
              name: 'In what courts has Dr. Lavian testified?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has testified in U.S. federal district courts across multiple jurisdictions, the USPTO Patent Trial and Appeal Board (PTAB) in IPR and PGR proceedings, the International Trade Commission (ITC) in Section 337 investigations, the Canadian Federal Court, and a court in Malaysia in patent litigation involving Apple.',
              },
            },
            {
              '@type': 'Question',
              name: 'What types of cases require a communications expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A communications expert witness is needed in patent infringement litigation involving telecom and networking technologies, ITC Section 337 investigations, USPTO PTAB inter partes reviews (IPRs) and post-grant reviews (PGRs), trade secret disputes involving network protocols or communications systems, and breach of contract matters.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does Dr. Lavian prepare expert reports?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian follows a rigorous methodology that includes reviewing patent claims and prosecution history, analyzing accused products or prior art through documentation and source code review, constructing claim charts, and preparing detailed written reports with clear technical explanations suitable for judges, juries, and PTAB panels.',
              },
            },
            {
              '@type': 'Question',
              name: 'What companies and law firms has Dr. Lavian been retained in cases involving?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained in telecommunications patent cases involving Apple, Google, Microsoft, Samsung, Meta (Facebook), Amazon, Cisco Systems, AT&T, Verizon, T-Mobile, Juniper Networks (HPE), Huawei, Arista Networks, Motorola, LG, Avaya, and many others. He has been engaged by leading law firms including Fish & Richardson, Kirkland & Ellis, Gibson Dunn, Skadden, Finnegan, Irell & Manella, Perkins Coie, Morgan Lewis, Baker Botts, and more.',
              },
            },
          ],
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
          datePublished: '2023-06-01T00:00:00+00:00',
          dateModified: '2026-03-16T00:00:00+00:00',
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

  /** Client pages (Law Firm / Corporate): Person + ProfessionalService + WebPage + BreadcrumbList */
  clientPage(opts: { name: string; slug: string; description: string; breadcrumbLabel: string }) {
    const pageUrl = `${BASE_URL}/${opts.slug}/`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': 'WebPage',
          '@id': pageUrl,
          url: pageUrl,
          name: opts.name,
          description: opts.description,
          datePublished: '2023-06-01T00:00:00+00:00',
          dateModified: '2026-03-18T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          about: PERSON_REF,
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': ['ProfessionalService', 'LegalService'],
          name: opts.name,
          description: opts.description,
          founder: PERSON_REF,
          provider: PERSON_REF,
          serviceType: 'Expert Witness Services',
          url: pageUrl,
          logo: ORG_LOGO_IMG,
          image: {
            '@type': 'ImageObject',
            url: `${BASE_URL}/images/branding/dr-lavian-photo.jpg`,
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Encino',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
          telephone: '+1-408-209-9112',
          areaServed: { '@type': 'Country', name: 'United States' },
          priceRange: '$$$$',
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
      {
        position: 13,
        name: 'Enabling Grid Services with Dynamic Optical Networks',
        datePublished: '2004-04',
        publisher: 'IEEE/ACM International Symposium on Cluster Computing and the Grid (CCGrid 2004)',
        coAuthors: ['Figueira S.', 'Naiksatam S.', 'Cohen H.', 'Cutrell D.', 'Daspit P.', 'Gutierrez D.', 'Hoang D.B.', 'Mambretti J.', 'Merrill S.', 'Travostino F.'],
      },
      {
        position: 14,
        name: 'An Extensible Programmable Commercial-Grade Platform for Internet Service Architecture',
        datePublished: '2004-02',
        publisher: 'IEEE Transactions on Systems, Man, and Cybernetics',
        coAuthors: ['Hoang D.B.', 'Travostino F.', 'Wang P.Y.', 'Subramanian S.', 'Monga I.'],
      },
      {
        position: 15,
        name: 'Edge Device Multi-Unicasting for Video Streaming',
        datePublished: '2003-02',
        publisher: '10th International Conference on Telecommunications (ICT 2003)',
        coAuthors: ['Wang P.', 'Durairaj R.', 'Hoang D.', 'Travostino F.'],
      },
      {
        position: 16,
        name: 'The SAHARA Model for Service Composition Across Multiple Providers',
        datePublished: '2002',
        publisher: 'First International Conference on Pervasive Computing (ACM Pervasive 2002)',
        coAuthors: ['Raman B.', 'Agarwal S.', 'Chen Y.', 'Caesar M.', 'Stoica I.', 'Katz Y.H.'],
      },
      {
        position: 17,
        name: 'Enabling Active Flow Manipulation in Silicon-Based Network Forwarding Engines',
        datePublished: '2002-05',
        publisher: 'DARPA Active Networks Conference and Exposition (DANCE 2002)',
        coAuthors: ['Wang P.', 'Travostino F.', 'Subramanian S.', 'Duraraj R.', 'Hoang D.B.', 'Sethaput V.', 'Culler D.'],
      },
      {
        position: 18,
        name: 'Practical Active Network Services Within Content-Aware Gateways',
        datePublished: '2002-05',
        publisher: 'DARPA Active Networks Conference and Exposition (DANCE 2002)',
        coAuthors: ['Subramanian S.', 'Wang P.', 'Durairaj R.', 'Rasimas J.', 'Travostino F.', 'Hoang D.B.'],
      },
      {
        position: 19,
        name: 'Active Networking on a Programmable Network Platform',
        datePublished: '2002-04',
        publisher: 'Fourth IEEE Conference on Open Architectures and Network Programming (OPENARCH 2002)',
        coAuthors: ['Wang P.Y.', 'Duncan R.', 'Jaeger R.'],
      },
      {
        position: 20,
        name: 'Active Networking on a Programmable Networking Platform',
        datePublished: '2001',
        publisher: 'Proceedings of Open Architectures and Network Programming, IEEE',
        coAuthors: ['Wang P.Y.'],
      },
      {
        position: 21,
        name: 'Intelligent Network Services Through Active Flow Manipulation',
        datePublished: '2001-05',
        publisher: 'IEEE Intelligent Network Workshop 2001',
        coAuthors: ['Wang P.', 'Travostino F.', 'Subramanian S.', 'Hoang D.B.', 'Sethaput V.'],
      },
      {
        position: 22,
        name: 'Enabling Active Flow Manipulation in Silicon-Based Network Forwarding Engine',
        datePublished: '2001-03',
        publisher: 'Journal of Communications and Networks',
        coAuthors: ['Wang P.', 'Travostino F.', 'Subramanian S.', 'Hoang D.B.', 'Sethaput V.', 'Culler D.'],
      },
      {
        position: 23,
        name: 'Popeye: Using Fine-Grained Network Access Control to Support Mobile Users and Protect Intranet Hosts',
        datePublished: '2000-12',
        publisher: 'UC Berkeley Technical Report',
        coAuthors: ['Chen M.', 'Hohlt B.'],
      },
      {
        position: 24,
        name: 'Open Networking — Better Networking Through Programmability',
        datePublished: '2000-08',
        publisher: 'Nortel Seminar',
      },
      {
        position: 25,
        name: 'Enabling Active Networks Services on a Gigabit Routing Switch',
        datePublished: '2000',
        publisher: '2nd Workshop on Active Middleware Services',
        coAuthors: ['Wang P.', 'Jaeger R.', 'Duncan R.', 'Travostino F.'],
      },
      {
        position: 26,
        name: 'Dynamic Classification in Silicon-Based Forwarding Engine Environments',
        datePublished: '1999-11',
        publisher: '10th IEEE Workshop on Metropolitan Area and Local Networks',
        coAuthors: ['Jaeger R.', 'Duncan R.', 'Travostino F.', 'Hollingsworth J.'],
      },
      {
        position: 27,
        name: 'Open Programmable Architecture for Java-Enabled Network Devices',
        datePublished: '1999-08',
        publisher: 'IEEE Hot Interconnects, Stanford University',
        coAuthors: ['Jaeger R.F.', 'Hollingsworth J.K.'],
      },
      {
        position: 28,
        name: 'Open Java SNMP MIB API',
        datePublished: '1999',
        publisher: 'Nortel Networks / IEEE',
      },
      {
        position: 29,
        name: 'Java-Based Open Service Interface Architecture',
        datePublished: '1998-03',
        publisher: 'BAL TR98-010 Bay Architecture Lab Technical Report',
        coAuthors: ['Lau S.'],
      },
      {
        position: 30,
        name: 'Parallel SIMD Architecture for Color Image Processing',
        datePublished: '1995-11',
        publisher: 'Tel Aviv University',
      },
      {
        position: 31,
        name: 'Dangerous Liaisons — Software Combinations as Derivative Works?',
        datePublished: '2006',
        publisher: 'Berkeley Technology Law Journal, Volume 21, Issue 4',
        coAuthors: ['Determann L.'],
      },
    ];

    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': 'CollectionPage',
          name: 'Scientific Publications — Dr. Tal Lavian',
          description:
            'Peer-reviewed scientific publications by Dr. Tal Lavian in IEEE, ACM, and other journals, covering telecommunications, network communications, and computer science.',
          url: `${BASE_URL}/scientific-publications/`,
          author: PERSON_REF,
          about: { '@type': 'Thing', name: 'Telecommunications and Network Communications Research' },
          datePublished: '2023-06-01T00:00:00+00:00',
          dateModified: '2026-03-18T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Publications by Dr. Tal Lavian',
          description: '31 peer-reviewed publications in IEEE, ACM, Berkeley Technology Law Journal, and related venues.',
          numberOfItems: 31,
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
        PERSON_ENTITY,
        {
          '@type': 'CollectionPage',
          name: 'Talks & Presentations — Dr. Tal Lavian',
          description:
            'Conference presentations and technical talks by Dr. Tal Lavian at IEEE, ACM, UC Berkeley, DARPA events, and industry conferences on telecommunications and networking.',
          url: `${BASE_URL}/talks-presentations/`,
          author: PERSON_REF,
          about: { '@type': 'Thing', name: 'Telecommunications and Network Communications Research Presentations' },
          datePublished: '2023-06-01T00:00:00+00:00',
          dateModified: '2026-03-18T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': 'ItemList',
          name: 'Presentations by Dr. Tal Lavian',
          description: '30+ conference presentations and technical talks at IEEE, ACM, DARPA, and UC Berkeley.',
          numberOfItems: 15,
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

  /** Cases: Person + CollectionPage + FAQPage + BreadcrumbList */
  cases() {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': 'CollectionPage',
          name: 'Expert Witness Testimony Cases — Dr. Tal Lavian',
          description:
            'Expert witness testimony cases by Dr. Tal Lavian. 90+ cases in U.S. federal district courts, USPTO PTAB, and ITC involving telecommunications and network communications patent disputes.',
          url: `${BASE_URL}/cases-expert-witness-testimony/`,
          author: PERSON_REF,
          about: { '@type': 'Thing', name: 'Patent Litigation Expert Witness Testimony' },
          dateModified: '2026-03-16T00:00:00+00:00',
          inLanguage: 'en-US',
          isPartOf: { '@id': `${BASE_URL}/#website` },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['.content-full > p:first-of-type', '.content-full > h2:first-of-type'],
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How many expert witness cases has Dr. Lavian handled?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained as an expert in over 90 cases. He has served as an expert on over 100 patents litigated. He has provided expert reports and testimony in over 60 depositions in U.S. federal courts, USPTO PTAB, and the ITC.',
              },
            },
            {
              '@type': 'Question',
              name: 'What courts and tribunals has Dr. Lavian testified in?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has testified in the United States District Court, the United States Patent and Trademark Office (USPTO), the International Trade Commission (ITC), the Canadian Federal Court, and a court in Malaysia. He has also served in USPTO PTAB proceedings, including Inter Partes Reviews (IPRs), Covered Business Method (CBM) reviews, Post Grant Reviews (PGRs), Ex-Parte Re-Examinations, and PTO Interferences.',
              },
            },
            {
              '@type': 'Question',
              name: "What companies have been involved in Dr. Lavian's expert witness cases?",
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian has been retained in cases involving Apple, Google, Microsoft, Samsung, Meta (Facebook), Amazon, Cisco Systems, AT&T, Verizon, T-Mobile, Juniper Networks, Huawei, Motorola, HP, LG, Avaya, Netflix, LinkedIn, Ericsson, Sprint, ZTE, WhatsApp, Instagram, and Polycom.',
              },
            },
            {
              '@type': 'Question',
              name: 'What expert witness services does Dr. Lavian provide in patent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Dr. Lavian provides technical education for claim constructions and Markman hearings, writes expert reports that include analyses, claim term definitions, and claim construction, and offers product and technical analyses on patent portfolios, claim charts, prior art investigations, and patentability research.',
              },
            },
            {
              '@type': 'Question',
              name: 'Has Dr. Lavian worked for both plaintiff and defendant in patent cases?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Dr. Lavian has been retained by both plaintiff and defendant parties in patent cases, providing independent technical analysis based on his expertise and review of the relevant prior art and claim constructions.',
              },
            },
            {
              '@type': 'Question',
              name: 'What technology areas does Dr. Lavian cover as an expert witness?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: "Dr. Lavian's expert witness testimony covers telecommunications, network communications, computer networking, internet protocols, routing and switching, VoIP, mobile wireless, streaming media, network systems, LAN/WAN, cloud computing, cellular technology, web technologies, and internet technology patents.",
              },
            },
          ],
        },
        breadcrumbs([{ name: 'Cases', url: '/cases-expert-witness-testimony/' }]),
      ],
    };
  },

  /** Patents: CollectionPage + CreativeWork[] + BreadcrumbList */
  patents() {
    const patentEntries = [
      { position: 1, number: 'US 2018/0130102', name: 'Reliable rating system and method thereof', about: 'Web Technologies' },
      { position: 2, number: 'US 2018/0146090', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 3, number: 'US 2019/0082043', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 4, number: 'US 2019/0128998', name: 'Radar target detection and imaging system for autonomous vehicles with ultra-low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 5, number: 'US 2013/0080898', name: 'Systems and methods for electronic communications', about: 'Network Communications' },
      { position: 6, number: 'US 9,762,251', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 7, number: 'EP 3311493', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 8, number: 'US 10,764,264', name: 'Technique for authenticating network users', about: 'Network Security' },
      { position: 9, number: 'US 10,205,457', name: 'RADAR target detection system for autonomous vehicles with ultra low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 10, number: 'US 10,348,313', name: 'Radar target detection system for autonomous vehicles with ultra-low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 11, number: 'US 10,404,261', name: 'Radar target detection system for autonomous vehicles with ultra low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 12, number: 'US 10,598,764', name: 'Radar target detection and imaging system for autonomous vehicles with ultra-low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 13, number: 'US 8,619,793', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 14, number: 'US 8,161,139', name: 'Method and apparatus for intelligent management of a network element', about: 'Network Management' },
      { position: 15, number: 'US 8,146,090', name: 'Time-value curves to provide dynamic QoS for time sensitive file transfer', about: 'Quality of Service' },
      { position: 16, number: 'US 8,078,708', name: 'Grid proxy architecture for network resources', about: 'Grid Computing and Optical Networks' },
      { position: 17, number: 'US 7,944,827', name: 'Content-aware dynamic network resource allocation', about: 'Network Communications' },
      { position: 18, number: 'US 7,860,999', name: 'Distributed computation in network devices', about: 'Network Communications' },
      { position: 19, number: 'US 7,734,748', name: 'Method and apparatus for intelligent management of a network element', about: 'Network Management' },
      { position: 20, number: 'US 7,710,871', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 21, number: 'US 7,580,349', name: 'Content-aware dynamic network resource allocation', about: 'Network Communications' },
      { position: 22, number: 'US 7,433,941', name: 'Method and apparatus for accessing network information on a network device', about: 'Network Communications' },
      { position: 23, number: 'US 7,359,993', name: 'Method and apparatus for interfacing external resources with a network element', about: 'Network Management' },
      { position: 24, number: 'US 7,313,608', name: 'Method and apparatus for using documents written in a markup language to access and configure network elements', about: 'Network Management' },
      { position: 25, number: 'US 7,260,621', name: 'Object-oriented network management interface', about: 'Network Management' },
      { position: 26, number: 'US 7,237,012', name: 'Method and apparatus for classifying Java remote method invocation transport traffic', about: 'Network Communications' },
      { position: 27, number: 'US 7,127,526', name: 'Method and apparatus for dynamically loading and managing software services on a network device', about: 'Network Communications' },
      { position: 28, number: 'US 7,047,536', name: 'Method and apparatus for classifying remote procedure call transport traffic', about: 'Network Communications' },
      { position: 29, number: 'US 7,039,724', name: 'Programmable command-line interface API for managing operation of a network device', about: 'Network Management' },
      { position: 30, number: 'US 6,976,054', name: 'Method and system for accessing low-level resources in a network device', about: 'Network Communications' },
      { position: 31, number: 'US 6,970,943', name: 'Routing architecture including a compute plane configured for high-speed processing of packets to provide application layer support', about: 'Network Switch Architecture' },
      { position: 32, number: 'US 6,950,932', name: 'Security association mediator for java-enabled devices', about: 'Network Security' },
      { position: 33, number: 'US 6,850,989', name: 'Method and apparatus for automatically configuring a network switch', about: 'Network Switch Architecture' },
      { position: 34, number: 'US 6,845,397', name: 'Interface method and system for accessing inner layers of a network protocol', about: 'Network Communications' },
      { position: 35, number: 'US 6,842,781', name: 'Download and processing of a network management application on a network device', about: 'Network Management' },
      { position: 36, number: 'US 6,772,205', name: 'Executing applications on a target network device using a proxy network device', about: 'Network Communications' },
      { position: 37, number: 'US 6,564,325', name: 'Method of and apparatus for providing multi-level security access to system', about: 'Network Security' },
      { position: 38, number: 'US 6,175,868', name: 'Method and apparatus for automatically configuring a network switch', about: 'Network Switch Architecture' },
      { position: 39, number: 'US 6,170,015', name: 'Network apparatus with Java co-processor', about: 'Network Switch Architecture' },
      { position: 40, number: 'EP 1905211', name: 'Technique for authenticating network users', about: 'Network Security' },
      { position: 41, number: 'EP 1142213', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 42, number: 'EP 1671460', name: 'Method and apparatus for scheduling resources on a switched underlay network', about: 'Grid Computing and Optical Networks' },
      { position: 43, number: 'CA 2358525', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 44, number: 'US 8,782,230', name: 'Method and apparatus for using a command design pattern to access and configure network elements', about: 'Network Management' },
      { position: 45, number: 'US 8,762,963', name: 'Translation of programming code', about: 'Software Engineering' },
      { position: 46, number: 'US 8,762,962', name: 'Methods and apparatus for automatic translation of a computer program language code', about: 'Software Engineering' },
      { position: 47, number: 'US 2009/0313004', name: 'Platform-Independent Application Development Framework', about: 'Software Engineering' },
      { position: 48, number: 'US 8,688,796', name: 'Rating system for determining whether to accept or reject objection raised by user in social network', about: 'Web Technologies' },
      { position: 49, number: 'US 8,000,454', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 50, number: 'US 8,054,952', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 51, number: 'US 8,731,148', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 52, number: 'US 8,929,517', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 53, number: 'US 8,903,073', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 54, number: 'US 8,898,274', name: 'Grid proxy architecture for network resources', about: 'Grid Computing and Optical Networks' },
      { position: 55, number: 'US 8,880,120', name: 'Device and method for providing enhanced telephony', about: 'VoIP and IVR Systems' },
      { position: 56, number: 'US 8,879,703', name: 'System method and device for providing tailored services when call is on-hold', about: 'VoIP and IVR Systems' },
      { position: 57, number: 'US 8,879,698', name: 'Device and method for providing enhanced telephony', about: 'VoIP and IVR Systems' },
      { position: 58, number: 'US 8,867,708', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 59, number: 'US 8,787,536', name: 'Systems and methods for communicating with an interactive voice response system', about: 'VoIP and IVR Systems' },
      { position: 60, number: 'US 9,001,819', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 61, number: 'US 8,949,846', name: 'Time-value curves to provide dynamic QoS for time sensitive file transfers', about: 'Quality of Service' },
      { position: 62, number: 'US 8,687,777', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 63, number: 'US 8,681,951', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 64, number: 'US 8,625,756', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 65, number: 'US 8,594,280', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 66, number: 'US 8,548,135', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 67, number: 'US 8,345,835', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 68, number: 'US 8,223,931', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 69, number: 'US 8,160,215', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 70, number: 'US 8,155,280', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 71, number: 'CA 2989752', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 72, number: 'US 2012/0180059', name: 'Time-value curves to provide dynamic QoS for time sensitive file transfers', about: 'Quality of Service' },
      { position: 73, number: 'US 2011/0225330', name: 'Portable universal communication device', about: 'Network Communications' },
      { position: 74, number: 'US 2010/0220616', name: 'Optimizing network connections', about: 'Network Communications' },
      { position: 75, number: 'US 2010/0217854', name: 'Method and Apparatus for Intelligent Management of a Network Element', about: 'Network Management' },
      { position: 76, number: 'US 2010/0146111', name: 'Efficient communication in a network', about: 'Network Communications' },
      { position: 77, number: 'WO 2006063052', name: 'Computer network security by network immunization', about: 'Network Security' },
      { position: 78, number: 'US 2006/0123481', name: 'Method and apparatus for network immunization', about: 'Network Security' },
      { position: 79, number: 'US 2005/0076173', name: 'Method and apparatus for preconditioning data to be transferred on a switched underlay network', about: 'Grid Computing and Optical Networks' },
      { position: 80, number: 'US 2006/0075042', name: 'Extensible resource messaging between user applications and network elements in a communication network', about: 'Network Management' },
      { position: 81, number: 'US 2005/0083960', name: 'Method and apparatus for transporting parcels of data using network elements with network element storage', about: 'Network Management' },
      { position: 82, number: 'US 2005/0076339', name: 'Method and apparatus for automated negotiation for resources on a switched underlay network', about: 'Grid Computing and Optical Networks' },
      { position: 83, number: 'US 2005/0076336', name: 'Method and apparatus for scheduling resources on a switched underlay network', about: 'Grid Computing and Optical Networks' },
      { position: 84, number: 'US 2005/0074529', name: 'Method and apparatus for transporting visualization information on a switched underlay network', about: 'Grid Computing and Optical Networks' },
      { position: 85, number: 'US 2004/0076161', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 86, number: 'US 2002/0021701', name: 'Dynamic assignment of traffic classes to a priority queue in a packet forwarding device', about: 'Quality of Service' },
      { position: 87, number: 'WO 2000054460', name: 'Method and apparatus for accessing network information on a network device', about: 'Network Communications' },
      { position: 88, number: 'US 2009/0279562', name: 'Content-aware dynamic network resource allocation', about: 'Network Communications' },
      { position: 89, number: 'US 2008/0040630', name: 'Time-value curves to provide dynamic QoS for time sensitive file transfers', about: 'Quality of Service' },
      { position: 90, number: 'US 2007/0169171', name: 'Technique for authenticating network users', about: 'Network Security' },
      { position: 91, number: 'WO 2016203460', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 92, number: 'US 8,341,257', name: 'Grid proxy architecture for network resources', about: 'Grid Computing and Optical Networks' },
      { position: 93, number: 'US 8,406,388', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 94, number: 'US 8,537,989', name: 'Device and method for providing enhanced telephony', about: 'VoIP and IVR Systems' },
      { position: 95, number: 'US 8,548,131', name: 'Systems and methods for communicating with an interactive voice response system', about: 'VoIP and IVR Systems' },
      { position: 96, number: 'US 8,553,859', name: 'Device and method for providing enhanced telephony', about: 'VoIP and IVR Systems' },
      { position: 97, number: 'US 8,572,303', name: 'Portable universal communication device', about: 'Network Communications' },
      { position: 98, number: 'US 8,745,573', name: 'Platform-independent application development framework', about: 'Software Engineering' },
      { position: 99, number: 'US 9,021,130', name: 'Photonic line sharing for high-speed routers', about: 'Grid Computing and Optical Networks' },
      { position: 100, number: 'US 9,083,728', name: 'Systems and methods to support sharing and exchanging in a network', about: 'Web Technologies' },
      { position: 101, number: 'US 9,184,989', name: 'Grid proxy architecture for network resources', about: 'Grid Computing and Optical Networks' },
      { position: 102, number: 'US 9,521,255', name: 'Systems and methods for visual presentation and selection of IVR menu', about: 'VoIP and IVR Systems' },
      { position: 103, number: 'US 9,660,655', name: 'Ultra-low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 104, number: 'US 9,690,877', name: 'Systems and methods for electronic communications', about: 'Network Communications' },
      { position: 105, number: 'US 9,705,511', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 106, number: 'US 9,729,158', name: 'Ultra low phase noise frequency synthesizer', about: 'Wireless Communications' },
      { position: 107, number: 'US 9,831,881', name: 'Radar target detection system for autonomous vehicles with ultra-low phase noise frequency synthesizer', about: 'Autonomous Vehicle Radar' },
      { position: 108, number: 'US 2022/0043108', name: 'Systems, methods and apparatus for deep-learning multidimensional detection, segmentation and classification', about: 'Network Communications' },
      { position: 109, number: 'WO 2005033899', name: 'Method and apparatus for scheduling resources on a switched underlay network', about: 'Grid Computing and Optical Networks' },
    ];

    return {
      '@context': 'https://schema.org',
      '@graph': [
        PERSON_ENTITY,
        {
          '@type': 'CollectionPage',
          name: 'Patents — Dr. Tal Lavian',
          description:
            '120+ patents by Dr. Tal Lavian covering telecommunications, network communications, and computer science innovations including 60+ pro-se prosecutions before the USPTO.',
          url: `${BASE_URL}/patents/`,
          author: PERSON_REF,
          dateModified: '2026-03-16T00:00:00+00:00',
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
          description: '109 enumerated patents and published applications (a representative selection of Dr. Lavian\'s 120+ inventions) spanning network switch architecture, network security, VoIP/IVR systems, grid computing, QoS, autonomous-vehicle radar, and wireless communications.',
          numberOfItems: 109,
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
          dateModified: '2026-03-16T00:00:00+00:00',
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
          dateModified: '2026-03-16T00:00:00+00:00',
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


