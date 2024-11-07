const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Missing emails for recruiters and url for images and banners.

const companies = [
  {
    "name": "Verafin",
    "description": 'Verafin provides financial crime management software, focusing on anti-money laundering and fraud detection for financial institutions.',
    "culture": 'A collaborative and supportive atmosphere where employees work together, challenge each other, and contribute to a shared goal of innovation and growth.',
    "benefits": 'Comprehensive health coverage, stock options, and work-life balance programs.',
    "location": 'St. John’s, NL, Canada',
    "primaryIndustry": 'Financial Technology (FinTech)',
    "companySize": 'Large',
    "founded": 2003,
    "recruiterEmails": ['xxx'],
    "image": 'https://media.licdn.com/dms/image/v2/D4E0BAQGG8SZ7WgOpLw/company-logo_200_200/company-logo_200_200/0/1719256890099/verafin_logo?e=1737590400&v=beta&t=8uY7TXutiRePKIKD1qpYFPyGYBffIXY6jbKDE8pt4Mc',
    "banner":"https://media.licdn.com/dms/image/v2/D4E3DAQH4sa-w44VW5A/image-scale_191_1128/image-scale_191_1128/0/1719332162782/verafin_cover?e=2147483647&v=beta&t=UIH0vq3DAC4JNnIlIRZRkYnezuXxljkHepazohIK8U0",
    "linkedin": 'https://linkedin.com/company/verafin',
    "careerPages": 'https://verafin.com/careers',
    "salaryInfo": 'Competitive salaries with stock options and performance bonuses.'
  },
  {
    "name": "CoLab",
    "description": 'CoLab provides cloud-based collaboration software for mechanical engineering and hardware teams, enabling faster and more efficient design reviews.',
    "culture": 'CoLab is known for its collaborative, community-focused work environment. The company emphasizes teamwork, innovation, and giving back to the local community.',
    "benefits": 'Comprehensive benefits include stock options, flexible work arrangements, and health insurance.',
    "location": 'St. John’s, NL, Canada',
    "primaryIndustry": 'Software (Engineering Collaboration Tools)',
    "companySize": 'Medium',
    "founded": 2017,
    "recruiterEmails": ['xxx'],
    "image": 'https://media.licdn.com/dms/image/v2/C4D0BAQHbSGuaNdonfg/company-logo_200_200/company-logo_200_200/0/1632407145065/colabsoftware_logo?e=1737590400&v=beta&t=o07J3CRNXEftN3E6LyEl4583ygGhpPr5hNcVGTUaTxU',
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQEDK-0ICPj2OA/image-scale_191_1128/image-scale_191_1128/0/1715622263542/colabsoftware_cover?e=2147483647&v=beta&t=uRUC4YF6RAOfwarpkYQ08GEB-aUdMMkdkLnVajx3cuc",
    "linkedin": 'https://linkedin.com/company/colabsoftware',
    "careerPages": 'https://colabsoftware.com/careers',
    "salaryInfo": 'Competitive salaries with performance-based incentives and stock options.'
  },
  {
    "name": "Amazon",
    "description": 'Amazon is a global technology company specializing in e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    "culture": 'A high-performance culture that emphasizes customer obsession, ownership, and innovation. Employees are encouraged to take risks and learn quickly in a fast-paced environment.',
    "benefits": 'Comprehensive health benefits, stock options, retirement plans, and work-from-home options. Employees also get discounts on Amazon products.',
    "location": 'Seattle, WA, USA',
    "primaryIndustry": 'E-commerce, Cloud Computing',
    "companySize": 'Large',
    "founded": 1994,
    "recruiterEmails": ['xxx'],
    "image": 'https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_200_200/company-logo_200_200/0/1630640869849/amazon_logo?e=1737590400&v=beta&t=-DCmbQxK09G0KBpSuXP_y9r-b3FV1XGhJb6UgwpoSeI',
    "banner":"https://media.licdn.com/dms/image/v2/D4D3DAQGri_YWxYb-GQ/image-scale_191_1128/image-scale_191_1128/0/1681945878609/amazon_cover?e=2147483647&v=beta&t=Z64cxCag2dlANbtatwTuJEjbK0BV1sz0SpvevIa79Io",
    "linkedin": 'https://www.linkedin.com/company/amazon',
    "careerPages": 'https://www.amazon.jobs',
    "salaryInfo": 'Competitive salaries with stock options and annual performance bonuses.'
  },
  {
    "name": "Tesla",
    "description": 'Tesla is an electric vehicle and clean energy company focused on accelerating the world’s transition to sustainable energy through electric cars, solar products, and energy storage solutions.',
    "culture": 'A fast-paced and innovative environment where employees are encouraged to solve complex problems and push the boundaries of technology.',
    "benefits": 'Health insurance, stock options, and discounts on Tesla products, including electric vehicles and solar products.',
    "location": 'Palo Alto, CA, USA',
    "primaryIndustry": 'Electric Vehicles, Clean Energy',
    "companySize": 'Large',
    "founded": 2003,
    "recruiterEmails": ['xxx'],
    "image": 'https://media.licdn.com/dms/image/v2/C4D0BAQHUcu98SZ2TVw/company-logo_200_200/company-logo_200_200/0/1630576446368/tesla_motors_logo?e=1737590400&v=beta&t=dV6plT0RdNgMgUOHYLkuopuUxGZ99TFtoWP7lbvf5ec',
    "banner": 'https://media.licdn.com/dms/image/v2/C561BAQFqQXNCkzg_Uw/company-background_10000/company-background_10000/0/1635791699664/tesla_motors_cover?e=1730142000&v=beta&t=BPHcRW41yyWJJ9yfaD2QDYUrB1TCdmdNNzpEoAdHqa4',
    "linkedin": 'https://www.linkedin.com/company/tesla-motors',
    "careerPages": 'https://www.tesla.com/careers',
    "salaryInfo": 'Competitive salaries, stock options, and performance-based bonuses.'
  },
  {
    "name": "Cenovus Energy",
    "description": 'Cenovus Energy is a Canadian-based integrated oil and gas company, engaged in oil sands projects, refining, natural gas, and crude oil production. It is one of the largest energy companies in Canada, following its acquisition of Husky Energy in 2021.',
    "culture": 'Cenovus fosters a safety-focused, innovative, and inclusive environment. The company emphasizes sustainability, Indigenous reconciliation, and collaboration in its operations.',
    "benefits": 'Comprehensive health and dental coverage, stock purchase plans, and wellness programs. Cenovus also provides flexible work arrangements and employee assistance programs.',
    "location": 'Calgary, Alberta, Canada',
    "primaryIndustry": 'Oil and Gas',
    "companySize": 'Large',
    "founded": 2009,
    "recruiterEmails": ['xxx'],
    "image": 'https://media.licdn.com/dms/image/v2/C560BAQF0LWhqSCovZg/company-logo_200_200/company-logo_200_200/0/1630638463303/cenovus_energy_logo?e=1737590400&v=beta&t=gxJECsbRWtmtb-mUGG1wH0z9fRMPcn9WHCWOOItQGpk',
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQHSGe-4Z-ZrQQ/image-scale_191_1128/image-scale_191_1128/0/1720472663613/cenovus_energy_cover?e=2147483647&v=beta&t=FfURjepFWNEjJPwEXlxX5tvTfQ7daZ4aNf1leqOFmbY",
    "linkedin": 'https://www.linkedin.com/company/cenovus-energy',
    "careerPages": 'https://www.cenovus.com/careers',
    "salaryInfo": 'Competitive salary packages with bonuses based on performance.'
  },
  {
    "name":"Nokia",
    "description": "Nokia is a Finnish multinational company that provides telecommunications, information technology, and consumer electronics services worldwide. Nokia has made significant contributions to telecommunications infrastructure, including mobile telephony and 5G technology.",
    "culture": "Nokia fosters a culture of innovation, sustainability, and collaboration. With its focus on digital infrastructure, Nokia enables global connectivity while committing to sustainable practices and security.",
    "benefits": "Comprehensive health coverage, stock options, and performance bonuses. Employees also benefit from career development programs and flexible working arrangements.",
    "location": "Ottawa, Ontario, Canada",
    "primaryIndustry": "Telecommunications and Technology",
    "companySize": "Large",
    "founded": 1865,
    "recruiterEmails": ["xxx"],
    "image": "https://media.licdn.com/dms/image/v2/C4E0BAQGL8hpduEqGKQ/company-logo_200_200/company-logo_200_200/0/1677420439270/nokia_logo?e=1737590400&v=beta&t=n8ZHX34Snn2k6jOCpSLFKt59trCv4XKY0Y6V5QDjA_0",
    "banner":"https://media.licdn.com/dms/image/v2/D4E3DAQGPXO9cOgbFNA/image-scale_191_1128/image-scale_191_1128/0/1677420489891/nokia_cover?e=2147483647&v=beta&t=xAATi5bTZV4d0oQ6PV-WqFkZ9Khg2KQHfgIgiot5ipY",
    "linkedin": "https://linkedin.com/company/nokia",
    "careerPages": "https://www.nokia.com/careers",
    "salaryInfo": "Competitive salaries with stock options and bonuses based on performance."
  },
  {
    "name":"BlackBerry",
    "description": "BlackBerry Limited is a Canadian company specializing in cybersecurity and software solutions. Originally founded as Research In Motion, BlackBerry played a pioneering role in the development of mobile communications technology and has since transitioned into providing cybersecurity, IoT, and embedded systems software.",
    "culture": "BlackBerry promotes a culture of innovation and resilience, focusing on security solutions for enterprises and governments worldwide. It emphasizes the importance of cybersecurity and privacy while fostering a collaborative environment.",
    "benefits": "Comprehensive health insurance, stock options, performance-based bonuses, and professional development programs. BlackBerry also offers flexible working arrangements.",
    "location": "Waterloo, Ontario, Canada",
    "primaryIndustry": "Cybersecurity and Software",
    "companySize": "Medium",
    "founded": 1984,
    "recruiterEmails": ["xxx"],
    "image": "https://media.licdn.com/dms/image/v2/C560BAQEHnvbvfKCsDg/company-logo_100_100/company-logo_100_100/0/1630575741184/blackberry_logo?e=1737590400&v=beta&t=CneuAnnBjDnWYgw4uFpyKmO1940lvw6DdYgGwFID01o",
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQGjOZmqfP6s-g/image-scale_191_1128/image-scale_191_1128/0/1705956638033/blackberry_cover?e=2147483647&v=beta&t=xxBg_NvSBCsfTRTUoGQaaEoLUZ_-NQpPcVi7A35CXzU",
    "linkedin": "https://www.linkedin.com/company/blackberry",
    "careerPages": "https://www.blackberry.com/careers",
    "salaryInfo": "Competitive salaries with performance-based bonuses and stock options."
  },
  {
    "name":"Seaspan",
    "description": "Seaspan Corporation is the world’s largest independent owner and operator of containerships, providing modern, high-quality vessels to major shipping companies worldwide. It is a key player in global maritime logistics, specializing in long-term, fixed-rate charters.",
    "culture": "Seaspan emphasizes a culture of operational excellence, safety, reliability, and environmental responsibility. The company fosters collaboration, diversity, and professional growth, supporting a global workforce across its fleet and offices.",
    "benefits": "Comprehensive benefits include health coverage, professional development programs, and global mobility opportunities. Seaspan also promotes environmental sustainability and safe working environments.",
    "location": "Vancouver, British Columbia, Canada",
    "primaryIndustry": "Maritime Shipping and Logistics",
    "companySize": "Large",
    "founded": 2000,
    "recruiterEmails": ["xxx"],
    "image": "https://media.licdn.com/dms/image/v2/C4E0BAQEEcufOwTR8dA/company-logo_200_200/company-logo_200_200/0/1633723162870/seaspan_ulc_logo?e=1737590400&v=beta&t=ljXwkof8j_aw8ml52W1TLDVMipHYXU8VuVnFV_Nocuk",
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQFmx8LMTnTg9Q/image-scale_191_1128/image-scale_191_1128/0/1672956967990/seaspan_ulc_cover?e=2147483647&v=beta&t=qemMr6GuIGfT7-N21tBLj2pw8yZ9uUuF2yJgs13fyo4",
    "linkedin": "https://www.linkedin.com/company/seaspan-corporation",
    "careerPages": "https://www.seaspancorp.com/careers",
    "salaryInfo": "Competitive salaries with performance-based bonuses."
  },
  {
    "name":"Bell",
    "description": "Bell Canada is the country’s largest communications company, providing advanced Internet, wireless, TV, and business communication services. Bell delivers innovative solutions for both consumers and businesses across Canada, with a focus on 5G technology, media services, and cloud solutions.",
    "culture": "Bell fosters a people-first culture that values diversity and collaboration. The company focuses on innovation, customer experience, and sustainability, aiming to advance how Canadians connect with each other and the world.",
    "benefits": "Comprehensive health benefits, stock options, performance-based bonuses, and career development programs. Bell also promotes flexible working arrangements and community involvement through initiatives like Bell Let's Talk.",
    "location": "Montreal, Quebec, Canada",
    "primaryIndustry": "Telecommunications and Media",
    "companySize": "Large",
    "founded": 1880,
    "recruiterEmails": ["xxx"],
    "image": "https://media.licdn.com/dms/image/v2/D560BAQH4vgnYVp30eA/company-logo_200_200/company-logo_200_200/0/1688653379143?e=1737590400&v=beta&t=rC_3tNuGbM_1zRcyORDiXYWZVNPHVELLbkTX4Bv6vH0",
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQE6X_nkgOMKZQ/image-scale_191_1128/image-scale_191_1128/0/1716308950963/bell_cover?e=2147483647&v=beta&t=KsXx2GUZOSxoT52_z_y0LsfGneJWC5WnImSrFbcoKSA",
    "linkedin": "https://www.linkedin.com/company/bell",
    "careerPages": "https://jobs.bell.ca/ca/en",
    "salaryInfo": "Competitive salaries with stock options and performance-based bonuses."
  },
  {
    "name":"Bombardier",
    "id": "company-10",
    "description": "Bombardier is a Canadian manufacturer specializing in business aircraft, offering design, production, and aftermarket services. Known for its iconic Learjet, Challenger, and Global series, Bombardier serves a wide range of clients, including multinational corporations and governments.",
    "culture": "Bombardier promotes a culture of innovation and precision, focusing on sustainability and operational excellence. The company supports its workforce with opportunities for professional growth and a commitment to safety and environmental responsibility.",
    "benefits": "Comprehensive health coverage, stock options, performance-based bonuses, and professional development programs. Employees are also offered flexible working arrangements.",
    "location": "Dorval, Quebec, Canada",
    "primaryIndustry": "Aerospace and Defense",
    "companySize": "Large",
    "founded": 1902,
    "recruiterEmails": ["xxx"],
    "image": "https://media.licdn.com/dms/image/v2/D4D0BAQHFre9L1IbnyA/company-logo_200_200/company-logo_200_200/0/1713990496093/bombardier_logo?e=1737590400&v=beta&t=AG98DvnOX7kLsOzx5lATu9mbFZQ_RdjBZRhKiAVhRmY",
    "banner":"https://media.licdn.com/dms/image/v2/D563DAQEb2Uf4O8-Bzg/image-scale_191_1128/image-scale_191_1128/0/1713990394270/bombardier_cover?e=2147483647&v=beta&t=1n8bCq3u9iCGFMUn8ioj7m0DQhozqjs6mkfWKy7lU6s",
    "linkedin": "https://www.linkedin.com/company/bombardier",
    "careerPages": "https://www.bombardier.com/en/careers",
    "salaryInfo": "Competitive salaries with stock options and bonuses based on performance."
  }    
];

async function main() {
  for (const company of companies) {
    await prisma.companies.create({
      data: company,
    });
  }
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });