package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Trip struct {
	Id          string
	Destination string
}

func TripHandler(w http.ResponseWriter, r *http.Request) {
	var t Trip
	json.NewDecoder(r.Body).Decode(&t)

	fmt.Printf("Creating Trip: %v\n", t)
}
