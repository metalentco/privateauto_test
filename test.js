"use strict";
exports.__esModule = true;
var strapi_1 = require("./cms/strapi");
(0, strapi_1.getUrls)().then(function (e) { return console.log(e); });
// getPages().then((e) => console.log(e));
