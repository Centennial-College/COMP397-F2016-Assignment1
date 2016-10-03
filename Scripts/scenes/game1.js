var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file game1.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 3, 2016
 * @description: Game scene for the first decision level.
 * @version 0.5.0 - implemented first decision level of the game
 */
var scenes;
(function (scenes) {
    /**
     * Game1 will be the scene at the first decision level that extends the scenes.Game class
     *
     * @export
     * @class Game1
     * @extends {scenes.Game}
     */
    var Game1 = (function (_super) {
        __extends(Game1, _super);
        /**
         * Creates an instance of Game1.
         *
         *
         * @memberOf Game1
         */
        function Game1() {
            _super.call(this, "Forest of Origins", "It is too dark to see around you. However,\nyou notice there is some light up ahead\naround the corner.", "Stay", "GoOver");
        }
        return Game1;
    }(scenes.Game));
    scenes.Game1 = Game1;
})(scenes || (scenes = {}));
//# sourceMappingURL=game1.js.map