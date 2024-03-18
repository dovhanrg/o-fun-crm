#docker compose -f db.compose.yml up -d

DB_HOST=$(docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' o-funs-db)

echo "DB_HOST=$DB_HOST" > ../.env