package webapp

import (
	"net/http"
	"math/rand"
	"time"
	"fmt"

	"github.com/labstack/echo/v4"

	"github.com/hoshinodis/egt-daoad/webapp/gen/sqlc"
)

func (s *Server) apiServeAd(c echo.Context) error {
	data, err := s.query.ListCreatives(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	rand.Seed(time.Now().UnixNano())
	res := data[rand.Intn(len(data))]
	tag := fmt.Sprintf("<a rel=\"nofollow\" href='%s' target=\"_blank\"><img src='%s' /></a>", res.Link, res.Img)

	return c.HTML(http.StatusOK, tag)
}

func (s *Server) apiListCreatives(c echo.Context) error {
	data, err := s.query.ListCreatives(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, data)
}

func (s *Server) apiCreateCreative(c echo.Context) error {
	data := &sqlc.CreateCreativeParams{}
	err := c.Bind(data)
	if err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"status": false, "message": err.Error()})
	}

	response, err := s.query.CreateCreative(c.Request().Context(), *data)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created", "ID": response})
}

func (s *Server) apiListSites(c echo.Context) error {
	data, err := s.query.ListSites(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, data)
}

func (s *Server) apiCreateSite(c echo.Context) error {
	data := &sqlc.CreateSiteParams{}
	err := c.Bind(data)
	if err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"status": false, "message": err.Error()})
	}

	response, err := s.query.CreateSite(c.Request().Context(), *data)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created", "ID": response})
}
