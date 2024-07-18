import HtmlElement from '../HtmlElement';
import ButtonHtmlElement from '../ButtonHtmlElement';
import QuestionTitleBlock from './QuestionTitleBlock';

export default class PageQuestion1 extends HtmlElement {
    action;
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

    appendEls(helpText) {
        this.appendTitleBlock();
        this.appendForm();
        this.appendTextInput();

        if (helpText) this.appendHelpText(helpText);
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

    appendTextInput() {
        // this.children.textInput = new InputHtmlElement({ parentEl: this.children.form.el, form: 'text', name: this.baseClass });

        this.children.textInput = new HtmlElement({ parentEl: this.children.form.el, tag: 'textarea' });
        this.children.textInput.addClasses(['quiz-input--text-area']);
        this.children.textInput.el.addEventListener('input', this.onChangeInputBinded);
        this.children.textInput.el.setAttribute('placeholder', 'Cвой вариант ответа ...');

        this.children.textInput.appendToParent();
    }

    onChangeInput(event) {
        this.answer = event.target.value;
        this.validateForm();
    }

    validateForm() {
        let currentValidForm = false;

        const { value } = this.children.textInput.el;

        if (value) {
            currentValidForm = true;
        }

        this.formValid = currentValidForm;

        if (!this.formValid) {
            this.toDisableButton();
        } else {
            this.toEnableButton();
        }
    }

    eventHandler(event) {
        event.preventDefault();
        this.validateForm();

        if (this.formValid) this.action(this.answer);
    }

    appendHelpText(helpText) {
        this.children.helpText = new HtmlElement({ parentEl: this.children.form.el, tag: 'p', innerHTML: helpText });
        this.children.helpText.addClasses([`${this.baseClass}__help-text`]);

        this.children.helpText.appendToParent();
    }

    toDisableButton() {
        this.children.button.el.setAttribute('disabled', true);
    }

    toEnableButton() {
        this.children.button.el.removeAttribute('disabled');
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
        this.children.textInput.el.removeEventListener('input', this.onChangeInputBinded);

        super.hide();
    }
}
