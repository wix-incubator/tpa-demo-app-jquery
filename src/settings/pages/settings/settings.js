define(['$', 'lodash'], function ($, _) {
    return class Settings {
        constructor(element) {
            this.element = element;
            this.template = null;
            this.delegate = null;
        }

        attachListeners() {
            this.element.find('.settings_onImageClick').getCtrl().onChange(newVal => this.onUpdate('settings_onImageClick', newVal));
            this.element.find('.settings_allowEditing').getCtrl().onChange(newVal => this.onUpdate('settings_allowEditing', newVal));
            this.element.find('.settings_allowDeleting').getCtrl().onChange(newVal => this.onUpdate('settings_allowDeleting', newVal));
            this.element.find('.settings_displayName').getCtrl().onChange(newVal => this.onUpdate('settings_displayName', newVal));
            this.element.find('.settings_displayTitle').getCtrl().onChange(newVal => this.onUpdate('settings_displayTitle', newVal));
            this.element.find('.settings_displayDescription').getCtrl().onChange(newVal => this.onUpdate('settings_displayDescription', newVal));
            this.element.find('.settings_taxOnImage').getCtrl().onClick(newVal => this.onUpdate('settings_taxOnImage', newVal));
            this.element.find('.settings_textFieldContent').getCtrl().onChange(newVal => this.onUpdate('settings_textFieldContent', newVal));
            this.element.find('.settings_textAreaContent').getCtrl().onChange(newVal => this.onUpdate('settings_textAreaContent', newVal));
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
                return $.get('./pages/settings/settings.html').then(template => this.template = $(template));
            }
        }

        render() {
            return this.loadTemplate().then(template => this.element.html(template));
        }
    }
});
