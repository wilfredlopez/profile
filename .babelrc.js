const env = require("./env-config");

module.exports = {
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false,
      },
    ],
    ["transform-define", env],
  ],
  "presets": [
    "next/babel",
  ],
};
