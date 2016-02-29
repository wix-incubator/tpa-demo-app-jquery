define(['$', 'lodash'], function ($, _) {
    return class Design {
        constructor(element) {
            this.element = element;
            this.template = null;
            this.delegate = null;
        }

        attachListeners() {
            this.element.find('.design_titleFont').getCtrl().onChange(newVal => this.onUpdate('design_titleFont', newVal));
            this.element.find('.design_contentFont').getCtrl().onChange(newVal => this.onUpdate('design_contentFont', newVal));
            this.element.find('.design_backgroundColor').getCtrl().onChange(newVal => this.onUpdate('design_backgroundColor', newVal));
            this.element.find('.design_buttonFont').getCtrl().onChange(newVal => this.onUpdate('design_buttonFont', newVal));
            this.element.find('.design_buttonBackground').getCtrl().onChange(newVal => this.onUpdate('design_buttonBackground', newVal));
            this.element.find('.design_inputColor').getCtrl().onChange(newVal => this.onUpdate('design_inputColor', newVal));
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
                return $.get('./pages/design/design.html').then(template => this.template = $(template));
            }
        }

        render() {
            return this.loadTemplate().then(template => this.element.html(template));
        }
    }
});
