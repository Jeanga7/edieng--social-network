/*
TODOS:
Handle Login
Handle Register
*/

package authentication

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"text/template"
)

// Register Handler
func HandleRegister(w http.ResponseWriter, r *http.Request) {

}

func Render(w http.ResponseWriter, tmplName string, data interface{}) {
	tmpl, err := template.ParseFiles("./" + tmplName + ".html")
	if err != nil {
		http.Error(w, "Failed to parse template", http.StatusInternalServerError)
		log.Println("Error parsing template:", err)
		return
	}
	tmpl.Execute(w, data)
}

// Login Handler
func HandleLogin(w http.ResponseWriter, r *http.Request) {
    if r.Method == "POST" {
        r.ParseForm() // Ensure form data is parsed
        form := html.EscapeString(r.FormValue("form"))
        if form == "login" {
            mail := r.FormValue("mail")
            pass := r.FormValue("password")
            fmt.Println(form, mail, pass)
            if mail == "KEndi" && pass == "Test" {
                fmt.Println("c'est bon")
                // Respond to the client (optional)
                w.Write([]byte("Login successful"))
            } else {
                fmt.Println("not good")
                // Respond to the client (optional)
                w.Write([]byte("Invalid credentials"))
            }
        }
    } else if r.Method == "GET" {
        Render(w, "index", nil)
    }
}
