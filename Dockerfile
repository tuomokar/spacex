# Build
FROM node:alpine as build-target

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

# Install all the packages so Next.js won't have troubles with TypeScript
RUN yarn install --frozen-lockfile

COPY . /usr/src/app

RUN yarn build

# Reduce installed packages to production-only.
RUN yarn install --production --frozen-lockfile

# Archive
FROM node:alpine as archive-target
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

# Include only the release build and production packages.
COPY --from=build-target /usr/src/app/node_modules node_modules
COPY --from=build-target /usr/src/app/.next .next
COPY --from=build-target /usr/src/app/package.json package.json

EXPOSE 3000
CMD ["yarn", "start"]