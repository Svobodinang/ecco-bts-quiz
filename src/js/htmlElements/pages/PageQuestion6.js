import PageWithRadioForm from '../blocks/PageWithRadioForm';

import titleNum from '../../../assets/images/num6.svg';

const formData = [
    {
        id: 'BIOM',
        label: '<span class="accent-text">Погонять мяч в&nbsp;новых BIOM&nbsp;K1</span>'
    },
    {
        id: 'talk',
        label: '<span class="accent-text">Поболтать с&nbsp;друзьями, болтая ногами на&nbsp;подоконнике</span>'
    },
    {
        id: 'LITE-K',
        label: '<span class="accent-text">Проверить, насколько далеко можно прыгнуть в&nbsp;SP1&nbsp;LITE&nbsp;K</span>'
    },
    {
        id: 'dining',
        label: '<span class="accent-text">Взять в&nbsp;столовой ту&nbsp;самую пиццу. И&nbsp;вот эту шоколадку на&nbsp;сдачу!</span>'
    }
];

export default class PageQuestion1 extends PageWithRadioForm {
    baseClass = 'question-3';

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.formData = formData;
        this.titleText = 'Идеальная перемена&nbsp;&mdash; она какая?';
        this.titleNum = titleNum;
        this.appendEls();
        this.addClasses();
    }
}
