package main

import (
	authentication "backend/pkg/Authentication"
	"backend/pkg/db/sqlite"
	"net/http"
)

func main() {
	sqlite.RunMigrations()

	mux := http.DefaultServeMux

	mux.HandleFunc("/login", authentication.HandleLogin)

	http.ListenAndServe(":8080", mux)

}
