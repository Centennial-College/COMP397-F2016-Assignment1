var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending5.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.7 - implemented GameOver5 and GameWin
 */
var scenes;
(function (scenes) {
    /**
     * Ending5 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the left option in the
     * game3-3 node scene.
     *
     * @export
     * @class Ending5
     * @extends {scenes.Ending}
     */
    var Ending5 = (function (_super) {
        __extends(Ending5, _super);
        /**
         * Creates an instance of Ending5
         *
         *
         * @memberOf Ending5
         */
        function Ending5() {
            _super.call(this, "The Final Bout", "With the Sword of Light in hand, you fend\noff the enemy's projectiles. As you quickly\napproach your target, you take a massive\nswing...", false);
        }
        return Ending5;
    }(scenes.Ending));
    scenes.Ending5 = Ending5;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending5.js.map