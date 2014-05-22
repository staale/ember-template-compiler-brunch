ember-template-compiler-brunch
==============================

Brunch plugin to use the ember-template-compiler for compiling handlebars templates.

This brunch plugin was created to fix descrepancies in the existing brunch ember handlebars plugins. Specifically, they did not interact in a predictable manner with the npm dependencies.

This module relies entirly on npm modules. If you include it in your own project, you can freely select which version of the [ember-template-compile](https://www.npmjs.org/package/ember-template-compiler) and [handlebars](https://www.npmjs.org/package/handlebars) to use. The exception being that handlebars 2.0.0 is not supported yet, as that is not the version that is used by ember-template-compile.

The ember-template-compile seems to be a well maintained project for just the compiler part, and one that is integrated with the Ember deployment process. This means we can keep an up to date version of the ember compiler.

How to install:

    npm install --save staale/ember-template-compiler-brunch
    
Then, in your config.coffee:

    exports.config =
      templates:
        joinTo: 'app.js'
        precompile: true
        root: 'app/'

Settings:

* **precompile**: Wheter or not templates should be precompiled, default is false
* **root**: Root path to strip of the template names before exposing to Ember.TEMPLATES. Defaults to "app/"

