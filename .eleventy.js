module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: "views", // or whatever your input directory is
    }
  };
};