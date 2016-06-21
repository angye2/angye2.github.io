

var bubbles = [];


function setup() {
	createCanvas(600,400);	
	
}

 function draw() {

 	background(0);
 	
 	for (var i = 0; i<bubbles.length;i++){

 		for (var j =0;j <bubbles.length; j++) {
 			if (i!=j & bubbles[i].intersects(bubbles[j])) {
 				bubbles[i].speedX=bubbles[i].speedX*-1;
 				bubbles[i].speedY=bubbles[i].speedY*-1;
 			}
 		}	
 	}

 	for (var j =0;j <bubbles.length; j++) {
 			
 				bubbles[j].move();
 				bubbles[j].display();
 			
 		}	

 	
 }

 function mousePressed(){
 	bubbles.push(new Bubble(mouseX,mouseY));
 }


 function Bubble(x,y) {

 	this.x=x;
 	this.y=y;
 	this.r=random(10,20);
 	
 	this.speedX = random(-2,2);
 	this.speedY = random(-2,2);

 	this.display=function() {
 		ellipse(this.x,this.y,this.r*2,this.r*2);


 	}
 

 	this.move = function() {

 		this.x=this.x+this.speedX;
 		this.y=this.y+this.speedY;
 		this.lifesapan = this.lifesapan - 1;

 		if ((this.x > width) || (this.x < 0)) {
 			this.speedX = this.speedX * -1;
 		}

 		if ((this.y > height) || (this.y <0)) {
 			this.speedY = this.speedY * -1;
 		}	

 	}

 	this.intersects = function(bub) {

 		 d = dist(this.x, this.y, bub.x, bub.y);
 		if (d < this.r + bub.r) {
 			return true;
 		}   else {
 			return false;
 		}
 	}

 }



 
