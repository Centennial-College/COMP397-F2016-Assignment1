/**
 * @file ending6.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 4, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.8 - implemented GameOver6
 */
module scenes {
    /**
     * Ending6 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the right option in the 
     * game3-3 node scene.
     * 
     * @export
     * @class Ending6
     * @extends {scenes.Ending}
     */
    export class Ending6 extends scenes.Ending {
        /**
         * Creates an instance of Ending6
         * 
         * 
         * @memberOf Ending6
         */
        constructor() {
            super("The Plea", "The other person gets on his/her knees\nand prostrates before you. \"I will do\nanything you request of me! Please don't\nkill me o' mighty one!\"", true);
        }
    }
}