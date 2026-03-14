const { connect } = require("ngrok");

class Point {
  constructor(x_axis, y_axis) {
    this.x = x_axis;
    this.y = y_axis;
  }

  getDistance(targetPoint) {
    return Math.sqrt(
      Math.pow(targetPoint.x - this.x, 2) + Math.pow(targetPoint.y - this.y, 2),
    );
  }
}

class Circle {
  constructor(radius, xCenter, yCenter) {
    this.radius = radius;
    this.center_point = new Point(xCenter, yCenter);
  }

  point_in_circle(target) {
    return this.center_point.getDistance(target) <= this.radius * 2;
  }

  rect_in_circle(rectanglePoints) {
    for (let index = 0; index < rectanglePoints.length; index++) {
      const recPoint = rectanglePoints[index];
      if (!this.point_in_circle(recPoint)) {
        return false;
      }
    }

    return true;
  }

  rect_circle_overlap(rectanglePoints) {
    for (let index = 0; index < rectanglePoints.length; index++) {
      const recPoint = rectanglePoints[index];
      if (this.point_in_circle(recPoint)) {
        return true;
      }
    }

    return false;
  }
}

myCircle = new Circle(75, 150, 100);
testPoint = new Point(10, 15);
rectangle = [
  new Point(55, 150),
  new Point(55, 140),
  new Point(75, 150),
  new Point(75, 140),
];
console.log(myCircle.point_in_circle(testPoint));
console.log(myCircle.rect_in_circle(rectangle));
console.log(myCircle.rect_circle_overlap(rectangle));
