import { ElevatorContainer } from "./ElevatorContainer";

export class ElevatorList extends HTMLElement {
    totalFloors = 0;
    elevators: Array<ElevatorContainer> = []

    constructor(elevators: number, floors: number) {
        super();
        this.totalFloors = floors;
        
        for (let i = 0; i < elevators; i++) {
            const elevator = new ElevatorContainer(i, floors)
            this.elevators.push(elevator);
            this.append(elevator)
        }
    }

}