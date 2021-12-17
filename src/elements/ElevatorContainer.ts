import { ElevatorBox } from "./ElevatorBox";
import { ElevatorButton } from "./ElevatorButton";

export class ElevatorContainer extends HTMLElement {
    elevatorId = 0;
    floors = 0;
    box: ElevatorBox;
    floorBtns: Array<ElevatorButton> = []

    constructor(elevatorId: number, floors: number) {
        super();
        this.elevatorId = elevatorId;
        this.box = new ElevatorBox(elevatorId);
        this.floors = floors;

        for (let i = 0; i < floors; i++) {
            const floorBtn = new ElevatorButton(elevatorId, i);
            this.floorBtns[i] = floorBtn
            this.prepend(floorBtn)
        }
        this.prepend(this.box);

    }
}