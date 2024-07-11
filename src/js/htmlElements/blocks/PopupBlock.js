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
            innerHTML: 'Это было классно! Благодарим тебя за&nbsp;ответы и&nbsp;бежим начислять обещанные</br><strong>3000 бонусов</strong>'
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
