var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file config.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file is used to store globally accessible values and states for the game.
 * @version 0.2.0 - finished menu scene
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var config;
(function (config) {
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.INSTRUCTIONS = 1;
        Scene.GAME1 = 2;
        Scene.GAME2_1 = 3;
        Scene.GAME2_2 = 4;
        Scene.GAME3_1 = 5;
        Scene.GAME3_2 = 6;
        Scene.GAME3_3 = 7;
        Scene.GAME3_4 = 8;
        Scene.ENDING1 = 9;
        Scene.ENDING2 = 10;
        Scene.ENDING3 = 11;
        Scene.ENDING4 = 12;
        Scene.GAMEOVER = 13;
        return Scene;
    }());
    config.Scene = Scene;
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 320;
        Screen.CENTER_Y = 240;
        return Screen;
    }());
    config.Screen = Screen;
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file asset.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Asset class defines a typical asset loaded in such as images, sprites, bitmaps, etc.
 * @version 0.1.0
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var objects;
(function (objects) {
    var Asset = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Asset(id, src) {
            this.id = id;
            this.src = src;
        }
        return Asset;
    }());
    objects.Asset = Asset;
})(objects || (objects = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file label.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Label class provides a clean way of creating text that will appear on screen.
 * @version 0.1.0
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var objects;
(function (objects) {
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Label(labelString, labelFont, labelColor, x, y) {
            // MUST call parent class constructor. Requires text to be displayed, font, and color
            _super.call(this, labelString, labelFont, labelColor);
            // Set registration point of the text. Used when performing transformations
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            // Set initial x,y position of the label
            this.x = x;
            this.y = y;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file button.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Button class extends the createjs bitmap class and provides a clean interface for creating clickable objects
 * @version 0.1.0
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var objects;
(function (objects) {
    var Button = (function (_super) {
        __extends(Button, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Button(pathString, x, y) {
            _super.call(this, assets.getResult(pathString));
            // Set the position of the button
            this.x = x;
            this.y = y;
            // Set the size of the button
            this.width = 150;
            this.height = 50;
            // Set the registration point of the button. This is used for transformations
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            // Register mouseover and mouseout event listeners. 
            this.on("mouseover", this._overButton, this);
            this.on("mouseout", this._outButton, this);
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method modifies the bitmaps alpha value when hovering over the button
         *
         * @private
         * @method _overButton
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Button
         * @return {void}
         */
        Button.prototype._overButton = function (event) {
            event.currentTarget.alpha = 0.7;
        };
        /**
         * This method modifies the bitmaps alpha value when mouse is not hovering over the button
         *
         * @private
         * @method _outButton
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Button
         * @return {void}
         */
        Button.prototype._outButton = function (event) {
            event.currentTarget.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file scene.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: Scene class extends a container object used to store object associated with a particular scene.
 * @version 0.1.0
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var objects;
(function (objects) {
    var Scene = (function (_super) {
        __extends(Scene, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Scene() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * When this object starts, add it to the current global stage container.
         *
         * @public
         * @method start
         *
         * @memberOf Scene
         * @return {void}
         */
        Scene.prototype.start = function () {
            stage.addChild(this);
        };
        /**
         * When this object updates, this method is run
         *
         * @public
         * @method update
         *
         * @memberOf Scene
         * @return {void}
         */
        Scene.prototype.update = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.1.1
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
          * This method runs when the scene is started
          *
          * @public
          * @method start
          *
          * @memberOf Menu
          * @return {void}
          */
        Menu.prototype.start = function () {
            console.log("Menu Scene Started");
            // add title to menu scene
            this._menuTitleLabel = new objects.Label("Game of\nSurvival", "123px Times New Roman", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y - 70);
            this.addChild(this._menuTitleLabel);
            // add author credits to menu scene
            this._menuAuthorLabel = new objects.Label("Developed by: Kevin Ma", "20px Verdana", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._menuAuthorLabel);
            // use drawRect to draw a horizontal line divider between the title and the author credits
            var rect = new createjs.Shape();
            rect.graphics.beginStroke('#000');
            rect.graphics.drawRect(0, 0, config.Screen.WIDTH - 40, 1);
            rect.y = config.Screen.CENTER_Y + 90;
            rect.x = 20;
            stage.addChild(rect);
            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        /**
         * This method runs when the Menu Scene updates
         *
         * @public
         * @method update
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the game scene when the start button is clicked
         *
         * @private
         * @method _startButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Menu
         * @return {void}
         */
        Menu.prototype._startButtonClick = function (event) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME1;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 23, 2016
 * @description: Game scene that contains all assets and functionality associated with the game itself
 * @version 0.2.0 - finished menu scene
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var Game = (function (_super) {
        __extends(Game, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Game() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         *
         * @public
         * @method start
         *
         * @memberOf Game
         * @return {void}
         */
        Game.prototype.start = function () {
            // Add objects to the scene
            console.log("Game scene started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._gameButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._gameButton);
            this._gameButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        /**
         * This function updates the objects contained in the game scene
         *
         * @public
         * @method update
         *
         * @memberOf Game
         * @return {void}
         */
        Game.prototype.update = function () {
            // Update objects
        };
        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function changes the game to the menu scene
         *
         * @private
         * @method _onBackButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Game
         */
        Game.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Game;
    }(objects.Scene));
    scenes.Game = Game;
})(scenes || (scenes = {}));
/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file is the gameover scene for the game.
 * @version 0.1.0
 */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method runs when the scene is started
         *
         * @public
         * @method start
         *
         * @memberOf Gameover
         * @return {void}
         */
        GameOver.prototype.start = function () {
            this._bg = new createjs.Bitmap(assets.getResult("BG"));
            this.addChild(this._bg);
            this._marioButton = new objects.Button("Mario", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._marioButton);
            this._marioButton.on('click', this._marioClick, this);
            stage.addChild(this);
        };
        /**
         * This method runs when the scene needs to be updated
         *
         * @public
         * @method update
         *
         * @memberOf Gameover
         * @return {void}
         */
        GameOver.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is the event handler for the mario button click event.
         *
         * @private
         * @param {createjs.MouseEvent} event
         *
         * @memberOf GameOver
         * @return {void}
         */
        GameOver.prototype._marioClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameOver;
    }(objects.Scene));
    scenes.GameOver = GameOver;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../config/config.ts" />
/// <reference path="../objects/asset.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scene.ts" />
/// <reference path="../scenes/menu.ts" />
/// <reference path="../scenes/game.ts" />
/// <reference path="../scenes/gameover.ts" /> 
/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file is the entry point for the game.
 * @version 0.1.0
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
    { id: "Back", src: "../../Assets/images/Back.png" },
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
        case config.Scene.GAME1:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
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