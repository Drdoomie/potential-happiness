import { readFile, writeFile } from "node:fs/promises";

const dataPath = new URL("../data.json", import.meta.url);
const liveDataUrl = process.env.WORLD_CUP_DATA_URL;

function assertDataShape(data) {
  const required = ["baseRatings", "displayNames", "groups", "playedMatches", "futureFixtures"];
  const missing = required.filter((key) => !(key in data));
  if (missing.length) {
    throw new Error(`Live data is missing required keys: ${missing.join(", ")}`);
  }
}

async function main() {
  const current = JSON.parse(await readFile(dataPath, "utf8"));

  if (!liveDataUrl) {
    assertDataShape(current);
    console.log("No WORLD_CUP_DATA_URL secret set. Current data.json is valid, but no live update was fetched.");
    return;
  }

  const response = await fetch(liveDataUrl, {
    headers: { accept: "application/json" }
  });

  if (!response.ok) {
    throw new Error(`Could not fetch live data: ${response.status} ${response.statusText}`);
  }

  const next = await response.json();
  assertDataShape(next);

  next.snapshotLabel = next.snapshotLabel || `Data snapshot: updated ${new Date().toISOString()}.`;

  const before = JSON.stringify(current);
  const after = JSON.stringify(next, null, 2) + "\n";

  if (before === JSON.stringify(next)) {
    console.log("No data changes found.");
    return;
  }

  await writeFile(dataPath, after);
  console.log("Updated data.json from live feed.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
