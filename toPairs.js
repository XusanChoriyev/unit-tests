const toPairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

module.exports = { toPairs };
