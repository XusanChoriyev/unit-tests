// index.js
const chunk = require("./chunk");
const compact = require("./compact");
const drop = require("./drop");
const dropWhile = require("./dropWhile");
const map = require("./map");
const omit = require("./omit");
const { merge } = require("./merge");
// index.js
export { take } from "./take";
export { filter } from "./filter";
export { zip } from "./zip";
export { omitBy } from "./omitBy";
export { pick } from "./pick";
export { pickBy };
export * from "./includes";
const { toPairs } = require("./toPairs");
module.exports = {
  chunk,
  compact,
  drop,
  dropWhile,
  map,
  merge,
  omit,
};
module.exports = { toPairs };
