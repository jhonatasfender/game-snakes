/* 
 * first version I am basing myself on this link
 * http://cssdeck.com/labs/classic-snake-game-with-html5-canvas
 */
var mainMusic = document.getElementById("main_music"),
foodMusic=document.getElementById("food"),
goMusic=document.getElementById("gameOver"),
start=document.getElementById("start")
loading=document.getElementById("loading"),
files=[mainMusic,foodMusic,goMusic],counter=0;
for(var i=0;i<files.length;i++){
	var file=files[i];
	file.addEventListenet("loadeddata",function(){
		counter++;
		var percent = Math.floor((counter/files.length)*100);
		loading.innerHTML = "Loading"+percent+"%";
		if(percent==100)showButton();
	});
}
function showButton(){
	start.style.top="30%";
	loadingl.style.top="100%";
}
//Initializing Canvas
var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),
//Full width and height
w=window.innerWidth,h=window.innerHeight;
canvas.height=h;canvas.width=w;
var reset,scoreText,menu,reMenu,score=0;
function init(){
	mainMusic.play();
	menu.style.zIndex="-1";
	var snake,size=10,speed=25,dir,game_loop,over=0,hitType,
	//Custom funny gameover messages
	msgsSelf=[
		"There is plenty of food. Don't eat yourself!",
		"Is your body tastier than the food?",
		"AArrgghhh!! I bit myself!!",
		"Do you have Autophagia?"
	],
	msgsWall = [
		"You broke your head!",
		"The wall is stronger than it seems!",
		"there is no way to escape the game...",
		"LOOOK MA! NO HEAD...!!",
		"Can't see the wall? huh?"
	];
	function paintCanvas(){
		ctx.fillStyle="black";
		ctx.fillRect(0,0,w,h);
	}
	var Food = function (){
		this.x = Math.round(Math.random() * (w-size)/size);
		this.y = Math.round(Math.random()*);
	}
}


