import PageWithTextForm from '../blocks/PageWithTextForm';

import titleNum from '../../../assets/images/num5.svg';

export default class PageQuestion1 extends PageWithTextForm {
    baseClass = 'question-5';

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        // eslint-disable-next-line
        this.titleText = 'Столько историй, романтических и&nbsp;забавных, связано со&nbsp;школьной дискотекой. Поделись своим самым ярким воспоминанием&nbsp;&mdash; поностальгируем вместе!';
        this.titleNum = titleNum;
        this.appendEls();
        this.addClasses();
    }
}
