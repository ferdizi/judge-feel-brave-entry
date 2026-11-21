import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const entry =
  "The dog leans into your leg on the porch step. A wasp works the railing, wings ticking, going nowhere in particular. You watch it. Nothing needs deciding until the wasp is done.";

const codePoints = [...entry].length;
if (codePoints < 1 || codePoints > 280 || entry.trim().length === 0) {
  throw new Error(`Invalid entry: ${codePoints} code points, must be 1-280 non-whitespace`);
}

const outputPath = "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${outputPath}`);
