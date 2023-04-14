package webapp

import (
	"net/http"

	"github.com/labstack/echo/v4"

	"github.com/hoshinodis/egt-daoad/webapp/gen/sqlc"
)

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
