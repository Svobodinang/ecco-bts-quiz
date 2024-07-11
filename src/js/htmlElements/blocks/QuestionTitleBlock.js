import HtmlElement from '../HtmlElement';
import ImgHtmlElement from '../ImgHtmlElement';

import ellipse from '../../../assets/images/ellipse.svg';

export default class MainPage extends HtmlElement {
    baseClass = 'title-block';
    children = {};

    constructor({
        parentEl,
        numPath,
        titleText
    }) {
        super({
            parentEl
        });

        this.numPath = numPath;
        this.titleText = titleText;

        this.addClasses();
        this.appendEls();
    }

    appendEls() {
        this.children.num = new ImgHtmlElement({ parentEl: this.el, src: this.numPath, alt: 'номер 1' });
        this.children.num.addClasses([`${this.baseClass}__num`]);
        this.children.num.appendToParent();

        this.children.ellipse = new ImgHtmlElement({ parentEl: this.el, src: ellipse, alt: 'обводка' });
        this.children.ellipse.addClasses([`${this.baseClass}__ellipse`]);
        this.children.ellipse.appendToParent();

        this.children.title = new HtmlElement({ parentEl: this.el, tag: 'h2', innerHTML: this.titleText });
        this.children.title.addClasses([`${this.baseClass}__title`]);
        this.children.title.appendToParent();
    }
}
