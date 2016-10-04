var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending6.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 4, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.8 - implemented GameOver6
 */
var scenes;
(function (scenes) {
    /**
     * Ending6 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the right option in the
     * game3-3 node scene.
     *
     * @export
     * @class Ending6
     * @extends {scenes.Ending}
     */
    var Ending6 = (function (_super) {
        __extends(Ending6, _super);
        /**
         * Creates an instance of Ending6
         *
         *
         * @memberOf Ending6
         */
        function Ending6() {
            _super.call(this, "The Imploration", "The other person gets on his/her knees\nand prostrates before you. \"I will do\nanything you request of me! Please don't\nkill me o' mighty one!\"", true);
        }
        return Ending6;
    }(scenes.Ending));
    scenes.Ending6 = Ending6;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending6.js.map