# React From Scratch: TypeScript + React + Webpack boilerplate

> Author: Nitish Dayal, Software & Applications Developer  
> Last Commit Date: April 22nd, 2017

## About

Yet another boilerplate. Originally started this as a way to learn more about Webpack,
  at this point it'll serve as a starting point for TypeScript + React projects that
  I want to play with.

Currently, this boilerplate uses:

-   Polished 1.0.3
-   Preact 8.1.0
-   React 15.5.4
-   React Router 4.1.1
-   Styled Components 1.4.5
-   TypeScript (nightly)
-   Webpack 2.4.1
-   Webpack Dashboard 0.3.0

**TODO:**

-   [ ] HMR please
-   [ ] VSCode debugger + task runner config
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
    -   `npm run build:preact/yarn build:preact` - Build production-ready bundle

## Errors

NPM commands not working? Some error about not being able to find webpack or
  webpack-dashboard or webpack...anything? Try installing webpack & webpack dashboard
  globally (npm i -g webpack webpack-dashboard ).
