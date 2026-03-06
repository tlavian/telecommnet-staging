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
  name: 'Telecom Consulting Expert for Corporate Counsel & Enterprises',
  slug: 'corporate-clients',
  description:
    'Strategic telecommunications consulting, FCC compliance advisory, and technical due diligence for corporate legal teams and telecom enterprises.',
  breadcrumbLabel: 'Corporate Clients',
});

export const corporateClientsTitle =
  "Telecom Expert for Corporate Counsel | TelecommNet";
export const corporateClientsDescription =
  "Strategic telecommunications consulting, FCC compliance advisory, and technical due diligence for corporate legal teams and telecom enterprises.";

// ─── 17. LAW FIRM CLIENTS ────────────────────────────────────────────────
// File: src/pages/law-firm-clients/index.astro

export const lawFirmClientsSchema = buildSchema.clientPage({
  name: 'Telecommunications Expert Witness for Law Firms — Patent & IP Litigation',
  slug: 'law-firm-clients',
  description:
    'Retain a premier telecommunications expert witness for patent litigation, IP disputes, and infrastructure failures. Daubert-qualified technical testimony and forensic analysis.',
  breadcrumbLabel: 'Law Firm Clients',
});

export const lawFirmClientsTitle =
  "Telecom Expert Witness for Law Firms | TelecommNet";
export const lawFirmClientsDescription =
  "Retain a premier telecommunications expert witness for patent litigation, IP disputes, and infrastructure failures. Daubert-qualified technical testimony and forensic analysis.";

// ─── 18. SCIENTIFIC PUBLICATIONS ─────────────────────────────────────────
// File: src/pages/scientific-publications/index.astro

export const publicationsSchema = buildSchema.publications();

export const publicationsTitle =
  "Scientific Publications | Dr. Tal Lavian";
export const publicationsDescription =
  "Peer-reviewed telecommunications research, academic whitepapers, and scientific publications supporting expert witness testimony in complex IP and infrastructure litigation.";

// ─── 19. TALKS & PRESENTATIONS ───────────────────────────────────────────
// File: src/pages/talks-presentations/index.astro

export const talksSchema = buildSchema.talks();

export const talksTitle =
  "Talks & Presentations | Dr. Tal Lavian";
export const talksDescription =
  "View keynote presentations, CLE training sessions, and technical lectures. Demonstrating clear communication of complex telecom technology to judges and juries.";

// ─── 20. CASES / EXPERT WITNESS TESTIMONY ────────────────────────────────
// File: src/pages/cases-expert-witness-testimony/index.astro

export const casesSchema = buildSchema.cases();

export const casesTitle =
  "Expert Witness Cases | Dr. Tal Lavian";
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
  "Contact Dr. Tal Lavian | Telecom Expert Witness";
export const contactDescription =
  "Contact Dr. Tal Lavian for telecommunications and network communications expert witness services. Phone: +1 (408) 209-9112. Based in Encino, California.";

// ─── 23. PRIVACY POLICY ───────────────────────────────────────────────────
// File: src/pages/privacy-policy/index.astro

export const privacySchema = buildSchema.webPage({
  name: 'Privacy Policy & Data Security Protocols — TelecommNet',
  slug: 'privacy-policy',
  description:
    'TelecommNet\'s privacy policy outlining rigorous data protection protocols, GDPR/CCPA compliance, and commitment to maintaining attorney-client privilege.',
  breadcrumbLabel: 'Privacy Policy',
});

export const privacyTitle =
  "Privacy Policy & Data Security Protocols | TelecommNet";
export const privacyDescription =
  "TelecommNet's privacy policy outlining rigorous data protection protocols, GDPR/CCPA compliance, and commitment to maintaining attorney-client privilege.";

// ─── 24. TERMS AND CONDITIONS ─────────────────────────────────────────────
// File: src/pages/terms-and-conditions/index.astro

export const termsSchema = buildSchema.webPage({
  name: 'Terms and Conditions of Use — TelecommNet Expert Witness Services',
  slug: 'terms-and-conditions',
  description:
    'Terms of engagement, conflict of interest policies, and legal disclaimers for utilizing TelecommNet\'s telecommunications expert witness website.',
  breadcrumbLabel: 'Terms and Conditions',
});

export const termsTitle =
  "Terms and Conditions | TelecommNet";
export const termsDescription =
  "Terms of engagement, conflict of interest policies, and legal disclaimers for utilizing TelecommNet's telecommunications expert witness website.";

// ─── 25. PATENTS ──────────────────────────────────────────────────────────
// File: src/pages/patents/index.astro

export const patentsSchema = buildSchema.patents();

export const patentsTitle =
  "Patents — Dr. Tal Lavian | TelecommNet";
export const patentsDescription =
  "120+ patents by Dr. Tal Lavian in telecommunications, network communications, and computer science. 60+ pro-se prosecutions before the USPTO.";

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
