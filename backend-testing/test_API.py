import requests
import pytest

@pytest.fixture
def base_url():
    #Url for backend
    return "http://localhost:3000"

@pytest.fixture
def session():
    s=requests.Session()
    return s

#pytest will automatically detect base_url & session to be a function
#we dont need to define main() for it to run
def test_getcompanies_endpoint(base_url,session):
    breakpoint()
    res=session.get(f"{base_url}/companies")

    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)

# def test_getjobs_endpoint(base_url,session):

#     res=session.get(f"{base_url}/jobs")
#     # print(res.json())
#     assert res.status_code==200
#     assert isinstance(res.json(),list)

# def test_getusers_endpoint(base_url,session):

#     res=session.get(f"{base_url}/users")
#     # print(res.json())
#     assert res.status_code==200
#     assert isinstance(res.json(),list)

# def test_postcompanies_endpoint(base_url, session):
#     data = {
#     "name": "Verafin",
#     "description": 'Verafin provides financial crime management software, focusing on anti-money laundering and fraud detection for financial institutions.',
#     "culture": 'A collaborative and supportive atmosphere where employees work together, challenge each other, and contribute to a shared goal of innovation and growth.',
#     "benefits": 'Comprehensive health coverage, stock options, and work-life balance programs.',
#     "location": 'St. John’s, NL, Canada',
#     "primaryIndustry": 'Financial Technology (FinTech)',
#     "companySize": 'Large',
#     "founded": 2003,
#     "recruiterEmails": ['xxx'],
#     "image": 'https://media.licdn.com/dms/image/v2/D4E0BAQGG8SZ7WgOpLw/company-logo_200_200/company-logo_200_200/0/1719256890099/verafin_logo?e=1737590400&v=beta&t=8uY7TXutiRePKIKD1qpYFPyGYBffIXY6jbKDE8pt4Mc',
#     "banner":"https://media.licdn.com/dms/image/v2/D4E3DAQH4sa-w44VW5A/image-scale_191_1128/image-scale_191_1128/0/1719332162782/verafin_cover?e=2147483647&v=beta&t=UIH0vq3DAC4JNnIlIRZRkYnezuXxljkHepazohIK8U0",
#     "linkedin": 'https://linkedin.com/company/verafin',
#     "careerPages": 'https://verafin.com/careers',
#     "salaryInfo": 'Competitive salaries with stock options and performance bonuses.'
#     }
#     res = session.post(f"{base_url}/companies", json=data)
    
#     # Assert that the status code is 201 (Created) as a new resource is created
#     assert res.status_code == 201
    
#     # Assert that the response contains the expected data
#     response_data = res.json()
#     assert isinstance(response_data, dict)
#     assert "id" in response_data  # Assuming that the response includes the newly created company's ID
#     for key in response_data.keys():
#         assert response_data[key] == data[key]

# def test_postjobs_endpoint(base_url, session):
#     data = {
#     "companyImage": "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_100_100/company-logo_100_100/0/1630640869849/amazon_logo?e=1738800000&v=beta&t=MRR139bOgOiLg5yCuJalxOQW4m2wzl4Jo6dCSXPvDgg",
#     "companyName": "Amazon",
#     "title": "Software Development Engineer Co-op and Intern",
#     "description": "Are you inspired by invention? Is problem solving through teamwork in your DNA? Do you like the idea of seeing how your work impacts the bigger picture? Answer yes to any of these and you’ll fit right in here at Amazon Robotics. We are a smart team of doers who work passionately to apply cutting edge advances in robotics and software to solve real-world challenges that will transform our customers’ experiences. We invent new improvements every day. We are Amazon Robotics and we will give you the tools and support you need to invent with us in ways that are rewarding, fulfilling, and fun. Amazon Robotics, a wholly owned subsidiary of Amazon.com, empowers a smarter, faster, more consistent customer experience through automation. Amazon Robotics automates fulfillment center operations using various methods of robotic technology including autonomous mobile robots, sophisticated control software, language perception, power management, computer vision, depth sensing, machine learning, object recognition, and semantic understanding of commands. Amazon Robotics has a dedicated focus on research and development to continuously explore new opportunities to extend its product lines into new areas.",
#     "location": "Toronto, ON, Canada",
#     "employmentType": "Internship",
#     "workType": "Full-time",
#     "internType": "Winter 2025",
#     "jobLink": "https://www.amazon.jobs/en/jobs/2750005/amazon-robotics-software-development-engineer-co-op-and-intern-2025-toronto?cmpid=SPLICX0248M&ss=paid&utm_campaign=cxro&utm_content=job_posting&utm_medium=social_media&utm_source=linkedin.com",
#     "linkedin": "https://www.linkedin.com/company/amazon/",
#     "skillsRequired": ["Python", "C++", "Software Development", "Robotics", "Object-Oriented Design", "Algorithms", "Data Structures"],
#     "basicQualifications": [
#       "Knowledge of computer science fundamentals such as object-oriented design, operating systems, algorithms, data structures, and complexity analysis",
#       "Experience with at least one modern programming language such as Python, C++, or Java",
#       "Strong problem-solving skills and a passion for innovation"
#     ],
#     "preferredQualifications": [
#       "Experience with distributed systems and relational databases",
#       "Knowledge of C/C++, Python, or Java",
#       "Familiarity with robotics, machine learning, or data analysis"
#     ],
#     "additionalInfo": "Amazon is committed to a diverse and inclusive workplace. Amazon is an equal opportunity employer and does not discriminate based on race, national origin, gender, gender identity, sexual orientation, disability, age, or other legally protected status."
#     }
#     res = session.post(f"{base_url}/jobs", json=data)
    
#     # Assert that the status code is 201 (Created) as a new resource is created
#     assert res.status_code == 201
    
#     # Assert that the response contains the expected data
#     response_data = res.json()
#     assert isinstance(response_data, dict)
#     assert "id" in response_data  # Assuming that the response includes the newly created company's ID
#     for key in response_data.keys():
#         assert response_data[key] == data[key]
