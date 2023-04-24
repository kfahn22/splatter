// https://chat.openai.com/?model=text-davinci-002-render-sha

l

function setup() {
    createCanvas(400, 400);
    <script src="sketch.js"></script>
  }
  
  function draw() {
    background(220);
    
    // Generate a random splatter
    let splatterX = random(width);
    let splatterY = random(height);
    let splatterSize = random(10, 50);
  
    
    // Draw splatter marks
    fill(255, 0, 0); // Use red fill color
    noStroke(); // No stroke
    ellipse(splatterX, splatterY, splatterSize); // Draw ellipse at random coordinates
    ellipse(splatterX + random(-20, 20), splatterY + random(-20, 20), splatterSize * 0.8); // Draw smaller ellipse near the main one
    ellipse(splatterX + random(-20, 20), splatterY + random(-20, 20), splatterSize * 0.6); // Draw smaller ellipse near the main one
    ellipse(splatterX + random(-20, 20), splatterY + random(-20, 20), splatterSize * 0.4); // Draw smaller ellipse near the main one
  }
  