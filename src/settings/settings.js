define(['jquery', 'Wix', 'UI', 'settings/pages/pages'], function ($, Wix, UI, pages) {
    return class Settings {
        constructor(element) {
            this.element = element;
        }

        onUpdate(key, value) {
            const data = {key: key, value: value};
            Wix.Settings.triggerSettingsUpdatedEvent(data);
        }

        loadTemplate() {
            if (this.template) {
                return Promise.resolve(this.template);
            } else {
                return $.get('./settings.html').then(template => this.template = template);
            }
        }

        render() {
            return this.loadTemplate().then(template => {
                this.element.html(template);

                const tabHeader = this.element.find('.tab-header');
                const tabContent = this.element.find('.tab-content');

                const componentList = [];

                pages.forEach((page, index) => {
                    const header = $(`<li class="tab-label" data-tab="tab-${index}">${page.label}</li>`);
                    tabHeader.append(header);

                    const content = $(`<div style="height: 1000px" data-tab="tab-${index}" class="tab"></div>`);
                    tabContent.append(content);

                    const component = new page.component(content);
                    component.delegate = this;

                    componentList.push(component);
                });

                return Promise.all(componentList.map(component => component.render())).then(() => {
                    Wix.UI.initialize();
                    componentList.forEach(component => component.attachListeners());
                    return this.element;
                });
            });
        }
    };
});
