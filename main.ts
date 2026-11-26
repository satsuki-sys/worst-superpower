import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Worst Superpower: one line, at most 140 characters.
// Revised: v1's "already spent it" twist is a decent gag, but the power
// itself (time travel) is a familiar one. v2 makes the power itself achieve
// literally nothing: floating an object you are already holding is exactly
// what holding it does, so the uselessness is total and the image — a hero
// straining to levitate something in their own grip — lands in one reading.
const ENTRY =
  "I can make any object float, but only objects I'm already holding, and only while I keep holding them.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
