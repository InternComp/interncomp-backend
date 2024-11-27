import requests
import pytest

@pytest.fixture
def base_url():
    #Url for backend
    return "http://localhost:3000/"

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

