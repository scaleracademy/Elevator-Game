import { PressableButton } from "./PressableButton";

export class FloorButton extends PressableButton {
    floorId: number;

    constructor(floorId: number) {
        super()
        this.floorId = floorId
    }

    connectedCallback(): void {
        super.connectedCallback()
        this.setAttribute('floor-id', this.floorId.toString())
    }
}