/**
 * @file ending4.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.6 - implemented GameOver4; changed gameover canvas backgroundColor to red
 */
module scenes {
    /**
     * Ending4 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the right option in the 
     * game3-2 node scene.
     * 
     * @export
     * @class Ending4
     * @extends {scenes.Ending}
     */
    export class Ending4 extends scenes.Ending {
        /**
         * Creates an instance of Ending4.
         * 
         * 
         * @memberOf Ending4
         */
        constructor() {
            super("The Negotiation", "The other person agrees that he/she does\nnot think he/she could beat you in a 1-on-1\nfight. He/She decides to think of a solution\nalong with you...", true);
        }
    }
}