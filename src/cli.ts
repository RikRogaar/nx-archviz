#!/usr/bin/env node

import { readNxGraph } from "./nx-graph";

async function main(): Promise<void> {
    const nxGraph = await readNxGraph();
    console.log(nxGraph);
}

main();