/**
 * @file game.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Abstraction of game scene wherein specific game scenes will follow template laid out by this class
 * @version 0.5.2 - revised game.ts scenes
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module scenes {
    export abstract class Game extends objects.Scene {

        // INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++++++++++++++
        private _gameTitleLabel: objects.Label;
        private _gameTextLabel: objects.Label;
        private _gamePromptLabel: objects.Label;
        private _option1Button: objects.Button;
        private _option2Button: objects.Button;
        private _hr: objects.HorizontalLine;
        private _option1Scene: number;
        private _option2Scene: number;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Game.
         * 
         * @param {string} title
         * @param {string} text
         * @param {string} option1
         * @param {string} option2
         * @param {number} opt1Scene
         * @param {number} opt2Scene
         * 
         * @memberOf Game
         */
        constructor(title: string, text: string, option1: string, option2: string, opt1Scene: number, opt2Scene: number) {
            super();
            this._gameTitleLabel = new objects.Label(title, "60px Times New Roman", "#00008b", config.Screen.CENTER_X - 80, config.Screen.CENTER_Y - 150);
            this._gameTextLabel = new objects.Label(text, "30px Consolas", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this._gamePromptLabel = new objects.Label("What do you do?", "30px Consolas", "#00008b", config.Screen.CENTER_X - 100, config.Screen.CENTER_Y + 100);
            this._hr = new objects.HorizontalLine(20, config.Screen.CENTER_Y + 125);
            this._option1Button = new objects.Button(option1, config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180);
            this._option2Button = new objects.Button(option2, config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180);
            this._option1Scene = opt1Scene;
            this._option2Scene = opt2Scene;
            this.start();
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
        public start(): void {
            // Add objects to the scene
            console.log("Game scene started");

            this.addChild(this._gameTitleLabel);
            this.addChild(this._gameTextLabel);
            this.addChild(this._gamePromptLabel);
            this.addChild(this._hr);

            // Create buttons for scene and add to Game Scene container. Register for onclick event
            this.addChild(this._option1Button);
            this.addChild(this._option2Button);

            this._option1Button.on("click", this._option1ButtonClick, this);
            this._option2Button.on("click", this._option2ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        /**
         * This function updates the objects contained in the game scene
         * 
         * @public
         * @method update
         * 
         * @memberOf Game
         * @return {void}
         */
        public update(): void {
            // Update objects
        }


        // PRIVATE FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This function changes the game to the left scene in the state machine design pattern
         * 
         * @private
         * @method _option1ButtonClick
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf Game
         */
        private _option1ButtonClick(event: createjs.MouseEvent) {
            scene = this._option1Scene;
            changeScene();
        }

        /**
         * This function changes the game to the right scene in the state machine design pattern
         * 
         * @private
         * @method _option2ButtonClick
         * @param {createjs.MouseEvent} event
         * 
         * @memberOf Game
         */
        private _option2ButtonClick(event: createjs.MouseEvent) {
            scene = this._option2Scene;
            changeScene();
        }
    }
}