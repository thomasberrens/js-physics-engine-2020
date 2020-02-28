const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht
let myPoint = new Point(500,200, 50, "blue");
myPoint.draw(context);

let myPoint2 = new Point(600,300, 25, "green");
myPoint2.draw(context);

let myPoint3 = new Point(700,400, 25, "black");
myPoint3.draw(context);