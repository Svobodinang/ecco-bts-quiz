export class CursorInDocument {
    x = 0;
    y = 0;

    constructor(parentElement) {
        this.parentElement = parentElement;
        this.initMouseMoveEvent();
    }

    initMouseMoveEvent() {
        this.parentElement.onmousemove = (e) => {
            this.x = e.pageX;
            // this.y = e.pageY > this.parentElement.offsetHeight ? e.pageY - this.parentElement.offsetHeight : e.pageY;
            this.y = e.pageY > window.innerHeight ? e.pageY - window.innerHeight : e.pageY;
        };
    }
}
