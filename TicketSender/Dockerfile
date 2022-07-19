FROM        node:16-alpine as development-stage
WORKDIR     /app
COPY        package*.json .
COPY        tsconfig*.json .
COPY        /tools/wait-for-it.sh .    
RUN         npm ci

RUN         apk add --no-cache bash
RUN         chmod +x wait-for-it.sh

FROM        node:16-alpine as build-stage
COPY        --from=development-stage --chown=node:node . .
RUN         npm run build

FROM        node:16-alpine as production-stage
ARG         NODE_ENV=production
ENV         NODE_ENV=${NODE_ENV}
WORKDIR     /app
COPY        package*.json .
RUN         npm ci --only=production
COPY        --from=build-stage /app/dist ./dist

CMD         [ "node", "dist/index.js" ]