/**
 * ============================================================
 * Phase 2 Schema — Remaining Pages (13–27)
 * Pages 16–27: Corporate Clients, Law Firm Clients, Publications,
 *              Talks, Cases, Site Map, Contact, Privacy Policy,
 *              Terms, Patents, Publication (single), Case (redirect)
 * ============================================================
 */

import { buildSchema } from './schemas';

// ─── 16. CORPORATE CLIENTS ────────────────────────────────────────────────
// File: src/pages/corporate-clients/index.astro

export const corporateClientsSchema = buildSchema.clientPage({
  name: 'Corporate Clients — Dr. Tal Lavian Expert Witness Services',
  slug: 'corporate-clients',
  description:
    'Corporate and technology company clients for whom Dr. Tal Lavian has provided expert witness and consulting services in patent litigation involving telecommunications and network communications.',
  breadcrumbLabel: 'Corporate Clients',
});

export const corporateClientsTitle =
  "Corporate Clients — Dr. Tal Lavian Expert Witness | TelecommNet";
export const corporateClientsDescription =
  "Corporate clients of Dr. Tal Lavian: Google, Microsoft, Apple, Amazon, Cisco, Netflix, T-Mobile & 50+ tech leaders. Telecommunications expert witness services for patent litigation.";

// ─── 17. LAW FIRM CLIENTS ────────────────────────────────────────────────
// File: src/pages/law-firm-clients/index.astro

export const lawFirmClientsSchema = buildSchema.clientPage({
  name: 'Law Firm Clients — Dr. Tal Lavian Expert Witness Services',
  slug: 'law-firm-clients',
  description:
    'Law firm clients that have retained Dr. Tal Lavian as a telecommunications and network communications expert witness in patent litigation matters in federal courts, USPTO PTAB, and the ITC.',
  breadcrumbLabel: 'Law Firm Clients',
});

export const lawFirmClientsTitle =
  "Law Firm Clients — Dr. Tal Lavian Expert Witness | TelecommNet";
export const lawFirmClientsDescription =
  "Law firm clients of Dr. Tal Lavian: Fish Richardson, Gibson Dunn, Cooley, Kirkland Ellis, Finnegan, Winston Strawn & 25+ leading IP firms. Telecommunications expert witness services.";

// ─── 18. SCIENTIFIC PUBLICATIONS ─────────────────────────────────────────
// File: src/pages/scientific-publications/index.astro

export const publicationsSchema = buildSchema.publications();

export const publicationsTitle =
  "Scientific Publications — Dr. Tal Lavian | TelecommNet";
export const publicationsDescription =
  "25+ peer-reviewed scientific publications by Dr. Tal Lavian in IEEE, ACM journals on telecommunications, network communications, and computer science. Ph.D. UC Berkeley.";

// ─── 19. TALKS & PRESENTATIONS ───────────────────────────────────────────
// File: src/pages/talks-presentations/index.astro

export const talksSchema = buildSchema.talks();

export const talksTitle =
  "Talks & Presentations — Dr. Tal Lavian | TelecommNet";
export const talksDescription =
  "Talks and presentations by Dr. Tal Lavian at IEEE, ACM, UC Berkeley, DARPA events, and industry conferences on telecommunications and networking topics.";

// ─── 20. CASES / EXPERT WITNESS TESTIMONY ────────────────────────────────
// File: src/pages/cases-expert-witness-testimony/index.astro

export const casesSchema = buildSchema.cases();

export const casesTitle =
  "Cases — Expert Witness Testimony | Dr. Tal Lavian | TelecommNet";
export const casesDescription =
  "Expert witness testimony cases by Dr. Tal Lavian. 100+ cases in U.S. federal courts, USPTO PTAB, and ITC involving telecommunications and network communications patent disputes.";

// ─── 21. SITE MAP ─────────────────────────────────────────────────────────
// File: src/pages/site-map/index.astro

