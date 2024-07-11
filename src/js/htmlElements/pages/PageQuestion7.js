import HtmlElement from '../HtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';
import QuestionTitleBlock from '../blocks/QuestionTitleBlock';

import titleNum from '../../../assets/images/num7.svg';

export default class PageQuestion1 extends HtmlElement {
    children = {};
    baseClass = 'question-7';
    action;

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.action = action;

        this.addClasses();
        this.appendEls();
    }

    appendEls() {
        this.appendTitleBlock();
        this.appendButton();
    }

    appendTitleBlock() {
        this.children.titleBlock = new QuestionTitleBlock({
            parentEl: this.el,
            numPath: titleNum,
            // eslint-disable-next-line
            titleText: 'На&nbsp;этот вопрос мы&nbsp;не&nbsp;ждем от&nbsp;тебя ответа. Просто вспомни, кому из&nbsp;школьных друзей ты&nbsp;давно собираешься написать? Кажется, вам есть что вспомнить :-)'
        });
        this.children.titleBlock.appendToParent();
    }

    appendButton() {
        this.children.button = new ButtonHtmlElement({ parentEl: this.el, innerHTML: 'завершить' });

        this.children.button.addClasses([`${this.baseClass}__button`]);
        this.children.button.appendToParent();

        this.children.button.el.addEventListener('click', this.action);
    }
}
