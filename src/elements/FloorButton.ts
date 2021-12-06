export class FloorButton extends HTMLElement {
    pressed = false;

    connectedCallback() {
        this.classList.add('floor-btn');
    }

    press() {
        this.pressed = true;
        this.classList.add('pressed');
    }

    reset() {
        this.pressed = false;
        this.classList.remove('pressed');
    }

    onclick = function () {
        this.press();
    }
}