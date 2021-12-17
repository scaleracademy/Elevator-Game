import { FloorButton } from "./FloorButton";

export class FloorPanel extends HTMLElement {
    floorNum = 0;
    up = new FloorButton("up");
    down = new FloorButton("down");
    constructor(floorNum: number) {
        super();
        this.floorNum = floorNum;
        this.appendChild(this.up);
        this.appendChild(this.down);
    }

    connectedCallback() {
        this.setAttribute('floor-id', this.floorNum.toString());
    }
}