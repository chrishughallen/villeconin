module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/stylesheets");
  eleventyConfig.addPassthroughCopy("assets/images");
};