/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        // Add options here
    });

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    app.import('bower_components/jquery/dist/jquery.js');
    app.import('bower_components/tether/dist/js/tether.js');
    app.import('bower_components/klh-bootstrap/dist/js/bootstrap.js');

    var bootstrapPath = 'bower_components/klh-bootstrap/dist/';
    var fontAssets = new Funnel(bootstrapPath, {
        srcDir: 'fonts',
        destDir: '/vendor/klh-bootstrap/fonts'
    });

    var cssAssets = new Funnel(bootstrapPath, {
        srcDir: 'css',
        destDir: '/vendor/klh-bootstrap/css'
    });

    // var imageAssets = new Funnel(bootstrapPath, {
    //     srcDir: 'images',
    //     destDir: '/vendor/klh-bootstrap/images'
    // });

    return mergeTrees([app.toTree(), fontAssets, cssAssets]);

    // return app.toTree();
};
