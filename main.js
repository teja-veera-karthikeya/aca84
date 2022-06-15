
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
img_width = 300;
img_height = 100;

var img_image="Alpkey.png";
var img_image2="Arrkey.png";
var img_image3="numkey.png";
var img_image4="otherkey.png";
var img_image5="spkey.png";

img_x = 230;
img_y = 200;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

function add() {
	img2_imgTag = new Image(); //defining a variable with a new image
	img2_imgTag.onload = uploadimg1; // setting a function, onloading this variable
	img2_imgTag.src = img_image2;   // load image
}

function uploadimg1() {

	ctx.drawImage(img2_imgTag, img_x, img_y, img_width, img_height);
}

function add() {
	img3_imgTag = new Image(); //defining a variable with a new image
	img3_imgTag.onload = uploadimg2; // setting a function, onloading this variable
	img3_imgTag.src = img_image3;   // load image
}

function uploadimg2() {

	ctx.drawImage(img3_imgTag, img_x, img_y, img_width, img_height);
}
function add() {
	img4_imgTag = new Image(); //defining a variable with a new image
	img4_imgTag.onload = uploadimg3; // setting a function, onloading this variable
	img4_imgTag.src = img_image4;   // load image
}

function uploadimg3() {

	ctx.drawImage(img4_imgTag, img_x, img_y, img_width, img_height);
}
function add() {
	img5_imgTag = new Image(); //defining a variable with a new image
	img5_imgTag.onload = uploadimg4; // setting a function, onloading this variable
	img5_imgTag.src = img_image5;   // load image
}

function uploadimg4() {

	ctx.drawImage(img5_imgTag, img_x, img_y, img_width, img_height);
}


//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown)
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)){
		//write a code to check the type of key pressed
		aplhabetkey(add());
		document.getElementById("d1").innerHTML = "You pressed aplhabet key";
		console.log("aplhabet key")
	}
    else if ((keyPressed >= 37 && keyPressed <= 40)) {
      arrowkey(add());
	  document.getElementById("d1").innerHTML = "You pressed arrow key";
	  console.log("arrow key")
	}
	else if ((keyPressed >= 48 && keyPressed <= 57)) {
		numberkey(add());
		document.getElementById("d1").innerHTML = "You pressed number key";
		console.log("number key")
	  }
	  else if ((keyPressed >= 17 && keyPressed <= 18) || (keyPressed = 27 )) {
		specialkey(add());
		document.getElementById("d1").innerHTML = "You pressed special key";
		console.log("special key")
	  }
	  else {
		otherkey(add());
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("other key")
	  }
}
function aplhabetkey() {
	//upload respective image with the message. 
  img_image="Alpkey.png";
  add();
}
function arrowkey() {
	 img_image2="Arrkey.png";
	add();
}
function numberkey() {
	img_image3="numkey.png";
	add();
}
function otherkey() {
	img_image4="otherkey.png";
	   add();
   }
function specialkey() {
	img_image5="spkey.png";
	add();
}


