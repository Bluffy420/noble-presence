export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  wpUrl: string;
};

const WP = "https://nbassociates.net";

export const SERVICES: Service[] = [
  // A
  {
    slug: "arbitration-and-alternative-dispute-resolution",
    title: "Arbitration & Alternative Dispute Resolution",
    short: "Time-bound resolution of commercial disputes through arbitration and ADR.",
    description:
      "We act as counsel in domestic and institutional arbitrations under the Arbitration & Conciliation Act, 1996, including Section 9 interim relief, Section 17 protection, and Section 34 challenges.",
    wpUrl: `${WP}/arbitration-and-alternative-dispute-resolution/`,
  },
  // B
  {
    slug: "banking-laws",
    title: "Banking Laws",
    short: "Legal advisory on banking regulations, loan recovery, and financial disputes.",
    description:
      "We advise banks, financial institutions, and borrowers on banking laws, loan documentation, security enforcement, and dispute resolution before banking courts and tribunals.",
    wpUrl: `${WP}/banking-laws/`,
  },
  // C
  {
    slug: "cheque-bounce-cases",
    title: "Cheque Bounce Cases",
    short: "Prosecution and defence in cheque dishonour cases under Section 138 N.I. Act.",
    description:
      "We represent payees and accused in cheque bounce proceedings under Section 138 of the Negotiable Instruments Act, including demand notices, trial court appearances, appeals, and compounding.",
    wpUrl: `${WP}/cheque-bounce-cases/`,
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
    slug: "commercial-disputes-and-business-litigation",
    title: "Commercial Disputes & Business Litigation",
    short: "End-to-end litigation for complex commercial and business disputes.",
    description:
      "We represent businesses and individuals in commercial disputes before trial courts, High Courts, and tribunals, covering contract breaches, partnership disputes, and complex civil litigation.",
    wpUrl: `${WP}/commercial-disputes-and-business-litigation/`,
  },
  {
    slug: "commercial-leasing-and-licensing",
    title: "Commercial Leasing and Licensing",
    short: "Advisory and drafting for commercial lease, leave & licence, and tenancy matters.",
    description:
      "We advise landlords, tenants, and licensees on commercial lease structuring, leave and licence agreements, rent disputes, eviction proceedings, and compliance with local tenancy legislation.",
    wpUrl: `${WP}/commercial-leasing-and-licensing/`,
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
    slug: "consumer-protection-and-rera-litigation",
    title: "Consumer Protection & RERA Litigation",
    short: "Representation before consumer forums and RERA authorities.",
    description:
      "We represent homebuyers, consumers, and businesses before district consumer forums, state commissions, NCDRC, and RERA authorities across India.",
    wpUrl: `${WP}/consumer-protection-and-rera-litigation/`,
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
    slug: "criminal-law",
    title: "Criminal Law",
    short: "Defence and prosecution across criminal courts and tribunals.",
    description:
      "We represent accused and complainants in criminal matters including economic offences, cheque bouncing under Section 138 N.I. Act, bail applications, and appellate proceedings before sessions courts and High Courts.",
    wpUrl: `${WP}/criminal-law/`,
  },
  // E
  {
    slug: "employment-and-labour-laws",
    title: "Employment & Labour Laws",
    short: "Advisory and litigation on employment, termination, and labour compliance.",
    description:
      "We advise employers and employees on employment contracts, termination, non-compete clauses, PF/ESI compliance, and represent clients before labour courts and industrial tribunals.",
    wpUrl: `${WP}/employment-and-labour-laws/`,
  },
  // F
  {
    slug: "fema-law",
    title: "FEMA & Foreign Exchange",
    short: "Advisory on FEMA compliance, FDI, and foreign exchange transactions.",
    description:
      "We advise on FEMA regulations governing foreign investment, ECB, overseas remittances, and represent clients in proceedings before the Enforcement Directorate.",
    wpUrl: `${WP}/fema-law/`,
  },
  // I
  {
    slug: "insolvency-and-bankruptcy-law",
    title: "Insolvency & Bankruptcy Law",
    short: "Corporate insolvency, CIRP, and IBC proceedings before NCLT.",
    description:
      "We advise creditors, resolution applicants, and corporate debtors on insolvency proceedings under the Insolvency & Bankruptcy Code, including CIRP initiation, resolution plans, and liquidation.",
    wpUrl: `${WP}/insolvency-and-bankruptcy-law/`,
  },
  // M
  {
    slug: "mergers-and-acquisitions",
    title: "Mergers & Acquisitions",
    short: "Legal due diligence, structuring, and documentation for M&A transactions.",
    description:
      "We assist acquirers, sellers, and investors in structuring deals, conducting legal due diligence, and drafting transaction documents for mergers, acquisitions, and business transfers.",
    wpUrl: `${WP}/mergers-and-acquisitions/`,
  },
  {
    slug: "msme-dispute-resolution-and-debt-recovery",
    title: "MSME Dispute Resolution & Debt Recovery",
    short: "End-to-end representation before MSME Facilitation Councils.",
    description:
      "We represent registered MSMEs in conciliation and arbitration proceedings under the MSMED Act, recovering principal, interest, and statutory dues from buyers who default on payments.",
    wpUrl: `${WP}/msme-dispute-resolution-and-debt-recovery/`,
  },
  // R
  {
    slug: "rbi-laws",
    title: "RBI & Banking Regulations",
    short: "Regulatory advice on RBI guidelines and financial compliance.",
    description:
      "We advise banks, NBFCs, and borrowers on RBI regulations, loan documentation, recovery, and regulatory proceedings before the Reserve Bank of India.",
    wpUrl: `${WP}/rbi-laws/`,
  },
  {
    slug: "real-estate-and-infrastructure-law",
    title: "Real Estate & Infrastructure Law",
    short: "Advisory on property transactions, RERA, and infrastructure projects.",
    description:
      "We advise on property acquisitions, title due diligence, RERA compliance, construction contracts, and dispute resolution in real estate and infrastructure matters.",
    wpUrl: `${WP}/real-estate-and-infrastructure-law/`,
  },
  // S
  {
    slug: "supreme-court-and-constitutional-litigation",
    title: "Supreme Court & Constitutional Litigation",
    short: "Representation before the Supreme Court on constitutional matters.",
    description:
      "We appear before the Supreme Court in civil, criminal, constitutional, and special leave petitions, and advise on fundamental rights, writs, and public interest matters.",
    wpUrl: `${WP}/supreme-court-and-constitutional-litigation/`,
  },
];
