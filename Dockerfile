FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build

VOLUME /config

FROM denoland/deno:distroless AS runner

WORKDIR /app

COPY --from=builder /app/build /app

CMD ["deno", "run", "-A", "index.js"]