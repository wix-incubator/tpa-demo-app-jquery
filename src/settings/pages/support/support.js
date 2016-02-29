define(['$', 'lodash'], function ($, _) {
    return class Support {
        constructor(element) {
            this.element = element;
            this.template = null;
            this.delegate = null;
        }

        attachListeners() {
            this.element.find('.rate-us-btn').getCtrl().onClick(() => console.log('Thanks for rating us, you rock!'));

            this.element.find('.support_email').getCtrl().onChange(() => this.updateSupportFormState());
            this.element.find('.support_message').getCtrl().onChange(() => this.updateSupportFormState());
            this.element.find('.support_sendButton').getCtrl().onClick(() => this.sendSupportForm());
        }

        updateSupportFormState() {
            const email = this.element.find('.support_email').getCtrl().getValue();
            const message = this.element.find('.support_message').getCtrl().getValue();

            const canSend = email.length && message.length;
            const sendButton = this.element.find('.support_sendButton');
            // TODO: change button's disabled state
        }

        sendSupportForm() {
            const email = this.element.find('.support_email').getCtrl().getValue();
            const message = this.element.find('.support_message').getCtrl().getValue();

            console.log('email:', email);
            console.log('message:', message);

            console.log('Thanks for reaching out, we will look into it');
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
                return $.get('./pages/support/support.html').then(template => this.template = $(template));
            }
        }

        render() {
            return this.loadTemplate().then(template => this.element.html(template));
        }
    }
});
