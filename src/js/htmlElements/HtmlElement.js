export default class HtmlElement {
    parentEl = null;
    tag = null;
    el = null;
    innerHTML = null;
    showClass = 'show';

    constructor({
        parentEl,
        tag = 'div',
        innerHTML
    }) {
        this.parentEl = parentEl;

        this.el = document.createElement(tag);

        if (innerHTML) this.el.innerHTML = innerHTML;
    }

    addClasses(classes = []) {
        classes.forEach((elClass) => {
            this.el.classList.add(elClass);
        });

        if (this.baseClass) {
            this.el.classList.add(this.baseClass);
        }
    }

    appendToParent() {
        this.parentEl.appendChild(this.el);
    }

    show() {
        this.appendToParent();

        setTimeout(() => {
            this.el.classList.add(this.showClass);
        }, 100);
    }

    hide() {
        this.el.classList.remove(this.showClass);

        setTimeout(() => {
            this.parentEl.removeChild(this.el);
        }, 0);
    }
}
