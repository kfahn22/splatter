// https://chat.openai.com/?model=text-davinci-002-render-sha

let splatters = [];

function setup() {
  createCanvas(600, 600);

  background(255,0,0);
  // Generate a random splatter
  let splatterX = random(width);
  let splatterY = random(height);
  let xSize = random(10, 50);
  let ySize = random(10, 50);
  splatters.push(new Splatter(splatterX, splatterY, xSize, ySize));
  splatters[0].splat();
  splatters[0].show();
}

function draw() {
  

}