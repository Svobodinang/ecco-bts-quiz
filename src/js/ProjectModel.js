// import HtmlElement from './HtmlElement';
import MainPage from './htmlElements/pages/MainPage';
import PageQuestion1 from './htmlElements/pages/PageQuestion1';
import PageQuestion2 from './htmlElements/pages/PageQuestion2';
import PageQuestion3 from './htmlElements/pages/PageQuestion3';
import PageQuestion4 from './htmlElements/pages/PageQuestion4';
import PageQuestion5 from './htmlElements/pages/PageQuestion5';
import PageQuestion6 from './htmlElements/pages/PageQuestion6';
import PageQuestion7 from './htmlElements/pages/PageQuestion7';
import PopopBlock from './htmlElements/blocks/PopupBlock';

export default class ProjectModel {
    pages = {};
    currentPageKeyPrivat = null;
    quizContentEl;
    quizWrapperEl;
    answers = {};

    get currentPageKey() {
        return this.currentPageKeyPrivat;
    }

    set currentPageKey(newValue) {
        this.currentPageKeyPrivat = newValue;

        if (newValue !== 'mainPage') {
            this.quizWrapperEl.classList.add('quiz-view');
        }

        if (newValue === 'pageQuestion6') {
            this.quizWrapperEl.classList.add('question-6-view');
        }

        if (newValue === 'pageQuestion7') {
            this.quizWrapperEl.classList.remove('question-6-view');
        }
    }

    constructor() {
        this.quizContentEl = document.getElementById('quizContent');
        this.quizWrapperEl = document.getElementById('quizWrapper');

        this.pages = {
            mainPage: new MainPage({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion1') }),
            pageQuestion1: new PageQuestion1({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion2', true) }),
            pageQuestion2: new PageQuestion2({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion3', true) }),
            pageQuestion3: new PageQuestion3({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion4', true) }),
            pageQuestion4: new PageQuestion4({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion5', true) }),
            pageQuestion5: new PageQuestion5({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion6', true) }),
            pageQuestion6: new PageQuestion6({ parentEl: this.quizContentEl, action: this.toPage.bind(this, 'pageQuestion7', true) }),
            pageQuestion7: new PageQuestion7({ parentEl: this.quizContentEl, action: this.endQuiz.bind(this) })
        };

        this.currentPageKey = 'mainPage';
    }

    start() {
        this.pages[this.currentPageKey].show();
    }

    toPage(nextPageKey, toSaveAnwers, answers = null) {
        if (toSaveAnwers && answers) {
            this.answers[this.currentPageKey] = answers;
        }

        this.pages[this.currentPageKey].hide();
        this.currentPageKey = nextPageKey;

        setTimeout(() => {
            this.pages[this.currentPageKey].show();
        }, 0 + 100);
    }

    endQuiz() {
        console.log('end quiz', this.answers);

        this.pages.modalPage = new PopopBlock({ parentEl: this.quizContentEl, action: this.goToResultPage.bind(this) });

        this.pages.modalPage.show();
    }

    goToResultPage() {
        console.log('go to results page', this.answers);
    }
}
