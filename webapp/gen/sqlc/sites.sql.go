// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.2
// source: sites.sql

package sqlc

import (
	"context"
)

const archiveSite = `-- name: ArchiveSite :exec
UPDATE sites
SET archived = true
WHERE id = ?
`

func (q *Queries) ArchiveSite(ctx context.Context, id int64) error {
	_, err := q.db.ExecContext(ctx, archiveSite, id)
	return err
}

const createSite = `-- name: CreateSite :execlastid
INSERT INTO sites (
    wallet_address, url
) VALUES (
             ?, ?
         )
`

type CreateSiteParams struct {
	WalletAddress string `json:"wallet_address"`
	Url           string `json:"url"`
}

func (q *Queries) CreateSite(ctx context.Context, arg CreateSiteParams) (int64, error) {
	result, err := q.db.ExecContext(ctx, createSite, arg.WalletAddress, arg.Url)
	if err != nil {
		return 0, err
	}
	return result.LastInsertId()
}

const getSite = `-- name: GetSite :one
SELECT id, wallet_address, url, status FROM sites
WHERE id = ? LIMIT 1
`

func (q *Queries) GetSite(ctx context.Context, id int64) (Site, error) {
	row := q.db.QueryRowContext(ctx, getSite, id)
	var i Site
	err := row.Scan(
		&i.ID,
		&i.WalletAddress,
		&i.Url,
		&i.Status,
	)
	return i, err
}

const listSites = `-- name: ListSites :many
SELECT id, wallet_address, url, status FROM sites
ORDER BY id DESC
`

func (q *Queries) ListSites(ctx context.Context) ([]Site, error) {
	rows, err := q.db.QueryContext(ctx, listSites)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Site{}
	for rows.Next() {
		var i Site
		if err := rows.Scan(
			&i.ID,
			&i.WalletAddress,
			&i.Url,
			&i.Status,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}