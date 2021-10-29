var path, pathImage;
var boy, boyAnim
var edges



function preload() {
  pathImage = loadImage("path.png")
  boyAnim = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup() {
  createCanvas(400, 400);
  path = createSprite(200, 200, 10, 10)
  path.addImage(pathImage)
  path.velocityY = 9
  boy = createSprite(200, 350, 10, 10)
  boy.addAnimation("running", boyAnim)
  boy.scale = 0.05
  edges = createEdgeSprites();
  boy.collide(edges)

}

function draw() {
  background(0);
  if (path.y > 400) {
    path.y = 0
  }
  boy.x = World.mouseX
  drawSprites();
}
