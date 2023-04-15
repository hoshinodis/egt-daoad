-- name: GetSite :one
SELECT * FROM sites
WHERE id = ? LIMIT 1;

-- name: ListSites :many
SELECT * FROM sites
ORDER BY id DESC;

-- name: CreateSite :execlastid
INSERT INTO sites (
    id, wallet_address, url
) VALUES (
             ?, ?, ?
         );

-- name: ArchiveSite :exec
UPDATE sites
SET archived = true
WHERE id = ?;