/*global requirejs */

requirejs.config({
    "baseUrl": "js/app",
    "paths": {
        "bluebird": "../components/bluebird/js/browser/bluebird",
        "jquery": "../components/jquery/dist/jquery",
        "EventEmitter": "../components/eventEmitter/EventEmitter"
    },
    "packages": [
        {
            "name": "node-connection",
            "location": "../components/node-connection",
            "main": "index"
        }
    ]
});

// Load the main app module to start the app
requirejs(["main"]);
