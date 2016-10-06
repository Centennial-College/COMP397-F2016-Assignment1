/**
 * @file gamewin.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: This file is the gamewin scene for the game.
 * @version 1.0.3 - fixed font family and size for gamewin.ts
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    /**
     * This is the scene which will be instantiated when the player reaches the ending5 node.
     * 
     * @export
     * @class GameWin
     * @extends {objects.Scene}
     */
    export class GameWin extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _playAgainButton: objects.Button;
        private _gameWinTitleLabel: objects.Label
        private _gameWinTextLabel: objects.Label
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
         * @memberOf GameWin
         * @return {void}
         */
        public start(): void {
            this._gameWinTitleLabel = new objects.Label("Congratulations", "60px Times New Roman", "#00008b", config.Screen.CENTER_X - 80, config.Screen.CENTER_Y - 150);
            this._gameWinTextLabel = new objects.Label("And off comes his/her head! As a fountain\nof blood errupts from the severed body,\nyou make a quick victory dance. You then\nenter the portal and safely make it back\nhome.", "23px Verdana", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._playAgainButton = new objects.Button("PlayAgain", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 125);

            this.addChild(this._gameWinTitleLabel);
            this.addChild(this._gameWinTextLabel);
            this.addChild(this._playAgainButton);
            this.addChild(this._hr);
            this._playAgainButton.on('click', this._playAgainButtonClick, this);

            // green bg because you won.
            stage.canvas.style.backgroundColor = "#0f0";

            stage.addChild(this);
        }

        /**
         * This method runs when the scene needs to be updated
         * 
         * @public
         * @method update
         * 
         * @memberOf GameWin
         * @return {void}
         */
        public update(): void {

        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This is the event handler for the mario button click event.
         * 
         * @private
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf GameWin
         * @return {void}
         */
        private _playAgainButtonClick(event: createjs.MouseEvent): void {
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */