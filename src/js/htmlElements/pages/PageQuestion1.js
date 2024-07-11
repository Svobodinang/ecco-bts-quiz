import PageWithTextForm from '../blocks/PageWithTextForm';

import titleNum from '../../../assets/images/num1.svg';

export default class PageQuestion1 extends PageWithTextForm {
    baseClass = 'question-1';

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.titleText = 'Привет! Давай знакомиться!</br>Как тебя звали/зовут школьные друзья?';
        this.titleNum = titleNum;
        this.baseClass = 'question-1';
        this.appendEls();
        this.addClasses();
    }
}
