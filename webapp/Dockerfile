# デプロイ用コンテナに含めるバイナリを作成するコンテナ
FROM --platform=linux/x86_64 golang:1.20.2-bullseye as deploy-builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY .. .
RUN go build -trimpath -ldflags "-w -s" -o app ./cmd/webapp

# migration用のファイル類
# wget
RUN apt-get install -y wget

# mysqldef
RUN wget -O - https://github.com/k0kubun/sqldef/releases/latest/download/mysqldef_linux_amd64.tar.gz \
  | tar xvz

# dao schema
COPY _tools/mysql/schema.sql .

# sh
COPY _tools/run.sh .
RUN chmod +x run.sh
COPY _tools/migrate.sh .
RUN chmod +x migrate.sh
RUN chown root:root mysqldef

# --------------------------------------------------------

# デプロイ用のコンテナ
FROM --platform=linux/x86_64 debian:bullseye-slim as deploy

RUN apt-get update

EXPOSE 80

COPY --from=deploy-builder /app/front/dist ./front/dist
COPY --from=deploy-builder /app/app .

COPY --from=deploy-builder /app/schema.sql .
COPY --from=deploy-builder /app/mysqldef .
COPY --from=deploy-builder /app/migrate.sh .
COPY --from=deploy-builder /app/run.sh .

CMD ["./run.sh"]

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
