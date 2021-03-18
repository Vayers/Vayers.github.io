module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/dark.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vay-site/" : "/",
};
