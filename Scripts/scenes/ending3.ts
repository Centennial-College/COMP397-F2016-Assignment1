/**
 * @file ending3.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.5 - implemented GameOver3
 */
module scenes {
    /**
     * Ending3 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the left option in the 
     * game3-2 node scene.
     * 
     * @export
     * @class Ending3
     * @extends {scenes.Ending}
     */
    export class Ending3 extends scenes.Ending {
        /**
         * Creates an instance of Ending3.
         * 
         * 
         * @memberOf Ending3
         */
        constructor() {
            super("The Fist Fight", "You are evenly matched with the other\nperson. You cannot overpower him/her and\nhe/she cannot kill you too. It has become a\nstalemate...", true);
        }
    }
}