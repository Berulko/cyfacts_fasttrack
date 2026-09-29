const test = require("node:test");
const assert = require("node:assert");
const { isStale } = require("../docs/javascripts/stale.js");

test("snapshot older than 60 days is stale", () => {
  assert.strictEqual(isStale("2026-01-01", new Date("2026-09-29T00:00:00Z"), 60), true);
});
test("fresh snapshot is not stale", () => {
  assert.strictEqual(isStale("2026-09-25", new Date("2026-09-29T00:00:00Z"), 60), false);
});
test("empty snapshot is not stale (nothing published yet)", () => {
  assert.strictEqual(isStale("", new Date("2026-09-29T00:00:00Z"), 60), false);
});
