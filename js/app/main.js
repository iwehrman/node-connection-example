/*jslint vars: true, plusplus: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, console */

define(function (require, exports, module) {
    "use strict";
    
    var NodeConnection = require("node-connection"),
        Promise = require("bluebird"),
        $ = require("jquery");
    
    $(function () {
        $(".content").html("hello world");
    });
});
