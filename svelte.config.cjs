const sveltePreprocess = require("svelte-preprocess");

const preprocessOptions = {
  sourceMap: true, // "you would always want sourcemaps for the IDE" – dummdidumm
  defaults: {
    script: "javascript",
    style: "css",
  },
  postcss: {
    plugins: [require("autoprefixer")()],
  },
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
};
