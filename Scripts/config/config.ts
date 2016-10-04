/**
 * @file config.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: This file is used to store globally accessible values and states for the game.
 * @version 0.5.4 - implemented game 3-1
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module config {
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTIONS: number = 1;
        public static GAME1: number = 2;
        public static GAME2_1: number = 3;
        public static GAME2_2: number = 4;
        public static GAME3_1: number = 5;
        public static GAME3_2: number = 6;
        public static GAME3_3: number = 7;
        public static GAME3_4: number = 8;
        public static ENDING1: number = 9;
        public static ENDING2: number = 10;
        public static ENDING3: number = 11;
        public static ENDING4: number = 12;
        public static ENDING5: number = 13;
        public static ENDING6: number = 14;
        public static ENDING7: number = 15;
        public static ENDING8: number = 16;
        public static GAMEOVER: number = 17;
        public static GAMEWIN: number = 18;
    }

    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }

    export class Game {
        public static FPS: number = 60;
    }
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */