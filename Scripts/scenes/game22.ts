/**
 * @file game22.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the second decision level.
 * @version 0.5.3 - implemented game 2-2
 */
module scenes {
    /**
     * Game22 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the right option in the first decision node game scene.
     * 
     * @export
     * @class Game22
     * @extends {scenes.Game}
     */
    export class Game22 extends scenes.Game {
        /**
         * Creates an instance of Game21.
         * 
         * 
         * @memberOf Game22
         */
        constructor() {
            super("Mysterious Light", "You approach the light source. You\ndiscover a sword that is emitting radiant\nlight from its blade.", "TakeIt", "Leave", config.Scene.GAME3_3, config.Scene.GAME3_4);
        }
    }
}