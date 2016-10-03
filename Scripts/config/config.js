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
//# sourceMappingURL=config.js.map