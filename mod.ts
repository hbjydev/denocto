// Copyright 2019 Hayden Young. MIT License.
const { permissions } = Deno;

if (!permissions().net) {
  throw Error(
    "You need to give this program `net` permissions to use Denocto."
  );
}

import * as user from "./user.ts";
import * as gist from "./gist.ts";

export { user };
