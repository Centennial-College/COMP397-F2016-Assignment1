var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending8.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 4, 2016
 * @description: Ending scene for the results level.
 * @ersion 1.0.0 - initial release; all paths are functional
 */
var scenes;
(function (scenes) {
    /**
     * Ending8 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the right option in the
     * game3-4 node scene.
     *
     * @export
     * @class Ending8
     * @extends {scenes.Ending}
     */
    var Ending8 = (function (_super) {
        __extends(Ending8, _super);
        /**
         * Creates an instance of Ending8
         *
         *
         * @memberOf Ending8
         */
        function Ending8() {
            _super.call(this, "The Sincere Plea", "Knowing that the other person is much\nstronger than yourself, you prostrate\nyourself on the ground. You try to convince\nhim/her that there may be a solution that\ncan allow both of you to safely make it\nback home...", true);
        }
        return Ending8;
    }(scenes.Ending));
    scenes.Ending8 = Ending8;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending8.js.map