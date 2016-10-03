var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var HorizontalLine = (function (_super) {
        __extends(HorizontalLine, _super);
        // CONSTRUCTORS
        /**
         * Creates an instance of HorizontalLine.
         *
         *
         * @memberOf HorizontalLine
         */
        function HorizontalLine() {
            _super.call(this);
        }
        return HorizontalLine;
    }(createjs.Shape));
    objects.HorizontalLine = HorizontalLine;
    // use drawRect to draw a horizontal line divider between the title and the author credits
    var rect = new createjs.Shape();
    rect.graphics.beginStroke('#000');
    rect.graphics.drawRect(0, 0, config.Screen.WIDTH - 40, 1);
    rect.y = config.Screen.CENTER_Y + 90;
    rect.x = 20;
    stage.addChild(rect);
})(objects || (objects = {}));
//# sourceMappingURL=horizontalLine.js.map