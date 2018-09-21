PHONY: docker-build
docker-build:
	docker-compose build web

PHONY: serve
serve: docker-build
	docker-compose run --rm --service-ports web

PHONY: test
test:
	docker-compose run --rm web npm test

# https://github.com/madetech/rfcs/blob/master/rfc-012-makefile-standards.md