import { FloorButton } from "./FloorButton";

export class DownButton extends FloorButton {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add('down');
    }
}