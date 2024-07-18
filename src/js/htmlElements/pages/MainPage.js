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

        // eslint-disable-next-line
        this.children.subtitle = new HtmlElement({ parentEl: this.el, tag: 'p', innerHTML: 'Давай вспомним, как это было? Любимый предмет, первый медленный танец, классные друзья на&nbsp;всю жизнь. Поделись своими школьными воспоминаниями и&nbsp;получи приятный бонус от&nbsp;ECCO на&nbsp;3000 бонусов' });

        this.children.subtitle.addClasses([`${this.baseClass}__subtitle`]);
        this.children.subtitle.appendToParent();
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
