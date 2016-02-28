define(['jquery', 'Wix', 'mustache'], function ($, Wix, mustache) {
    return class Widget {
        constructor(element) {
            this.element = element;
            this.settingsUpdate = {};
            this.initialized = false;
            this.template = null;
        }

        init() {
            this.updateCompHeight(600);
            Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, update => {
                this.onSettingsUpdate(update);
            });

            // You can get the style params programmatically, un-comment the following snippet to see how it works:
            /*Wix.Styles.getStyleParams(style => {
                console.log(style);
            });*/

            // You can also get the style every time it changes, try this:
            /*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
                console.log(style);
            });*/

            this.initialized = true;
        };

        onSettingsUpdate(update) {
            this.settingsUpdate = update;
            this.render()
                .then(() => this.updateCompHeight());
        };

        updateCompHeight(height) {
            const desiredHeight = height || document.documentElement.scrollHeight;
            Wix.setHeight(desiredHeight);
        };

        stringify(input) {
            try {
                return JSON.stringify(input, null, 4);
            } catch (err) {
                return input;
            }
        };

        loadTemplate() {
            if (this.template) {
                return Promise.resolve(this.template);
            } else {
                return $.get('./widget.html').then(template => this.template = template);
            }
        }

        render() {
            if (!this.initialized) {
                this.init();
            }

            return this.loadTemplate().then(template => {
                this.element.html(mustache.render(template, {settingsUpdate: this.stringify(this.settingsUpdate)}));
            });
        };
    }
});
