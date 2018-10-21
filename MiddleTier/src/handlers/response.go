package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Response struct {
	Name     string
	Phone    string
	Driver   bool
	Capacity int
	Address  string
}

func createUser(resp Response) {
	fmt.Printf("Creating User: %v\n", resp)
}

func createDriver(resp Response) {
	fmt.Printf("Creating Driver: %v\n", resp)
}

func ResponseHandler(w http.ResponseWriter, r *http.Request) {
	var resp Response
	json.NewDecoder(r.Body).Decode(&resp)

	createUser(resp)
	if resp.Driver {
		createDriver(resp)
	}
}
