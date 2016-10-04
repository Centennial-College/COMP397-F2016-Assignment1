/**
 * @file gamewin.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: This file is the gamewin scene for the game.
 * @version 0.6.7 - implemented GameOver5 and GameWin
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
var scenes;
(function (scenes) {
    /**
     * This is the scene which will be instantiated when the player reaches the ending5 node.
     *
     * @export
     * @class GameWin
     * @extends {objects.Scene}
     */
    var GameWin = (function (_super) {
        __extends(GameWin, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameWin() {
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
         * @memberOf GameWin
         * @return {void}
         */
        GameWin.prototype.start = function () {
            this._gameWinTitleLabel = new objects.Label("Congratulations", "60px Times New Roman", "#00008b", config.Screen.CENTER_X - 80, config.Screen.CENTER_Y - 150);
            this._gameWinTextLabel = new objects.Label("And off comes his/her head! As a fountain\nof blood errupts from the severed body,\nyou make a quick victory dance. You then\nenter the portal and safely make it back\nhome.", "30px Consolas", "#00008b", config.Screen.CENTER_X, config.Screen.CENTER_Y);
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
        };
        /**
         * This method runs when the scene needs to be updated
         *
         * @public
         * @method update
         *
         * @memberOf GameWin
         * @return {void}
         */
        GameWin.prototype.update = function () {
        };
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
        GameWin.prototype._playAgainButtonClick = function (event) {
            scene = config.Scene.MENU;
            changeScene();
        };
        return GameWin;
    }(objects.Scene));
    scenes.GameWin = GameWin;
})(scenes || (scenes = {}));
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//# sourceMappingURL=gamewin.js.map