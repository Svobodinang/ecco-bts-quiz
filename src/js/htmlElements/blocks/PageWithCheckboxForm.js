import HtmlElement from '../HtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';
import QuestionTitleBlock from './QuestionTitleBlock';
import InputHtmlElement from '../InputHtmlElement';

const validate = {
    min: 2,
    max: 6
};

export default class PageWithRadioForm extends HtmlElement {
    action;
    formData;
    titleText;
    titleNum;
    children = {};
    eventHandlerBinded;
    onChangeInputBinded;
    formValid = false;
    answers = [];

    constructor({
        parentEl,
        action
    }) {
        super({
            parentEl
        });

        this.action = action;
        this.eventHandlerBinded = this.eventHandler.bind(this);
        this.onChangeInputBinded = this.onChangeInput.bind(this);
        this.onChangeResultInputBinded = this.onChangeResultInput.bind(this);

        // results
        this.resultsWrapperEl = document.getElementById('checkboxResultsWrapper');

        this.children.resultsWrapper = new HtmlElement({ parentEl: this.resultsWrapperEl });
        this.children.resultsWrapper.addClasses(['form-wrapper', 'form-images-wrapper']);

        this.children.resultsWrapper.appendToParent();
        this.children.answersEls = [];
    }

    appendEls() {
        this.appendTitleBlock();
        this.appendForm();
        this.appendCheckboxes();
        this.appendButton();
    }

    appendTitleBlock() {
        this.children.titleBlock = new QuestionTitleBlock({
            parentEl: this.el,
            numPath: this.titleNum,
            titleText: this.titleText
        });
        this.children.titleBlock.appendToParent();
    }

    appendForm() {
        this.children.form = new HtmlElement({ parentEl: this.el, tag: 'form' });
        this.children.form.addClasses([`${this.baseClass}__form`]);

        this.children.form.appendToParent();
    }

    appendCheckboxes() {
        this.children.formWrapper = new HtmlElement({ parentEl: this.children.form.el });
        this.children.formWrapper.addClasses([`${this.baseClass}__form-wrapper`, 'form-wrapper', 'form-images-wrapper']);

        this.children.formWrapper.appendToParent();

        this.children.inputs = [];

        this.formData.forEach((inputData) => {
            this.children.inputs.push(new InputHtmlElement({
                parentEl: this.children.formWrapper.el,
                type: 'checkbox',
                id: inputData.id,
                name: this.baseClass,
                value: inputData.id,
                label: inputData.label,
                labelImg: inputData.labelImg
            }));
        });

        this.children.inputs.forEach((inputBlock) => {
            inputBlock.addClasses(['quiz-input--checkbox']);
            inputBlock.children.input.el.addEventListener('change', this.onChangeInputBinded);

            inputBlock.appendToParent();
        });
    }

    appendAnswer(inputId) {
        this.answers.push(inputId);

        const inputData = this.formData.find((item) => item.id === inputId);

        this.children.answersEls.push(new InputHtmlElement({
            parentEl: this.children.resultsWrapper.el,
            type: 'checkbox',
            id: inputData.id,
            name: this.baseClass,
            value: inputData.id,
            labelImg: inputData.labelImg
        }));

        const addedEl = this.children.answersEls[this.children.answersEls.length - 1];

        addedEl.addClasses(['quiz-input--checkbox']);
        addedEl.children.input.el.addEventListener('change', this.onChangeResultInputBinded);

        addedEl.appendToParent();
    }

    onChangeInput(event) {
        if (event.target.checked) {
            event.target.classList.add('hide');

            this.appendAnswer(event.target.id);
        } else {
            const index = this.answers.findIndex((item) => item === event.target.id);

            this.answers.splice(index, 1);
        }

        this.validateForm();
    }

    onChangeResultInput(event) {
        const baseEl = this.children.inputs.find((input) => input.id === event.target.id);
        const answerIndex = this.children.answersEls.findIndex((answerEl) => answerEl.id === event.target.id);

        if (baseEl && answerIndex >= 0) {
            this.children.resultsWrapper.el.removeChild(this.children.answersEls[answerIndex].el);
            this.children.answersEls.splice(answerIndex, 1);

            baseEl.children.input.el.classList.remove('hide');
            baseEl.children.input.el.checked = false;
            this.onChangeInput(event = { target: baseEl.children.input.el });
        }
    }

    validateForm() {
        let countOfChecked = 0;

        this.children.inputs.forEach((inputHtmlModel) => {
            if (inputHtmlModel.children.input.el.checked) {
                countOfChecked += 1;
            }
        });

        this.formValid = countOfChecked >= validate.min && countOfChecked <= validate.max;

        if (countOfChecked === validate.max) {
            this.children.inputs.forEach((input) => {
                input.children.input.el.setAttribute('disabled', true);
            });
        } else {
            this.children.inputs.forEach((input) => {
                input.children.input.el.removeAttribute('disabled');
            });
        }

        if (!this.formValid) {
            console.log('is not valid form!!!');
        } else {
            console.log('form is valid');
        }
    }

    eventHandler(event) {
        event.preventDefault();
        this.validateForm();

        if (this.formValid) this.action(this.answers);
    }

    appendButton() {
        this.children.button = new ButtonHtmlElement({ parentEl: this.children.form.el, innerHTML: 'продолжить', type: 'submit' });

        this.children.button.addClasses([`${this.baseClass}__button`]);
        this.children.button.appendToParent();

        this.children.form.el.addEventListener('submit', this.eventHandlerBinded);
    }

    hide() {
        this.children.form.el.removeEventListener('submit', this.eventHandlerBinded);
        this.children.inputs.forEach((inputBlock) => {
            inputBlock.children.input.el.removeEventListener('change', this.onChangeInputBinded);
        });

        super.hide();
    }
}
