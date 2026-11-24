// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant wrote it,
// to /output/entry.txt. Gate: UTF-8 text, 1-120 chars, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Out of office: I haven't been watered since March. If urgent, ask the cactus. It stopped caring in April.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The sealed scorer only accepts 1-120 chars of non-whitespace UTF-8 text.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, outside the 1-120 gate`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
