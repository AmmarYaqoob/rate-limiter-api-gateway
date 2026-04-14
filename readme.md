# Rate Limited API Gateway

A simple API gateway with Redis-based rate limiting built using Node.js and TypeScript.

## Features

- IP-based rate limiting
- Redis-backed distributed counter
- Configurable window + request limits
- Clean middleware architecture

## Tech Stack

- Node.js
- TypeScript
- Express
- Redis

## Setup

```bash
git clone <repo>
cd rate-limited-api-gateway
npm install
cp .env.example .env
npm run dev