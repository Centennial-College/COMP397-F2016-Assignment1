var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file game31.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the third decision level.
 * @version 0.5.4 - implemented game 3-1
 */
var scenes;
(function (scenes) {
    /**
     * Game31 will be a scene at the second decision level that extends the scenes.Game class.
     * It follows from taking the left option in the game2-1 node scene.
     *
     * @export
     * @class Game31
     * @extends {scenes.Game}
     */
    var Game31 = (function (_super) {
        __extends(Game31, _super);
        /**
         * Creates an instance of Game31.
         *
         *
         * @memberOf Game31
         */
        function Game31() {
            _super.call(this, "Void of Darkness", "You discover the sheath of a sword lying in\nplace of where the light was once shining\nfrom. From inside the sheath, you can see\nan eerie darkness swirling around.", "LookInside", "Leave", config.Scene.ENDING1, config.Scene.ENDING2);
        }
        return Game31;
    }(scenes.Game));
    scenes.Game31 = Game31;
})(scenes || (scenes = {}));
//# sourceMappingURL=game31.js.map