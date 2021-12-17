export class ElevatorBox extends HTMLElement {
    elevatorId = 0;
    doorOpen = false;
    constructor(elevatorId: number) {
        super();
        this.elevatorId = elevatorId;
    }

    connectedCallback() {

        this.setAttribute('elevator-id', this.elevatorId.toString());
    }

    openDoor() {
        this.doorOpen = true;
        this.setAttribute('door-open', 'true');
    }

    closeDoor() {
        this.doorOpen = false;
        this.removeAttribute('door-open');
    }

    onclick = function () {
        this.doorOpen ? this.closeDoor() : this.openDoor();
    }
}