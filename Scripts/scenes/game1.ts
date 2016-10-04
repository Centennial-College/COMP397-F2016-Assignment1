/**
 * @file game1.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the first decision level.
 * @version 0.5.2 - revised game.ts scenes 
 */
module scenes {
    /**
     * Game1 will be the scene at the first decision level that extends the scenes.Game class
     * 
     * @export
     * @class Game1
     * @extends {scenes.Game}
     */
    export class Game1 extends scenes.Game {
        /**
         * Creates an instance of Game1.
         * 
         * 
         * @memberOf Game1
         */
        constructor() {
            super("Forest of Origins", "It is too dark to see around you. However,\nyou notice there is some light up ahead\naround the corner.", "Stay", "GoOver", config.Scene.GAME2_1, config.Scene.GAME2_2);
        }
    }
}