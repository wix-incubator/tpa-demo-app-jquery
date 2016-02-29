define(['$', 'lodash'], function ($, _) {
    return class Animations {
        constructor(element) {
            this.element = element;
            this.template = null;
            this.delegate = null;
        }

        attachListeners() {
            this.element.find('.animations_type').getCtrl().onChange(newVal => this.onUpdate('animations_type', newVal));
            this.element.find('.animations_button').getCtrl().onClick(() => console.log('Play Animation was clicked'));
            this.element.find('.animations_direction').getCtrl().onChange(newVal => this.onUpdate('animations_direction', newVal));
            this.element.find('.animations_delay').getCtrl().onChange(newVal => this.onUpdate('animations_delay', newVal));
            this.element.find('.animations_oppositeEffect').getCtrl().onChange(newVal => this.onUpdate('animations_oppositeEffect', newVal));
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
                return $.get('./pages/animations/animations.html').then(template => this.template = $(template));
            }
        }

        render() {
            return this.loadTemplate().then(template => this.element.html(template));
        }
    }
});
