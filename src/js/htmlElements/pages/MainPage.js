import HtmlElement from '../HtmlElement';
import ImgHtmlElement from '../ImgHtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';

import titleImgSrc from '../../../assets/images/backToSchool.svg';

export default class MainPage extends HtmlElement {
    baseClass = 'main-page';
    action = null;
    children = {};

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl
        });

        this.action = action;

        this.addClasses();
        this.appendEls();
    }

    appendEls() {
        this.appendTitleImg();
        this.appendButton();
    }

    appendTitleImg() {
        this.children.titleImg = new ImgHtmlElement({ parentEl: this.el, src: titleImgSrc, alt: 'Надпись Back to school' });

        this.children.titleImg.addClasses([`${this.baseClass}__title-img`]);
        this.children.titleImg.appendToParent();
    }

    appendButton() {
        this.children.button = new ButtonHtmlElement({ parentEl: this.el, innerHTML: 'заполнить анкету' });

        this.children.button.addClasses([`${this.baseClass}__button`]);
        this.children.button.appendToParent();

        this.children.button.el.addEventListener('click', this.action);
    }

    hide() {
        this.children.button.el.removeEventListener('click', this.action);

        super.hide();
    }
}
