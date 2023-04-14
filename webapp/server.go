package webapp

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/hoshinodis/egt-daoad/webapp/config"
	"github.com/hoshinodis/egt-daoad/webapp/gen/sqlc"
)

type Server struct {
	config *config.Config
	query  *sqlc.Queries

	echo *echo.Echo
}

func NewConn(cfg *config.Config) (*sql.DB, error) {
	db, err := sql.Open("mysql",
		fmt.Sprintf(
			"%s:%s@tcp(%s:%d)/%s?parseTime=true",
			cfg.DBUser,
			cfg.DBPassword,
			cfg.DBHost,
			cfg.DBPort,
			cfg.DBName,
			),
			)
	if err != nil {
		return nil, err
	}
	return db, nil
}

func NewServer(c *config.Config, conn *sql.DB) (*Server, error) {
	server := &Server{
		config: c,
		query:  sqlc.New(conn),
		}

		server.setupEcho()
	return server, nil
}

func (s *Server) Start(port int) {
	// サーバーを起動
	s.echo.Logger.Fatal(s.echo.Start(fmt.Sprintf(":%d", port)))
}

func (s *Server) setupEcho() {
	// インスタンスを作成
	e := echo.New()

	// ミドルウェアを設定
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// ルートを設定
	echo.NotFoundHandler = func(c echo.Context) error {
		return c.Redirect(http.StatusFound, "/")
	}
	// e.GET("/:path", echo.NotFoundHandler)

	// health check用にしたい
	e.GET("/hello", hello)

	// frontend
	e.Static("/", "front/dist/")

	apiGroup := e.Group("/api")
	apiRoutes(s, apiGroup)

	s.echo = e
}

func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello!")
}

func apiRoutes(s *Server, g *echo.Group) {
	// sites
	g.GET("/sites", s.apiListSites)
	g.POST("/sites", s.apiCreateSite)
	// creatives
	g.GET("/creatives", s.apiListCreatives)
	g.POST("/creatives", s.apiCreateCreative)
}