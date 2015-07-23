/*jslint vars: true, plusplus: true, browser: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define(function (require) {
    "use strict";
    
    var NodeDomain = require("generator-connection").NodeDomain,
        $ = require("jquery");
    
    var PREFIX = "/Users/wehrman/Source/generator-connection-example/";

    var getRemotePort = function (callback) {
        callback(null, 59595);
    };

    $(function () {

        $(".content").append("Creating test domain... <br/>");
        var testDomain = new NodeDomain("testing", PREFIX + "js/node/TestingDomain.js", getRemotePort);

        testDomain.promise().then(function () {
            $(".content").append("Test domain ready.<br/>");
        });

        testDomain.exec("testCommand", "ping").then(function (value) {
            $(".content").append("Test command OK: " + value + "<br/>");
        }, function (err) {
            $(".content").append("Test command err: " + err + "<br/>");
        });

        testDomain.on("testEvent", function (value1, value2, value3) {
            $(".content").append("Test event OK: " + [value1, value2, value3].join(", ") + "<br/>");
        });
    });
});
