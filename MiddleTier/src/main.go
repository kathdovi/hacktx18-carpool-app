package main

import (
	"handlers"
	"net/http"
)

func main() {
	//http.HandleFunc("/api/org", orgHandler)
	http.HandleFunc("/api/trip", handlers.TripHandler)
	http.HandleFunc("/printer", handlers.Printer)
	http.HandleFunc("/", handlers.Index)
	http.ListenAndServe(":8080", nil)
}
