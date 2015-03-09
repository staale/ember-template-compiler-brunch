ember-template-compiler-brunch
==============================

Brunch plugin to use the ember-template-compiler for compiling handlebars templates.

| Ember version | Plugin version |
| ------------- | ---------------|
| <= 1.8        | v0.9.x         |
| >= 1.10       | v0.10.x        |

I have not tested Ember 1.9, but the 0.10 branch sould work for that as well.

Ember provided their ember-template-compiler as an npm module up
until Ember 1.9. After that, the compiler was included only in the
Ember bower dependency.

The v0.10.x branch depends on ember being installed as a bower
module. I realize that this is pretty hacky, but it is what works for
me. Since there is no longer an npm module to depend on.

This finds the ember compiler under './bower_components/ember/ember-template-compiler.js'

Normally you would install ember using bower if you are using a brunch project.

How to install:

    npm install --save ember-template-compiler-brunch

Then, in your config.coffee:

    exports.config =
      templates:
        joinTo: 'app.js'
        precompile: true
        root: 'app/'

Settings:

* **precompile**: Wheter or not templates should be precompiled, default is false
* **root**: Root path to strip of the template names before exposing to Ember.TEMPLATES. Defaults to "app/"
