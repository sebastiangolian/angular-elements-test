const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-elements-test/runtime.js",
    "./dist/angular-elements-test/polyfills.js",
    "./dist/angular-elements-test/main.js",
  ];
  await fs.ensureDir("dist/component");
  await concat(files, "dist/component/input-output-component.js");
  await fs.copyFile("src/index.component.html", "dist/component/index.html");
})();
