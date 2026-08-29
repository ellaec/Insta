function setup() {
  createCanvas(400, 400);
  capture=createCapture(VIDEO);
  capture.size(400,300)
  noStroke();
  capture.loadPixels()
}

function draw() {
  background(150,70,150);
  capture.loadPixels();
  var stepSize = 3;
  for (var x = 0; x < capture.width; x += stepSize){
    for (var y =0; y < capture.height; y += stepSize){
      var index = ((y*capture.width)+x)*4;
      var redVal = capture.pixels[index];
      var greenVal = capture.pixels[index +1];
      var blueVal = capture.pixels[index +2];
      fill(redVal+100,greenVal,blueVal+100);
      ellipse(x,y,stepSize);
    }
    function setup() {
  
}

}

}


  