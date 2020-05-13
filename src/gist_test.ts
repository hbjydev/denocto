const { env } = Deno;

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import Gist from "./gist.ts";
const { getOne: getGist } = Gist;

Deno.test("gist.id should be populated", async () => {
  const gist = await getGist('7ea2a9285771f63437eb9c843c173f03', Deno.env.get('GITHUB_TOKEN'));
  assertEquals(gist.id, '7ea2a9285771f63437eb9c843c173f03');
});
