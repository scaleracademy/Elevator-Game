export class Elevator {
    floorBtns: Array<boolean>;
    constructor(floors: number) {
        this.floorBtns = new Array(floors).fill(false);
    }
}

