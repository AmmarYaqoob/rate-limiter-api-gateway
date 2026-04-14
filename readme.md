Here’s a clean, final **README.md** for your **Git projects** repo. Copy-paste ready.

---

# Rate Limited API Gateway

A Node.js + TypeScript API gateway that limits requests per IP using Redis.

It blocks excessive traffic and returns HTTP 429 when limits are exceeded.

---

## Features

* IP-based rate limiting
* Redis counter per request window
* Configurable limit and time window
* HTTP headers for rate status
* Clean middleware structure

---

## Tech Stack

* Node.js
* TypeScript
* Express
* Redis (ioredis)

---

## Architecture

```text
Client → Express API → Rate Limiter Middleware → Redis → Response
```

---

## Setup

### 1. Install dependencies

```bash
npm install
```

---

### 2. Start Redis

```bash
redis-server
```

---

### 3. Create environment file

```bash
cp .env.example .env
```

Example:

```
PORT=3000
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
RATE_LIMIT_WINDOW=60
RATE_LIMIT_MAX=10
```

---

### 4. Run project

```bash
npm run dev
```

---

## API

### Health Check

```http
GET /
```

Response:

```json
{
  "message": "Rate Limited API Gateway is running"
}
```

---

### Test Endpoint

```http
GET /api/test
```

Response:

```json
{
  "message": "API is working",
  "timestamp": "2026-04-14T12:00:00.000Z"
}
```

---

## Rate Limiting Rules

| Window | Max Requests |
| ------ | ------------ |
| 60 sec | 10 requests  |

After limit:

```http
429 Too Many Requests
```

---

## Response Headers

```http
X-RateLimit-Limit
X-RateLimit-Remaining
```

---

## Testing

### Postman

Import:

```
postman_collection.json
```

---

### Curl

```bash
for i in {1..20}; do curl http://localhost:3000/api/test; echo; done
```

---

## Improvements

* API key-based limits
* Different tiers (free / pro)
* Sliding window algorithm upgrade
* Metrics (Prometheus / Grafana)
* Docker support

---

## Purpose

This project demonstrates backend concepts:

* rate limiting
* Redis-based counters
* middleware design
* scalable API protection logic
