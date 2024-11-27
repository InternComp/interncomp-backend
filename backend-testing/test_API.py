import requests
import pytest

company_id="068600f8-1b06-467e-b96c-d063fa5b91b6"
job_id="116e8dae-d842-46c3-90f0-fd83b2cc3c18"
user_id="test_id"
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
    res=session.get(f"{base_url}/companies",timeout=4)

    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)

def test_getcompaniesby_id_endpoint(base_url,session):
    res=session.get(f"{base_url}/companies/{company_id}",timeout=4)
    assert res.status_code==200
    #CHECK FOR REVEIWS
    assert res.json()
    assert "reviews" in res.text


def test_getjobs_endpoint(base_url,session):

    res=session.get(f"{base_url}/jobs",timeout=4)
    # print(res.json())
    assert res.status_code==200
    assert isinstance(res.json(),list)

def test_getjobsby_id_endpoint(base_url,session):
    res=session.get(f"{base_url}/jobs/{job_id}",timeout=4)
    assert res.status_code==200
    assert res.json()


def test_getusers_endpoint(base_url,session):
    print(f"{base_url}/user/{user_id}")
    res=session.get(f"{base_url}/user/{user_id}",timeout=4)
    print(res.status_code)
    assert res.status_code==200
    assert res.json()


def test_postuserbyid_endpoint(base_url, session):
    
    user_id = "test_id"  
    data = {
        "name": "Aaron Oates",
        "program": "ECE",
        # dont know your email aaron put a random on here while fixing
        "university": "MUN",
        "location":"",
        "institution":"",
        "gender":"",
        "email": "aotes@mun.ca",
    }

    res = session.post(f"{base_url}/user/{user_id}", json=data,timeout=4)

    assert res.status_code == 200 
    response_data = res.json()
    assert "data" in response_data
    updated_user = response_data["data"]
    assert updated_user["id"] == user_id
    assert updated_user["name"] == data["name"]


# def test_postreview_endpoint(base_url, session):

#     review_payload = {
#         "reviewerId": user_id,
#         "companyId": company_id,
#         "review_text": "Great company with excellent work culture.",
#         "rating": 5,
#     }

#     res = session.post(f"{base_url}/companies/{company_id}/reviews", json=review_payload)

#     assert res.status_code == 200  # Expecting a successful review creation
#     response_data = res.json()
#     breakpoint()
#     # Ensure the response contains the new review's details
#     assert response_data["reviewerId"] == review_payload["reviewerId"]
#     assert response_data["companyId"] == review_payload["companyId"]
#     assert response_data["review"] == review_payload["review_text"]
#     assert response_data["rating"] == review_payload["rating"]