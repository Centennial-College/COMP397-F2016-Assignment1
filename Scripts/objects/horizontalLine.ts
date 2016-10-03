/**
 * @file horizontalLine.ts
 * @author Kevin Ma kma45@my.centennialcollege.ca
 * @studentID 300867968
 * @date: October 2, 2016
 * @description: HorizontalLine class extends the createjs Shape class and provides a clean interface for creating line dividers
 * @version 0.3.2 - created HorizontalLine class
 */
module objects {
    export class HorizontalLine extends createjs.Shape {
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
        constructor(x: number, y: number, lineWidth: number = config.Screen.WIDTH - 40, lineColor: string = '#000') {
            super();
            this.graphics.beginStroke(lineColor)
            this.graphics.drawRect(0, 0, lineWidth, 1)
            this.y = y;
            this.x = x;
            stage.addChild(this);
        }
    }
}