
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};


<div class="p-4 border rounded shadow mb-4">
  <h2 class="text-xl font-semibold" x-text="user.name"></h2>
  <p x-text="user.email"></p>
  <p x-text="user.phone"></p>
  <p x-text="user.website"></p>
</div>