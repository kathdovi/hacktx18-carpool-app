package main

import (
	//"github.com/mongodb/mongo-go-driver/mongo"
	"github.com/zebresel-com/mongodm"
	"handlers"
	"net/http"
)

type User struct {
	mongodm.DocumentBase `json:",inline"      bson:",inline"`
	FirstName            string `json:"firstname"    bson:"firstname"`
	LastName             string `json:"lastname"	 bson:"lastname"`
	UserName             string `json:"username"	 bson:"username"`
	//Messages  interface{} `json:"messages"	 bson:"messages" 	model:"Message" relation:"1n" autosave:"true"`
}

func main() {
	//http.HandleFunc("/api/org", orgHandler)
	// mongo.NewClient("mongodb://bensonchu457:carpool@carpool-shard-00-00-hogxs.mongodb.net:27017," +
	// 	"carpool-shard-00-01-hogxs.mongodb.net:27017," +
	// 	"carpool-shard-00-02-hogxs.mongodb.net:27017/test?ssl=true&replicaSet=carpool-shard-0&authSource=admin&retryWrites=true")
	dbConfig := &mongodm.Config{
		DatabaseHosts:    []string{"carpool-shard-00-00-hogxs.mongodb.net:27017,carpool-shard-00-01-hogxs.mongodb.net:27017,carpool-shard-00-02-hogxs.mongodb.net:27017/test?ssl=true&replicaSet=carpool-shard-0&authSource=admin&retryWrites=true"},
		DatabaseName:     "database",
		DatabaseUser:     "bensonchu457",
		DatabasePassword: "carpool",
		DatabaseSource:   "admin",
	}

	connection, _ := mongodm.Connect(dbConfig)
	connection.Register(&User{}, "users")

	http.HandleFunc("/api/trip", handlers.TripHandler)
	http.HandleFunc("/api/response", handlers.ResponseHandler)
	http.HandleFunc("/", handlers.Index)
	http.ListenAndServe(":8080", nil)
}
