import unittest
import requests

class TestAPIEndpoints(unittest.TestCase):
    BASE_URL = "http://example.com/api"  # Replace with your API base URL

    def test_get_endpoint(self):
        endpoint = f"{self.BASE_URL}/endpoint"  # Replace with the specific endpoint
        response = requests.get(endpoint)

        # Test status code
        self.assertEqual(response.status_code, 200, "Status code is not 200.")

        # Test response content type
        self.assertEqual(
            response.headers["Content-Type"],
            "application/json",
            "Response is not JSON."
        )

        # Test response structure
        data = response.json()  # Parse the response to JSON
        self.assertIsInstance(data, dict, "Response is not a JSON object.")  # Check if it's a dictionary

        # Additional content checks (example)
        self.assertIn("key", data, "Key 'key' is missing in the response.")
        self.assertEqual(data["key"], "expected_value", "Value for 'key' is incorrect.")

if __name__ == "__main__":
    unittest.main()
