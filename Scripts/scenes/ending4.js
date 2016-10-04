var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending4.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.6 - implemented GameOver4; changed gameover canvas backgroundColor to red
 */
var scenes;
(function (scenes) {
    /**
     * Ending4 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the right option in the
     * game3-2 node scene.
     *
     * @export
     * @class Ending4
     * @extends {scenes.Ending}
     */
    var Ending4 = (function (_super) {
        __extends(Ending4, _super);
        /**
         * Creates an instance of Ending4.
         *
         *
         * @memberOf Ending4
         */
        function Ending4() {
            _super.call(this, "The Negotiation", "The other person agrees that he/she does\nnot think he/she could beat you in a 1-on-1\nfight. He/She decides to think of a solution\nalong with you...", true);
        }
        return Ending4;
    }(scenes.Ending));
    scenes.Ending4 = Ending4;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending4.js.map