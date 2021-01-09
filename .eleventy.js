const dumpFilter = require("@jamshop/eleventy-filter-dump");
const pluginLodash = require("@jamshop/eleventy-plugin-lodash");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "src/assets": "/" });

  eleventyConfig.addPlugin(pluginLodash);

  eleventyConfig.addFilter("dump", dumpFilter);
  
  return {
    dir: {
      input: "site",
      output: "_site",
      layouts: "_layouts",
    },
  };
};
