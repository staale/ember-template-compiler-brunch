var emberCompiler = require('ember-template-compiler');
var umd = require("umd-wrapper");

function EmberTemplateCompilerBrunch(config) {

    if (config.files.templates.precompile === true) {
        this.precompile = true;
    }
    if (config.files.templates.root != null) {
        this.root = config.files.templates.root;
    }
}

EmberTemplateCompilerBrunch.prototype.brunchPlugin = true;
EmberTemplateCompilerBrunch.prototype.type = 'template';
EmberTemplateCompilerBrunch.prototype.extension = 'hbs';
EmberTemplateCompilerBrunch.prototype.precompile = false;
EmberTemplateCompilerBrunch.prototype.root = "app/";

EmberTemplateCompilerBrunch.prototype.compile = function (data, path, callback) {
    try {
        var template;
        if (this.precompile === true) {
            var content = emberCompiler.precompile(data, false);
            template = "Ember.Handlebars.template(" + content + ")"
        } else {
            var content = JSON.stringify(data.toString());
            template = "Ember.Handlebars.compile(" + content + ")"
        }
        var emberPath = path.replace(/\\/g, '/').replace(this.root.replace(/\\/g, '/'), '').replace(/\.[^.]+/,'');

        callback(null, umd("Ember.TEMPLATES['" + emberPath + "'] = " + template));
    } catch (error) {
        callback(error);
    }
};

module.exports = EmberTemplateCompilerBrunch;