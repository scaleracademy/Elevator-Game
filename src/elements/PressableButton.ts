export class PressableButton extends HTMLElement {
    pressed = false;

    connectedCallback() {
        this.classList.add('elevator-btn');
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