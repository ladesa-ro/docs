---
sidebar_position: 3
sidebar_label: Executar Localmente
---

# Como Executar Localmente

Passo a passo para subir o sistema Ladesa no seu computador.

## 1. Clonar os repositórios

```bash
git clone https://github.com/ladesa-ro/api.git management-service
git clone https://github.com/ladesa-ro/web.git web
git clone https://github.com/ladesa-ro/gerar-horario-core.git timetable-generator
git clone https://github.com/ladesa-ro/mobile.git mobile
git clone https://github.com/ladesa-ro/docs.git docs
```

## 2. Subir infraestrutura via Docker

Os serviços de infraestrutura (PostgreSQL, Redis, RabbitMQ) podem ser iniciados com Docker Compose. O repositório do timetable-generator inclui um `docker-compose.yml` com o RabbitMQ:

```bash
cd timetable-generator
docker compose up -d message-broker
```

Para PostgreSQL e Redis, você pode usar containers individuais:

```bash
# PostgreSQL
docker run -d --name ladesa-postgres \
  -e POSTGRES_USER=ladesa \
  -e POSTGRES_PASSWORD=ladesa \
  -e POSTGRES_DB=ladesa \
  -p 5432:5432 \
  postgres:15

# Redis
docker run -d --name ladesa-redis \
  -p 6379:6379 \
  redis:alpine

# Keycloak
docker run -d --name ladesa-keycloak \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  -p 8080:8080 \
  quay.io/keycloak/keycloak:25.0.0 start-dev
```

## 3. Rodar o management-service (API)

```bash
cd management-service
bun install
bun run start:dev
```

A API estará disponível em `http://localhost:3000`. A documentação Swagger em `http://localhost:3000/doc-api`.

## 4. Rodar o frontend web

```bash
cd web/sisgha-sisgea
pnpm install
pnpm run dev
```

O frontend estará disponível em `http://localhost:3100`.

## 5. (Opcional) Rodar o solver

```bash
cd timetable-generator/Ladesa.TimetableGenerator.v1/Service
dotnet run
```

## 6. (Opcional) Rodar o app mobile

```bash
cd mobile/sisgha
flutter pub get
flutter run
```

Requer emulador ou dispositivo físico conectado.

## 7. (Opcional) Rodar a documentação

```bash
cd docs/docusaurus
bun install
bun run start
```

O site de documentação estará disponível em `http://localhost:3000`.