export const siteMapSchema = buildSchema.webPage({
  name: 'Site Map — TelecommNet.com',
  slug: 'site-map',
  description:
    'Complete site map for TelecommNet.com — navigate all pages of Dr. Tal Lavian\'s telecommunications expert witness consulting practice website.',
  breadcrumbLabel: 'Site Map',
});

export const siteMapTitle =
  "Site Map — TelecommNet.com | Dr. Tal Lavian";
export const siteMapDescription =
  "Complete site map for TelecommNet.com. Navigate all pages of Dr. Tal Lavian's telecommunications expert witness and consulting practice website.";

// ─── 22. CONTACT ──────────────────────────────────────────────────────────
// File: src/pages/contact/index.astro

export const contactSchema = buildSchema.contact();

export const contactTitle =
  "Contact Dr. Tal Lavian — Telecommunications Expert Witness | TelecommNet";
export const contactDescription =
  "Contact Dr. Tal Lavian for telecommunications and network communications expert witness services. Phone: +1 (408) 209-9112. Based in Encino, California.";

// ─── 23. PRIVACY POLICY ───────────────────────────────────────────────────
// File: src/pages/privacy-policy/index.astro

export const privacySchema = buildSchema.webPage({
  name: 'Privacy Policy — TelecommNet.com',
  slug: 'privacy-policy',
  description:
    'Privacy Policy for TelecommNet.com. Learn how this website uses Google Analytics for anonymous traffic analysis. No personal information is collected or shared.',
  breadcrumbLabel: 'Privacy Policy',
});

export const privacyTitle =
  "Privacy Policy — TelecommNet.com | Dr. Tal Lavian";
export const privacyDescription =
  "Privacy Policy for TelecommNet.com. Learn how this site uses Google Analytics for anonymous traffic analysis. No personal data is collected, stored, or shared.";

// ─── 24. TERMS AND CONDITIONS ─────────────────────────────────────────────
// File: src/pages/terms-and-conditions/index.astro

export const termsSchema = buildSchema.webPage({
  name: 'Terms and Conditions — TelecommNet.com',
  slug: 'terms-and-conditions',
  description:
    'Terms and Conditions for TelecommNet.com, the professional expert witness website of Dr. Tal Lavian, Telecommunications and Network Communications Expert Witness.',
  breadcrumbLabel: 'Terms and Conditions',
});

export const termsTitle =
  "Terms and Conditions — TelecommNet.com | Dr. Tal Lavian";
export const termsDescription =
  "Terms and conditions for TelecommNet.com. Usage terms, intellectual property, and legal notices for Dr. Tal Lavian's telecommunications expert witness consulting website.";

// ─── 25. PATENTS ──────────────────────────────────────────────────────────
// File: src/pages/patents/index.astro

export const patentsSchema = buildSchema.patents();

export const patentsTitle =
  "Patents — Dr. Tal Lavian | TelecommNet";
export const patentsDescription =
  "120+ patents by Dr. Tal Lavian in telecommunications, network communications, and computer science. Patent portfolio spanning network communications innovation. 60+ pro-se prosecutions.";

// ─── 26. PUBLICATION (single page template) ───────────────────────────────
// File: src/pages/publication/[slug].astro or src/pages/publication/index.astro
// Usage: call buildSchema.publication({ title, slug, year, venue }) per publication

// Example for a single publication page:
export const publicationSchemaExample = buildSchema.publication({
  title: 'Research Publication Title',
  slug: 'publication-slug',
  year: '2010',
  venue: 'IEEE / ACM',
});

// ─── 27. CASE (redirect → cases page) ────────────────────────────────────
// File: src/pages/case/index.astro
// This page type redirects to /cases-expert-witness-testimony/
// No schema needed — add a <meta http-equiv="refresh"> or Astro.redirect() instead:
// return Astro.redirect('/cases-expert-witness-testimony/', 301);
// Schema: none (redirected page should not have independent schema)
