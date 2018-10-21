package main

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

func printer(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)
	fmt.Println(t)
}

func tripHandler(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)
	jsonValue, _ := json.Marshal(&t)
	http.Post("http://localhost:8080/printer",
		"application/json", bytes.NewBuffer(jsonValue))
}

func main() {
	http.HandleFunc("/api/trip", tripHandler)
	http.HandleFunc("/printer", printer)
	http.ListenAndServe(":8080", nil)
}
