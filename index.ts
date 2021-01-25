#!/usr/bin/env node

import superagent from "superagent";

const [, , ...args] = process.argv;

const fetch = superagent.agent();

async function main() {
  const result = await fetch.get("https://cat-fact.herokuapp.com/facts");
  console.log(result.body.map((catFact) => `- ${catFact.text}\n`).join("\n"));
}

console.log(`Running with args: ${args}\n`);
main();
