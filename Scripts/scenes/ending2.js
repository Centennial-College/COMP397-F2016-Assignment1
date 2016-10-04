var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending2.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.4 - implemented GameOver2
 */
var scenes;
(function (scenes) {
    /**
     * Ending2 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the right option in the
     * game3-1 node scene.
     *
     * @export
     * @class Ending2
     * @extends {scenes.Ending}
     */
    var Ending2 = (function (_super) {
        __extends(Ending2, _super);
        /**
         * Creates an instance of Ending1.
         *
         *
         * @memberOf Ending2
         */
        function Ending2() {
            _super.call(this, "The Empty Heart", "As you arrive at the center of the island,\nyou see the portal vanish into thin air. The\nother person just managed to arrive a\nmoment earlier than you...", true);
        }
        return Ending2;
    }(scenes.Ending));
    scenes.Ending2 = Ending2;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending2.js.map