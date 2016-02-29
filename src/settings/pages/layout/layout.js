define(['$', 'lodash'], function ($, _) {
    return class Layout {
        constructor(element) {
            this.element = element;
            this.template = null;
            this.delegate = null;
        }

        attachListeners() {
            this.element.find('.layout_columns').getCtrl().onChange(newVal => this.onUpdate('layout_columns', newVal));
            this.element.find('.layout_spacing').getCtrl().onChange(newVal => this.onUpdate('layout_spacing', newVal));
        }

        onUpdate(key, value) {
            if (this.delegate && _.isFunction(this.delegate.onUpdate)) {
                this.delegate.onUpdate(key, value);
            }
        }

        loadTemplate() {
            if (this.template) {
                return Promise.resolve(this.template);
            } else {
                return $.get('./pages/layout/layout.html').then(template => this.template = $(template));
            }
        }

        render() {
            return this.loadTemplate().then(template => this.element.html(template));
        }
    }
});
