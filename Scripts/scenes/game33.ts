/**
 * @file game33.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the third decision level.
 * @version 0.5.6 - implemented game 3-3
 */
module scenes {
    /**
     * Game33 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the game2-2 node scene.
     * 
     * @export
     * @class Game33
     * @extends {scenes.Game}
     */
    export class Game33 extends scenes.Game {
        /**
         * Creates an instance of Game33.
         * 
         * 
         * @memberOf Game33
         */
        constructor() {
            super("Island's Heart", "You arrive at the center of the island and\ndiscover both the portal to escape as well\nas the other person.", "Engage", "Negotiate", config.Scene.ENDING5, config.Scene.ENDING6);
        }
    }
}