import { ButtonType, PressableButton } from "./PressableButton";

type ButtonDirection = "up" | "down"

export class FloorButton extends PressableButton {
    buttonType: ButtonType = "floor";
    buttonDirection: ButtonDirection

    constructor(btnDir: ButtonDirection) {
        super()
        this.buttonDirection = btnDir;
    }

    connectedCallback(): void {
        super.connectedCallback()
        this.setAttribute("button-direction", this.buttonDirection)
    }
}