/**
 * @file ending1.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.2 - implemented Ending1 
 */
module scenes {
    /**
     * Ending1 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the left option in the 
     * game3-1 node scene.
     * 
     * @export
     * @class Ending1
     * @extends {scenes.Ending}
     */
    export class Ending1 extends scenes.Ending {
        /**
         * Creates an instance of Ending1.
         * 
         * 
         * @memberOf Ending1
         */
        constructor() {
            super("The Residuum", "As you bring the sheath closer to your eye,\nthe darkness inside begins to rapidly swirl\nand suddenly expands!", true);
        }
    }
}