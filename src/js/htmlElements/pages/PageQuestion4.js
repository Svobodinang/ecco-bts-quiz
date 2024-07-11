import PageWithRadioForm from '../blocks/PageWithRadioForm';

import titleNum from '../../../assets/images/num4.svg';

const formData = [
    {
        id: 'BIOM',
        label: '<span class="accent-text">Думаю, что BIOM&nbsp;&mdash; в&nbsp;них удобно бегать кросс</span>'
    },
    {
        id: 'GRUUV',
        label: '<span class="accent-text">Конечно GRUUV&nbsp;&mdash; они так прикольно гнутся во&nbsp;все стороны</span>'
    },
    {
        id: 'ATH-1',
        label: '<span class="accent-text">Вот эти со&nbsp;сложным названием ATH-1F&nbsp;&mdash; у&nbsp;них суперлегкая подошва</span>'
    },
    {
        id: 'STREET',
        label: '<span class="accent-text">Возьму STREET LITE&nbsp;&mdash; я&nbsp;опять прогуливаю физ-ру</span>'
    }
];

export default class PageQuestion1 extends PageWithRadioForm {
    baseClass = 'question-4';

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.formData = formData;
        this.titleText = 'Какие кроссовки ты&nbsp;выбрал(а)&nbsp;бы для физкультуры?';
        this.titleNum = titleNum;
        this.appendEls();
        this.addClasses();
    }
}
