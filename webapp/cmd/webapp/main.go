package main

import (
	"os"

	webapp "github.com/hoshinodis/egt-daoad/webapp"
	"github.com/hoshinodis/egt-daoad/webapp/config"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	cfg, err := config.New()
	if err != nil {
		os.Exit(1)
	}

	db, err := webapp.NewConn(cfg)
	if err != nil {
		os.Exit(1)
	}
	defer db.Close()

	server, err := webapp.NewServer(cfg, db)
	if err != nil {
		os.Exit(1)
	}

	server.Start(cfg.Port)
}