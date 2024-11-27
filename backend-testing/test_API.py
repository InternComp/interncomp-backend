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
    res=session.get(f"{base_url}/companies")

    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)

def test_getcompaniesby_id_endpoint(base_url,session):
    res=session.get(f"{base_url}/companies/021a7113-a305-45fb-8c2b-5ccb004a3c63")
    assert res.status_code==200
    assert res.json()


def test_getjobs_endpoint(base_url,session):

    res=session.get(f"{base_url}/jobs")
    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)

def test_getjobsby_id_endpoint(base_url,session):
    res=session.get(f"{base_url}/jobs/09d903aa-ca12-4162-af43-76efde269552")
    assert res.status_code==200
    assert res.json()


def test_getusers_endpoint(base_url,session):
    res=session.get(f"{base_url}/user/112108579048235041853")
    assert res.status_code==200
    assert res.json()

def test_getreviews_endpoint(base_url,session):

    res=session.get(f"{base_url}/Reviews")
    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)


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

def test_postjobs_endpoint(base_url, session):
    data = {
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
    }
    res = session.post(f"{base_url}/jobs", json=data)
    
    # Assert that the status code is 201 (Created) as a new resource is created
    assert res.status_code == 201
    
    # Assert that the response contains the expected data
    response_data = res.json()
    assert isinstance(response_data, dict)
    assert "id" in response_data  # Assuming that the response includes the newly created company's ID
    assert response_data["companyImage"] == data["companyImage"]

def test_postuserbyid_endpoint(base_url, session):
    
    user_id = "112108579048235041853"  
    update_payload = {
        "name": "Aaron Oates",
        "email": "aaronoates2003@gmail.com"
    }

    # Step 2: Send the POST request to update the user
    res = session.post(f"{base_url}/user/{user_id}", json=update_payload)

    # Step 3: Assertions to verify the response
    assert res.status_code == 200  # Expecting a successful update
    response_data = res.json()
    
    # Ensure the response contains the updated user data
    assert "data" in response_data
    updated_user = response_data["data"]
    assert updated_user["id"] == user_id
    assert updated_user["name"] == update_payload["name"]
    assert updated_user["email"] == update_payload["email"]

# def test_postreview_endpoint(base_url, session):

#     company_id = "0e520ae7-ce28-4174-bf91-5b408e055b66"
#     review_payload = {
#         "reviewerId": "112108579048235041853",  # Replace with a valid reviewer ID
#         "companyId": company_id,
#         "review_text": "Great company with excellent work culture.",
#         "rating": "FIVE"
#     }

#     # Step 2: Send the POST request to add a review
#     res = session.post(f"{base_url}/companies/{company_id}/reviews", json=review_payload)

#     # Step 3: Assertions to verify the response
#     assert res.status_code == 200  # Expecting a successful review creation
#     response_data = res.json()

#     # Ensure the response contains the new review's details
#     assert response_data["reviewerId"] == review_payload["reviewerId"]
#     assert response_data["companyId"] == review_payload["companyId"]
#     assert response_data["review"] == review_payload["review_text"]
#     assert response_data["rating"] == review_payload["rating"]

def test_putjobs_endpoint(base_url, session):
    data = {
    "companyImage": "https://media.licdn.com/dms/image/v2/C560BAQHTvZwCx4p2Qg/company-logo_100_100/company-logo_100_100/0/1630640869849/amazon_logo?e=1738800000&v=beta&t=MRR139bOgOiLg5yCuJalxOQW4m2wzl4Jo6dCSXPvDgg",
    "companyName": "Amazon Updated",
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
    }
    res = session.post(f"{base_url}/jobs", json=data)
    
    # Assert that the status code is 201 (Created) as a new resource is created
    assert res.status_code == 201
    
    # Assert that the response contains the expected data
    response_data = res.json()
    assert isinstance(response_data, dict)
    assert "id" in response_data  # Assuming that the response includes the newly created company's ID
    assert response_data["companyImage"] == data["companyImage"]


def test_delete_job_endpoint(base_url, session):
    job_id = "223bc1d1-a763-4303-bbdf-f365877594cb" 

    res = session.delete(f"{base_url}/jobs/{job_id}")
    assert res.status_code == 204 
    check_res = session.get(f"{base_url}/jobs/{job_id}")
    assert check_res.status_code == 404  # Expecting a "Not Found" response for a deleted job