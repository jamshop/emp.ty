module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });
  return {
    dir: {
      input: "src",
      output: "dir",
    },
  };
};
