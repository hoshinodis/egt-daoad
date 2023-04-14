package webapp

import (
	"net/http"
	"strconv"
	"time"

	"github.com/labstack/echo/v4"

	"github.com/gochipon/w3ad/dao/gen/sqlc"
)

func (s *Server) apiGetUser(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))
	data, err := s.query.GetUser(c.Request().Context(), int64(id))
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, data)
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

	now := time.Now()
	issue := &sqlc.CreateCreativeIssueParams{
		CreativeID:         response,
		ReviewEndTimestamp: now.Add(time.Hour * 24).Unix(),
		}

		resIssue, err := s.query.CreateCreativeIssue(c.Request().Context(), *issue)
		if resIssue == nil {
			return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
		}

		return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created", "ID": response})
}

func (s *Server) apiListCreativeIssues(c echo.Context) error {
	data, err := s.query.ListCreativeIssues(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, data)
}

func (s *Server) apiVoteCreativeIssue(c echo.Context) error {
	data := &sqlc.CreateCreativeVoteParams{}
	err := c.Bind(data)
	data.Timestamp = time.Now().Unix()
	if err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"status": false, "message": err.Error()})
	}

	response, err := s.query.CreateCreativeVote(c.Request().Context(), *data)
	if response == nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created"})
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

func (s *Server) apiListSiteIssues(c echo.Context) error {
	data, err := s.query.ListSiteIssues(c.Request().Context())
	if err != nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, data)
}

func (s *Server) apiCreateSiteIssue(c echo.Context) error {
	now := time.Now()
	data := &sqlc.CreateSiteIssueParams{}
	err := c.Bind(data)
	if err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"status": false, "message": err.Error()})
	}

	data.ReviewEndTimestamp = now.Add(time.Hour * 24).Unix()
	response, err := s.query.CreateSiteIssue(c.Request().Context(), *data)
	if response == nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created"})
}

func (s *Server) apiVoteSiteIssue(c echo.Context) error {
	data := &sqlc.CreateSiteVoteParams{}
	err := c.Bind(data)
	data.Timestamp = time.Now().Unix()
	if err != nil {
		return c.JSON(http.StatusBadRequest, echo.Map{"status": false, "message": err.Error()})
	}

	response, err := s.query.CreateSiteVote(c.Request().Context(), *data)
	if response == nil {
		return c.JSON(http.StatusInternalServerError, echo.Map{"status": false, "message": err.Error()})
	}

	return c.JSON(http.StatusOK, echo.Map{"status": true, "message": "Resource created"})
}