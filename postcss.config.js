"use strict"

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["woot.html"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
}
