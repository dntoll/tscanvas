import * as MyApp from "./App";


var c  =  <HTMLCanvasElement>document.getElementById("myCanvas");
var app = new MyApp.App(c);
app.run();