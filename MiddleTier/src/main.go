package main

import (
	"github.com/mongodb/mongo-go-driver/mongo"
	"handlers"
	"net/http"
)

func main() {
	//http.HandleFunc("/api/org", orgHandler)
	mongo.NewClient("mongodb://bensonchu457:carpool@carpool-shard-00-00-hogxs.mongodb.net:27017," +
		"carpool-shard-00-01-hogxs.mongodb.net:27017," +
		"carpool-shard-00-02-hogxs.mongodb.net:27017/test?ssl=true&replicaSet=carpool-shard-0&authSource=admin&retryWrites=true")

	http.HandleFunc("/api/trip", handlers.TripHandler)
	http.HandleFunc("/api/response", handlers.ResponseHandler)
	http.HandleFunc("/", handlers.Index)
	http.ListenAndServe(":8080", nil)
}
