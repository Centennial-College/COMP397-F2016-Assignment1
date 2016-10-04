/**
 * @file ending.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Abstraction of ending scene wherein specific ending scenes will follow template laid out by this class
 * @version 0.6.1 - created template for ending classes
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export abstract class Ending extends objects.Scene {

        // INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _endingTitleLabel: objects.Label;
        private _endingTextLabel: objects.Label;
        private _endingPromptLabel: objects.Label;
        private _nextButton: objects.Button;
        private _hr: objects.HorizontalLine;
        private _gameOver: boolean;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Ending.
         * 
         * @param {string} title
         * @param {string} text
         * @param {boolean} gameOver
         * 
         * @memberOf Ending
         */
        constructor(title: string, text: string, gameOver: boolean) {
            super();
            this._endingTitleLabel = new objects.Label(title, "60px Times New Roman", "#00008b", config.Screen.CENTER_X - 80, config.Screen.CENTER_Y - 150);
            this._endingTextLabel = new objects.Label(text, "30px Consolas", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._endingPromptLabel = new objects.Label("Find out your fate...", "30px Consolas", "#00008b", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 125);
            this._nextButton = new objects.Button("Next", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this._gameOver = gameOver;
            this.start();
        }

        // PUBLIC FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function creates the game objects and adds them to the stage
         * 
         * @public
         * @method start
         * 
         * @memberOf Ending
         * @return {void}
         */
        public start(): void {
            // Add objects to the scene
            console.log("Ending scene started");

            this.addChild(this._endingTitleLabel);
            this.addChild(this._endingTextLabel);
            this.addChild(this._endingPromptLabel);
            this.addChild(this._hr);

            // Create buttons for scene and add to Game Scene container. Register for onclick event
            this.addChild(this._nextButton);

            this._nextButton.on("click", this._nextButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        /**
         * This function updates the objects contained in the game scene
         * 
         * @public
         * @method update
         * 
         * @memberOf Ending
         * @return {void}
         */
        public update(): void {
            // Update objects
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function changes the game to the final ending scene in the state machine design pattern
         * 
         * @private
         * @method _nextButtonClick
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf Ending
         */
        private _nextButtonClick(event: createjs.MouseEvent) {
            scene = this._gameOver ? config.Scene.GAMEOVER : config.Scene.GAMEWIN;
            changeScene();
        }

    }
}