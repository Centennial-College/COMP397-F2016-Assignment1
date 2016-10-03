/**
 * @file config.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: September 20, 2016
 * @description: This file is used to store globally accessible values and states for the game.
 * @version 0.1.0
 */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

module config {
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTIONS: number = 1;
        public static GAME1: number = 1;
        public static GAME2_1: number = 1;
        public static GAME2_2: number = 1;
        public static GAME3_1: number = 1;
        public static GAME3_2: number = 1;
        public static GAME3_3: number = 1;
        public static GAME3_4: number = 1;
        public static ENDING1: number = 1;
        public static ENDING2: number = 1;
        public static ENDING3: number = 1;
        public static ENDING4: number = 1;
        public static GAMEOVER: number = 2;
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