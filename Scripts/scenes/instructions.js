/**
 * @file instructions.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file contains all assets and functionality associated with the instructions menu.
 * @version 0.3.3 - implemented use of HorizontalLine object in scenes
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Instructions() {
            _super.call(this);
            this.start();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
          * This method runs when the scene is started
          *
          * @public
          * @method start
          *
          * @memberOf Instructions
          * @return {void}
          */
        Instructions.prototype.start = function () {
            console.log("Instructions Scene Started");
            // add title to instructions scene
            this._instructionsTitleLabel = new objects.Label("Instructions", "80px Times New Roman", "#00008b", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y - 150);
            this.addChild(this._instructionsTitleLabel);
            // add instructions text to instructions scene
            this._instructionsLabel = new objects.Label("Including you, there are two people on the stranded island.\nYou are given 10 hours to head to the center\nof the island. At the center you will enter a portal and\nbe able to safely escape. Only one person is\npermitted to use the portal to escape. After 10 hours\nhave passed, nuclear missles will be launched\ntargetting the island and anyone remaining on the\nisland will be killed.\n\nGood luck escaping the island!", "2vmin Verdana", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._instructionsLabel);
            // use drawRect to draw a horizontal line divider between the title and the author credits
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 125);
            stage.addChild(this._hr);
            // Add button(s) to scene. Register for click callback function
            this._backButton = new objects.Button("Back", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._backButton);
            this._backButton.on("click", this._backButtonClick, this);
            this._nextButton = new objects.Button("Next", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this.addChild(this._nextButton);
            this._nextButton.on("click", this._nextButtonClick, this);
            // Add menu scene to global stage container
            stage.addChild(this);
        };
        /**
         * This method runs when the Scene updates
         *
         * @public
         * @method update
         *
         * @memberOf Menu
         * @return {void}
         */
        Instructions.prototype.update = function () {
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method changes the current scene to the game scene when the next button is clicked
         *
         * @private
         * @method _nextButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Instructions
         * @return {void}
         */
        Instructions.prototype._nextButtonClick = function (event) {
            // Change global scene variable to GAME1. Call global changeScene() function
            scene = config.Scene.GAME1;
            changeScene();
        };
        /**
         * This method changes the current scene to the menu scene when the Back button is clicked
         *
         * @private
         * @method _backButtonClick
         * @param {createjs.MouseEvent} event
         *
         * @memberOf Instructions
         * @return {void}
         */
        Instructions.prototype._backButtonClick = function (event) {
            // Change global scene variable to GAME1. Call global changeScene() function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=instructions.js.map