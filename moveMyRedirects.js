const fs = require("fs-extra");
const path = require("path");

fs.copySync(
    path.join(__dirname, "/_redirects"),
    path.join(__dirname, "/out/_redirects")
);

fs.copySync(
    path.join(__dirname, "/static/robots.txt"),
    path.join(__dirname, "/out/robots.txt")
);

fs.copySync(
    path.join(__dirname, "/static/statistak"),
    path.join(__dirname, "/out/statistak")
);
