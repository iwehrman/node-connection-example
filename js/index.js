/*global requirejs */

requirejs.config({
    "baseUrl": "js/app",
    "paths": {
        "bluebird": "../components/bluebird/js/browser/bluebird",
        "jquery": "../components/jquery/dist/jquery",
        "eventEmitter": "../components/eventEmitter/EventEmitter"
    },
    "packages": [
        {
            "name": "generator-connection",
            "location": "../components/generator-connection"
        }
    ]
});

// Load the main app module to start the app
requirejs(["main"]);
