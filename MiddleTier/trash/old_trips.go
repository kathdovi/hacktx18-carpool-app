package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

type Trip struct {
	Id          string
	Destination string
}

func Printer(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)
	fmt.Println(t)
}

func TripHandler(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)

	mCache := new(bytes.Buffer)
	encCache := json.NewEncoder(mCache)
	encCache.Encode(t)

	http.Post("http://localhost:8080/printer",
		"application/json", mCache)
}
