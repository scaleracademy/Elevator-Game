import { ButtonType, PressableButton } from "./PressableButton";

export class ElevatorButton extends PressableButton {
    buttonType: ButtonType = "elevator";
    floorId: number;
    elevatorId: number;

    constructor(elevatorId: number, floorId: number) {
        super()
        this.elevatorId = elevatorId
        this.floorId = floorId
    }

    connectedCallback(): void {
        super.connectedCallback()
        this.setAttribute('floor-id', this.floorId.toString())
    }
}