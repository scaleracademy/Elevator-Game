import { DownButton } from "./DownButton";
import { UpButton } from "./UpButton";

export class BuildingFloor extends HTMLElement {
    floorNum = 0;
    up = new UpButton();
    down = new DownButton();
    constructor(floorNum: number) {
        super();
        this.floorNum = floorNum;
        this.appendChild(this.up);
        this.appendChild(this.down);
    }

    connectedCallback() {
        this.classList.add('floor')
    }
}