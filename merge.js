const merge = (...objs) => {
  return objs.reduce((acc, obj) => {
    for (const key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};

module.exports = { merge };
