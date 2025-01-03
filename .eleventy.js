module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

  	// Zkopírovat icons/ do _site/icons
	eleventyConfig.addPassthroughCopy("icons");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

  	// Zkopírovat js/ to _site/js/
	eleventyConfig.addPassthroughCopy("js");

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};
