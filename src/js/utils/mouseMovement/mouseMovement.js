import { CursorInDocument } from './cursorInDocument';

export default class MouseMovement {

    isMouseTracking = false;
    cursor;
    parentElement;
    document = {
        w: 0,
        h: 0
    };

    fps = 3;
    counter = 1;

    constructor(selector) {
        this.parentElement = document.querySelector(selector);

        this.getDocumentSize();
        this.cursor = new CursorInDocument(this.parentElement);
    }

    mouseTracking() {
        if (!this.parentElement) {
            console.log('parentElement not exist');

            return;
        }

        this.counter += 1;

        if (this.counter === this.fps) {
            this.counter = 1;
            this.setCssParallaxValues();
        }

        if (this.isMouseTracking) requestAnimationFrame(this.mouseTracking.bind(this));
    }

    startMouseTracking() {
        this.isMouseTracking = true;
        this.mouseTracking();
    }

    stopMouseTracking() {
        this.isMouseTracking = false;
    }

    getDocumentSize() {
        this.document.w = this.parentElement.offsetWidth;
        this.document.h = this.parentElement.offsetHeight;
    }

    setCssParallaxValues() {
        let transformX = this.cursor.x / this.document.w;
        let transformY = this.cursor.y / this.document.h;

        if (transformX > 1) transformX = 1;
        if (transformX < 0) transformX = 0;

        if (transformY > 1) transformY = 1;
        if (transformY < 0) transformY = 0;

        // transformX -= 0.5;
        transformY -= 0.5;

        this.parentElement.style.cssText = `
            --parallax-progress-x: ${transformX};
            --parallax-progress-y: ${transformY}
        `;
    }

    windowResize() {
        this.getDocumentSize();
    }
}
