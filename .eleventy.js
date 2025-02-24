// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("userCard", function(user) {
    return `
      <div class="p-4 border rounded shadow mb-4">
        <h2 class="text-xl font-semibold">${user.name}</h2>
        <p>${user.email}</p>
        <p>${user.phone}</p>
        <p>${user.website}</p>
      </div>
    `;
  });
};