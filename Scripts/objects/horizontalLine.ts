module objects {
    export class HorizontalLine extends createjs.Shape {
        // CONSTRUCTORS
        /**
         * Creates an instance of HorizontalLine.
         * 
         * 
         * @memberOf HorizontalLine
         */
        constructor() {
            super();
        }
        // use drawRect to draw a horizontal line divider between the title and the author credits
            let rect = new createjs.Shape()
    rect.graphics.beginStroke('#000')
    rect.graphics.drawRect(0, 0, config.Screen.WIDTH - 40, 1)
    rect.y = config.Screen.CENTER_Y + 90;
    rect.x = 20;
    stage.addChild(rect)
}
}