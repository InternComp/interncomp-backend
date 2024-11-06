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
    "banner": 'https://media.licdn.com/dms/image/v2/C561BAQFqQXNCkzg_Uw/company-background_10000/company-background_10000/0/1635791699664/tesla_motors_cover?e=1730916000&v=beta&t=iyI7nEG3QNLPwOFjFX0hZtFvbq23l8IL5eXORklgPB8',
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

const jobs = [
  {
    "companyImage": "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_100_100/company-logo_100_100/0/1630640869849/amazon_logo?e=1738800000&v=beta&t=MRR139bOgOiLg5yCuJalxOQW4m2wzl4Jo6dCSXPvDgg",
    "companyName": "Amazon",
    "title": "Software Development Engineer Co-op and Intern",
    "description": "Are you inspired by invention? Is problem solving through teamwork in your DNA? Do you like the idea of seeing how your work impacts the bigger picture? Answer yes to any of these and you’ll fit right in here at Amazon Robotics. We are a smart team of doers who work passionately to apply cutting edge advances in robotics and software to solve real-world challenges that will transform our customers’ experiences. We invent new improvements every day. We are Amazon Robotics and we will give you the tools and support you need to invent with us in ways that are rewarding, fulfilling, and fun. Amazon Robotics, a wholly owned subsidiary of Amazon.com, empowers a smarter, faster, more consistent customer experience through automation. Amazon Robotics automates fulfillment center operations using various methods of robotic technology including autonomous mobile robots, sophisticated control software, language perception, power management, computer vision, depth sensing, machine learning, object recognition, and semantic understanding of commands. Amazon Robotics has a dedicated focus on research and development to continuously explore new opportunities to extend its product lines into new areas.",
    "location": "Toronto, ON, Canada",
    "employmentType": "Internship",
    "workType": "Full-time",
    "internType": "Winter 2025",
    "jobLink": "https://www.amazon.jobs/en/jobs/2750005/amazon-robotics-software-development-engineer-co-op-and-intern-2025-toronto?cmpid=SPLICX0248M&ss=paid&utm_campaign=cxro&utm_content=job_posting&utm_medium=social_media&utm_source=linkedin.com",
    "linkedin": "https://www.linkedin.com/company/amazon/",
    "skillsRequired": ["Python", "C++", "Software Development", "Robotics", "Object-Oriented Design", "Algorithms", "Data Structures"],
    "basicQualifications": [
      "Knowledge of computer science fundamentals such as object-oriented design, operating systems, algorithms, data structures, and complexity analysis",
      "Experience with at least one modern programming language such as Python, C++, or Java",
      "Strong problem-solving skills and a passion for innovation"
    ],
    "preferredQualifications": [
      "Experience with distributed systems and relational databases",
      "Knowledge of C/C++, Python, or Java",
      "Familiarity with robotics, machine learning, or data analysis"
    ],
    "additionalInfo": "Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate based on race, national origin, gender, gender identity, sexual orientation, disability, age, or other legally protected status."
  },

  {
    "companyImage": "https://media.licdn.com/dms/image/v2/C560BAQEkjpiqeCK9Ag/company-logo_200_200/company-logo_200_200/0/1654804896089/amd_logo?e=1738800000&v=beta&t=kPGKtIgayblufH9aMX9edmhGudWMzqgNOgaa-PCaoyg", 
    "companyName": "AMD", 
    "title": "Software Engineering Intern/Co-op",
    "description": "An exciting opportunity to contribute to AMD's next generation of technology innovations awaits you! We foster a high-energy, diverse work environment with outstanding career development opportunities. During this internship, you'll gain hands-on experience and work closely with AMD leaders, receive one-on-one mentorship, and participate in networking events.",
    "location": "Markham, ON, Canada",
    "employmentType": "Full-time",
    "workType": "Onsite/Hybrid",
    "internType": "Summer 2025",
    "jobLink": "https://careers.amd.com/careers-home/jobs/54041?lang=en-us&iis=Job%20Board&iisn=Linkedin",
    "linkedin": "https://www.linkedin.com/company/amd/life/multivoicesatamd/",
    "skillsRequired": [
      "C++", "Computer Engineering", "Software Engineering Concepts", "C/C++ Programming", 
      "Python", "Windows PowerShell", "Linux Shell Scripting", "Java", "JavaScript", "UML", 
      "UNIX/Linux OS", "MySQL", "PostgreSQL", "MongoDB", "Azure", "Django", "Rails", 
      "Spring Boot", "HTML", "XML", "XSL", "Defect Tracking", "Testing", "Debugging", 
      "Git", "Github", "Perforce", "OAuth", "SSL", "TLS", "PC/CPU Architecture", 
      "Embedded Systems", "Microcontrollers"
    ],
    "basicQualifications": [
      "Currently enrolled in a University program in Computer Engineering, Electrical Engineering, Computer Science, or a related field",
      "Experience or knowledge in software engineering concepts, C/C++ programming, and scripting languages such as Python, Windows PowerShell, Linux shell scripts",
      "Understanding of UNIX/Linux OS and databases such as MySQL, PostgreSQL, or MongoDB",
      "Familiarity with cloud computing platforms (e.g., Azure) and web development frameworks (e.g., Django, Rails, Spring Boot)",
      "Knowledge of markup languages like HTML, XML, XSL, and security technologies (OAuth, SSL, TLS)",
      "Experience with version control (Git, Github, Perforce) and debugging methodologies"
    ],  
    "preferredQualifications": [
      "Previous co-op or internship experience",
      "Knowledge of PC/CPU architecture, embedded systems, and microcontrollers",
      "Familiarity with defect tracking, testing, and debugging tools",
      "Understanding of software security technologies and CI/CD pipelines"
    ],
    "keyResponsibilities": [
      "Collaborate closely with software engineers to build and maintain AMD’s software applications",
      "Gain exposure to the full software creation process, from design and build to testing and deployment",
      "Build scripts to automate parts of the software development process",
      "Learn debugging methodologies to investigate root causes of software issues",
      "Support technical documentation and reporting for specific projects"
    ],
    "additionalInfo": "AMD is an equal opportunity employer that welcomes and considers all applicants without discrimination. Accommodations are provided for applicants with disabilities during all recruitment and selection stages."
  },

  {
    "companyImage": "https://media.licdn.com/dms/image/v2/C4E0BAQEEcufOwTR8dA/company-logo_100_100/company-logo_100_100/0/1633723162871/seaspan_ulc_logo?e=1738800000&v=beta&t=NBRXXq6pKH5geEsxJHezkeC4RQzB75fpSJksLqR7QG8",
    "companyName": "Seaspan ULC",
    "title": "Intern, Outfit Engineering (4 Months)",
    "description": "As part of the National Shipbuilding Strategy, Seaspan ULC is responsible for constructing vessels for the Canadian Coast Guard and Navy. This internship will immerse you in naval architecture and shipbuilding, working on vessel schematics, steel outfitting, and joinery systems.",
    "location": "North Vancouver, BC, Canada",
    "employmentType": "Internship",
    "workType": "On-site",
    "internType": "January 2025",
    "jobLink": "https://hckz.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/job/7039?utm_medium=jobshare",
    "linkedin": "https://www.linkedin.com/company/seaspan-ulc/",
    "skillsRequired": ["Naval Architecture", "Mechanical Engineering", "CAD/CAM", "AutoCAD", "Technical Documentation"],
    "basicQualifications": [
      "Currently enrolled in Naval Architecture, Marine Engineering, Mechanical Engineering, or a related field",
      "Proficiency in CAD software, including AutoCAD",
      "Ability to read and interpret technical specifications and drawings"
    ],
    "preferredQualifications": [
      "Strong organizational skills and technical proficiency",
      "Interest in heavy industrial settings and shipbuilding"
    ],
    "additionalInfo": "Seaspan ULC is an inclusive employer. All qualified individuals are encouraged to apply, and accommodations are available throughout the hiring process for those who require them."
  }
];

async function main() {
  for (const company of companies) {
    await prisma.companies.create({
      data: company,
    });
  }

  for (const job of jobs) {
    await prisma.jobs.create({
      data: job,
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