export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  /** Canonical WordPress page for this service */
  wpUrl: string;
};

const WP = "https://nbassociates.net";

export const SERVICES: Service[] = [
  {
    slug: "legal-notice-pre-litigation-recovery",
    title: "Legal Notice & Pre-Litigation Recovery",
    short: "Structured pre-litigation outreach to recover dues without court proceedings.",
    description:
      "We draft and serve legal notices, conduct creditor-debtor negotiations, and pursue early settlements that recover outstanding amounts without the time and cost of litigation.",
    wpUrl: `${WP}/commercial-debt-recovery/`,
  },
  {
    slug: "msme-recovery-proceedings",
    title: "MSME Recovery Proceedings",
    short: "End-to-end representation before MSME Facilitation Councils.",
    description:
      "We represent registered MSMEs in conciliation and arbitration proceedings under the MSMED Act, recovering principal, interest, and statutory dues from buyers who default on payments.",
    wpUrl: `${WP}/msme-dispute-resolution-and-debt-recovery/`,
  },
  {
    slug: "commercial-debt-recovery",
    title: "Commercial Debt Recovery",
    short: "Recovery strategies for trade dues, contractual claims, and B2B receivables.",
    description:
      "From contract enforcement to summary suits and execution proceedings, we structure recovery for businesses facing defaults across commercial transactions.",
    wpUrl: `${WP}/commercial-debt-recovery/`,
  },
  {
    slug: "civil-recovery-suits",
    title: "Civil Recovery Suits",
    short: "Civil litigation for recovery of money, property, and contractual dues.",
    description:
      "We file and conduct civil recovery suits, summary suits under Order XXXVII, and execution petitions across trial courts, district courts, and High Courts.",
    wpUrl: `${WP}/commercial-disputes-and-business-litigation/`,
  },
  {
    slug: "arbitration-for-debt-recovery",
    title: "Arbitration for Debt Recovery",
    short: "Arbitration and ADR for time-bound resolution of commercial disputes.",
    description:
      "We act as counsel in domestic and institutional arbitrations under the Arbitration & Conciliation Act, 1996, including Section 9 interim relief, Section 17 protection, and Section 34 challenges.",
    wpUrl: `${WP}/arbitration-and-alternative-dispute-resolution/`,
  },
  {
    slug: "corporate-debt-recovery",
    title: "Corporate Debt Recovery",
    short: "Corporate recovery including insolvency, DRT, and SARFAESI proceedings.",
    description:
      "We advise creditors and financial institutions on recovery before the NCLT, DRT, and under the SARFAESI Act, including initiation of CIRP under the Insolvency & Bankruptcy Code.",
    wpUrl: `${WP}/insolvency-and-bankruptcy-law/`,
  },
  {
    slug: "cheque-bouncing-negotiable-instruments-act",
    title: "Cheque Bouncing & N.I. Act Matters",
    short: "Prosecution and defence under Section 138 of the Negotiable Instruments Act.",
    description:
      "We file and defend complaints under Section 138, conduct trial proceedings, and pursue appellate remedies across magistrate, sessions, and High Courts.",
    wpUrl: `${WP}/criminal-law/`,
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    short: "End-to-end corporate legal advisory for companies and business owners.",
    description:
      "We advise on company incorporation, shareholder agreements, board governance, contract drafting, and compliance across all stages of the corporate lifecycle.",
    wpUrl: `${WP}/corporate-law/`,
  },
  {
    slug: "mergers-and-acquisitions",
    title: "Mergers & Acquisitions",
    short: "Legal due diligence, structuring, and documentation for M&A transactions.",
    description:
      "We assist acquirers, sellers, and investors in structuring deals, conducting legal due diligence, and drafting transaction documents for mergers, acquisitions, and business transfers.",
    wpUrl: `${WP}/mergers-and-acquisitions/`,
  },
  {
    slug: "real-estate-and-infrastructure-law",
    title: "Real Estate & Infrastructure Law",
    short: "Advisory on property transactions, RERA, and infrastructure projects.",
    description:
      "We advise on property acquisitions, title due diligence, RERA compliance, construction contracts, and dispute resolution in real estate and infrastructure matters.",
    wpUrl: `${WP}/real-estate-and-infrastructure-law/`,
  },
  {
    slug: "consumer-protection-and-rera-litigation",
    title: "Consumer Protection & RERA Litigation",
    short: "Representation before consumer forums and RERA authorities.",
    description:
      "We represent homebuyers, consumers, and businesses before district consumer forums, state commissions, NCDRC, and RERA authorities across India.",
    wpUrl: `${WP}/consumer-protection-and-rera-litigation/`,
  },
  {
    slug: "employment-and-labour-laws",
    title: "Employment & Labour Laws",
    short: "Advisory and litigation on employment, termination, and labour compliance.",
    description:
      "We advise employers and employees on employment contracts, termination, non-compete clauses, PF/ESI compliance, and represent clients before labour courts and industrial tribunals.",
    wpUrl: `${WP}/employment-and-labour-laws/`,
  },
  {
    slug: "company-law",
    title: "Company Law",
    short: "MCA compliance, board matters, and company law advisory.",
    description:
      "We assist companies with MCA filings, board resolutions, statutory registers, shareholder disputes, and regulatory compliance under the Companies Act, 2013.",
    wpUrl: `${WP}/company-law/`,
  },
  {
    slug: "fema-law",
    title: "FEMA & Foreign Exchange",
    short: "Advisory on FEMA compliance, FDI, and foreign exchange transactions.",
    description:
      "We advise on FEMA regulations governing foreign investment, ECB, overseas remittances, and represent clients in proceedings before the Enforcement Directorate.",
    wpUrl: `${WP}/fema-law/`,
  },
  {
    slug: "rbi-laws",
    title: "RBI & Banking Laws",
    short: "Regulatory advice on RBI guidelines, banking, and financial compliance.",
    description:
      "We advise banks, NBFCs, and borrowers on RBI regulations, loan documentation, recovery, and regulatory proceedings before the Reserve Bank of India.",
    wpUrl: `${WP}/rbi-laws/`,
  },
  {
    slug: "supreme-court-and-constitutional-litigation",
    title: "Supreme Court & Constitutional Litigation",
    short: "Representation before the Supreme Court of India on constitutional matters.",
    description:
      "We appear before the Supreme Court in civil, criminal, constitutional, and special leave petitions, and advise on fundamental rights, writs, and public interest matters.",
    wpUrl: `${WP}/supreme-court-and-constitutional-litigation/`,
  },
];
