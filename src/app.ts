import { FloorButton } from './elements/FloorButton';
import { FloorPanel } from './elements/FloorPanel';
import { FloorList } from './elements/FloorList';
import { ElevatorBox } from './elements/ElevatorBox';
import { ElevatorList } from './elements/ElevatorList';
import { ElevatorContainer } from './elements/ElevatorContainer';
import { ElevatorButton } from './elements/ElevatorButton';

const config = {
    FLOORS: 5,
    ELEVATORS: 1,
}

window.customElements.define('floor-btn', FloorButton);
window.customElements.define('floor-panel', FloorPanel);
window.customElements.define('floor-list', FloorList);
window.customElements.define('elevator-box', ElevatorBox);
window.customElements.define('elevator-list', ElevatorList);
window.customElements.define('elevator-container', ElevatorContainer);
window.customElements.define('elevator-btn', ElevatorButton);

export class UI {
    building: FloorList;
    lobby: ElevatorList;

    constructor(floors: number, elevators: number) {
        this.building = new FloorList(floors);
        this.lobby = new ElevatorList(elevators, floors)
    }

    init() {
        document.getElementById('app').appendChild(this.building);
        document.getElementById('app').appendChild(this.lobby);
    }
}


export class App {
    ui = new UI(config.FLOORS, config.ELEVATORS);

    constructor() {
        this.ui.init();
    }
}

window.onload = function () {
    globalThis.app = new App();
    addEventListener("button_pressed", (ev: Event) => {
        console.log((ev as CustomEvent).detail)
    })
}
