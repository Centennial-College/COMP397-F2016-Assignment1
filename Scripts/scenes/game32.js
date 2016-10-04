var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file game32.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the third decision level.
 * @version 0.5.5 - implemented game 3-2
 */
var scenes;
(function (scenes) {
    /**
     * Game32 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the right option in the game2-1 node scene.
     *
     * @export
     * @class Game32
     * @extends {scenes.Game}
     */
    var Game32 = (function (_super) {
        __extends(Game32, _super);
        /**
         * Creates an instance of Game32.
         *
         *
         * @memberOf Game32
         */
        function Game32() {
            _super.call(this, "Island's Heart", "You arrive at the center of the island and\ndiscover both the portal to escape as well\nas the other person.", "Engage", "Negotiate", config.Scene.ENDING3, config.Scene.ENDING4);
        }
        return Game32;
    }(scenes.Game));
    scenes.Game32 = Game32;
})(scenes || (scenes = {}));
//# sourceMappingURL=game32.js.map