import { FloorButton } from "./FloorButton";

export class UpButton extends FloorButton {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('up');
    }
}