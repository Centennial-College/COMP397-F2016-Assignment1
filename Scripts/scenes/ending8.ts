/**
 * @file ending8.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 4, 2016
 * @description: Ending scene for the results level.
 * @ersion 1.0.0 - initial release; all paths are functional
 */
module scenes {
    /**
     * Ending8 will be a scene at the lowest level in the state machine design pattern 
     * that extends the scenes.Game class. It follows from taking the right option in the 
     * game3-4 node scene.
     * 
     * @export
     * @class Ending8
     * @extends {scenes.Ending}
     */
    export class Ending8 extends scenes.Ending {
        /**
         * Creates an instance of Ending8
         * 
         * 
         * @memberOf Ending8
         */
        constructor() {
            super("The Sincere Plea", "Knowing that the other person is much\nstronger than yourself, you prostrate\nyourself on the ground. You try to convince\nhim/her that there may be a solution that\ncan allow both of you to safely make it\nback home...", true);
        }
    }
}