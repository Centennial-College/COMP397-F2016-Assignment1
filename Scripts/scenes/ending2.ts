/**
 * @file ending2.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.4 - implemented GameOver2
 */
module scenes {
    /**
     * Ending2 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the right option in the 
     * game3-1 node scene.
     * 
     * @export
     * @class Ending2
     * @extends {scenes.Ending}
     */
    export class Ending2 extends scenes.Ending {
        /**
         * Creates an instance of Ending2.
         * 
         * 
         * @memberOf Ending2
         */
        constructor() {
            super("The Empty Heart", "As you arrive at the center of the island,\nyou see the portal vanish into thin air. The\nother person just managed to arrive a\nmoment earlier than you...", true);
        }
    }
}