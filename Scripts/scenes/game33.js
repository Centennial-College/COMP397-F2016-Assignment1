var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file game33.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the third decision level.
 * @version 0.5.6 - implemented game 3-3
 */
var scenes;
(function (scenes) {
    /**
     * Game33 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the game2-2 node scene.
     *
     * @export
     * @class Game33
     * @extends {scenes.Game}
     */
    var Game33 = (function (_super) {
        __extends(Game33, _super);
        /**
         * Creates an instance of Game33.
         *
         *
         * @memberOf Game33
         */
        function Game33() {
            _super.call(this, "Island's Heart", "You arrive at the center of the island and\ndiscover both the portal to escape as well\nas the other person.", "Engage", "Negotiate", config.Scene.ENDING5, config.Scene.ENDING6);
        }
        return Game33;
    }(scenes.Game));
    scenes.Game33 = Game33;
})(scenes || (scenes = {}));
//# sourceMappingURL=game33.js.map