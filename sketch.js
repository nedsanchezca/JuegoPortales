var aux;
var auy;

var personaje;
var portal;
var direction = 90;


function setup() {
  createCanvas(800,400);
  personaje = new Personaje();
  portal = new Portal();
}

function draw() {
  background(0, 255, 255);
  portal.show();
  personaje.update();
  personaje.show();
  personajeRebotaPortal();
}

function personajeRebotaPortal(){
	if(personaje.x + 15 >= portal.x - 15 && personaje.y + 15 >= portal.y -15){
		//personaje.colision(floor(random(800)), floor(random(400)));
		personaje.x = 15;
		personaje.y = 15;
 	}
}

function Personaje(){
	this.x = 50;
	this.y = 50;
	this.xspeed = 0;
	this.yspeed = 0;

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.colision = function(aux, auy){
		this.x = aux;
		this.y = auy;
	}

	this.update = function (){
		if(this.x >= 800 - 15){
			this.x = this.x-10;
		} else if(this.y >= 400 - 15){
			this.y = this.y-10;
		} else if(this.x <= 15){
			this.x = this.x + 10;
		} else if(this.y <= 15){
			this.y = this.y + 10;
		}
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;

		personajeRebotaPortal();
	}

	this.show = function (){
		fill (255);
		ellipse(this.x, this.y, 30,30);
	}

}

function Portal(){
	aux = random(800);
	auy = random(400);
	this.x = aux;
	this.y = auy;

	this.show = function() {
		fill(255);
		ellipse(aux, auy, 50, 50);
	}
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		personaje.dir(0, -1);
	} else if(keyCode === DOWN_ARROW){
		personaje.dir(0, 1);
	} else if(keyCode === RIGHT_ARROW){
		personaje.dir(1, 0);
	} else if(keyCode === LEFT_ARROW){
		personaje.dir(-1, 0);
	}
}