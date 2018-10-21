import requests

data = {
    "id" : "World",
    "destination" : "World"
}

requests.post("http://localhost:8080/api/trip", json=data)

data = {
    	"name"    : "Driver",
	"phone"   : "123-456-7890",
	"driver"  : False,
	"capacity": 10,
	"address" : "1234 help me",
}

requests.post("http://localhost:8080/api/response", json=data)


data = {
    	"name"    : "NotDriver",
	"phone"   : "123-456-7890",
	"driver"  : True,
	"capacity": 10,
	"address" : "1234 help me",
}

requests.post("http://localhost:8080/api/response", json=data)
