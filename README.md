# Denocto

A GitHub API Wrapper for [Deno](https://deno.land).

## Testing

To run the unit tests for this API wrapper, it's as simple as running the following:

```
$ deno test --allow-env --allow-net
```

And to use a token with it, set the `GITHUB_TOKEN` environment variable.

## Usage

### Users

```ts
import { User } from "https://denopkg.com/itshaydendev/denocto/mod.ts"

const user = await User.getOne("itshaydendev")
console.log(user.login); // itshaydendev
```

#### User#getOne

> Gets a user from the GitHub API.

| Argument | Type    | Description                         |
|----------|---------|-------------------------------------|
| username | string  | The username to get information for |
| token    | string? | The token to get information with   |

## Gists

```ts
import { Gist } from "https://denopkg.com/itshaydendev/denocto/mod.ts"

const gist = await Gist.getOne("7ea2a9285771f63437eb9c843c173f03")
```

#### Gist#getOne

> Gets a gist from the GitHub API.

| Argument | Type    | Description                         |
|----------|---------|-------------------------------------|
| id       | string  | The ID to get information for       |
| token    | string? | The token to get information with   |
