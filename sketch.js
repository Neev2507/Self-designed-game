var plane1;
function setup() {
  createCanvas(800,400);
  plane1 = new plane(200,200);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  plane1.display();
  drawSprites();
}