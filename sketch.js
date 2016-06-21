var colors = [];
var size;
var oscilador;
var notes = [];

function setup() {
	//createCanvas(800,600);
	//size = 100;
	createCanvas(window.innerWidth, window.innerHeight);
	colors [0]= color(255,160,39);
	colors [1]= color(0,142,255);
	colors [2]= color(255,16,0);
	colors [3]= color(255,16,0);
	colors [4]= color(255,226,11);
	frameRate(60);
	size = 100;

oscilador = new p5.Oscillator();
oscilador.setType('sine');
oscilador.freq(100);
oscilador.amp(0.2);
oscilador.start();


notes = [82.41,98.00,55.00,246.94,61.74,36.71,82.41]; 

delay = new p5.Delay();
delay.process(oscilador, .12, .7, 2300);
}




function draw() {
	
	//background(225);

	if (size<100){size++;}
	if (size==100){size=1;}
		fill(225,3);
		rect(0,0,width,height);

	if(mouseIsPressed){
		fill(colors[parseInt(random(5))]);
	}else fill(255);
	//size =  random(100);
  	ellipse(mouseX,mouseY,size,size);
  	ellipse(width-mouseX,mouseY,size,size);
	ellipse(mouseX,height-mouseY,size,size);
  	ellipse(width-mouseX,height-mouseY,size,size);

  	if (mouseX>0&&mouseX<=width/6){oscilador.freq(notes[0]);}
	if (mouseX>width/6.&&mouseX<=2*width/6){oscilador.freq(notes[1]);}
	if (mouseX>2*width/6.&&mouseX<=3*width/6){oscilador.freq(notes[2]);}
	if (mouseX>3*width/6.&&mouseX<=4*width/6){oscilador.freq(notes[3]);}
	if (mouseX>5*width/6.&&mouseX<=6*width/6){oscilador.freq(notes[4]);}
}

