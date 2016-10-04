/**
 * @file gameover.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: This file is the gameover scene for the game.
 * @version 0.6.3 - implemented GameOver1
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export class GameOver extends objects.Scene {

        // PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++
        private _playAgainButton: objects.Button;
        private _gameOverTitleLabel: objects.Label
        private _gameOverTextLabel: objects.Label
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
         * @memberOf Gameover
         * @return {void}
         */
        public start(): void {
            this._gameOverTitleLabel = new objects.Label("Game Over", "60px Times New Roman", "#00008b", config.Screen.CENTER_X - 80, config.Screen.CENTER_Y - 150);
            this._gameOverTextLabel = new objects.Label(endingText, "30px Consolas", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._playAgainButton = new objects.Button("PlayAgain", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 125);

            this.addChild(this._gameOverTitleLabel);
            this.addChild(this._gameOverTextLabel);
            this.addChild(this._playAgainButton);
            this.addChild(this._hr);
            this._playAgainButton.on('click', this._playAgainButtonClick, this);

            stage.addChild(this);
        }

        /**
         * This method runs when the scene needs to be updated
         * 
         * @public
         * @method update
         * 
         * @memberOf Gameover
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
         * @memberOf GameOver
         * @return {void}
         */
        private _playAgainButtonClick(event: createjs.MouseEvent): void {
            scene = config.Scene.MENU;
            changeScene();
        }

    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */