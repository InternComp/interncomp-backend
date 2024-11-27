import requests
import pytest

company_id="cc1c016a-229e-4d7f-8fd6-c246b20ef303"
job_id="611e7781-17f1-43fc-b6e5-7a5480dfe352"
user_id="101034505943362132559"
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
        "email": "aotes@mun.ca",
        # dont know your email aaron put a random on here while fixing
        "university": "MUN",
        "location":"",
        "institution":"",
        "gender":""
    }

    res = session.post(f"{base_url}/user/{user_id}", json=data,timeout=4)

    assert res.status_code == 200 
    response_data = res.json()
    assert "data" in response_data
    updated_user = response_data["data"]
    assert updated_user["id"] == user_id
    assert updated_user["name"] == update_payload["name"]
    assert updated_user["email"] == update_payload["email"]
