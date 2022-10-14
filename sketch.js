var marks = [30,56,60,42,58];

function average () {
  //0+1+2+3+4 / 5
 var sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
 var average = sum/marks.length;
 console.log (average)
}
function setup() {
  createCanvas(400, 400);
average ();
}

function draw() {
  background(220);
}