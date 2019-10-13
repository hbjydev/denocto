const { env } = Deno;

import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/assert.ts";

import { getGist } from "./gist.ts";

test("gist.id should be populated", async function gistTest() {
  const gist = await getGist('7ea2a9285771f63437eb9c843c173f03', env().GITHUB_TOKEN);
  assertEquals(gist.id, '7ea2a9285771f63437eb9c843c173f03');
});

runTests();
