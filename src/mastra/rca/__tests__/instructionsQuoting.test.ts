import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildAnalystInstructions } from '../analystInstructions';
import { buildHydratedInstructions } from '../hydratedInstructions';
import { buildRcaInstructions } from '../instructions';

// A model once read the double-encoded empty string "\"\"" as "the project uid has quotation marks around it"
// and blamed that for a 404; the real cause was an empty uid. Every prompt must teach how JSON strings read.
for (const [name, build] of [['hydrated', buildHydratedInstructions], ['pipeline analyst', buildAnalystInstructions], ['investigator', buildRcaInstructions]] as const) {
  test(`${name} instructions say that quotation marks are notation and "" is an empty value`, () => {
    const text = build();
    assert.match(text, /Quotation marks around a string .*JSON notation, never part of the value/);
    assert.match(text, /EMPTY/);
    assert.match(text, /not "has quotation marks"|Never say a value "has quotation marks"/);
  });
}
