import PageWithCheckboxForm from '../blocks/PageWithCheckboxForm';

import titleNum from '../../../assets/images/num6.svg';
import checkbox1 from '../../../assets/images/checkbox1.png';
import checkbox2 from '../../../assets/images/checkbox2.png';
import checkbox3 from '../../../assets/images/checkbox3.png';
import checkbox4 from '../../../assets/images/checkbox4.png';
import checkbox5 from '../../../assets/images/checkbox5.png';
import checkbox6 from '../../../assets/images/checkbox6.png';
import checkbox7 from '../../../assets/images/checkbox7.png';
import checkbox8 from '../../../assets/images/checkbox8.png';
import checkbox9 from '../../../assets/images/checkbox9.png';
import checkbox10 from '../../../assets/images/checkbox10.png';
import checkbox11 from '../../../assets/images/checkbox11.png';
import checkbox12 from '../../../assets/images/checkbox12.png';

const formData = [
    {
        id: 'spring',
        labelImg: {
            src: checkbox1,
            alt: 'фотография детской игрушки - пружины'
        }
    },
    {
        id: 'love-is',
        labelImg: {
            src: checkbox2,
            alt: 'фотография детской жвачки love is...'
        }
    },
    {
        id: 'mario',
        labelImg: {
            src: checkbox3,
            alt: 'Фотография компьютерной игры Марио'
        }
    },
    {
        id: 'dendy',
        labelImg: {
            src: checkbox4,
            alt: 'Фотография старой игры Dendy'
        }
    },
    {
        id: 'bezrukov',
        labelImg: {
            src: checkbox5,
            alt: 'Фотографи Сергея Безрукова'
        }
    },
    {
        id: 'friends',
        labelImg: {
            src: checkbox6,
            alt: 'Фотографи девочек подружек'
        }
    },
    {
        id: 'pleer',
        labelImg: {
            src: checkbox7,
            alt: 'Фотографи плеера'
        }
    },
    {
        id: 'nokia',
        labelImg: {
            src: checkbox8,
            alt: 'Телефон Nokia'
        }
    },
    {
        id: 'blender',
        labelImg: {
            src: checkbox9,
            alt: 'Блендер'
        }
    },
    {
        id: 'classics',
        labelImg: {
            src: checkbox10,
            alt: 'Игра в классики'
        }
    },
    {
        id: 'tamagochi',
        labelImg: {
            src: checkbox11,
            alt: 'Тамагочи'
        }
    },
    {
        id: 'bumbl',
        labelImg: {
            src: checkbox12,
            alt: 'Жвачка хуба буба'
        }
    }
];

export default class PageQuestion1 extends PageWithCheckboxForm {
    baseClass = 'question-6';

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl,
            action
        });

        this.formData = formData;
        this.titleText = 'Cобери свой школьный стартер-пак';
        this.titleNum = titleNum;

        this.appendEls();
        this.addClasses();
    }
}
