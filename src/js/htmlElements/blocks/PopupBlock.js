import HtmlElement from '../HtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';

export default class PageQuestion1 extends HtmlElement {
    action;
    baseClass = 'modal-page';
    children = [];

    constructor({
        parentEl,
        action
    }) {
        super({ parentEl });
        this.action = action;

        this.appensEls();
        this.addClasses();
    }

    appensEls() {
        this.children.back = new HtmlElement({ parentEl: this.el });
        this.children.back.addClasses([`${this.baseClass}__back`]);
        this.children.back.appendToParent();

        this.children.content = new HtmlElement({ parentEl: this.el });
        this.children.content.addClasses([`${this.baseClass}__content`]);
        this.children.content.appendToParent();

        this.children.text = new HtmlElement({
            parentEl: this.children.content.el,
            tag: 'p',
            // eslint-disable-next-line
            innerHTML: 'Спасибо, что разделил свои воспоминания с&nbsp;нами! Наши виртуальные объятия&nbsp;&mdash; 3&nbsp;000 бонусов на&nbsp;покупки в&nbsp;ECCO'
        });
        this.children.text.addClasses([`${this.baseClass}__text`]);
        this.children.text.appendToParent();

        this.children.button = new ButtonHtmlElement({ parentEl: this.children.content.el, innerHTML: 'смотреть ответы' });
        this.children.button.addClasses([`${this.baseClass}__button`]);
        this.children.button.appendToParent();

        this.children.button.el.addEventListener('click', this.action);
    }

    hide() {
        this.children.button.el.removeEventListener('click', this.action);

        super.hide();
    }
}
