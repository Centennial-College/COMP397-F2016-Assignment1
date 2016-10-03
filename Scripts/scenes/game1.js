var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Game1 = (function (_super) {
        __extends(Game1, _super);
        function Game1() {
            _super.call(this, "Forest of Origins", "It is too dark to see around you. However,\nyou notice there is some light up ahead\naround the corner.", "Stay", "GoOver");
        }
        return Game1;
    }(scenes.Game));
    scenes.Game1 = Game1;
})(scenes || (scenes = {}));
//# sourceMappingURL=game1.js.map