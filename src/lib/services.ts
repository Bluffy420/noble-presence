export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  /**
   * External WordPress URL for this service page.
   * Once you publish the page in WordPress, paste its full URL here
   * (e.g. "https://nbassociates.net/commercial-debt-recovery").
   * When set, clicking the service card goes directly to WordPress
   * and the /services/<slug> internal route is bypassed.
   */
  externalUrl?: string;
};

// ── Edit each `externalUrl` after you publish the matching WP page. ──
export const SERVICES: Service[] = [
  {
    slug: "legal-notice-pre-litigation-recovery",
    title: "Legal Notice & Pre-Litigation Recovery",
    short: "Structured pre-litigation outreach to recover dues without court proceedings.",
    description:
      "We draft and serve legal notices, conduct creditor-debtor negotiations, and pursue early settlements that recover outstanding amounts without the time and cost of litigation.",
    externalUrl: "https://nbassociates.net/legal-notice-pre-litigation-recovery",
  },
  {
    slug: "msme-recovery-proceedings",
    title: "MSME Recovery Proceedings",
    short: "End-to-end representation before MSME Facilitation Councils.",
    description:
      "We represent registered MSMEs in conciliation and arbitration proceedings under the MSMED Act, recovering principal, interest, and statutory dues from buyers who default on payments.",
    externalUrl: "https://nbassociates.net/msme-recovery-proceedings",
  },
  {
    slug: "commercial-debt-recovery",
    title: "Commercial Debt Recovery",
    short: "Recovery strategies for trade dues, contractual claims, and B2B receivables.",
    description:
      "From contract enforcement to summary suits and execution proceedings, we structure recovery for businesses facing defaults across commercial transactions.",
    externalUrl: "https://nbassociates.net/commercial-debt-recovery",
  },
  {
    slug: "civil-recovery-suits",
    title: "Civil Recovery Suits",
    short: "Civil litigation for recovery of money, property, and contractual dues.",
    description:
      "We file and conduct civil recovery suits, summary suits under Order XXXVII, and execution petitions across trial courts, district courts, and High Courts.",
    externalUrl: "https://nbassociates.net/civil-recovery-suits",
  },
  {
    slug: "arbitration-for-debt-recovery",
    title: "Arbitration for Debt Recovery",
    short: "Arbitration and ADR for time-bound resolution of commercial disputes.",
    description:
      "We act as counsel in domestic and institutional arbitrations under the Arbitration & Conciliation Act, 1996, including Section 9 interim relief, Section 17 protection, and Section 34 challenges.",
    externalUrl: "https://nbassociates.net/arbitration-for-debt-recovery",
  },
  {
    slug: "corporate-debt-recovery",
    title: "Corporate Debt Recovery",
    short: "Corporate recovery including insolvency, DRT, and SARFAESI proceedings.",
    description:
      "We advise creditors and financial institutions on recovery before the NCLT, DRT, and under the SARFAESI Act, including initiation of CIRP under the Insolvency & Bankruptcy Code.",
    externalUrl: "https://nbassociates.net/corporate-debt-recovery",
  },
  {
    slug: "cheque-bouncing-negotiable-instruments-act",
    title: "Cheque Bouncing & N.I. Act Matters",
    short: "Prosecution and defence under Section 138 of the Negotiable Instruments Act.",
    description:
      "We file and defend complaints under Section 138, conduct trial proceedings, and pursue appellate remedies across magistrate, sessions, and High Courts.",
    externalUrl: "https://nbassociates.net/cheque-bouncing-negotiable-instruments-act",
  },
];

/** Base URL where your WordPress blog posts live (post slug appended). */
export const WP_BASE = "https://nbassociates.net";
