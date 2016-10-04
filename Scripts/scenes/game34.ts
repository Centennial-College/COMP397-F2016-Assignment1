/**
 * @file game34.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the third decision level.
 * @version 0.6.0 - finished implementing all game scenes
 */
module scenes {
    /**
     * Game34 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the right option in the game2-2 node scene.
     * 
     * @export
     * @class Game34
     * @extends {scenes.Game}
     */
    export class Game34 extends scenes.Game {
        /**
         * Creates an instance of Game34.
         * 
         * 
         * @memberOf Game34
         */
        constructor() {
            super("Island's Heart", "You arrive at the center of the island and\ndiscover both the portal to escape as well\nas the other person.", "Engage", "Negotiate", config.Scene.ENDING7, config.Scene.ENDING8);
        }
    }
}