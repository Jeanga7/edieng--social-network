package sqlite

import (
    "database/sql"
    "fmt"
    _ "github.com/mattn/go-sqlite3"
    "github.com/golang-migrate/migrate/v4"
    "github.com/golang-migrate/migrate/v4/database/sqlite3"
    _ "github.com/golang-migrate/migrate/v4/source/file"
    "log"
)

// Run 
func RunMigrations() {
    db, err := sql.Open("sqlite3", "./pkg/db/database.sqlite")
    if err != nil {
        log.Fatalf("Failed to connect to the database: %v", err)
    }
    defer db.Close()

    driver, err := sqlite3.WithInstance(db, &sqlite3.Config{})
    if err != nil {
        log.Fatalf("Failed to create migration driver: %v", err)
    }

    m, err := migrate.NewWithDatabaseInstance(
        "file://pkg/db/migrations",
        "sqlite3", driver)
    if err != nil {
        log.Fatalf("Failed to create migrate instance: %v", err)
    }

    if err := m.Up(); err != nil && err != migrate.ErrNoChange {
        log.Fatalf("Migration failed: %v", err)
    }

    fmt.Println("Migrations ran successfully!")
}
