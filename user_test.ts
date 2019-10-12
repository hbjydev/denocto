import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { getUser } from "./user.ts";

test(
  'user.login should be populated',
  async function userTest() {
    const user = await getUser('asottile');
    assertEquals(user.login, 'asottile');
  }
);

test(
  'user.getFollowers should give a valid list of users',
  async function userTest() {
    const user = await getUser('asottile', '042b8a3cfb0d026bd872460625c678b98f3df4e3');
    const followers = await user.getFollowers();
    assertEquals(followers[0].id, 2161601);
  }
);

runTests();
