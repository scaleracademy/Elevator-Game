import { DownButton } from './elements/DownButton';
import { BuildingFloor } from './elements/BuildingFloor';
import { UpButton } from './elements/UpButton';
import { Elevator } from './entities/Elevator';
import { FloorBtn } from './entities/FloorBtn';
import { FloorList } from './elements/FloorList';

const config = {
    FLOORS: 5,
    ELEVATORS: 1,
}
window.customElements.define('up-btn', UpButton);
window.customElements.define('down-btn', DownButton);
window.customElements.define('bldg-floor', BuildingFloor);
window.customElements.define('floor-list', FloorList);


export class App {
    building = new FloorList(config.FLOORS);
    elevators: Elevator[] = [];

    constructor() {
        for (let i = 0; i < config.ELEVATORS; i++) {
            this.elevators.push(new Elevator(config.FLOORS));
        }
    }

}

globalThis.app = new App();
document.getElementById('app').appendChild(globalThis.app.building);
