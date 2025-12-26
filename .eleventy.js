const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {

	//Markdown overrides to allow for richer markdown commands, hashes, etc.
	let markdownLibrary = markdownIt({
			html: true,
			breaks: true,
			linkify: true
		}).use(markdownItAnchor, {
			permalink: true,
			permalinkClass: "direct-link",
			permalinkSymbol: "#"
		}).use(require('markdown-it-footnote'));
	eleventyConfig.setLibrary("md", markdownLibrary);

    // Add gal tag
    eleventyConfig.addShortcode('gal', (arg) => `<gal>${arg.split("").reverse().join("").replace(" ","&nbsp;")}</gal>`);

    eleventyConfig.addShortcode('syr', (arg) => {

		// Add syr tag
		let syr = {
			")":"ܐ",
			"b":"ܒ",
			"g":"ܓ",
			"d":"ܕ",
			"h":"ܗ",
			"w":"ܘ",
			"z":"ܙ",
			"x":"ܚ",
			"+":"ܛ",
			"y":"ܝ",
			"k":"ܟ",
			"l":"ܠ",
			"m":"ܡ",
			"n":"ܢ",
			"s":"ܣ",
			"(":"ܥ",
			"p":"ܦ",
			"c":"ܨ",
			"q":"ܩ",
			"r":"ܪ",
			"$":"ܫ",
			"t":"ܬ"
		};

		for (let k in syr) {
			arg = arg.replaceAll(k, syr[k]);
		}
		return `<syr>${arg}</syr>`;
	});

	// Copy any media files to `_site`, via Glob pattern
	// Keeps the same directory structure.
	eleventyConfig.addPassthroughCopy("./src/**/*.jpg");
	eleventyConfig.addPassthroughCopy("./src/**/*.jpeg");
	eleventyConfig.addPassthroughCopy("./src/**/*.png");
	eleventyConfig.addPassthroughCopy("./src/**/*.svg");
	eleventyConfig.addPassthroughCopy("./src/**/*.pdf");
    eleventyConfig.addPassthroughCopy("./src/**/*.ttf");

	//Ignore output directory
	eleventyConfig.ignores.add("_site");

	//Add articles collection
	eleventyConfig.addCollection("articles", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/articles/*/index.md");
		/*
		.sort(function (a, b) {
			//return a.date - b.date; // sort by date - ascending
			return b.date - a.date; // sort by date - descending
		});
		*/
	});

	return {
		markdownTemplateEngine: "njk",
   		htmlTemplateEngine: "njk",
		dir: {
			input: './src',
			output: './_site'
		}
	}

};
