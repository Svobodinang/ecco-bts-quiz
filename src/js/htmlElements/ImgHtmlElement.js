import HtmlElement from './HtmlElement';

export default class ImgHtmlElement extends HtmlElement {
    constructor({
        parentEl,
        src = '../assets/images/back.jpg',
        alt = 'Картинка'
    }) {
        super({
            parentEl,
            tag: 'img'
        });

        this.el = new Image();
        this.el.src = src;
        this.el.setAttribute('alt', alt);
    }
}
