import requests

data = {
    "id" : "World",
    "destination" : "World"
}

requests.post("http://localhost:8080/api/trip", json=data)
