# React From Scratch: TypeScript + React + Webpack boilerplate

> Author: Nitish Dayal, Software & Applications Developer  
> Last Commit Date: April 24nd, 2017

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

-   Preact Compat - 3.15.0
-   React Hot Loader - 3.0.0-beta.6
-   TSLint - 5.1.0
-   TSLint React - 2.6.0
-   TypeScript - @next
-   Webpack - 2.4.1

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

-   [ ] MobX

## Prerequisites

Global:

-   NodeJS
-   NPM/Yarn

## Commands

-   `npm start`/`yarn start`: Start development environment
-   `npm run dist`/`yarn dist`: Create distribution bundle
-   `npm run dist:preact`/`yarn dist:preact`: Create distribution bundle, utilizing Preact via preact-compat to reduce vendor bundle (learn more about Preact, you'll end up learning more about React).

## Errors

NPM commands not working? Some error about not being able to find webpack or
  webpack-dashboard or webpack...anything? Try installing webpack & webpack dashboard
  globally: `npm i -g webpack webpack-dashboard`.
