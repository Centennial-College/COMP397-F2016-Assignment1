/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: This file is the entry point for the game.
 * @version 0.6.0 - finished implementing all game scenes
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/// <reference path = "_reference.ts" />

// GLOBAL VARIABES ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let assets: createjs.LoadQueue;
let canvas: HTMLElement;
let stage: createjs.Stage;

// Game Scene Variables
let currentScene: objects.Scene;
let scene: number;

// Preload Assets required
let assetData: objects.Asset[] = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Menu", src: "../../Assets/images/Menu.png" },
    { id: "Begin", src: "../../Assets/images/Begin.png" },
    { id: "TakeIt", src: "../../Assets/images/TakeIt.png" },
    { id: "Engage", src: "../../Assets/images/Engage.png" },
    { id: "Negotiate", src: "../../Assets/images/Negotiate.png" },
    { id: "LookInside", src: "../../Assets/images/LookInside.png" },
    { id: "Stay", src: "../../Assets/images/Stay.png" },
    { id: "GoOver", src: "../../Assets/images/GoOver.png" },
    { id: "Leave", src: "../../Assets/images/Leave.png" },
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
function preload(): void {
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
function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function changeScene(): void {

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
        // FIRST DECISION LEVEL NODES
        case config.Scene.GAME1:
            stage.removeAllChildren();
            currentScene = new scenes.Game1();
            console.log("Starting GAME1 scene");
            break;
        // SECOND DECISION LEVEL NODES
        case config.Scene.GAME2_1:
            stage.removeAllChildren();
            currentScene = new scenes.Game21();
            console.log("Starting GAME2-1 scene");
            break;
        case config.Scene.GAME2_2:
            stage.removeAllChildren();
            currentScene = new scenes.Game22();
            console.log("Starting GAME2-2 scene");
            break;
        // THIRD DECISION LEVEL NODES
        case config.Scene.GAME3_1:
            stage.removeAllChildren();
            currentScene = new scenes.Game31();
            console.log("Starting GAME3-1 scene");
            break;
        case config.Scene.GAME3_2:
            stage.removeAllChildren();
            currentScene = new scenes.Game32();
            console.log("Starting GAME3-2 scene");
            break;
        case config.Scene.GAME3_3:
            stage.removeAllChildren();
            currentScene = new scenes.Game33();
            console.log("Starting GAME3-3 scene");
            break;
        case config.Scene.GAME3_4:
            stage.removeAllChildren();
            currentScene = new scenes.Game34();
            console.log("Starting GAME3-4 scene");
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