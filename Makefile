DOCKER_COMPOSE_FILE := ./docker-compose.dev.yaml

start-dev:
	sudo docker-compose -f $(DOCKER_COMPOSE_FILE) up

down:
	sudo docker-compose -f $(DOCKER_COMPOSE_FILE) down --volumes --rmi all

rmi:
	sudo docker rmi crazy-ms-api-gateway crazy-ms-auth-service crazy-ms-order-service crazy-ms-product-service
