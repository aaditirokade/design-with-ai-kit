/* An example of testing a product rule with Node's own test runner. Keep rules in plain functions with no UI,
   so they can be tested on their own. Replace this with your project's rules. */
import { test } from "node:test";
import assert from "node:assert/strict";

type Line = { status: "draft" | "approved" | "saved" };
const save = (lines: Line[]) => lines.map((l) => (l.status === "approved" ? { status: "saved" as const } : l));

test("nothing saves without a person's approval", () => {
  const out = save([{ status: "draft" }, { status: "approved" }]);
  assert.deepEqual(out.map((l) => l.status), ["draft", "saved"]);
});
