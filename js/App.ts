import * as View from "./View";

export class App {
    view: View.View;
    
    constructor(canvas : HTMLCanvasElement) {
        
        this.view = new View.View(canvas.getContext("2d"));
    }

    run() {

        this.view.render();
    }
}