/**
 * @file menu.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file contains all assets and functionality associated with the menu itself.
 * @version 0.3.2
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class Menu extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _menuButton: objects.Button;
        private _menuTitleLabel: objects.Label;
        private _menuAuthorLabel: objects.Label;
        private _hr: objects.HorizontalLine;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
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
        public start(): void {
            console.log("Menu Scene Started");

            // reset to normal color
            stage.canvas.style.backgroundColor = "aliceblue";

            // add title to menu scene
            this._menuTitleLabel = new objects.Label("Game of\nSurvival", "123px Times New Roman", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y - 70);
            this.addChild(this._menuTitleLabel);

            // add author credits to menu scene
            this._menuAuthorLabel = new objects.Label("Developed by: Kevin Ma", "20px Verdana", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120);
            this.addChild(this._menuAuthorLabel);

            // use drawRect to draw a horizontal line divider between the title and the author credits
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 90);
            stage.addChild(this._hr)

            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            // Add menu scene to global stage container
            stage.addChild(this);
        }

        /**
         * This method runs when the Menu Scene updates
         * 
         * @public
         * @method update
         * 
         * @memberOf Menu
         * @return {void}
         */
        public update(): void {

        }

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
        private _startButtonClick(event: createjs.MouseEvent): void {
            // Change global scene variable to INSTRUCTIONS. Call global changeScene() function
            scene = config.Scene.INSTRUCTIONS;
            changeScene();
        }
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */