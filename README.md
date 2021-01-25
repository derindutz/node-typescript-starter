# Node Typescript Starter

Starter project for a script written in Typescript that uses Node.

Use this to write scripts that interface with API endpoints. I've imported `superagent` in `index.ts` which makes it easy to access the Internet.

## Setup

```
$ npm install
$ npm run main
```

## Why

### Why use Node?

Node has a bunch of useful libraries. If you don't need specific libraries, consider using [Deno](https://deno.land) instead.

### Why use Typescript?

I'm most familiar with writing Typescript and find types helpful.

## Implementation Details

### Why use Babel?

Node doesn't support Typescript out of the box, so I use Babel to transform the Typescript into something node can understand. Babel normally needs a separate build step to transform the code, so I use `babel-node` to transform the Typescript at runtime (you can see `babel-node` being used in the `main` script in `package.json`).

One gotcha I ran into was that Babel has a preset to transform typescript (`@babel/preset-typescript`), but the preset doesn't support using `import` and `export` keywords. I additionally use the `@babel/env` preset to support those keywords.
