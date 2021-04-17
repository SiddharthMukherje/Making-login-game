var database
var playerCount
var player
var gameState=0
var form
var game



function setup(){
  database = firebase.database();
  createCanvas(500,500);




}

function draw(){
  background("white");
  
    
    drawSprites();
  
}
