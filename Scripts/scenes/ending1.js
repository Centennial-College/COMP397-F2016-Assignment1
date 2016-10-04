var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file ending1.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Ending scene for the results level.
 * @version 0.6.2 - implemented Ending1
 */
var scenes;
(function (scenes) {
    /**
     * Ending1 will be a scene at the lowest level in the state machine design pattern
     * that extends the scenes.Game class. It follows from taking the left option in the
     * game3-1 node scene.
     *
     * @export
     * @class Ending1
     * @extends {scenes.Ending}
     */
    var Ending1 = (function (_super) {
        __extends(Ending1, _super);
        /**
         * Creates an instance of Ending1.
         *
         *
         * @memberOf Ending1
         */
        function Ending1() {
            _super.call(this, "The Residuum", "As you bring the sheath closer to your eye,\nthe darkness inside begins to rapidly swirl\nand suddenly expands!", true);
        }
        return Ending1;
    }(scenes.Ending));
    scenes.Ending1 = Ending1;
})(scenes || (scenes = {}));
//# sourceMappingURL=ending1.js.map