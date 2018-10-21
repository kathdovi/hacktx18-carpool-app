package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"handlers"
	"net/http"
)

type Trip struct {
	Id          string
	Destination string
}

func printer(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)
	fmt.Println(t)
}

func tripHandler(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)

	mCache := new(bytes.Buffer)
	encCache := json.NewEncoder(mCache)
	encCache.Encode(t)

	http.Post("http://localhost:8080/printer",
		"application/json", mCache)
}

func main() {
	//http.HandleFunc("/api/org", orgHandler)
	http.HandleFunc("/api/trip", tripHandler)
	http.HandleFunc("/printer", printer)
	http.HandleFunc("/", handlers.Index)
	http.ListenAndServe(":8080", nil)
}
