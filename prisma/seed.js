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
    "description": "Do you want to join a team where you work on challenging problems, make a positive difference to the world, and have fun doing it? Then we have the perfect role for you! Verafin is an innovator in anti-financial crime management solutions, with a mission to create the world’s most effective crime-fighting network. As a Software Developer on our Cloud team, you will have the opportunity to work on a variety of challenges, with a focus on creating innovative solutions. You will use your curious mind, refined problem-solving ability, and code writing expertise to bring fresh new ideas to life. Your contribution will help Verafin fight crimes such as human trafficking, elder abuse, and drug trafficking and you’ll join a large team who is equally passionate about making a difference. Being a Developer at Verafin means having the opportunity to make a positive impact on the world while doing what you love – solving complicated problems using the power of code.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4036234731&keywords=verafin&origin=BLENDED_SEARCH_RESULT_NAVIGATION_JOB_CARD&originToLandingJobPostings=4036234731%2C4038531880%2C4064931150",
    "skillsRequired": "A university degree or college diploma in Computer Engineering, Computer Science, or equivalent experience Experience with microservices Able to design and build systems using Amazon Web Services Knowledge of distributed systems Experience with Linux systems, virtualization, and network administration Proficiency in Java, Python and BashUnderstanding of security principles AWS certifications would be an asset "
  },
  {
    "description": "At CoLab, we help engineering teams bring life-changing products to the world years sooner. Our product, CoLab, is the world's first Design Engagement System (DES) - a category defining product that Engineering teams use to engage in meaningful, productive design conversations, catch preventable mistakes, and get to market faster. Our customers include the largest engineering organizations in the world such as Ford, Johnson Controls, Komatsu, and Polaris in the industrial equipment, consumer products, automotive, aerospace & defense, and shipbuilding industries.We're not just offering a job; we're inviting you to join a groundbreaking team that drives innovation in the tech industry. In this role, you'll have the opportunity to work on cutting-edge projects with a team that values your unique skills and perspectives. Our team based and collaborative environment is designed to foster your professional growth and creative problem-solving. With competitive compensation, comprehensive benefits, and a strong commitment to work-life balance, CoLab Software is where your career can truly thrive and make a meaningful impact.Frequently cited statistics show that people who identify with historically marginalized groups are likely to apply to jobs only if they meet 100% of the qualifications. We encourage you to help us break that statistic and apply even if you don't meet every single qualification—your potential is what matters most to us.This position will require occasional travel for on-site team meetings in Newfoundland Canada, at least twice per year (primarily in December and June). We recognize that travel can involve personal commitments, and we strive to accommodate individual circumstances, however the expectation is that travel to, and attendance at, the majority of these events is mandatory. Details about travel arrangements and covered expenses will be discussed during the hiring process.As a Product Designer on our team, you will play a key role in crafting and championing user focused UI and UX design solutions. Working with cross functional partners, you will advocate for the end user experience and contribute to many creative outputs. This role may be a good fit for you if you are passionate about use",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4052380387&geoId=101174742&keywords=colab&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    "skillsRequired": "2+ years of Product Design experience implementing user experience across devices, platforms, and interaction paradigms Master of the Figma-verse - developing design systems, variants, smart plugins, components etc Strong attention to detail with a passion for pixel-perfection Strong knowledge of how complex designs get implemented; ability to work closely with technical members of product development and ui/design system teams A compelling portfolio of work that demonstrates high-quality design work that also tells a story that you are a deep design thinker"
  },
  {
    "description": "Amazon internships are full-time positions, and interns should expect to work Monday-Friday, up to 40 hours per week typically between 8am-5pm. Specific team norms around working hours will be communicated by your manager. Interns should not have conflicts such as class or other employment during the Amazon work-day. Applicants should have a minimum of one school term remaining in their studies after the internship concludes. We will take your internship season and location preferences into consideration. Preferences are based on business availability and are not guaranteed. Please note that a majority of our internships take place in the summer. Start Dates For Our Internships Include The Following Periods Summer (Starts May/June) Fall (Starts August/September) Software Development Engineer (SDE) Internships At Amazon, we hire the best minds in technology to innovate and build on behalf of our customers. The intense focus we have on our customers is why we are one of the world’s most beloved brands – customer obsession is part of our company DNA. Our interns write software and collaborate with experienced software development engineers (SDEs) who guide interns on projects that matter to our customers. As an intern, you will be matched to a manager and a mentor. You will have the opportunity to influence the evolution of Amazon technology and lead critical projects early in your career. Your design and code will contribute to solving some of the most complex technical challenges in the areas of distributed systems, data mining, automation, optimization, scalability, and security – just to name a few. In addition to working on an impactful project, you will have the opportunity to engage with Amazonians for both personal and professional development, expand your network, and participate in activities with other interns throughout your internship. No matter the location of your internship, we give you the tools to own your project and learn in a real-world setting. Many of our technologies overlap, and you would be hard pressed to find a team that is not using Amazon Web Services (AWS), touching the catalogue, or iterating services to better personalize for customers. We make the impossible, possible.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4053498683&geoId=101174742&keywords=amazon&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    "skillsRequired": "Basic Qualifications Experience with at least one modern language such as Java, Python, C++, or C# including object-oriented design Are 18 years of age or older Are enrolled in a Bachelor's degree or above in Computer Science, Computer Engineering, Data Science, Electrical Engineering, or majors relating to these fields Have an expected graduate date between October 2025 - September 2028 and be able to work 40 hours/week minimum and commit to 12 week internship Preferred Qualifications Experience from a technical internship Are enrolled in a academic program that is physically located in Canada Experience in optimization mathematics such as linear programming and nonlinear optimization Experience with distributed, multi-tiered systems, algorithms, and relational databases Ability to effectively articulate technical challenges and solutions and adept at handling ambiguous or undefined problems as well as ability to think abstractly"
  },
  {
    "description": "This position is expected to start around August 2024 and continue through the entire Fall term (i.e. through December 2024) or into Spring 2025 if available. We ask for a minimum of 12 weeks, full-time and on-site, for most internships. International Students: If your work authorization is through CPT, please consult your school on your ability to work 40 hours per week before applying. You must be able to work 40 hours per week on-site. Many students will be limited to part-time during the academic year. The Internship Recruiting Team is driven by the passion to recognize and develop emerging talent. Our year-round program places the best students in positions where they will grow technically, professionally, and personally through their experience working closely with their Manager, Mentor, and team. We are dedicated to providing an experience that allows the intern to experience life at Tesla by including them in projects that are critical to their team’s success.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4012976672&geoId=101174742&keywords=tesla&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    "skillsRequired": "Currently pursuing a degree in Engineering, Electrical, Mechanical, Mechatronics, Computer Science, or a related field"
  },
  {
    "description": "Are you looking for an exciting student opportunity full of meaningful, diverse, and challenging assignments working alongside industry leading professionals? You will be part of a driven, and collaborative team completing important projects while receiving the mentorship, knowledge, and experience to develop the skills you need to build an exciting career. In this student role, the student will contribute to the successful execution of Upstream D&IT projects and tasks, while obtaining hands-on experience and learning opportunities supporting our business clients including: assisting in day-to-day operations, service oversight and IT application configuration activities in accordance with our standards and best practices. Participating in team meetings, sharing progress, insights, and seeking guidance as needed.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4064314682&geoId=101174742&keywords=cenovus&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    "skillsRequired": "https://www.linkedin.com/jobs/search/?currentJobId=4064314682&geoId=101174742&keywords=cenovus&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"
  },
  {
    "description": "The mission of the Network Infrastructure (NI) Business Group is to be the most trusted partner for the world’s most critical network infrastructure. NI will respond to the ever-increasing demand for networks with higher capacity, greater reliability, faster speeds, and lower costs. How You Will Contribute And What You Will Learn Participation in all stages of course development including requirements gathering, implementation, upgrades, and testing Provide input to technical road map and of the NI Learning Services portfolios Collaboration with quality and training delivery partners to ensure an end-to-end process is in place and followed rigorously for tracking and addressing issues raised by students and instructors Work with business development primes to respond to customer specific training requests and to proactively seek out and position NI learning services products to customer account teams Innovate format of learning products for an evolving workplace and drive them from proof of concept to productized customer ready release by working with cross functional teams across multiple Nokia business groups Creating needs assessment for learning products Defining learning objectives for courses and learning products Developing course content, instructor guides and lab guides Developing and grading written and practical lab exams Delivering pilot and beta courses and instructor train-the-trainer sessions and other strategic deliveries involving key employees’ groups or customers Supporting NI Learning Services Program participants – exam grading, course question support, etc.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4047699286&geoId=101174742&keywords=nokia&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    "skillsRequired": "University degree or College Diploma in Networking, Computer Science, Software or related technology discipline or equivalent experience Excellent business acumen, written and verbal communication skills Fluency in English is required A Passion for problem solving and attention to detail"
  },
  {
    "description": "University degree or College Diploma in Networking, Computer Science, Software or related technology discipline or equivalent experience Excellent business acumen, written and verbal communication skills Fluency in English is required A Passion for problem solving and attention to detail",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4065557991&geoId=101174742&keywords=blackberry&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    "skillsRequired": "Nearing completion of a bachelor’s degree in electrical/computing engineering, applied mathematics or engineering physics Thorough knowledge and understanding of modern electronics, EM theory, numerical methods, digital signal processing, semiconductor physics, and computer programming Previous exposure to computer aided design tools such as ADS, Cadence Virtuoso, and/or HFSS Demonstrated proficiency with Python, Matlab, C++ and graphical user interface design"
  },
  {
    "description": "Through the National Shipbuilding Strategy (NSS), the Government of Canada has embarked on one of the largest procurement projects since the Second World War. The NSS is a nation-building effort to create a sustainable Canadian shipbuilding industry, secure long-term job opportunities and build the next generation of ships for the Canadian Coast Guard and Royal Canadian Navy. Through its NSS–related work, Seaspan Shipyards is owning the redevelopment of our domestic shipbuilding industry on the West Coast and delivering on the promise of ships built in Canada, by Canadians. The Intern, Outfit Engineering will be responsible for assisting Naval Architects and Mechanical Engineers in the successful completion of engineering tasks. This is a unique opportunity that will provide you with exposure to naval architecture, steel outfitting and joinery systems from the design and concept preparation phases, through to production engineering and the construction of the vessel. The incumbent will work closely with Engineers either on the Multi-Purpose Vessels (MPV) & the Polar Icebreaker.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4049490240&geoId=101174742&keywords=seaspan&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    "skillsRequired": "Enrollment in a Naval Architecture, Marine Engineering, Mechanical Engineering or other Engineering degree program. Passion for shipbuilding and be interested in implementing Naval Architecture concepts within a production environment. Students must be comfortable working in a heavy industrial setting. Strong communication, interpersonal and organization skills. Proficiency working with CAD/CAM software suite including AutoCAD. Strong technical skills including the ability to read and interpret technical specifications and drawings. Excellent digital literacy including Excel/Word/ PowerPoint. Ability to work independently with minimal direction and manage their time effectively."
  },
  {
    "description": "At Bell, our purpose is to advance how Canadians connect with each other and the world. We achieve this by providing consumers and businesses with the best network technologies in the world, innovative digital solutions and seamless customer experiences. It’s all developed and delivered by the members of #TeamBell and we’re always on the lookout for people with great skills and experiences. We value diversity and provide a supportive, inclusive community where all team members can succeed. And through our commitment to environmental, social and governance initiatives, you will feel good about the greater impact you will have – making every day better for people as they connect, work, learn and play. Join us. You belong at Bell. Launch your career at Bell and join the best-in-class Graduate Program. You’ll be empowered to shape your future and inspired to bring your best ideas to work. Throughout the program, you’ll have the chance to connect with mentors and senior leaders who will support your professional and personal growth journey. You’ll develop real-world skills through Bell U, our exclusive learning platform and join other grads attending exclusive events and networking opportunities. At Bell, you'll have the opportunity to make a meaningful difference, using your most innovative ideas to bring the best digital connections and experiences to Canadians. This application is specifically for the Internship program. Please ensure you are eligible to the program as specified on the Students & Graduates website.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4016357981&geoId=101174742&keywords=bell&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true",
    "skillsRequired": "You have capability and passion to continuously learn different programming languages (ex. Java, JavaScript, Python, C#.NET, GOLANG) You are familiar with SAP programming (ABAP)  You are interested in web development (IE, ReactJS, Angular, VueJS)  You are familiar with different working methodologies i.e. DevOps, CI/CD, TDD/BDD  You have a desire to learn how to develop and work with cloud technologies (AWS, Azure, GCP, Kubernetes, Docker, Openshift (OCP) etc.)  You have an interest in data management (SQL and Non-SQL databases: PostgreSQL, MariaDB, MongoDB, Redis, Cassandra, Oracle, SQL Server) and caching tools (Redis, Red Hat DataGrid, SOSS) You are open to explore different avenues of software development such as (but not limited to) front-end, back-end or full stack development  You are willing to learn and adopt security by design in all your development work"
  },
  {
    "description": "The future is what you make it. When you join Honeywell, you become a member of our global team of thinkers, innovators, dreamers and doers who make the things that make the future. That means changing the way we fly, fueling jets in an eco-friendly way, keeping buildings smart and safe and even making it possible to breathe on Mars. Working at Honeywell isn’t just about developing cool things. That’s why all our employees enjoy access to dynamic career opportunities across different fields and industries. Are you ready to help us make the future? As an Intern Bachelor's Embedded Software Engineer here at Honeywell, you will have the opportunity to gain hands-on experience in the design, development, and debugging of embedded software and firmware. You will collaborate with cross-functional teams to support the development of cutting-edge embedded systems that power innovative solutions in the aerospace industry. This internship will provide you with valuable industry experience and the opportunity to contribute to shaping the future of technology. You will report directly to our SATCOM Software Development Manager and you'll work out of our Kanata location.",
    "linkedin": "https://www.linkedin.com/jobs/search/?currentJobId=4057245338&geoId=101174742&keywords=bombardier&origin=JOB_SEARCH_PAGE_KEYWORD_AUTOCOMPLETE&refresh=true",
    "skillsRequired": "Currently pursuing a Bachelor's degree in Software Engineering, Computer Engineering, or a related field. Strong understanding of hardware and software integration. The Honeywell building is a controlled goods program environment. Candidates must be eligible for CGP clearance. Must graduate before May 2027. This is a 16-month Co-Op from May 2025 – August 2026."
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