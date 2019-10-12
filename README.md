# Denocto

A GitHub API Wrapper for [Deno](https://deno.land).

## Testing

To run the unit tests for this API wrapper, it's as simple as running the following:

```
$ deno run **/*_test.ts --allow-env --allow-net
```

And to use a token with it, set the `GITHUB_TOKEN` environment variable.

## Usage

### Users

```ts
import { getUser } from "https://denopkg.com/haydennyyy/denocto/user.ts"

getUser("haydennyyy")
  .then(res => {
    console.log(res.login) // "haydennyyy"
  })
  .catch(err => {
    console.error(err);
  });
```

#### getUser

|----------|--------|-----------------------------------|
| Argument | Type   | Description                       |
|----------|--------|-----------------------------------|
| username | string | The username to get info for      |
| token?   | string | The token to get info with        |
|----------|--------|-----------------------------------|

