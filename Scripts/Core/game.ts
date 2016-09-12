/// <reference path = "_reference.ts" />

var canvas: HTMLElement;
var stage: createjs.Stage;

var scene: number;


function init() {
    canvas = document.getElementById("canvas");

    stage = new createjs.Stage(canvas);

    stage.enableMouseOver(20);

    createjs.Ticker.setFPS(60);

    createjs.Ticker.on("tick", gameLoop, this);
}

function gameLoop(event: createjs.Event): void {
    var myNewText : objects.Label = new objects.Label("Test", "60px Consolas", "#000000", 100, 100);
    var myNewText2 : objects.Label = new objects.Label("Another text", "60px Consolas", "#000000", 10, 10);

    stage.addChild(myNewText);
    stage.addChild(myNewText2);

    stage.update();
}
