/* global line, color, vertex, triangle, beginShape, endShape, CLOSE, noStroke,mouseIsPressed, ellipse, random, width, height, strokeWeight, createCanvas, colorMode, HSB, background, rect, mouseX, mouseY, stroke, fill */

let c1, c2, c3 , c4;
let d1,d2,d3,d4;
let table;
let lamp1,lamp2,lamp3;
let lampshade;
let light;
let chain;
// p5 functions

function setup() {
  createCanvas(500, 600);
  d1 = color(44, 40, 75);
  d2=color(24,26,57);
  d3=color(3,6,11);
  d4=color(57,51,84);
  c1=color(234,163,86);
  c2 =color(179,86,37);
  c3= color(34,0,0);
  c4= color(255,200,119);
  light=false;
  chain =80;
  
}

function draw() {
  // if (light == false){
  // background(d1);
  // fill(d2)
  // noStroke();
  // table = rect(0,400,500,200);
  // fill(d3);
  // lamp1=rect(175,390,150,35);
  // lamp2=rect(235,215,35,175);
  // lamp3=rect(190,chain, 15, 200);
  // fill(d4)
  // beginShape(lampshade)
  // vertex(185,60);
  // vertex(150,215);
  // vertex(360,215);
  // vertex(325,60);
  // vertex(185,60);
  // vertex(360,215);
  // endShape(CLOSE);
  // } else{
  //   background(c1);
  // fill(c2)
  // noStroke();
  // table = rect(0,400,500,200);
  // fill(c3);
  // lamp1=rect(175,390,150,35);
  // lamp2=rect(235,215,35,175);
  // lamp3=rect(190,chain, 15, 200);
  // fill(c4)
  // beginShape(lampshade)
  // vertex(185,60);
  // vertex(150,215);
  // vertex(360,215);
  // vertex(325,60);
  // vertex(185,60);
  // vertex(360,215);
  // endShape(CLOSE);
  // }
  lightordark()
  if(mouseX>190 && mouseX<205 && mouseY>215 && mouseY<280){
  chain=80;
  }
  
  
  
 // if (mouseIsPressed){
 //   if (light==false){ background(c1);
 //  fill(c2)
 //  noStroke();
 //  table = rect(0,400,500,200);
 //  fill(c3);
 //  lamp1=rect(175,390,150,35);
 //  lamp2=rect(235,215,35,175);
 //  lamp3=rect(190,120, 15, 200);
 //  fill(c4)
 //  beginShape(lampshade)
 //  vertex(185,60);
 //  vertex(150,215);
 //  vertex(360,215);
 //  vertex(325,60);
 //  vertex(185,60);
 //  vertex(360,215);
 //  endShape(CLOSE);
 //   light = true;
 //  } else {
 //  background(d1);
 //  fill(d2)
 //  noStroke();
 //  table = rect(0,400,500,200);
 //  fill(d3);
 //  lamp1=rect(175,390,150,35);
 //  lamp2=rect(235,215,35,175);
 //  lamp3=rect(190,80, 15, 200);
 //  fill(d4)
 //  beginShape(lampshade)
 //  vertex(185,60);
 //  vertex(150,215);
 //  vertex(360,215);
 //  vertex(325,60);
 //  vertex(185,60);
 //  vertex(360,215);
 //  endShape(CLOSE);
 //    light = false;
 //  }
 
  }
function mouseClicked() {
  
 if(mouseX>190 && mouseX<205 && mouseY>215 && mouseY<280){
   chain=120;
   if (!light){ 
    background(c1);
  fill(c2)
  noStroke();
  rect(0,400,500,200);
  fill(c3);
  rect(175,390,150,35);
  rect(235,215,35,175);
  rect(190,chain, 15, 200);
  fill(c4)
  beginShape(lampshade)
  vertex(185,60);
  vertex(150,215);
  vertex(360,215);
  vertex(325,60);
  vertex(185,60);
  vertex(360,215);
  endShape(CLOSE);
   light = true;
  } else if (light) {
  background(d1);
  fill(d2)
  noStroke();
  rect(0,400,500,200);
  fill(d3);
  rect(175,390,150,35);
  rect(235,215,35,175);
  rect(190,chain, 15, 200);
  fill(d4)
  beginShape(lampshade)
  vertex(185,60);
  vertex(150,215);
  vertex(360,215);
  vertex(325,60);
  vertex(185,60);
  vertex(360,215);
  endShape(CLOSE);
    light = false;
  }
 }
}

function lightordark(){
  if (light == false){
  background(d1);
  fill(d2)
  noStroke();
  table = rect(0,400,500,200);
  fill(d3);
  lamp1=rect(175,390,150,35);
  lamp2=rect(235,215,35,175);
  lamp3=rect(190,chain, 15, 200);
  fill(d4)
  beginShape(lampshade)
  vertex(185,60);
  vertex(150,215);
  vertex(360,215);
  vertex(325,60);
  vertex(185,60);
  vertex(360,215);
  endShape(CLOSE);
  } else{
    background(c1);
  fill(c2)
  noStroke();
  table = rect(0,400,500,200);
  fill(c3);
  lamp1=rect(175,390,150,35);
  lamp2=rect(235,215,35,175);
  lamp3=rect(190,chain, 15, 200);
  fill(c4)
  beginShape(lampshade)
  vertex(185,60);
  vertex(150,215);
  vertex(360,215);
  vertex(325,60);
  vertex(185,60);
  vertex(360,215);
  endShape(CLOSE);
  }
}