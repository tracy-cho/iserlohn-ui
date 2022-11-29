module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-iserlohn`
  extends: ["iserlohn-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
