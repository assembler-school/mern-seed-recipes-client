module.exports = {
  "src/**/*.js": [
    "npm run lint:js",
    "npm run lint:format:check",
    "npm run test:related",
  ],
  "*.{css,scss,html,md}": ["npm run lint:format:check"],
};
