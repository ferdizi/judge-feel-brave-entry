import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const entry =
  "The dog leans into your leg on the porch step. A wasp works the railing, wings ticking, going nowhere in particular. You watch it. Nothing needs deciding until the wasp is done.";

const outputPath = "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${outputPath}`);
