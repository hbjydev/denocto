const { env } = Deno;

import { runTests, test } from 'https://deno.land/std/testing/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';

import { getUser } from './user.ts';

test('user.login should be populated', async function userTest() {
  const user = await getUser('asottile', env().GITHUB_TOKEN);
  assertEquals(user.login, 'asottile');
});

test('user.getFollowers should give a valid list of users', async function userTest() {
  const user = await getUser('asottile', env().GITHUB_TOKEN);
  const followers = await user.getFollowers();
  assertEquals(followers[0].id, 2161601);
});

test('user.getRepos should give a valid list of repositories', async function userTest() {
  const user = await getUser('asottile', env().GITHUB_TOKEN);
  const repos = await user.getRepos();
  assertEquals(repos[0].name, 'add-trailing-comma');
});

test('user.getGists should give a valid list of gists', async function userTest() {
  const user = await getUser('asottile', env().GITHUB_TOKEN);
  const gists = await user.getGists();
  assertEquals(gists[0].id, '4715e8a68f924c4897952ebca05d30f3');
});

runTests();
