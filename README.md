# React From Sctach
> Author: Nitish Dayal, Software & Applications Developer  
> Contact: [Click here to go to my unimpressive portfolio and email me!](//nitishdayal.me)

Before one can create-react-app, one should be able to create a React app.  


I'ma learn me some React! Tracking progress here because blogs are weird and Medium
  is entirely too overwhelming.

## Progress

### Day 1

**tldr;** Took me 7hrs to figure out that I need to import packages using 
  `import * as React from 'react'` as opposed to `import React from 'react'`
  in order to properly bundle them via Webpack's depenceny graph(?). Worth.
___
Wanted to play with React because...well why not really, so I started running 
  through the docs and, as recommended, created a boilerplate via create-react-app. And
  it's a great tool! Development environment setup + optimized build scripts + many, many
  other things!

But that's **waaaaaaayyy** too much 'magic' for me. I don't like using things that 'just
  work'; I need to know _how_ it works. I have absolutely 0 interest in creating an
  app in React, I want to create an app in JavaScript and, if the app calls for it,
  implement the React library. With that in mind, I should be able to create a development 
  environment and pop in any package as needed. In order to gain that knowledge I can't 
  rely on a tool that streamlines the process for _one library_, so it made sense to 
  learn how to create a dev environment and implement React on my own.

Took me over seven hours. ;___;

To be clear, I'm sure I made things far more difficult on myself than need be. I was 
  adamant about not loading React or ReactDOM from a CDN, but rather to bundle 
  those dependencies using Webpack. On it's own this isn't particularly difficult, but I wanted 
  to use TypeScript while most documentation for React + Webpack uses Babel. I've got 
  nothing against Babel, I've just never used it. I've used TypeScript. TypeScript 
  is love, folks. TypeScript makes working with JavaScript _fun_ and _interactive_. 
  There are plenty of examples out in the wild about how to do this as well (including
  in the TypeScript docs, which served as a decent starting point <3), but alas, 
  the bulk of them either rely on loading React & ReactDOM via a CDN or had a 
  million other build tools implemented or were severely outdated in regards
  to Webpack setup or...suffice to say I wasn't satisfied with the examples I came across.
  But hey, trial by fire is a great way to learn. I now know how to handle the bugs
  and issues I ran into, I learned a massive amount about Webpack and it's no longer
  intimidating, and all this totally reinvigorated my desire to work with JavaScript,
  so to be honest the day was quite well spent.

Right now, the project relies on:
  - React & ReactDOM
  - TypeScript@next (nightly builds = <3)
  - Webpack@2.2.0-rc.3
  
Not even gonna lie, I'm pretty damn proud of myself.
