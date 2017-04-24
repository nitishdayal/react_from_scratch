# React From Scratch: TypeScript + React + Webpack boilerplate

> Author: Nitish Dayal, Software & Applications Developer  
> Last Commit Date: April 23nd, 2017

## About

Yet another boilerplate. Originally started this as a way to learn more about Webpack,
  at this point it'll serve as a starting point for TypeScript + React projects that
  I want to play with.

## Dependencies

This boilerplate utilizes the following packages as dependencies.

Libraries:

-   Polished - 1.0.3
-   Preact - 8.1.0
-   React - 15.5.4
-   React DOM - 15.5.4
-   React Router - 4.1.1
-   Styled Components - 1.4.5

Tools:

-   TypeScript - @next
-   Webpack - 2.4.1
-   Preact Compat - 3.15.0

Webpack Helpers:

-   Chunk Manifest Webpack Plugin - 1.0.0
-   HTML Webpack Plugin - 2.28.0
-   Source Map Loader - 0.2.1
-   TS Loader - 2.0.3
-   UglifyJS Webpack Plugin - 0.4.3
-   Webpack Chunk Hash - 0.4.0
-   Webpack Dashboard - 0.3.0
-   Webpack Dev Server - 2.4.3
-   Webpack Merge - 4.1.0

**TODO:**

-   [ ] HMR please
-   [ ] MobX
-   [ ] TSLint or ESLint or something. Maybe just Prettier the whole damn thing idk.

## Prerequisites

Global:

-   NodeJS
-   NPM/Yarn
-   TypeScript

## Commands

-   `npm run dev/yarn dev` - Spin up dev environment on <http://localhost:8080> & open browser
    -   `npm run dev:preact/yarn dev:preact` - ^ but w/ Preact!
-   `npm start/yarn start` - Spin up production env on <http://localhost:8080> & open browser
    -   `npm run start:preact/yarn start:preact` - ^ but w/ Preact!
-   `npm run build/yarn build` - Build production-ready bundle
    -   `npm run build:preact/yarn build:preact` - ^ but w/ Preact!

## Errors

NPM commands not working? Some error about not being able to find webpack or
  webpack-dashboard or webpack...anything? Try installing webpack & webpack dashboard
  globally: `npm i -g webpack webpack-dashboard`.
