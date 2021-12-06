import { BuildingFloor } from "./BuildingFloor";

export class FloorList extends HTMLElement {
    totalFloors = 0;
    floors: Array<BuildingFloor> = [];
    constructor(totalFloors: number) {
        super();
        this.totalFloors = totalFloors;

        for (let i = 0; i < totalFloors; i++) {
            const floor = new BuildingFloor(i);
            this.floors.push(floor);
            this.appendChild(floor);
        }
    }

    connectedCallback() {
        this.classList.add("building");
    }
}