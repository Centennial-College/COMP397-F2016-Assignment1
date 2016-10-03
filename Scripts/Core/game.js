/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file is the entry point for the game.
 * @version 0.2.2
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/// <reference path = "_reference.ts" />
// GLOBAL VARIABES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var assets;
var canvas;
var stage;
// Game Scene Variables
var currentScene;
var scene;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Menu", src: "../../Assets/images/Menu.png" },
    { id: "Begin", src: "../../Assets/images/Begin.png" },
    { id: "Stay", src: "../../Assets/images/Stay.png" },
    { id: "GoOver", src: "../../Assets/images/GoOver.png" },
    { id: "BG", src: "../../Assets/images/bg.png" },
    { id: "GameOver", src: "../../Assets/images/gameover.png" },
    { id: "Mario", src: "../../Assets/images/mario.png" }
];
/**
 * This method is used to preload all the assets required for the game
 * before it starts running.
 *
 * @method preload
 * @return {void}
 */
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
/**
 * This method is the entry point for the application.
 *
 * @method init
 * @return {void}
 */
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events; the frequency parameter indicates how many times per second EaselJS should calculate what is currently under the pointer. A higher number is more responsive, but also more computationally expensive. It defaults to 20 times per second. 
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.framerate = config.Game.FPS;
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
/**
 * Main game loop function which handles what happens with each "tick" or frame
 *
 * @method gameLoop
 * @param {createjs.TickerEvent} event
 * @return {void}
 */
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
/**
 * This function is used as a View Switcher to switch between different scenes
 * within the application.
 *
 * @method changeScene
 * @return {void}
 */
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            currentScene = new scenes.Menu();
            console.log("Starting MENU scene");
            break;
        case config.Scene.INSTRUCTIONS:
            stage.removeAllChildren();
            currentScene = new scenes.Instructions();
            console.log("Starting INSTRUCTIONS scene");
            break;
        case config.Scene.GAME1:
            stage.removeAllChildren();
            currentScene = new scenes.Game1();
            console.log("Starting GAME scene");
            break;
        case config.Scene.GAMEOVER:
            stage.removeAllChildren();
            currentScene = new scenes.GameOver();
            console.log("Starting GAMEOVER scene");
            break;
    }
}
window.onload = preload;
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=game.js.map