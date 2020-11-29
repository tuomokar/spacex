# SpaceX

![Build and deploy Docker app to Azure](https://github.com/tuomokar/spacex/workflows/Build%20and%20deploy%20Docker%20app%20to%20Azure/badge.svg)

Simple app to display SpaceX data for fun. Runs in [Azure](https://tuomokar-spacex.azurewebsites.net/), feel free to give it a look.

Uses the following primary dependencies:

- [Next.js](https://nextjs.org/)
  - All-in-one framework to handle both the front end and back end - fast refresh, transpiling, API routes, code-splitting and bundling, etc.
- [React](https://reactjs.org/)
  - Renderer for the front end.
- [TypeScript](https://www.typescriptlang.org/)
  - JavaScript with types.

Tried to use as few dependencies as possible - within reason. The front end obviously could've been done with only vanilla JavaScript, and
the back end would've been a bit simpler in its dependencies if it were, for example, a simple Express app. Now even though we don't have many dependencies listed in the
package.json, Next.js has a ton of dependencies in itself and simplifies a lot of things.

However, I believe these are very sensible choices even in the terms of trying to keep the dependencies low. These days, there's simply not much point to use vanilla JS
to do things in front end in most cases, when there are powerful frameworks such as React, along with tools such as Webpack and Babel (that Next.js uses too) to make things so much simpler. Express in itself is really simple, so that could've been easily used, but Next.js makes integrating both the front end and back end together so much simpler, that I'd say it was worth it here.

## Getting started

Install the packages:

```bash
yarn install
```

## Running the app locally

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build with Docker

```bash
docker build --shm-size 1G .
```
