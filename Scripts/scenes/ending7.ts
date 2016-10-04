/**
 * @file ending7.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 4, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.9 - implemented GameOver7
 */
module scenes {
    /**
     * Ending7 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the right option in the 
     * game3-3 node scene.
     * 
     * @export
     * @class Ending7
     * @extends {scenes.Ending}
     */
    export class Ending7 extends scenes.Ending {
        /**
         * Creates an instance of Ending7
         * 
         * 
         * @memberOf Ending7
         */
        constructor() {
            super("The Butcher", "As you run rampantly towards your prey,\nyou manage to pick up a knife. The target\nquickly approaching is now right before\nyour eyes. You take a massive swing for\nhis/her neck...", true);
        }
    }
}