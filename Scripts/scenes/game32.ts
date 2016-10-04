/**
 * @file gNegotiateame32.ts
 * @Negotiateauthor Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the second decision level.
 * @version 0.5.5 - implemented game 3-2
 */
module scenes {
    /**
     * Game32 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the game2-1 node scene.
     * 
     * @export
     * @class Game32
     * @extends {scenes.Game}
     */
    export class Game32 extends scenes.Game {
        /**
         * Creates an instance of Game32.
         * 
         * 
         * @memberOf Game32
         */
        constructor() {
            super("Island's Heart", "You arrive at the center of the island and\ndiscover both the portal to escape as well\nas the other person.", "Engage", "Negotiate", config.Scene.ENDING3, config.Scene.ENDING4);
        }
    }
}