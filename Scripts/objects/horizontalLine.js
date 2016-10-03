var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @file horizontalLine.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: HorizontalLine class extends the createjs Shape class and provides a clean interface for creating line dividers
 * @version 0.3.2 - created HorizontalLine class
 */
var objects;
(function (objects) {
    var HorizontalLine = (function (_super) {
        __extends(HorizontalLine, _super);
        // CONSTRUCTORS
        /**
         * Creates an instance of HorizontalLine.
         *
         * @param {number} x
         * @param {number} y
         * @param {number} [lineWidth=config.Screen.WIDTH - 40]
         * @param {string} [lineColor='#000']
         *
         * @memberOf HorizontalLine
         */
        function HorizontalLine(x, y, lineWidth, lineColor) {
            if (lineWidth === void 0) { lineWidth = config.Screen.WIDTH - 40; }
            if (lineColor === void 0) { lineColor = '#000'; }
            _super.call(this);
            this.graphics.beginStroke(lineColor);
            this.graphics.drawRect(0, 0, lineWidth, 1);
            this.y = y;
            this.x = x;
            stage.addChild(this);
        }
        return HorizontalLine;
    }(createjs.Shape));
    objects.HorizontalLine = HorizontalLine;
})(objects || (objects = {}));
//# sourceMappingURL=horizontalLine.js.map