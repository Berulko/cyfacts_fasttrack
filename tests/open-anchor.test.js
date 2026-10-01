const test = require("node:test");
const assert = require("node:assert");
const { detailsToOpen } = require("../docs/javascripts/open-anchor.js");

test("all ancestor details are opened, innermost first", () => {
  const outer = { tagName: "DETAILS", parentElement: { tagName: "ARTICLE", parentElement: null } };
  const div = { tagName: "DIV", parentElement: outer };
  const inner = { tagName: "DETAILS", parentElement: div };
  const span = { tagName: "SPAN", parentElement: { tagName: "P", parentElement: inner } };
  assert.deepStrictEqual(detailsToOpen(span), [inner, outer]);
});
test("element outside details opens nothing", () => {
  assert.deepStrictEqual(detailsToOpen({ tagName: "SPAN", parentElement: { tagName: "P", parentElement: null } }), []);
});
test("missing element opens nothing", () => {
  assert.deepStrictEqual(detailsToOpen(null), []);
});
