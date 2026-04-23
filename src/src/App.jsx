import { useState, useEffect, useRef } from "react";

const API_URL = "https://brokerpass-server-production.up.railway.app";

// BrokerPass — Complete Question Bank
// FNS40821 Certificate IV in Finance & Mortgage Broking
// 12 units · ~100 questions · All grounded in ASIC/NCCP/MFAA content
// Drop this file into your brokerpass project and import QUESTION_BANK

const QUESTION_BANK = {

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 1
  // BSBPEF501 — Manage Personal and Professional Development
  // ─────────────────────────────────────────────────────────────────────────
  "BSBPEF501": [
    {
      q: "Which of the following best describes Continuing Professional Development (CPD) obligations for MFAA members?",
      options: [
        "CPD is voluntary and only required if you want to upgrade your membership tier",
        "Members must complete a minimum number of CPD hours annually to maintain membership and meet ASIC's ongoing competency requirements",
        "CPD only applies to credit licensees, not credit representatives",
        "CPD requirements are set exclusively by individual aggregators, not peak bodies"
      ],
      answer: 1,
      explanation: "ASIC's RG206 and peak bodies MFAA and FBAA require ongoing CPD to maintain competency. Annual CPD hours keep brokers current with legislative changes, new products, and professional standards — non-compliance risks membership and ultimately licence conditions."
    },
    {
      q: "A mortgage broker notices they are consistently weaker on non-conforming loan products. The most professional response is to:",
      options: [
        "Avoid recommending non-conforming products to clients",
        "Refer all such clients to another broker permanently",
        "Identify the gap, seek targeted CPD or mentoring, and document the development activity",
        "Wait until their next annual review to address it"
      ],
      answer: 2,
      explanation: "BSBPEF501 requires brokers to proactively identify skill gaps and take structured steps to address them. Avoidance is not a professional development strategy — recognising and closing gaps is central to this unit."
    },
    {
      q: "A Personal Development Plan (PDP) for a mortgage broker should typically include:",
      options: [
        "Only financial targets for the year",
        "Short and long-term career goals, identified skill gaps, planned CPD activities, and review dates",
        "A list of lenders to add to your panel",
        "Client acquisition strategies only"
      ],
      answer: 1,
      explanation: "A PDP is a structured document covering career objectives, current competency levels, gaps, planned actions, and timelines for review. It's the cornerstone of professional self-management under this unit."
    },
    {
      q: "Which of the following is an example of informal professional development?",
      options: [
        "Completing a formal CPD course through the MFAA",
        "Attending a lender product training session",
        "Reading industry publications, listening to mortgage broking podcasts, or peer discussion",
        "Sitting a formal assessment for a new unit of competency"
      ],
      answer: 2,
      explanation: "Informal development includes self-directed learning that doesn't carry formal CPD points but still builds competency. Both formal and informal development have a role in a professional's growth plan."
    },
    {
      q: "Under professional development obligations, a broker's duty of competency means they should:",
      options: [
        "Only recommend loan products they have sold previously",
        "Maintain current knowledge of products, legislation, and best practices relevant to the work they undertake",
        "Outsource complex cases to specialists without any personal knowledge of the area",
        "Complete one training course per year regardless of relevance"
      ],
      answer: 1,
      explanation: "Competency is ongoing and contextual. Brokers must stay current in areas relevant to their actual practice — if they write SMSF loans, they need current SMSF knowledge. Stale knowledge creates compliance and client harm risk."
    },
    {
      q: "When setting professional goals, the SMART framework requires goals to be:",
      options: [
        "Simple, Manageable, Achievable, Realistic, Timely",
        "Specific, Measurable, Achievable, Relevant, Time-bound",
        "Strategic, Motivated, Active, Resourced, Tracked",
        "Structured, Meaningful, Aligned, Responsive, Tested"
      ],
      answer: 1,
      explanation: "SMART goals — Specific, Measurable, Achievable, Relevant, Time-bound — provide a proven framework for meaningful professional development planning. Vague goals like 'improve my knowledge' cannot be tracked or evaluated."
    },
    {
      q: "Reflective practice in a professional context means:",
      options: [
        "Reviewing your commission statements at end of month",
        "Systematically analysing your own performance, client outcomes, and learning from both successes and mistakes",
        "Following your manager's feedback without questioning it",
        "Updating your LinkedIn profile quarterly"
      ],
      answer: 1,
      explanation: "Reflective practice is a core professional skill — deliberately reviewing what went well, what didn't, and why. It drives continuous improvement and is a hallmark of high-performing professionals in regulated industries."
    },
    {
      q: "A broker receives feedback from a client that their explanation of loan features was confusing. The most constructive professional response is to:",
      options: [
        "Dispute the feedback as subjective",
        "Acknowledge the feedback, reflect on how explanations were delivered, and seek to improve client communication skills",
        "Add more legal disclaimers to client communications",
        "Only deal with clients who have finance backgrounds in future"
      ],
      answer: 1,
      explanation: "Professional development frameworks emphasise receiving feedback constructively and using it for growth. Client communication is a core competency — a broker who can't explain products clearly is a compliance risk and delivers poor client outcomes."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 2
  // FNSCUS511 — Develop and Maintain Professional Relationships in Financial Services
  // ─────────────────────────────────────────────────────────────────────────
  "FNSCUS511": [
    {
      q: "A mortgage broker receives a referral arrangement from a financial planner. Under professional obligations, this must be:",
      options: [
        "Kept confidential between the two parties to avoid client concern",
        "Disclosed to clients as a potential conflict of interest, documented, and managed appropriately",
        "Approved by ASIC before any referral can be accepted",
        "Limited to no more than two referral partners at any time"
      ],
      answer: 1,
      explanation: "Referral arrangements are permissible under the NCCP Act but must be disclosed to clients. Non-disclosure is a breach of professional conduct and could constitute a conflict of interest. The arrangement and any fees must be documented."
    },
    {
      q: "Which of the following best describes the role of an aggregator in the mortgage broking industry?",
      options: [
        "A government body that regulates broker commissions",
        "An intermediary that provides brokers access to a lender panel, back-office support, compliance frameworks, and commission processing",
        "A lender that aggregates multiple borrowers into a single loan facility",
        "A credit reporting agency that consolidates consumer credit data"
      ],
      answer: 1,
      explanation: "Aggregators sit between individual brokers/broker businesses and lenders. They negotiate panel accreditation, process commissions, provide compliance support, and offer technology platforms. Most brokers operate under an aggregator's ACL."
    },
    {
      q: "Building long-term client relationships in mortgage broking requires:",
      options: [
        "Contacting clients only when you have a new product to sell",
        "Proactive check-ins at key life events, rate review reminders, and consistent communication that adds value beyond the transaction",
        "Focusing entirely on new client acquisition rather than retention",
        "Delegating all post-settlement contact to your admin team"
      ],
      answer: 1,
      explanation: "Relationship maintenance is central to a sustainable broking business. Clients who feel valued return for refinances, purchase new investment properties, and refer family and friends — often the highest-value source of new business."
    },
    {
      q: "A broker's duty of confidentiality means they must:",
      options: [
        "Not discuss one client's financial details with another client or third party without consent",
        "Keep all loan approvals confidential from the client until settlement",
        "Withhold product comparison information to protect lender relationships",
        "Only share client information with their aggregator, not with lenders"
      ],
      answer: 0,
      explanation: "The Privacy Act 1988 and professional ethics require brokers to protect client information. Sharing personal financial information without consent — even inadvertently — is a serious breach with legal and professional consequences."
    },
    {
      q: "Effective networking in the mortgage broking industry typically involves:",
      options: [
        "Competing aggressively with other brokers for the same referral partners",
        "Building mutually beneficial relationships with real estate agents, accountants, financial planners, and conveyancers",
        "Avoiding contact with other brokers to protect market share",
        "Limiting professional relationships to your aggregator only"
      ],
      answer: 1,
      explanation: "A referral network of complementary professionals is one of the most powerful business development tools in broking. Real estate agents, accountants, and financial planners each interact with clients at different stages of the property and financial lifecycle."
    },
    {
      q: "When a client complaint is received, the first obligation of a broker is to:",
      options: [
        "Refer the client directly to AFCA without engaging with the complaint",
        "Acknowledge the complaint promptly, investigate the issue, and attempt internal resolution before escalation",
        "Document that the client is difficult and note this on their file",
        "Consult a lawyer before responding to the client"
      ],
      answer: 1,
      explanation: "Under ASIC requirements, ACL holders must have an internal dispute resolution (IDR) process. The first step is acknowledging and attempting to resolve the complaint internally. AFCA (Australian Financial Complaints Authority) is the external escalation pathway if IDR fails."
    },
    {
      q: "A colleague asks you to share client contact details so they can offer financial planning services. You should:",
      options: [
        "Share the details — it benefits the client to have access to more services",
        "Decline and explain that client information cannot be shared without the client's express consent",
        "Share only the client's name and phone number as this is not sensitive",
        "Ask your aggregator to forward the details on your behalf"
      ],
      answer: 1,
      explanation: "The Privacy Act requires express consent before personal information can be shared with third parties for a new purpose. Even well-intentioned sharing is a breach without consent — and a source of trust damage and regulatory risk."
    },
    {
      q: "Which external dispute resolution (EDR) scheme must Australian credit licensees be members of?",
      options: [
        "Financial Services Ombudsman (FSO)",
        "Australian Financial Complaints Authority (AFCA)",
        "Banking Code Compliance Committee (BCCC)",
        "Australian Banking Association (ABA)"
      ],
      answer: 1,
      explanation: "AFCA is the mandatory EDR scheme for all ACL holders. Clients who cannot resolve complaints through internal processes can take their complaint to AFCA for free. Membership is a condition of holding an ACL."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 3
  // FNSFMB411 — Prepare Loan Applications on Behalf of Clients
  // ─────────────────────────────────────────────────────────────────────────
  "FNSFMB411": [
    {
      q: "Which document must a broker provide to a client before providing credit assistance?",
      options: [
        "Credit Proposal Document (CPD)",
        "Credit Guide",
        "Privacy Notice only",
        "Preliminary Credit Assessment"
      ],
      answer: 1,
      explanation: "The Credit Guide must be provided as early as practicable — and always before providing credit assistance. It discloses the broker's ACL number, fees, lender panel, complaints process, and whether they are a credit representative or licensee."
    },
    {
      q: "The Fact Find (Needs Analysis) document serves to:",
      options: [
        "Speed up the application process by pre-filling lender forms",
        "Capture the client's complete financial position, goals, and circumstances to enable compliant, tailored recommendations",
        "Satisfy only the lender's credit assessment requirements",
        "Document why a specific lender was chosen"
      ],
      answer: 1,
      explanation: "The Fact Find is the foundation of compliant broking. It captures income, expenses, assets, liabilities, goals, and any special circumstances. Without a thorough Fact Find, a broker cannot demonstrate they understood the client's needs — a core Best Interests Duty requirement."
    },
    {
      q: "When verifying a PAYG client's income, which documents are typically required?",
      options: [
        "Client's verbal confirmation of salary",
        "Two most recent payslips and most recent group certificate or tax return",
        "Bank statements only",
        "Employment contract alone is sufficient"
      ],
      answer: 1,
      explanation: "Standard income verification for PAYG employees requires recent payslips (typically last 2) plus a group certificate or ATO income statement/tax return for the previous financial year. Verbal confirmation is never sufficient — all income must be evidenced."
    },
    {
      q: "Genuine savings in the context of a mortgage application generally refers to:",
      options: [
        "Any funds the borrower has access to, including gifts and loans from family",
        "Funds accumulated by the borrower over at least 3 months through their own savings activity, not gifts or windfalls",
        "The borrower's superannuation balance",
        "Any deposit regardless of source if it equals 5% of the property value"
      ],
      answer: 1,
      explanation: "Most lenders require genuine savings — funds held in the borrower's own account for typically 3+ months — for LVRs above 80–85%. Gifts, parental loans, and windfalls generally don't qualify as genuine savings unless held for the required period."
    },
    {
      q: "When preparing a loan application, the broker discovers the client's declared expenses appear unusually low. The broker should:",
      options: [
        "Accept the client's figure and proceed — it's not the broker's role to question declared expenses",
        "Make reasonable inquiries, compare against benchmarks (HEM), and document the outcome",
        "Inflate the expenses figure without telling the client",
        "Decline to proceed with the application"
      ],
      answer: 1,
      explanation: "Responsible lending and Best Interests Duty require brokers to make reasonable inquiries about expenses. The Household Expenditure Measure (HEM) is a common benchmark. If declared expenses are below HEM, lenders may use HEM anyway — the broker should document their inquiry and the outcome."
    },
    {
      q: "A self-employed borrower of 18 months wants to apply for a home loan. Most lenders will require:",
      options: [
        "One month's business bank statements",
        "Typically two years of tax returns and financial statements; some lenders offer low-doc options for those with shorter ABN history",
        "Only an accountant's letter confirming income",
        "Self-employed borrowers cannot apply for standard home loans"
      ],
      answer: 1,
      explanation: "Two years of financials (tax returns + business financials) is the standard requirement. Some lenders offer low-doc or alt-doc solutions for borrowers with shorter ABN history, but at higher rates and stricter LVR limits. A broker must disclose these trade-offs."
    },
    {
      q: "The Credit Proposal Document (CPD) must include:",
      options: [
        "Only the recommended loan product and interest rate",
        "The recommended product, why it meets the client's needs, any conflicts of interest, and the broker's remuneration",
        "A full list of all products on the broker's panel",
        "The client's full credit history"
      ],
      answer: 1,
      explanation: "The CPD is a key compliance document. It must explain why the recommended product suits the client's specific circumstances, disclose any conflicts (e.g. higher commission on the recommended product), and document the broker's remuneration. It's evidence of compliant recommendation."
    },
    {
      q: "What is the purpose of a Preliminary Credit Assessment (PCA)?",
      options: [
        "To formally approve the client for a specific loan amount",
        "To assess whether the proposed credit contract is not unsuitable for the client before proceeding",
        "To generate a credit score for the client",
        "To satisfy the lender's valuation requirements"
      ],
      answer: 1,
      explanation: "The PCA is the broker's documented assessment that the proposed loan is not unsuitable — covering serviceability, loan purpose, and whether the product meets the client's needs. It must be completed before providing credit assistance and must be kept on file."
    },
    {
      q: "Which of the following income types typically requires the most additional documentation to verify?",
      options: [
        "PAYG salary from a single employer",
        "Rental income, overtime, bonuses, commission, and self-employment income",
        "Government pension payments",
        "HECS repayment obligations"
      ],
      answer: 1,
      explanation: "Variable income sources — rental, overtime, bonus, commission, self-employment — require additional verification because they may not be stable or ongoing. Most lenders discount or shade variable income, and brokers must evidence it thoroughly to support the application."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 4
  // FNSFMB412 — Identify Client Needs and Present Broking Options
  // ─────────────────────────────────────────────────────────────────────────
  "FNSFMB412": [
    {
      q: "The Best Interests Duty (BID) under the NCCP Act requires mortgage brokers to:",
      options: [
        "Always recommend the lender offering the lowest rate on their panel",
        "Act in the best interests of the consumer and prioritise the consumer's interests when there is a conflict",
        "Recommend products that maximise the broker's upfront commission",
        "Only present options from lenders the broker has worked with before"
      ],
      answer: 1,
      explanation: "The Best Interests Duty, introduced following the Royal Commission, requires brokers to genuinely act in the client's interests — not their own. Where the broker's interest (e.g. higher commission) conflicts with the client's interest (e.g. cheaper product), the client's interest must prevail."
    },
    {
      q: "When presenting loan options to a client, which approach best demonstrates compliance?",
      options: [
        "Present only one option to avoid overwhelming the client",
        "Present a shortlist of suitable options with clear explanation of why each was selected and how they compare on cost, features, and fit to the client's needs",
        "Present every product on the panel to maximise transparency",
        "Only present the cheapest product by interest rate"
      ],
      answer: 1,
      explanation: "Presenting a considered shortlist with clear reasoning — rather than all products or just one — demonstrates genuine needs analysis. ASIC expects brokers to show their reasoning, not just their conclusion."
    },
    {
      q: "A client states they want to pay off their mortgage as quickly as possible. Which loan features would you explore first?",
      options: [
        "Interest-only repayments and longer loan terms",
        "Offset accounts, ability to make additional repayments without penalty, and redraw facilities",
        "Fixed rate with prepayment restrictions",
        "Line of credit with revolving access"
      ],
      answer: 1,
      explanation: "For a client focused on debt reduction, flexibility to make extra repayments and an offset account (which reduces interest daily) are the most relevant features. Prepayment restrictions on fixed loans directly conflict with this goal — a material consideration for the recommendation."
    },
    {
      q: "A client is purchasing their first investment property and also wants to keep their owner-occupier loan. The most tax-effective structure is typically:",
      options: [
        "Combine all borrowings into one loan for simplicity",
        "Keep loans separate so investment loan interest (tax deductible) is clearly distinguishable from owner-occupier interest (not deductible)",
        "Use a line of credit across all properties",
        "Put the entire debt under the investment property loan"
      ],
      answer: 1,
      explanation: "Mixing deductible and non-deductible debt is a significant tax issue. A broker should flag this to the client and recommend they consult their accountant — but structuring loans separately is standard practice. This demonstrates client-focused, holistic thinking."
    },
    {
      q: "A client is uncertain whether to fix their rate. Your obligation under the Best Interests Duty is to:",
      options: [
        "Make the decision for them based on your market view",
        "Clearly explain the implications of fixed versus variable (break costs, certainty, flexibility), check their circumstances, and let the client make an informed decision",
        "Default to whichever option gives you higher commission",
        "Always recommend variable as it is more flexible"
      ],
      answer: 1,
      explanation: "Brokers must inform, not decide for clients. The broker's role is to ensure the client understands the key trade-offs (rate certainty vs flexibility, break costs on fixed) so they can make an informed choice consistent with their own goals and risk tolerance."
    },
    {
      q: "Which of the following scenarios would raise the most concern under the Best Interests Duty?",
      options: [
        "Recommending a slightly higher-rate product because it has features the client specifically requested",
        "Consistently recommending the same lender to nearly all clients, where that lender pays the highest commission on your panel",
        "Recommending a non-conforming lender to a client with a genuine credit impairment",
        "Presenting three options and recommending one with a clear explanation"
      ],
      answer: 1,
      explanation: "A pattern of recommending the highest-commission lender regardless of client circumstances is a classic red flag for regulators. ASIC has been explicit that commission structures must not drive recommendations — such a pattern would likely trigger a compliance review."
    },
    {
      q: "A client's needs analysis reveals they are planning to sell their property in two years. A 3-year fixed rate loan would be:",
      options: [
        "Ideal because it provides rate certainty",
        "Potentially unsuitable because break costs could significantly increase their total cost if they exit before the fixed term ends",
        "Always recommended regardless of circumstances",
        "Suitable only if the fixed rate is lower than variable"
      ],
      answer: 1,
      explanation: "Break costs on fixed rate loans can be substantial — potentially tens of thousands of dollars. A two-year exit horizon makes a 3-year fix potentially unsuitable. The broker must explore this explicitly and document the client's decision if they choose to proceed."
    },
    {
      q: "The written comparison in a Credit Proposal Document (CPD) must show:",
      options: [
        "Only the recommended product",
        "The recommended product compared against at least a reasonable alternative, with reasoning for the recommendation",
        "All products on the panel sorted by interest rate",
        "The lender's product disclosure statement"
      ],
      answer: 1,
      explanation: "ASIC expects brokers to document their comparison and reasoning. The CPD should show the client why this product was recommended over alternatives — not just what was recommended. This is the evidence trail for compliance."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 5
  // FNSFMK515 — Comply with Financial Services Regulation and Industry Codes
  // ─────────────────────────────────────────────────────────────────────────
  "FNSFMK515": [
    {
      q: "The National Consumer Credit Protection Act 2009 (NCCP Act) primarily governs:",
      options: [
        "The regulation of financial advisers and investment products",
        "The licensing, conduct, and responsible lending obligations of credit providers and credit assistance providers",
        "The issuance of bank licences in Australia",
        "The regulation of insurance products"
      ],
      answer: 1,
      explanation: "The NCCP Act is the foundational legislation for Australian credit regulation. It established the Australian Credit Licence (ACL) framework, responsible lending obligations, and the Best Interests Duty for mortgage brokers — the primary legal framework for broking practice."
    },
    {
      q: "ASIC's Regulatory Guide 209 (RG209) relates to:",
      options: [
        "Mortgage broker commission disclosure requirements",
        "Credit licensing — the responsible lending obligations of credit providers and credit assistance providers",
        "Financial adviser education standards",
        "Anti-money laundering obligations"
      ],
      answer: 1,
      explanation: "RG209 is ASIC's key guidance on responsible lending. It explains what lenders and brokers must do to meet their obligations — making reasonable inquiries, verifying information, and assessing suitability. Every broker should know this document."
    },
    {
      q: "Under responsible lending obligations, a loan is 'not unsuitable' if:",
      options: [
        "The client can afford repayments and the loan meets their stated objectives",
        "The loan has a competitive interest rate",
        "The lender has approved the application",
        "The client has signed the application form"
      ],
      answer: 0,
      explanation: "The NCCP Act uses a 'not unsuitable' test — not a 'best possible' test. A loan is not unsuitable if: it meets the client's requirements and objectives, and the client can afford to comply with the financial obligations without substantial hardship. Both elements must be satisfied."
    },
    {
      q: "Anti-Money Laundering (AML) obligations require brokers to:",
      options: [
        "Only verify the identity of clients who are not Australian citizens",
        "Conduct customer due diligence (Know Your Customer) including identity verification before providing services",
        "Report all cash transactions over $5,000 to AUSTRAC",
        "AML obligations do not apply to mortgage brokers, only to banks"
      ],
      answer: 1,
      explanation: "Brokers operating under an ACL have AML/CTF obligations under the Anti-Money Laundering and Counter-Terrorism Financing Act 2006. Customer due diligence — verifying identity and understanding the nature of the transaction — is mandatory. Suspicious matter reports must be filed with AUSTRAC when required."
    },
    {
      q: "The MFAA Code of Practice requires brokers to:",
      options: [
        "Recommend MFAA-member lenders only",
        "Act ethically, transparently, and in the interests of clients, while meeting ongoing education and professional standards",
        "Charge a maximum fee of 1% of the loan amount",
        "Only operate in the state where they are registered"
      ],
      answer: 1,
      explanation: "The MFAA Code of Practice sets ethical and professional standards for members above the minimum legal requirements. It covers conduct, transparency, education, and client treatment. Breach of the Code can result in membership sanctions."
    },
    {
      q: "Privacy obligations under the Privacy Act 1988 require brokers to:",
      options: [
        "Store client data indefinitely for compliance purposes",
        "Collect only necessary information, store it securely, use it only for disclosed purposes, and allow clients to access or correct their own information",
        "Share client data with all lenders on the panel as a standard practice",
        "Obtain client consent only for sensitive medical information"
      ],
      answer: 1,
      explanation: "The Privacy Act's Australian Privacy Principles (APPs) govern how personal information is collected, stored, used, and disclosed. Brokers handle highly sensitive financial data — strong data governance is both a legal requirement and a client trust issue."
    },
    {
      q: "Which body provides the external dispute resolution (EDR) scheme that ACL holders must belong to?",
      options: [
        "The Australian Banking Association (ABA)",
        "Australian Financial Complaints Authority (AFCA)",
        "The Financial Services Council (FSC)",
        "The Reserve Bank of Australia (RBA)"
      ],
      answer: 1,
      explanation: "AFCA is the mandatory EDR scheme for all ACL holders. Membership is a licence condition. Clients can take unresolved complaints to AFCA at no cost. AFCA can award compensation and make binding determinations — a powerful consumer protection mechanism."
    },
    {
      q: "Remuneration disclosure obligations for mortgage brokers require that:",
      options: [
        "Commission amounts must be disclosed only if the client specifically asks",
        "Brokers must disclose the nature of their remuneration (upfront commission, trail commission, fees) and any conflicts of interest in the Credit Guide and Credit Proposal Document",
        "Only referral fees need to be disclosed, not lender commissions",
        "Disclosure is only required for loans over $1 million"
      ],
      answer: 1,
      explanation: "Post-Royal Commission reforms significantly strengthened remuneration disclosure. The Credit Guide must disclose how the broker is paid; the CPD must disclose the specific remuneration for the recommended product and flag any conflicts. Transparency is non-negotiable."
    },
    {
      q: "Best Interests Duty (BID) was introduced through which legislation?",
      options: [
        "Financial Sector Reform (Hayne Royal Commission Response) Act 2020",
        "National Credit Amendment Act 2018",
        "Banking Executive Accountability Regime (BEAR) Act 2018",
        "Treasury Laws Amendment Act 2019"
      ],
      answer: 0,
      explanation: "The BID for mortgage brokers was introduced through the Financial Sector Reform (Hayne Royal Commission Response) Act 2020, implementing recommendations from Commissioner Hayne's Royal Commission into Misconduct in the Banking, Superannuation and Financial Services Industry."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 6
  // FNSINC411 — Conduct Work According to Professional Practices in Financial Services
  // ─────────────────────────────────────────────────────────────────────────
  "FNSINC411": [
    {
      q: "Which of the following is a requirement for an individual to provide credit assistance as a mortgage broker?",
      options: [
        "Holding a real estate agent licence in their state",
        "Either holding their own Australian Credit Licence (ACL) or being a credit representative of an ACL holder",
        "Being a member of both the MFAA and FBAA simultaneously",
        "Completing a minimum of 5 years in the banking industry"
      ],
      answer: 1,
      explanation: "Under the NCCP Act, providing credit assistance requires either holding an ACL or being appointed as a credit representative of an ACL holder (typically through an aggregator). Operating without appropriate authorisation is an offence."
    },
    {
      q: "Conflicts of interest in mortgage broking must be:",
      options: [
        "Avoided entirely — any conflict disqualifies a broker from making a recommendation",
        "Identified, disclosed to the client, and managed so that the client's interests are not compromised",
        "Reported to ASIC within 48 hours",
        "Resolved only by the aggregator's compliance team, not the individual broker"
      ],
      answer: 1,
      explanation: "Conflicts of interest are inevitable in commission-based broking — the key is disclosure and management, not avoidance. The broker must ensure the conflict doesn't lead to a recommendation that prioritises their interest over the client's. Documentation of how the conflict was managed is essential."
    },
    {
      q: "A broker operating as a credit representative is ultimately responsible for compliance to:",
      options: [
        "ASIC directly — the broker is personally responsible for all compliance",
        "The ACL holder (licensee) who has appointed them — though the broker also has personal conduct obligations",
        "Their aggregator's compliance team exclusively",
        "The lender whose product they recommend"
      ],
      answer: 1,
      explanation: "Credit representatives operate under the authority of an ACL holder, who bears primary regulatory responsibility. However, individual brokers still have personal obligations — a credit representative cannot hide behind the licensee for their own misconduct."
    },
    {
      q: "Professional indemnity (PI) insurance in mortgage broking serves to:",
      options: [
        "Cover the broker's lost commission if a deal falls over",
        "Protect the broker and their business against claims arising from professional negligence, errors, or omissions in the course of their work",
        "Replace the need for AFCA membership",
        "Cover physical damage to the broker's office"
      ],
      answer: 1,
      explanation: "PI insurance is a condition of holding an ACL and standard practice for credit representatives. If a client suffers a loss due to a broker's error or negligent advice, PI insurance covers the resulting claim — protecting both the client and the broker's business."
    },
    {
      q: "Ethical behaviour in the financial services industry means:",
      options: [
        "Always doing what is most profitable for your business",
        "Acting with honesty, integrity, and transparency — even when it's not in your immediate financial interest",
        "Following the letter of the law but not necessarily its spirit",
        "Deferring all ethical decisions to your aggregator's compliance team"
      ],
      answer: 1,
      explanation: "Ethics in financial services goes beyond legal compliance — it's about doing the right thing by clients and the industry. The Royal Commission exposed widespread instances of legal but unethical behaviour. True professionalism means holding yourself to a higher standard."
    },
    {
      q: "Record-keeping obligations under the NCCP Act require brokers to retain client files for:",
      options: [
        "12 months after the loan application",
        "A minimum of 7 years (for most documents) after the credit assistance is provided",
        "Until the loan is fully repaid",
        "5 years, matching the standard business record-keeping requirement"
      ],
      answer: 1,
      explanation: "ASIC requires ACL holders to keep records of credit activities for a minimum of 7 years. This includes Fact Finds, Credit Guides, CPDs, and all compliance-related documents. Adequate records are essential for regulatory reviews and AFCA proceedings."
    },
    {
      q: "When a client is in financial hardship, a broker's professional obligation includes:",
      options: [
        "Referring them to a new broker who specialises in hardship cases",
        "Making them aware of hardship provisions available under their loan contract and relevant support services",
        "Advising them to sell their property immediately",
        "Hardship is a lender issue — brokers have no ongoing obligation once the loan is settled"
      ],
      answer: 1,
      explanation: "Brokers who maintain client relationships should know that lenders have hardship assistance obligations under the NCCP Act. Pointing clients to these provisions — and to services like financial counselling — is part of professional, ethical conduct that supports client wellbeing."
    },
    {
      q: "The purpose of maintaining a Complaints Register in a broking business is to:",
      options: [
        "Collect negative feedback to use in performance reviews",
        "Track complaints systematically, identify patterns, improve processes, and demonstrate IDR compliance to regulators",
        "Satisfy lender accreditation requirements only",
        "Document clients who should not be served in future"
      ],
      answer: 1,
      explanation: "A Complaints Register is a required element of an Internal Dispute Resolution (IDR) system. It enables the business to identify recurring issues, demonstrate responsiveness to regulators, and continuously improve client experience — not just track grievances."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // CORE UNIT 7
  // FNSINC412 — Apply and Maintain Knowledge of Financial Products and Services
  // ─────────────────────────────────────────────────────────────────────────
  "FNSINC412": [
    {
      q: "A borrower has an owner-occupier loan of $600,000 and $80,000 in an offset account. Daily interest is charged on:",
      options: [
        "$600,000 — the full loan balance",
        "$520,000 — the loan balance minus the offset balance",
        "$80,000 — only the offset balance",
        "Zero — offset accounts eliminate all interest"
      ],
      answer: 1,
      explanation: "An offset account reduces the principal balance for the purpose of daily interest calculation. $600,000 - $80,000 = $520,000. Over a 30-year loan, $80K in offset can save tens of thousands in interest — a compelling feature for clients with cash holdings."
    },
    {
      q: "What is Lenders Mortgage Insurance (LMI) and who does it protect?",
      options: [
        "Insurance the borrower purchases to cover their repayments if they lose their job — protects the borrower",
        "Insurance the lender requires (and the borrower pays for) to protect the lender if the borrower defaults and the property sale doesn't cover the debt",
        "A government guarantee for first home buyers — protects both parties",
        "A mandatory insurance product that protects the broker if the loan defaults"
      ],
      answer: 1,
      explanation: "LMI is one of the most misunderstood concepts. The borrower pays for it — often thousands of dollars — but it protects the lender, not the borrower. Brokers must explain this clearly. It's typically required for LVRs above 80%."
    },
    {
      q: "A split loan structure means:",
      options: [
        "The loan is shared between two borrowers equally",
        "Part of the loan is fixed rate and part is variable rate, allowing the borrower to benefit from features of both",
        "The loan is paid to two different lenders simultaneously",
        "Repayments are split between principal and interest equally"
      ],
      answer: 1,
      explanation: "A split loan gives borrowers rate certainty on the fixed portion (useful for budgeting) while retaining flexibility on the variable portion (offset access, extra repayments). It's a sophisticated recommendation that demonstrates genuine needs analysis."
    },
    {
      q: "Principal and Interest (P&I) versus Interest Only (IO) repayments differ in that:",
      options: [
        "IO repayments are always cheaper than P&I over the full loan term",
        "P&I repayments reduce the outstanding loan balance over time; IO repayments do not — the principal remains unchanged during the IO period",
        "P&I loans always have higher interest rates than IO loans",
        "IO repayments are only available to investors, not owner-occupiers"
      ],
      answer: 1,
      explanation: "During an IO period the borrower pays only interest — the principal doesn't reduce. This keeps repayments lower short-term but means no equity build-up and higher total interest paid. When IO expires, repayments jump significantly as P&I kicks in on the remaining term."
    },
    {
      q: "A redraw facility on a home loan allows borrowers to:",
      options: [
        "Access funds from their offset account tax-free",
        "Access additional repayments they have made above the minimum — subject to lender conditions",
        "Increase their loan limit without a new application",
        "Transfer their loan to another lender without refinancing costs"
      ],
      answer: 1,
      explanation: "Redraw gives borrowers access to extra repayments already made. Unlike an offset account (separate transaction account), redraw is technically returning the loan balance to the original schedule. Important distinction: redraw for investment properties can create tax complications — accountant advice recommended."
    },
    {
      q: "The comparison rate on a home loan is designed to:",
      options: [
        "Show the lowest possible rate the lender can offer",
        "Provide a standardised single rate that reflects the true cost of the loan, including fees and charges, to allow meaningful product comparison",
        "Display the rate after all discounts are applied to a specific loan amount",
        "Show the rate that applies after the introductory period ends"
      ],
      answer: 1,
      explanation: "The comparison rate (required under the National Credit Code) incorporates most fees and charges into a single annual percentage rate to enable apples-to-apples comparison. A low headline rate with high fees may have a higher comparison rate — a more honest indicator of true cost."
    },
    {
      q: "Negative gearing on an investment property means:",
      options: [
        "The property generates a rental yield above the cost of the loan",
        "The costs of holding the property (including loan interest) exceed the rental income — the shortfall can be offset against other income for tax purposes",
        "The property has negative equity due to falling values",
        "The investor has structured the loan in a tax-inefficient way"
      ],
      answer: 1,
      explanation: "Negative gearing is a common Australian investment strategy where the tax deduction on losses (including interest on an investment loan) reduces the investor's overall tax bill. Brokers should understand the concept — but must always direct clients to their accountant for tax advice."
    },
    {
      q: "A construction loan differs from a standard home loan primarily because:",
      options: [
        "It has a fixed interest rate throughout construction",
        "Funds are drawn down progressively as construction milestones are reached, with interest charged only on the drawn amount",
        "The loan must be repaid within 12 months of settlement",
        "Construction loans do not require LMI at any LVR"
      ],
      answer: 1,
      explanation: "Progressive drawdown is the defining feature of construction loans — the borrower only pays interest on what has been drawn, not the full loan amount. This keeps costs lower during the build. Understanding construction loan mechanics is important for brokers working with builder clients."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ELECTIVE UNIT A
  // BSBTEC301 — Design and Produce Business Documents
  // ─────────────────────────────────────────────────────────────────────────
  "BSBTEC301": [
    {
      q: "In a mortgage broking context, which document is most critical to prepare accurately before a client meeting?",
      options: [
        "The broker's marketing brochure",
        "A customised Fact Find template, Credit Guide, and any lender-specific application forms relevant to the client's scenario",
        "A general product comparison spreadsheet with no client-specific details",
        "An invoice for the broker's services"
      ],
      answer: 1,
      explanation: "Pre-meeting preparation requires client-specific documentation. A well-designed Fact Find ensures comprehensive data capture; the Credit Guide must be ready to provide at or before the first substantive conversation. Generic documents are not compliant."
    },
    {
      q: "When creating a client-facing comparison document, which formatting principle is most important?",
      options: [
        "Using maximum technical terminology to demonstrate expertise",
        "Clarity and simplicity — information should be presented in plain language that the client can understand and act on",
        "Including all products on the panel regardless of relevance",
        "Matching the formatting style of the lender's materials"
      ],
      answer: 1,
      explanation: "ASIC's guidance on disclosure emphasises plain language — documents must be understandable to the target audience. A client who doesn't understand what they're reading cannot give informed consent. Plain English is a compliance requirement, not just a courtesy."
    },
    {
      q: "Digital documents sent to clients should include:",
      options: [
        "Watermarks on every page to prevent copying",
        "Appropriate metadata management, clear file naming conventions, version control, and secure transmission methods",
        "The broker's personal phone number but not their ACL number",
        "No identifying information to protect client privacy"
      ],
      answer: 1,
      explanation: "Professional document management includes secure transmission (encrypted email or portals), clear version control (especially for loan documents that go through multiple iterations), and consistent file naming. These practices reduce errors and protect both client and broker."
    },
    {
      q: "A well-designed loan summary document for a client should include:",
      options: [
        "Only the interest rate and monthly repayment",
        "Recommended product, key loan features, fees, repayment amounts, comparison rate, and next steps — all in client-readable format",
        "The full lender product disclosure statement",
        "Only information the lender requires, not additional explanatory content"
      ],
      answer: 1,
      explanation: "A client loan summary bridges the gap between complex product documents and the client's understanding. Key data points — rate, repayment, comparison rate, fees, features — presented clearly give the client a practical reference point for decision-making."
    },
    {
      q: "File naming conventions in a digital broking practice should prioritise:",
      options: [
        "Using the client's date of birth as the file name for easy identification",
        "Consistency, clarity, and the ability to locate files quickly — including date, client identifier, and document type",
        "Short names to reduce storage space",
        "Random identifiers to protect client privacy"
      ],
      answer: 1,
      explanation: "Consistent file naming (e.g. YYYY-MM-DD_ClientName_DocumentType_v1) enables efficient file retrieval, reduces errors, and supports compliance record-keeping. In a busy broking practice, poor document management creates compliance risk and operational inefficiency."
    },
    {
      q: "When using templates in a broking practice, the main risk to manage is:",
      options: [
        "Templates look too formal for clients",
        "Failing to customise templates to the specific client's situation — stale or incorrect information left in template fields",
        "Using the same template twice",
        "Templates are not legally valid documents"
      ],
      answer: 1,
      explanation: "Template errors — placeholder text left in, wrong client name from a previous file, outdated rate fields — are a common compliance failure. Every client-specific document must be reviewed for accuracy before sending. Template use speeds up workflow; quality control ensures accuracy."
    },
    {
      q: "Version control for loan documents is important because:",
      options: [
        "Lenders require all previous versions to be submitted with the application",
        "Loan terms often change during the application process — both parties need to be working from the same, current version to avoid errors and disputes",
        "Version control is only relevant for legal contracts, not mortgage documents",
        "Older versions should be kept from clients"
      ],
      answer: 1,
      explanation: "Rate changes, valuation outcomes, and client circumstance changes can require multiple document iterations. Without version control, there's risk that a client or broker acts on an outdated document. Clearly dated and versioned documents protect everyone."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ELECTIVE UNIT B
  // FNSCRD401 — Assess Credit Applications
  // ─────────────────────────────────────────────────────────────────────────
  "FNSCRD401": [
    {
      q: "The Household Expenditure Measure (HEM) is used in credit assessment to:",
      options: [
        "Set the maximum loan amount for all borrowers",
        "Provide a benchmark for minimum living expenses when a borrower's declared expenses appear unusually low",
        "Calculate the stamp duty payable on a property purchase",
        "Determine the maximum LVR a borrower can access"
      ],
      answer: 1,
      explanation: "HEM is a benchmark developed by the Melbourne Institute that estimates minimum household living expenses based on family composition and income. Lenders use it when declared expenses fall below HEM — the higher of declared expenses or HEM is used for serviceability calculations."
    },
    {
      q: "A borrower's Net Surplus Ratio (NSR) or Debt Service Ratio (DSR) measures:",
      options: [
        "The amount of equity in the borrower's property",
        "The proportion of the borrower's income consumed by debt repayments — a key serviceability metric",
        "The net profit of the borrower's business",
        "The ratio of fixed to variable expenses"
      ],
      answer: 1,
      explanation: "DSR/NSR ratios measure how much of a borrower's income goes to servicing debt. Most lenders have maximum DSR thresholds. A borrower spending 90% of net income on loan repayments would fail serviceability even if monthly repayments are technically affordable."
    },
    {
      q: "When assessing a credit application with existing credit card limits, most lenders will:",
      options: [
        "Only count the current outstanding balance on the cards",
        "Assess a minimum monthly repayment based on the total credit card limit (not just the balance used), typically 2-3% of the limit",
        "Exclude credit cards from the serviceability assessment",
        "Count credit card limits at 50% of their stated value"
      ],
      answer: 1,
      explanation: "Lenders assess the potential exposure from credit cards by using the full limit — not just the current balance. A borrower with a $20,000 limit they never use still has that liability factored in at typically 2-3% per month. Brokers often advise clients to close unused cards before applying."
    },
    {
      q: "A credit file inquiry (or 'hard enquiry') occurs when:",
      options: [
        "A borrower checks their own credit score",
        "A lender or broker accesses the borrower's credit file to assess a credit application",
        "A utility company verifies the borrower's address",
        "The Australian Tax Office accesses financial data"
      ],
      answer: 1,
      explanation: "Hard enquiries appear on the borrower's credit file and can affect their credit score if there are many in a short period — suggesting to lenders that the borrower is applying for credit from multiple sources simultaneously, which can signal financial stress."
    },
    {
      q: "Comprehensive Credit Reporting (CCR) in Australia means lenders can now see:",
      options: [
        "Only adverse events like defaults and bankruptcies",
        "Both positive information (repayment history, account limits) and negative information (defaults, missed payments) — giving a more complete picture of credit behaviour",
        "A borrower's full tax history and salary",
        "Property ownership records across all Australian states"
      ],
      answer: 1,
      explanation: "CCR was introduced to give a more complete picture of credit behaviour. Previously only negative events were shared. Now consistent on-time payments are a positive signal, and a history of meeting obligations across multiple products strengthens a borrower's profile."
    },
    {
      q: "A borrower has a paid default on their credit file from 3 years ago. The best approach is to:",
      options: [
        "Immediately decline to assist them",
        "Assess the full context — amount, age, cause, whether paid — and identify lenders whose credit policy accommodates the specific default scenario",
        "Only submit to specialist non-conforming lenders",
        "Ignore the default as it occurred more than 2 years ago"
      ],
      answer: 1,
      explanation: "Credit impairment is not automatic disqualification. Many mainstream lenders will consider paid defaults depending on age, amount, and type. A broker's job is to assess the credit file in full context, match to appropriate lenders, and be transparent with the client about their options."
    },
    {
      q: "Genuine savings requirements typically apply when:",
      options: [
        "The borrower is purchasing with a guarantor",
        "The borrower's LVR exceeds 80–85% and the lender requires evidence of the deposit being accumulated over time",
        "The property value exceeds $1 million",
        "The borrower is self-employed"
      ],
      answer: 1,
      explanation: "Genuine savings requirements are typically triggered at LVRs above 80–85%. Lenders want to see that the borrower has demonstrated saving discipline — not just received a windfall or gift. Rental history (as evidence of ability to meet regular financial obligations) can sometimes substitute for genuine savings."
    },
    {
      q: "When a lender uses an assessment rate (also called a buffer rate) for serviceability, it means:",
      options: [
        "The loan is assessed at a rate 2–3% above the actual loan rate to stress-test the borrower's ability to service the loan if rates rise",
        "The borrower pays an assessment fee at application",
        "The rate is buffered for the first 12 months of the loan",
        "The assessment rate is lower than the actual rate to make loans more accessible"
      ],
      answer: 0,
      explanation: "APRA requires ADIs (banks) to assess borrowers at a minimum buffer of 3% above the loan rate (or a floor rate, whichever is higher). This ensures borrowers can still service their loan if rates rise. Non-bank lenders are not APRA-regulated but most apply similar buffers."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ELECTIVE UNIT C
  // FNSFMB511 — Implement Credit Contracts in Preparation for Settlement
  // ─────────────────────────────────────────────────────────────────────────
  "FNSFMB511": [
    {
      q: "The difference between conditional approval and unconditional (formal) approval is:",
      options: [
        "Conditional approval means the client has conditionally accepted the offer",
        "Conditional approval means the lender has given an indicative 'yes' subject to outstanding conditions (valuation, payslips, etc.); unconditional approval means all conditions are satisfied",
        "Unconditional approval is only available for refinance applications",
        "There is no practical difference — both allow the conveyancer to proceed"
      ],
      answer: 1,
      explanation: "Conditional approval is not a green light for settlement. Conditions — particularly valuations — can change the outcome. Only unconditional approval, where all lender conditions are satisfied, signals the loan is ready to proceed to documentation and settlement."
    },
    {
      q: "A valuation shortfall occurs when:",
      options: [
        "The borrower's income is insufficient to service the loan",
        "The lender's valuation of the property comes in below the purchase price, reducing the maximum loan amount the lender will offer",
        "The borrower's deposit is insufficient",
        "Settlement is delayed past the agreed date"
      ],
      answer: 1,
      explanation: "If a property values at $680K but was purchased for $720K, the lender bases their loan on $680K. The borrower must make up the difference — either from additional savings or by renegotiating the purchase price. Brokers should prepare clients for this possibility, especially in volatile markets."
    },
    {
      q: "Loan documentation (the formal offer from the lender) must be reviewed by the broker to:",
      options: [
        "Check that commission has been calculated correctly",
        "Verify that the loan details (amount, rate, term, fees, repayment type) match what was approved and agreed with the client — errors at this stage cause settlement delays",
        "Confirm the lender's standard terms and conditions have not changed",
        "Obtain the client's signature on behalf of the lender"
      ],
      answer: 1,
      explanation: "Errors in loan documents — wrong rate, wrong term, wrong names — are more common than expected and must be caught before the client signs. A broker who spots these issues protects the client from costly post-settlement corrections and demonstrates genuine value."
    },
    {
      q: "The role of a conveyancer/solicitor in the settlement process is to:",
      options: [
        "Assess the borrower's creditworthiness",
        "Manage the legal transfer of property ownership, coordinate with the lender to arrange funds for settlement, and ensure all legal obligations are met",
        "Conduct the property inspection on behalf of the buyer",
        "Negotiate the purchase price with the vendor's agent"
      ],
      answer: 1,
      explanation: "Conveyancers and solicitors handle the legal side of settlement — title searches, contract review, arranging settlement funds with the lender, and transfer of ownership. Brokers work alongside them to ensure the loan funding timing aligns with the settlement date."
    },
    {
      q: "A broker's obligations after loan settlement include:",
      options: [
        "No obligations — the broker's role ends at settlement",
        "Maintaining the client relationship, conducting periodic loan reviews, and being available to assist with future needs — ongoing relationship management is both good business and professional practice",
        "Reporting the settlement to ASIC within 30 days",
        "Providing a written guarantee of the loan terms for the client"
      ],
      answer: 1,
      explanation: "Post-settlement relationship management is central to a sustainable broking business. Annual rate reviews, check-ins at life events, and proactive contact when market conditions change (e.g. rates drop) demonstrate value and generate repeat and referral business."
    },
    {
      q: "Cash out (equity release) refinancing involves:",
      options: [
        "The client receiving cash directly from the lender without any loan",
        "Refinancing to a new loan that is larger than the existing debt, with the borrower accessing the additional funds as cash — subject to serviceability and LVR requirements",
        "A government scheme to assist first home buyers",
        "The broker receiving a cash incentive from the lender"
      ],
      answer: 1,
      explanation: "Cash out refinancing is a common reason clients refinance — accessing equity for renovations, investment, or other purposes. Brokers must assess why the client wants the funds, whether it's suitable (e.g. accessing equity to invest in volatile assets may not be in their best interests), and ensure the new loan still meets their needs."
    },
    {
      q: "A clawback provision in a broker's commission agreement means:",
      options: [
        "The broker can claim additional commission if the loan grows in size",
        "If the borrower refinances or repays the loan within a set period (typically 1–2 years), the lender reclaims some or all of the upfront commission from the broker",
        "The lender can claw back trail commission if the borrower misses repayments",
        "The aggregator takes a percentage of each commission payment"
      ],
      answer: 1,
      explanation: "Clawback is a significant business risk in broking. If a broker recommends a loan that refinances within 12–24 months, they may owe the lender back a portion of the upfront commission. This is one reason recommending unsuitable short-term loans is both unethical and commercially damaging."
    },
    {
      q: "When a client wants to refinance primarily to access a lower rate, the broker should:",
      options: [
        "Proceed immediately — a lower rate is always beneficial",
        "Calculate the total cost of refinancing (break costs if fixed, discharge fees, application fees, legal costs) against the interest saving, to confirm refinancing is actually net beneficial",
        "Only recommend refinancing if the rate difference is more than 1%",
        "Recommend the client stay with their current lender"
      ],
      answer: 1,
      explanation: "Refinancing has real costs — discharge fees, application fees, potentially LMI again if LVR has increased. A broker who calculates the break-even point (how long before savings exceed costs) is demonstrating genuine Best Interests Duty compliance, not just generating commission."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ELECTIVE UNIT D
  // FNSSAM413 — Identify and Provide Initial Information to Potential New Clients
  // ─────────────────────────────────────────────────────────────────────────
  "FNSSAM413": [
    {
      q: "The first obligation when a new client enquiry is received is to:",
      options: [
        "Ask for their income details immediately to assess serviceability",
        "Provide or make available the broker's Credit Guide before providing any credit assistance",
        "Run a credit check to assess their eligibility",
        "Confirm which lender they prefer"
      ],
      answer: 1,
      explanation: "The Credit Guide must be provided as early as practicable — and always before providing credit assistance. It's a legal requirement under the NCCP Act and the starting point for any new client relationship."
    },
    {
      q: "When explaining broker services to a potential client, which statement is most accurate and compliant?",
      options: [
        "'We always get the best rate in the market'",
        "'We work with a panel of lenders and will recommend the product that best suits your circumstances — I'll explain how I'm paid as part of our initial conversation'",
        "'We are completely free — lenders pay us so you pay nothing'",
        "'We can guarantee approval regardless of your financial situation'"
      ],
      answer: 1,
      explanation: "Honest, accurate representation of the broking service — panel access, needs-based recommendation, remuneration transparency — is both compliant and builds trust. Statements like 'best rate in the market' or 'guarantee approval' are misleading and could constitute false representations."
    },
    {
      q: "Anti-Money Laundering (AML) obligations require a broker to verify a new client's identity. Acceptable primary identity documents typically include:",
      options: [
        "A Medicare card and gym membership",
        "A current Australian passport, Australian driver's licence, or comparable government-issued photo ID",
        "A utility bill and bank statement",
        "A statutory declaration from a JP is sufficient for all clients"
      ],
      answer: 1,
      explanation: "AML/CTF obligations require robust identity verification. Primary documents — passport, driver's licence — with a photo and signature are the gold standard. Secondary documents (utility bills, bank statements) may supplement but rarely suffice alone. Rules differ slightly by aggregator and ACL holder policy."
    },
    {
      q: "A client contacts you after seeing an online advertisement for a specific loan product with a very low rate. Your first step should be:",
      options: [
        "Apply for that specific product immediately",
        "Ask discovery questions to understand their actual situation, needs, and whether that specific product is even appropriate for them",
        "Explain why that product is probably not as good as it appears",
        "Refer them to the lender directly to get the advertised rate"
      ],
      answer: 1,
      explanation: "A client fixated on a specific product or rate may not be aware of features, conditions, or products better suited to their situation. Discovery questions — income, property type, deposit, goals — enable the broker to assess needs before making any product discussion."
    },
    {
      q: "Setting realistic expectations with a new client about loan approval means:",
      options: [
        "Guaranteeing approval to secure their commitment",
        "Explaining the assessment process, typical timelines, potential conditions, and that approval is subject to the lender's assessment — without making promises you can't keep",
        "Telling them to expect the worst to avoid disappointment",
        "Only discussing best-case scenarios to maintain enthusiasm"
      ],
      answer: 1,
      explanation: "Managing expectations is central to good client relationships and avoiding complaints. Brokers who over-promise and under-deliver lose trust and generate complaints. Honest, realistic communication about the process — including that approval is never guaranteed — is both ethical and commercially smart."
    },
    {
      q: "A potential client discloses they are trying to conceal income from the ATO to increase their borrowing capacity. A broker must:",
      options: [
        "Help structure the application to maximise the stated income",
        "Decline to assist with any application that involves misrepresentation, as this would constitute fraud — and the broker could be criminally liable",
        "Report this immediately to the lender only",
        "Proceed but note the conversation on file for protection"
      ],
      answer: 1,
      explanation: "Assisting with fraudulent misrepresentation in a loan application is a criminal offence for both the borrower and potentially the broker. There is no grey area — the broker must decline and, depending on the circumstances, may have reporting obligations."
    },
    {
      q: "A prospect asks whether they should use a broker or go directly to their bank. A professional, compliant response is:",
      options: [
        "'Banks always have worse rates, you should always use a broker'",
        "Honestly explain the value a broker provides — panel access, comparison, needs analysis, application management — and acknowledge that going direct is also a valid option, letting the client decide",
        "'It doesn't matter, the outcome will be the same either way'",
        "Avoid the question and move straight to collecting their financial details"
      ],
      answer: 1,
      explanation: "Honest disclosure of both the benefits of broking and the existence of the direct-to-lender option is professionally correct and actually builds more trust than overselling. Clients who feel they made an informed choice are more satisfied and more likely to refer."
    },
  ],

  // ─────────────────────────────────────────────────────────────────────────
  // ELECTIVE UNIT E
  // FNSSAM421 — Provide Information on Financial Products and Services to Clients
  // ─────────────────────────────────────────────────────────────────────────
  "FNSSAM421": [
    {
      q: "When explaining a variable rate home loan to a client, you should include:",
      options: [
        "Only the current interest rate",
        "How the rate is set (lender discretion, often tracking RBA cash rate), how it can change, the impact of rate changes on repayments, and any features like offset or redraw",
        "A guarantee that rates will not rise in the next 12 months",
        "A comparison only to the client's previous loan"
      ],
      answer: 1,
      explanation: "Complete product disclosure means explaining the rate-setting mechanism, variability risk, feature set, and how changes affect repayments. A client who understands their product is a satisfied, low-complaint client. Incomplete explanations are a compliance risk."
    },
    {
      q: "A client asks whether they should use their savings to increase their deposit or keep the money in an offset account. The most useful broker response is to:",
      options: [
        "Always recommend maximising the deposit to avoid LMI",
        "Explain the mathematical equivalence for interest savings, note the liquidity difference (offset money is accessible; money in deposit is 'locked in' to equity), and suggest they consider their liquidity needs",
        "Refer this decision entirely to a financial planner",
        "Recommend offsetting because it is always better"
      ],
      answer: 1,
      explanation: "From an interest-cost perspective, $10K in offset on a $10K-higher loan balance is mathematically equivalent. The real difference is liquidity — offset funds remain accessible. A client with variable income or emergency fund needs may prefer offset. This nuanced explanation demonstrates genuine expertise."
    },
    {
      q: "The First Home Owner Grant (FHOG) in Australia:",
      options: [
        "Is a federal government grant of a fixed $10,000 for all first home buyers",
        "Is a state/territory-based grant that varies by jurisdiction, property type, purchase price cap, and other criteria — not available in all circumstances",
        "Applies automatically to all purchases under $500,000",
        "Can be used as part of the borrower's 20% deposit for LMI avoidance"
      ],
      answer: 1,
      explanation: "The FHOG varies significantly between states — amount, eligibility, and whether it applies to existing or new properties differ by jurisdiction. Brokers must understand the rules in their operating state and guide clients to check current criteria with the relevant state revenue office."
    },
    {
      q: "When explaining stamp duty to a first home buyer client, a broker should:",
      options: [
        "Give a precise figure — it's always 4% of the purchase price",
        "Explain that stamp duty is a state tax on property transactions, varies by state/territory and purchase price, and that first home buyers may be eligible for concessions or exemptions in their state",
        "Tell the client stamp duty is included in their deposit amount",
        "Advise that stamp duty is paid by the vendor, not the buyer"
      ],
      answer: 1,
      explanation: "Stamp duty is state-based, variable, and a significant purchase cost — often $20,000–$40,000 on a typical Sydney or Melbourne property. First home buyer exemptions and concessions also vary by state. Brokers must ensure clients factor this into their purchasing budget."
    },
    {
      q: "A client is confused about the difference between pre-approval and formal approval. You explain that pre-approval:",
      options: [
        "Is the same as formal approval — the lender will definitely fund the loan",
        "Is an indicative assessment based on unverified information — it is not a guarantee of final approval and is subject to full verification and valuation",
        "Locks in the interest rate for 90 days",
        "Is only offered by the major banks"
      ],
      answer: 1,
      explanation: "Pre-approval (or conditional approval) is a useful tool for setting a budget, but clients must understand it's not guaranteed. If circumstances change, documents don't verify, or the property doesn't value, the application can still be declined. Setting this expectation prevents costly misunderstandings."
    },
    {
      q: "The government's Home Guarantee Scheme (formerly First Home Loan Deposit Scheme) allows eligible buyers to:",
      options: [
        "Purchase with no deposit at all",
        "Purchase with as little as 5% deposit without paying LMI, with the government guaranteeing the remaining portion of the 20% deposit threshold",
        "Access $30,000 from their superannuation for any property purchase",
        "Buy a property and have the government pay the first 5% of the purchase price"
      ],
      answer: 1,
      explanation: "The Home Guarantee Scheme (administered by Housing Australia) allows eligible first home buyers to purchase with 5% deposit without LMI. The government guarantees the 'gap' — not by paying money but by accepting the risk. Places are limited and eligibility criteria apply."
    },
    {
      q: "A client asks about bridging finance. This is appropriate when:",
      options: [
        "The client wants to pay off their mortgage faster",
        "The client needs to purchase a new property before selling their existing property — a short-term loan bridges the gap between the two transactions",
        "The client's income is insufficient for a standard loan",
        "The client wants to fund renovations on an existing property"
      ],
      answer: 1,
      explanation: "Bridging finance is a specialist product — typically short-term, higher-rate, and with complex exit requirements. Brokers must ensure clients understand the risks, including what happens if the existing property takes longer to sell than expected. Not all lenders offer bridging, and criteria are strict."
    },
    {
      q: "When a client wants to know if they can use their superannuation to buy a home, the correct information is:",
      options: [
        "Yes — superannuation can always be accessed for a first home purchase",
        "Generally no, except through the First Home Super Saver Scheme (FHSSS) which allows voluntary contributions (up to certain limits) made to super to be withdrawn for a first home deposit",
        "Superannuation can only be used for investment property purchases",
        "All superannuation balances can be withdrawn once the buyer is over 55"
      ],
      answer: 1,
      explanation: "The FHSSS allows first home buyers to withdraw voluntary concessional and non-concessional super contributions (up to $15,000 per year, $50,000 total) for a home deposit. It does not allow access to existing super balances. Brokers should be aware of the scheme and direct clients to the ATO for specifics."
    },
  ],

};

// ── UNIT METADATA ────────────────────────────────────────────────────────────
const UNIT_META = [
  // Core units
  { code: "BSBPEF501", name: "Manage Personal & Professional Development", icon: "📈", core: true, free: false },
  { code: "FNSCUS511", name: "Professional Relationships in Financial Services", icon: "🤝", core: true, free: false },
  { code: "FNSFMB411", name: "Prepare Loan Applications", icon: "📋", core: true, free: false },
  { code: "FNSFMB412", name: "Identify Client Needs & Present Options", icon: "🎯", core: true, free: false },
  { code: "FNSFMK515", name: "Financial Services Regulation & Compliance", icon: "⚖️", core: true, free: true },
  { code: "FNSINC411", name: "Professional Practices in Financial Services", icon: "🏛️", core: true, free: false },
  { code: "FNSINC412", name: "Financial Products & Services Knowledge", icon: "🏦", core: true, free: false },
  // Elective units
  { code: "BSBTEC301", name: "Design & Produce Business Documents", icon: "📄", core: false, free: false },
  { code: "FNSCRD401", name: "Assess Credit Applications", icon: "📊", core: false, free: false },
  { code: "FNSFMB511", name: "Implement Credit Contracts & Settlement", icon: "🔑", core: false, free: false },
  { code: "FNSSAM413", name: "Initial Information to Potential Clients", icon: "👋", core: false, free: false },
  { code: "FNSSAM421", name: "Provide Information on Financial Products", icon: "💡", core: false, free: false },
];

// ── STATS ─────────────────────────────────────────────────────────────────────
const BANK_STATS = {
  totalUnits: 12,
  totalQuestions: Object.values(QUESTION_BANK).reduce((sum, qs) => sum + qs.length, 0),
  coreUnits: 7,
  electiveUnits: 5,
};

const SCENARIO = {
  title: "The First Home Buyer Scenario",
  setup: "Sarah, 29, earns $95,000 p.a. as a nurse. She has $120,000 saved, no debt, and wants to buy a $600,000 apartment in Parramatta. She wants rate stability but variable rates are currently lower. She banks with CBA and has never used a broker.",
  questions: [
    { q: "What is Sarah's approximate LVR if she uses her full deposit minus ~$30K for costs?", options: ["75%", "85%", "90%", "95%"], answer: 1, explanation: "Usable deposit ~$90,000. LVR = $510,000 / $600,000 = 85%. At 85% Sarah will likely need LMI unless a guarantor or scheme applies." },
    { q: "Sarah says she wants 'whatever rate is cheapest.' Your Best Interests Duty obligation is to:", options: ["Recommend the cheapest rate immediately", "Recommend CBA since she banks there", "Gather complete information about her needs before recommending", "Lock in a fixed rate"], answer: 2, explanation: "Best Interests Duty requires a full needs assessment before any recommendation. 'Cheapest rate' and 'rate stability' are potentially conflicting objectives." },
    { q: "Given Sarah's preference for stability, which structure best demonstrates a needs-focused recommendation?", options: ["100% variable with offset", "Split loan — part fixed, part variable", "Interest only variable", "10-year fixed rate"], answer: 1, explanation: "A split loan addresses both: fixed portion gives certainty; variable gives flexibility with offset and extra repayments." },
  ]
};

function ProgressRing({ pct, size = 48, stroke = 4, color = "#4ade80" }) {
  const r = (size - stroke) / 2, circ = 2 * Math.PI * r;
  return <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}><circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#1f2f1f" strokeWidth={stroke} /><circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" style={{transition:"stroke-dashoffset 0.6s ease"}} /></svg>;
}

function PaywallModal({ onClose, onCheckout, loading }) {
  return <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",zIndex:100,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}><div style={{background:"#0a180a",border:"1px solid rgba(74,222,128,0.3)",borderRadius:12,padding:"40px 32px",maxWidth:480,width:"100%",position:"relative"}}><button onClick={onClose} style={{position:"absolute",top:16,right:16,background:"none",border:"none",color:"#4a6a4a",cursor:"pointer",fontSize:20}}>✕</button><div style={{textAlign:"center",marginBottom:32}}><div style={{fontSize:42,fontWeight:800,color:"#4ade80",lineHeight:1}}>$59</div><div style={{color:"#7a9a7a",fontSize:14,marginTop:4}}>One-time · Lifetime access</div></div>{["All 12 units — 96 exam-style questions","Client scenario library","Live AI tutor — unlimited questions","Progress tracking across all units","New questions added each month"].map(f=><div key={f} style={{display:"flex",gap:10,marginBottom:12}}><span style={{color:"#4ade80"}}>✓</span><span style={{color:"#c8f0c8",fontSize:14}}>{f}</span></div>)}<button onClick={onCheckout} disabled={loading} style={{width:"100%",padding:"16px",background:"#4ade80",color:"#050e05",border:"none",borderRadius:6,fontFamily:"inherit",fontSize:16,fontWeight:800,cursor:loading?"wait":"pointer",marginTop:16}}>{loading?"Redirecting to Stripe…":"Unlock Full Access →"}</button><div style={{textAlign:"center",marginTop:14,color:"#3a5a3a",fontSize:12}}>Secure payment via Stripe · Australian GST included</div></div></div>;
}

export default function BrokerPass() {
  const [screen,setScreen]=useState("home"),[hasPaid,setHasPaid]=useState(false),[showPaywall,setShowPaywall]=useState(false),[checkoutLoading,setCheckoutLoading]=useState(false),[selectedUnit,setSelectedUnit]=useState(null),[quizState,setQuizState]=useState({}),[scenarioState,setScenarioState]=useState({qIdx:0,score:0,showExp:false}),[unitScores,setUnitScores]=useState({}),[chatMessages,setChatMessages]=useState([{role:"ai",text:"Hi! I'm your BrokerPass study companion. Ask me anything about the Cert IV — compliance, loan types, scenarios, or assessment tips."}]),[chatInput,setChatInput]=useState(""),[chatLoading,setChatLoading]=useState(false);
  const chatEndRef=useRef(null);
  useEffect(()=>{const p=new URLSearchParams(window.location.search),s=p.get("session_id");if(s){verifyPayment(s);window.history.replaceState({},"","/");}if(localStorage.getItem("bp_paid")==="true")setHasPaid(true);},[]);
  useEffect(()=>{chatEndRef.current?.scrollIntoView({behavior:"smooth"});},[chatMessages]);
  const verifyPayment=async(sessionId)=>{try{const r=await fetch(`${API_URL}/verify-session?session_id=${sessionId}`),d=await r.json();if(d.paid){setHasPaid(true);localStorage.setItem("bp_paid","true");setScreen("units");}}catch(e){console.error(e);}};
  const handleCheckout=async()=>{setCheckoutLoading(true);try{const r=await fetch(`${API_URL}/create-checkout-session`,{method:"POST"}),d=await r.json();if(d.url)window.location.href=d.url;}catch(e){alert("Payment error — please try again.");}setCheckoutLoading(false);};
  const requiresPaid=(unit)=>!unit.free&&!hasPaid;
  const startQuiz=(unit)=>{if(requiresPaid(unit)){setShowPaywall(true);return;}const qs=QUESTION_BANK[unit.code]||[];setSelectedUnit(unit);setQuizState({qIdx:0,score:0,showExp:false,selectedOpt:null,questions:qs});setScreen("quiz");};
  const handleQuizAnswer=(optIdx)=>{if(quizState.showExp)return;const correct=optIdx===quizState.questions[quizState.qIdx].answer;setQuizState(s=>({...s,showExp:true,selectedOpt:optIdx,score:correct?s.score+1:s.score}));};
  const nextQuizQ=()=>{const next=quizState.qIdx+1;if(next>=quizState.questions.length){const pct=Math.round((quizState.score/quizState.questions.length)*100);setUnitScores(s=>({...s,[selectedUnit.code]:pct}));setScreen("units");}else{setQuizState(s=>({...s,qIdx:next,showExp:false,selectedOpt:null}));}};
  const handleScenarioAnswer=(optIdx)=>{if(scenarioState.showExp)return;const correct=optIdx===SCENARIO.questions[scenarioState.qIdx].answer;setScenarioState(s=>({...s,showExp:true,selectedOpt:optIdx,score:correct?s.score+1:s.score}));};
  const nextScenarioQ=()=>{const next=scenarioState.qIdx+1;if(next>=SCENARIO.questions.length){setScreen("scenarioResults");return;}setScenarioState(s=>({...s,qIdx:next,showExp:false,selectedOpt:null}));};
  const sendChat=async()=>{if(!chatInput.trim()||chatLoading)return;const msg=chatInput.trim();setChatInput("");setChatMessages(m=>[...m,{role:"user",text:msg}]);setChatLoading(true);try{const res=await fetch(`${API_URL}/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:msg})});const data=await res.json();const reply=data.reply||"Sorry, couldn't generate a response.";setChatMessages(m=>[...m,{role:"ai",text:reply}]);}catch{setChatMessages(m=>[...m,{role:"ai",text:"Connection error — please try again."}]);}setChatLoading(false);};
  const S={app:{minHeight:"100vh",background:"#050e05",color:"#e8f4e8",fontFamily:"'DM Mono','Courier New',monospace"},wrap:{maxWidth:720,margin:"0 auto",padding:"0 20px",position:"relative",zIndex:1},nav:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 0",borderBottom:"1px solid rgba(74,222,128,0.1)",marginBottom:32},logo:{fontSize:18,fontWeight:700,color:"#4ade80",cursor:"pointer"},tag:{display:"inline-block",background:"rgba(74,222,128,0.1)",border:"1px solid rgba(74,222,128,0.3)",color:"#4ade80",padding:"2px 10px",borderRadius:2,fontSize:11,letterSpacing:2,textTransform:"uppercase",marginBottom:12},h1:{fontSize:"clamp(26px,5vw,44px)",fontWeight:700,lineHeight:1.1,margin:"8px 0 16px"},sub:{color:"#7a9a7a",fontSize:15,lineHeight:1.6,marginBottom:28},btn:{display:"inline-flex",alignItems:"center",gap:8,background:"#4ade80",color:"#050e05",border:"none",padding:"12px 24px",borderRadius:4,fontFamily:"inherit",fontSize:14,fontWeight:700,cursor:"pointer"},btnGhost:{display:"inline-flex",alignItems:"center",gap:8,background:"transparent",color:"#4ade80",border:"1px solid rgba(74,222,128,0.4)",padding:"11px 24px",borderRadius:4,fontFamily:"inherit",fontSize:14,fontWeight:600,cursor:"pointer"},panel:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(74,222,128,0.12)",borderRadius:8,padding:24},card:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(74,222,128,0.12)",borderRadius:8,padding:"16px 20px",marginBottom:10,cursor:"pointer"},optBtn:(sel,revealed,isAns)=>({width:"100%",textAlign:"left",padding:"13px 16px",marginBottom:8,borderRadius:6,cursor:revealed?"default":"pointer",fontFamily:"inherit",fontSize:14,lineHeight:1.5,border:"1px solid",background:!revealed?(sel?"rgba(74,222,128,0.1)":"rgba(255,255,255,0.02)"):isAns?"rgba(74,222,128,0.15)":sel?"rgba(239,68,68,0.15)":"rgba(255,255,255,0.02)",borderColor:!revealed?(sel?"#4ade80":"rgba(74,222,128,0.15)"):isAns?"#4ade80":sel?"#ef4444":"rgba(74,222,128,0.1)",color:!revealed?"#e8f4e8":isAns?"#4ade80":sel?"#f87171":"#7a9a7a"}),bubble:(r)=>({maxWidth:"84%",padding:"12px 16px",borderRadius:8,marginBottom:10,fontSize:13,lineHeight:1.6,alignSelf:r==="user"?"flex-end":"flex-start",background:r==="user"?"rgba(74,222,128,0.1)":"rgba(255,255,255,0.04)",border:`1px solid ${r==="user"?"rgba(74,222,128,0.3)":"rgba(74,222,128,0.1)"}`,color:r==="user"?"#c8f0c8":"#e8f4e8",whiteSpace:"pre-wrap"})};
  const overallPct=Object.keys(unitScores).length>0?Math.round(Object.values(unitScores).reduce((a,b)=>a+b,0)/Object.keys(unitScores).length):0;
  if(screen==="home")return<div style={S.app}>{showPaywall&&<PaywallModal onClose={()=>setShowPaywall(false)} onCheckout={handleCheckout} loading={checkoutLoading}/>}<div style={S.wrap}><nav style={S.nav}><span style={S.logo}>BrokerPass</span><div style={{display:"flex",gap:10}}>{hasPaid?<span style={{color:"#4ade80",fontSize:12}}>✓ Full Access</span>:<button style={{...S.btnGhost,padding:"8px 16px",fontSize:13}} onClick={()=>setShowPaywall(true)}>Unlock $59 →</button>}</div></nav><div style={S.tag}>FNS40821 AI Study Companion</div><h1 style={S.h1}>Pass your Cert IV.<br/><span style={{color:"#4ade80"}}>First attempt.</span></h1><p style={S.sub}>The only AI-powered study tool built for the FNS40821 Certificate IV in Finance & Mortgage Broking. 96 exam-style questions across all 12 units.</p><div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:40}}><button style={S.btn} onClick={()=>setScreen("units")}>Start Studying →</button><button style={S.btnGhost} onClick={()=>setScreen("scenario")}>Free Scenario</button>{!hasPaid&&<button style={S.btnGhost} onClick={()=>setShowPaywall(true)}>Unlock All — $59</button>}</div><div style={{...S.panel,marginBottom:32}}><div style={{color:"#4ade80",fontWeight:700,marginBottom:16,fontSize:12,letterSpacing:2,textTransform:"uppercase"}}>Ask the AI Tutor — Free</div><div style={{display:"flex",flexDirection:"column",minHeight:180,maxHeight:280,overflowY:"auto",marginBottom:12}}>{chatMessages.map((m,i)=><div key={i} style={S.bubble(m.role)}>{m.text}</div>)}{chatLoading&&<div style={S.bubble("ai")}>Thinking…</div>}<div ref={chatEndRef}/></div><div style={{display:"flex",gap:8}}><input value={chatInput} onChange={e=>setChatInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="e.g. What is the Best Interests Duty?" style={{flex:1,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(74,222,128,0.2)",borderRadius:4,padding:"10px 14px",color:"#e8f4e8",fontFamily:"inherit",fontSize:13,outline:"none"}}/><button style={S.btn} onClick={sendChat} disabled={chatLoading}>Ask</button></div></div><div style={{textAlign:"center",color:"#3a5a3a",fontSize:11,paddingBottom:32}}>BrokerPass is a study aid only. Not an RTO. Not affiliated with ASIC, MFAA or FBAA.</div></div></div>;
  if(screen==="units")return<div style={S.app}>{showPaywall&&<PaywallModal onClose={()=>setShowPaywall(false)} onCheckout={handleCheckout} loading={checkoutLoading}/>}<div style={S.wrap}><nav style={S.nav}><span style={S.logo} onClick={()=>setScreen("home")}>← BrokerPass</span><div style={{display:"flex",alignItems:"center",gap:12}}>{overallPct>0&&<><ProgressRing pct={overallPct}/><span style={{color:"#4ade80",fontSize:13}}>{overallPct}%</span></>}{!hasPaid&&<button style={{...S.btnGhost,padding:"8px 14px",fontSize:12}} onClick={()=>setShowPaywall(true)}>Unlock All 🔒</button>}</div></nav><div style={S.tag}>Unit Practice</div><h2 style={{fontSize:26,marginBottom:8,fontWeight:700}}>Choose a unit</h2><p style={{...S.sub,marginBottom:24}}>{hasPaid?"All 12 units unlocked. 96 questions total.":"1 unit free. Unlock all 12 for $59."}</p>{UNIT_META.map(u=>{const score=unitScores[u.code],locked=!u.free&&!hasPaid,hasQ=(QUESTION_BANK[u.code]||[]).length>0;return<div key={u.code} style={{...S.card,opacity:locked?0.6:1}} onClick={()=>startQuiz(u)}><div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{display:"flex",alignItems:"center",gap:12}}><span style={{fontSize:20}}>{u.icon}</span><div><div style={{fontSize:10,color:u.core?"#4ade80":"#7a9a7a",letterSpacing:1,marginBottom:2}}>{u.code} · {u.core?"Core":"Elective"}</div><div style={{fontSize:14,fontWeight:600}}>{u.name}</div></div></div><div style={{display:"flex",alignItems:"center",gap:8}}>{score!==undefined&&<span style={{color:score>=80?"#4ade80":"#fbbf24",fontSize:13,fontWeight:700}}>{score}%</span>}{hasQ&&!locked&&<span style={{color:"#3a5a3a",fontSize:11}}>{(QUESTION_BANK[u.code]||[]).length}q</span>}{locked?<span>🔒</span>:<span style={{color:"#4ade80"}}>→</span>}</div></div></div>;})} <div style={{marginTop:20}}><button style={S.btnGhost} onClick={()=>setScreen("scenario")}>Try Scenario Mode →</button></div></div></div>;
  if(screen==="quiz"&&quizState.questions?.length){const q=quizState.questions[quizState.qIdx];return<div style={S.app}><div style={S.wrap}><nav style={S.nav}><span style={S.logo} onClick={()=>setScreen("units")}>← Units</span><span style={{color:"#7a9a7a",fontSize:13}}>{quizState.qIdx+1} / {quizState.questions.length}</span></nav><div style={S.tag}>{selectedUnit?.code}</div><div style={{height:3,background:"rgba(74,222,128,0.1)",borderRadius:2,marginBottom:28,overflow:"hidden"}}><div style={{height:"100%",width:`${(quizState.qIdx/quizState.questions.length)*100}%`,background:"#4ade80",transition:"width 0.4s"}}/></div><div style={S.panel}><div style={{fontSize:15,lineHeight:1.65,marginBottom:22,fontWeight:500}}>{q.q}</div>{q.options.map((opt,i)=><button key={i} style={S.optBtn(quizState.selectedOpt===i,quizState.showExp,i===q.answer)} onClick={()=>handleQuizAnswer(i)}><span style={{marginRight:10,opacity:0.4}}>{String.fromCharCode(65+i)}.</span>{opt}</button>)}{quizState.showExp&&<div style={{marginTop:20,padding:16,background:"rgba(74,222,128,0.05)",borderRadius:6,border:"1px solid rgba(74,222,128,0.2)"}}><div style={{color:quizState.selectedOpt===q.answer?"#4ade80":"#f87171",fontSize:12,letterSpacing:1,marginBottom:8,textTransform:"uppercase"}}>{quizState.selectedOpt===q.answer?"✓ Correct":"✗ Incorrect"}</div><div style={{color:"#c8f0c8",fontSize:13,lineHeight:1.6}}>{q.explanation}</div><button style={{...S.btn,marginTop:16}} onClick={nextQuizQ}>{quizState.qIdx+1<quizState.questions.length?"Next →":"Finish Unit →"}</button></div>}</div></div></div>;}
  if(screen==="scenario"){const q=SCENARIO.questions[scenarioState.qIdx];return<div style={S.app}><div style={S.wrap}><nav style={S.nav}><span style={S.logo} onClick={()=>setScreen("home")}>← BrokerPass</span><span style={{color:"#4ade80",fontSize:11,letterSpacing:2}}>FREE SCENARIO</span></nav><div style={S.tag}>Assessment Practice</div><h2 style={{fontSize:20,marginBottom:16,fontWeight:700}}>{SCENARIO.title}</h2><div style={{...S.panel,marginBottom:20}}><div style={{fontSize:11,color:"#4ade80",letterSpacing:2,marginBottom:10,textTransform:"uppercase"}}>Client Brief</div><p style={{fontSize:13,lineHeight:1.7,color:"#c8f0c8",margin:0}}>{SCENARIO.setup}</p></div><div style={{fontSize:12,color:"#7a9a7a",marginBottom:14}}>Question {scenarioState.qIdx+1} of {SCENARIO.questions.length}</div><div style={S.panel}><div style={{fontSize:15,lineHeight:1.65,marginBottom:22,fontWeight:500}}>{q.q}</div>{q.options.map((opt,i)=><button key={i} style={S.optBtn(scenarioState.selectedOpt===i,scenarioState.showExp,i===q.answer)} onClick={()=>handleScenarioAnswer(i)}><span style={{marginRight:10,opacity:0.4}}>{String.fromCharCode(65+i)}.</span>{opt}</button>)}{scenarioState.showExp&&<div style={{marginTop:20,padding:16,background:"rgba(74,222,128,0.05)",borderRadius:6,border:"1px solid rgba(74,222,128,0.2)"}}><div style={{color:scenarioState.selectedOpt===q.answer?"#4ade80":"#f87171",fontSize:12,letterSpacing:1,marginBottom:8,textTransform:"uppercase"}}>{scenarioState.selectedOpt===q.answer?"✓ Correct":"✗ Incorrect"}</div><div style={{color:"#c8f0c8",fontSize:13,lineHeight:1.6}}>{q.explanation}</div><button style={{...S.btn,marginTop:16}} onClick={nextScenarioQ}>{scenarioState.qIdx+1<SCENARIO.questions.length?"Next →":"See Results →"}</button></div>}</div></div></div>;}
  if(screen==="scenarioResults"){const pct=Math.round((scenarioState.score/SCENARIO.questions.length)*100);return<div style={S.app}>{showPaywall&&<PaywallModal onClose={()=>setShowPaywall(false)} onCheckout={handleCheckout} loading={checkoutLoading}/>}<div style={S.wrap}><nav style={S.nav}><span style={S.logo} onClick={()=>setScreen("home")}>BrokerPass</span></nav><div style={{textAlign:"center",padding:"32px 0 24px"}}><ProgressRing pct={pct} size={90} stroke={6} color={pct>=70?"#4ade80":"#fbbf24"}/><div style={{fontSize:40,fontWeight:800,marginTop:12,color:pct>=70?"#4ade80":"#fbbf24"}}>{pct}%</div><div style={{color:"#7a9a7a",marginTop:8,marginBottom:32,fontSize:14}}>{pct>=80?"Solid. You understand the needs analysis framework.":"Review the compliance explanations and retry."}</div>{!hasPaid&&<div style={{...S.panel,marginBottom:28,textAlign:"left"}}><div style={{color:"#4ade80",fontWeight:700,marginBottom:8}}>Want to practice all 12 units?</div><div style={{color:"#7a9a7a",fontSize:13,marginBottom:16}}>Full access includes 96 exam-style questions across all 12 units and unlimited AI tutor.</div><button style={S.btn} onClick={()=>setShowPaywall(true)}>Unlock Full Access — $59 →</button></div>}<div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}><button style={S.btnGhost} onClick={()=>{setScenarioState({qIdx:0,score:0,showExp:false});setScreen("scenario");}}>Retry</button><button style={S.btnGhost} onClick={()=>setScreen("units")}>Practice Units</button></div></div></div></div>;}
  return null;
}
