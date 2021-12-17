export type ButtonType = "floor" | "elevator";

export abstract class PressableButton extends HTMLElement {
    pressed = false;
    abstract buttonType: ButtonType;

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

        dispatchEvent(new CustomEvent("button_pressed", {
            detail: {
                buttonType: this.buttonType
            }
        }))
        this.press();
    }
}