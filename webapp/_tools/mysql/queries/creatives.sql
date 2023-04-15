-- name: GetCreative :one
SELECT * FROM creatives
WHERE id = ? LIMIT 1;

-- name: ListCreatives :many
SELECT * FROM creatives
ORDER BY id DESC;

-- name: ListCreativesByWalletAddress :many
SELECT * FROM creatives
WHERE wallet_address = ?
ORDER BY id DESC;

-- name: CreateCreative :execlastid
INSERT INTO creatives (
    id, wallet_address, link, img
) VALUES (
             ?, ?, ?, ?
         );
