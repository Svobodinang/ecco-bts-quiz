import PageWithRadioForm from '../blocks/PageWithRadioForm';

import titleNum from '../../../assets/images/num2.svg';
import HtmlElement from '../HtmlElement';

const formData = [
    {
        id: 'math',
        label: '<span class="accent-text">Математика.</span> Я&nbsp;обожаю точность'
    },
    {
        id: 'physics',
        label: '<span class="accent-text">Физика.</span> Так круто понимать, как устроен мир!'
    },
    {
        id: 'geography',
        label: '<span class="accent-text">География.</span> Путешествия&nbsp;&mdash; моя страсть!'
    },
    {
        id: 'history',
        label: '<span class="accent-text">История.</span> У&nbsp;меня хорошая память, и&nbsp;я&nbsp;люблю копаться в&nbsp;деталях'
    },
    {
        id: 'biology',
        label: '<span class="accent-text">Биология.</span> Моя детская мечта&nbsp;&mdash; стать врачом и&nbsp;помогать людям'
    }
];

const sheetTexts = {
    math: 'но&nbsp;если это 1+1=3&nbsp;в ECCO, то&nbsp;можно сделать исключение',
    physics: 'к&nbsp;примеру, зная законы физики, можно создать суперлегкую подошву PHORENE, которая весит на&nbsp;33% меньше обычной',
    geography: 'кстати, наши магазины есть уже в&nbsp;101 стране мира и&nbsp;даже в&nbsp;Брунее&nbsp;&mdash; будешь рядом, заходи!)',
    history: 'история нашего бренда началась в&nbsp;1963&nbsp;году. да-да, ECCO уже за&nbsp;60, хотя в&nbsp;душе всегда&nbsp;18',
    // eslint-disable-next-line
    biology: 'это желание очень нам отзывается. Ведь в&nbsp;основе каждой пары ECCO&nbsp;&mdash; уникальная анатомическая колодка, которая учитывает особенности стопы, взрослой и&nbsp;детской'
};

export default class PageQuestion1 extends PageWithRadioForm {
    baseClass = 'question-2';
    answerEl = null;
    children = [];

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.outWrapper = document.getElementById('quizWrapper');
        this.formData = formData;
        this.titleText = 'Если&nbsp;бы ты&nbsp;мог(ла) выбрать 1&nbsp;любимый предмет и&nbsp;изучать только его, это был&nbsp;бы:';
        this.titleNum = titleNum;
        this.appendEls();
        this.addClasses();
    }

    onChangeInputAction(inputId) {
        if (this.children.answerEl) this.children.answerEl.hide();

        this.children.answerEl = new HtmlElement({ parentEl: this.outWrapper });
        this.children.answerEl.addClasses([`${this.baseClass}__sheet`]);
        this.children.answerEl.appendToParent();

        this.children.text = new HtmlElement({ parentEl: this.children.answerEl.el, tag: 'p', innerHTML: sheetTexts[inputId] });
        this.children.text.addClasses([`${this.baseClass}__sheet-text`]);
        this.children.text.appendToParent();
    }

    hide() {
        if (this.children.answerEl) this.children.answerEl.hide();

        super.hide();
    }
}
