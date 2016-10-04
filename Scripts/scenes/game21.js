var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file game21.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the second decision level.
 * @version 0.5.2 - revised game.ts scenes
 */
var scenes;
(function (scenes) {
    /**
     * Game21 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the first decision node game scene.
     *
     * @export
     * @class Game1
     * @extends {scenes.Game}
     */
    var Game21 = (function (_super) {
        __extends(Game21, _super);
        /**
         * Creates an instance of Game21.
         *
         *
         * @memberOf Game21
         */
        function Game21() {
            _super.call(this, "Forest of Origins", "...Nothing happens. You become bored and\ndo 20 push-ups.\n\nThen the light suddenly vanishes!", "GoOver", "Leave", config.Scene.GAME3_1, config.Scene.GAME3_2);
        }
        return Game21;
    }(scenes.Game));
    scenes.Game21 = Game21;
})(scenes || (scenes = {}));
//# sourceMappingURL=game21.js.map