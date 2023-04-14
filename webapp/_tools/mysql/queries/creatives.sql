-- name: GetCreative :one
SELECT * FROM creatives
WHERE id = ? LIMIT 1;

-- name: ListCreatives :many
SELECT * FROM creatives
ORDER BY id DESC;

-- name: CreateCreative :execlastid
INSERT INTO creatives (
    name, link, img
) VALUES (
             ?, ?, ?
         );

-- name: ArchiveCreative :exec
UPDATE creatives
SET archived = true
WHERE id = ?;