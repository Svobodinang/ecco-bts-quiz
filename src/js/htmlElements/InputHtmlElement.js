import HtmlElement from './HtmlElement';
import ImgHtmlElement from './ImgHtmlElement';

export default class InputHtmlElement extends HtmlElement {
    baseClass = 'quiz-input';
    children = [];

    constructor({
        parentEl,
        type = 'textarea',
        id,
        name,
        value,
        label,
        labelImg
    }) {
        super({
            parentEl
        });

        this.type = type;
        this.id = id;
        this.name = name;
        this.value = value;
        this.label = label;
        this.labelImg = labelImg;

        this.appendChildren();
    }

    appendChildren() {
        this.children.input = new HtmlElement({ parentEl: this.el, tag: 'input' });
        this.children.input.el.setAttribute('type', this.type);
        if (this.id) this.children.input.el.setAttribute('id', this.id);
        if (this.name) this.children.input.el.setAttribute('name', this.name);
        if (this.value) this.children.input.el.setAttribute('value', this.value);
        this.children.input.addClasses([`${this.baseClass}__input`]);
        this.children.input.appendToParent();

        if (this.label) {
            this.children.label = new HtmlElement({ parentEl: this.el, tag: 'label', innerHTML: this.label });
            this.children.label.el.setAttribute('for', this.id);
            this.children.label.addClasses([`${this.baseClass}__label`]);
            this.children.label.appendToParent();
        }

        if (this.labelImg) {
            this.children.label = new HtmlElement({ parentEl: this.el, tag: 'label' });
            this.children.label.el.setAttribute('for', this.id);
            this.children.label.addClasses([`${this.baseClass}__label`]);
            this.children.label.appendToParent();

            const labelImg = new ImgHtmlElement({ parentEl: this.children.label.el, src: this.labelImg.src, alt: this.labelImg.alt });

            labelImg.addClasses([`${this.baseClass}__label`]);
            labelImg.appendToParent();
        }
    }
}
