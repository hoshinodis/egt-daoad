# デプロイ用コンテナに含めるバイナリを作成するコンテナ
FROM --platform=linux/x86_64 golang:1.20.2-bullseye as deploy-builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY .. .
RUN go build -trimpath -ldflags "-w -s" -o app ./cmd/webapp

# --------------------------------------------------------

# デプロイ用のコンテナ
FROM --platform=linux/x86_64 debian:bullseye-slim as deploy

RUN apt-get update

EXPOSE 80

COPY --from=deploy-builder /app/front/dist ./front/dist
COPY --from=deploy-builder /app/app .

CMD ["./app"]

# ---------------------------------------------------------

# ローカル開発環境（ホットリロード
FROM golang:1.20.2-bullseye as dev

WORKDIR /app

#
# nodejsをインストールする。
# https://github.com/nodesource/distributions#deb
#
RUN apt -y install curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt -y install nodejs

# yarn
RUN npm install -g yarn

# vite
RUN npm install -g vite

# sqlc
RUN go install github.com/kyleconroy/sqlc/cmd/sqlc@latest

# sqldef
RUN go install github.com/k0kubun/sqldef/cmd/mysqldef@latest

# air install
RUN go install github.com/cosmtrek/air@latest
CMD ["air"]
