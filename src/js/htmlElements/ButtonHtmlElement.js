import HtmlElement from './HtmlElement';

export default class ButtonHtmlElement extends HtmlElement {
    baseClass = 'quiz-button';

    constructor({
        parentEl,
        tag = 'button',
        innerHTML,
        classes,
        type = 'button',
        form
    }) {
        super({
            parentEl,
            tag,
            innerHTML,
            classes
        });

        this.el.setAttribute('type', type);
        if (form) this.el.setAttribute('form', form);
    }
}
