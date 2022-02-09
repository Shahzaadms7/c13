var colors= ["white","green","red","blue","black"]
function setup() {
  createCanvas(innerWidth, innerHeight);

  background("white");
  
  header();
  for (i=0; i<colors.length;i++){
    console.log(colors[i]);
  }
}


function draw() {
    
}

//display header
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}
    

