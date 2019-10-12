import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { getUser } from "./user.ts";

test(async function userTest() {
  const user = await getUser('asottile');
  assertEquals(user.login, 'asottile');
});

runTests();
