/**
 * @file ending5.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.7 - implemented GameOver5 and GameWin
 */
module scenes {
    /**
     * Ending5 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the left option in the 
     * game3-3 node scene.
     * 
     * @export
     * @class Ending5
     * @extends {scenes.Ending}
     */
    export class Ending5 extends scenes.Ending {
        /**
         * Creates an instance of Ending5
         * 
         * 
         * @memberOf Ending5
         */
        constructor() {
            super("The Final Bout", "With the Sword of Light in hand, you fend\noff the enemy's projectiles. As you quickly\napproach your target, you take a massive\nswing...", false);
        }
    }
}