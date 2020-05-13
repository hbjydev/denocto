import { assertEquals, assert } from "https://deno.land/std/testing/asserts.ts";

import User from "./user.ts";
const { getUser } = User;

Deno.test("user.login should be populated", async () => {
  const user = await getUser("asottile", Deno.env.get('GITHUB_TOKEN'));
  assertEquals(user.login, "asottile");
});

Deno.test("user.getFollowers should give a valid list of users", async () => {
  const user = await getUser("asottile", Deno.env.get('GITHUB_TOKEN'));
  const followers = await user.getFollowers();
  assert(followers[0].id !== null);
});

Deno.test("user.getRepos should give a valid list of repositories", async () => {
  const user = await getUser("asottile", Deno.env.get('GITHUB_TOKEN'));
  const repos = await user.getRepos();
  assert(repos[0].name !== null);
});

Deno.test("user.getGists should give a valid list of gists", async () => {
  const user = await getUser("asottile", Deno.env.get('GITHUB_TOKEN'));
  const gists = await user.getGists();
  assert(gists[0].url !== null);
});
