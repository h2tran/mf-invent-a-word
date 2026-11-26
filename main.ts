import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Tabnesia (n.): the amnesia of opening a new browser tab and instantly forgetting why — 47 tabs open, zero memories of any of them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
