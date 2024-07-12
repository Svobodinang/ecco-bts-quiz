import HtmlElement from '../HtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';
import QuestionTitleBlock from './QuestionTitleBlock';
import InputHtmlElement from '../InputHtmlElement';

export default class PageWithRadioForm extends HtmlElement {
    action;
    formData;
    titleText;
    titleNum;
    children = {};
    eventHandlerBinded;
    onChangeInputBinded;
    formValid = false;
    answer = null;

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
    }

    appendEls() {
        this.appendTitleBlock();
        this.appendForm();
        this.appendRadioButtons();
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

    appendRadioButtons() {
        this.children.formWrapper = new HtmlElement({ parentEl: this.children.form.el });
        this.children.formWrapper.addClasses([`${this.baseClass}__form-wrapper`, 'form-wrapper']);

        this.children.formWrapper.appendToParent();

        this.children.inputs = [];

        this.formData.forEach((inputData) => {
            this.children.inputs.push(new InputHtmlElement({
                parentEl: this.children.formWrapper.el,
                type: 'radio',
                id: inputData.id,
                name: this.baseClass,
                value: inputData.id,
                label: inputData.label
            }));
        });

        this.children.inputs.forEach((inputBlock) => {
            inputBlock.addClasses(['quiz-input--radio']);
            inputBlock.children.input.el.addEventListener('change', this.onChangeInputBinded);

            inputBlock.appendToParent();
        });
    }

    onChangeInput(event) {
        if (this.onChangeInputAction) this.onChangeInputAction(event.target.id);

        this.answer = event.target.checked ? event.target.id : null;
        this.validateForm();
    }

    validateForm() {
        let currentValidForm = false;

        this.children.inputs.forEach((inputHtmlModel) => {
            if (inputHtmlModel.children.input.el.checked) {
                currentValidForm = true;
            }
        });

        this.formValid = currentValidForm;

        if (!this.formValid) {
            this.toDisableButton();
        } else {
            this.toEnableButton();
        }
    }

    toDisableButton() {
        this.children.button.el.setAttribute('disabled', true);
    }

    toEnableButton() {
        this.children.button.el.removeAttribute('disabled');
    }

    eventHandler(event) {
        event.preventDefault();
        this.validateForm();

        if (this.formValid) this.action(this.answer);
    }

    appendButton() {
        this.children.button = new ButtonHtmlElement({ parentEl: this.children.form.el, innerHTML: 'продолжить', type: 'submit' });

        this.children.button.addClasses([`${this.baseClass}__button`]);
        this.children.button.appendToParent();
        this.toDisableButton();

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
