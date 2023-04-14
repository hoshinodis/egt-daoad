.DEFAULT_GOAL := help

REVISION     := $(shell git rev-parse --short HEAD)
TAGS         := $(REVISION)

.PHONY: build
build: ## Build docker image
	@echo '------- front build '
	docker compose exec webapp bash -c 'cd front && yarn build --mode staging'
	@echo '------- docker build '
	docker build -t webapp:${TAGS} --target deploy ./

.PHONY: build-local
build-local: ## Build docker image to local development
	docker compose build --no-cache

.PHONY: up
up: ## Do docker compose up with reload
	docker compose up -d

.PHONY: down
down: ## Do docker compose down
	docker compose down

.PHONY: logs
logs: ## Tail docker compose logs
	docker compose logs -f

.PHONY: ps
ps: ## Check container status
	docker compose ps

.PHONY: test
test: ## Execute test
	go test -race -shuffle=on ./...

.PHONY: dry-migrate
dry-migrate: ## Try migration
	docker compose exec webapp bash -c \
	'mysqldef -u root -proot -h webapp-db -P 3306 webapp --dry-run < ./_tools/mysql/schema.sql'

.PHONY: migrate
migrate: ## Execute migration
	docker compose exec webapp bash -c \
	'mysqldef -u root -proot -h webapp-db -P 3306 webapp < ./_tools/mysql/schema.sql'

.PHONY: generate
generate: ## Generate codes
	go generate ./...

.PHONY: help
help: ## Show options
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
 		awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'