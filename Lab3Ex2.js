function setup() {
  createCanvas(400, 400);
  stroke(220);
}
function draw(){
   background("Blue");
  if (mouseX < 100) {
    background("salmon");
  } 
  else if (mouseX >= 200){
    background('blue');
  }
else {background('paleturquoise')}
   drawHeart();{
 
}
}
  function drawHeart(){
  beginShape();
  fill(0);
  vertex(100, 100);
  vertex(150, 50);
  vertex(200, 100);
  vertex(250, 50);
  vertex(300, 100);
  vertex(300, 150);
  vertex(200, 300);
  vertex(100, 150);
  vertex(100, 100);
  endShape();
  }

