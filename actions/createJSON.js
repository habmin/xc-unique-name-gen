import { promises as fs } from 'fs';
import { parseData, createArrayFromSets } from '../helpers/parseFunctions.js';
import { xc1, xc2, xc3 } from '../helpers/originalTable.js';
import customEntries from '../helpers/customEntries.js';

const xc1Parsed = parseData(xc1, "xc1");
const xc2Parsed = parseData(xc2, "xc2");
const xc3Parsed = parseData(xc3, "xc3");

const monsters = createArrayFromSets(xc1Parsed, xc2Parsed, xc3Parsed, customEntries);

await fs.writeFile('./data/monsters.json', JSON.stringify(monsters, null, 2));

console.log("Epithets: ", monsters.epithets.length, " Names: ", monsters.names.length);