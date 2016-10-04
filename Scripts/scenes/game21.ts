/**
 * @file game21.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the second decision level.
 * @version 0.5.2 - revised game.ts scenes
 */
module scenes {
    /**
     * Game21 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the first decision node game scene.
     * 
     * @export
     * @class Game1
     * @extends {scenes.Game}
     */
    export class Game21 extends scenes.Game {
        /**
         * Creates an instance of Game21.
         * 
         * 
         * @memberOf Game21
         */
        constructor() {
            super("Forest of Origins", "...Nothing happens. You become bored and\ndo 20 push-ups.\n\nThen the light suddenly vanishes!", "GoOver", "Leave", config.Scene.GAME3_1, config.Scene.GAME3_2);
        }
    }
}