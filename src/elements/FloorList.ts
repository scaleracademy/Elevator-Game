import { FloorPanel } from "./FloorPanel";

export class FloorList extends HTMLElement {
    totalFloors = 0;
    floors: Array<FloorPanel> = [];
    constructor(totalFloors: number) {
        super();
        this.totalFloors = totalFloors;

        for (let i = 0; i < totalFloors; i++) {
            const floor = new FloorPanel(i);
            this.floors.push(floor);
            this.prepend(floor);
        }
    }

    connectedCallback() {
        this.classList.add("building");
    }
}