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
	loading.style.top="100%";
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
	],
	paintCanvas=function(){
		ctx.fillStyle="black";
		ctx.fillRect(0,0,w,h);
	},
	 Food = function (){
		this.x = Math.round(Math.random() * (w-size)/size);
		this.y = Math.round(Math.random() * (h-size)/size);
	},f=new Food(),
	initSnake = function(){
		var length = 10;
		snake = [];
		for(var i=loength-1;i>=0;i--)
			snake.push({x:i,y:0});
	},
	paintSnake=function(){
		for(var i=0;i<snake.length;i++){
			var s=snake[i];
			ctx.fillStyle="white";
			ctx.fillRect(s.x*size,s.y*size,size,size);
		}
	},
	updateSnake=function(){
		//Update the position of the snake
		var head_x = snake[0].x,head_y = snake[0].y,tail=snake.pop();
		//Get the directions
		document.onkeydown = function(e){
			var key = e.keyCode;
			if(key==37&&dir!="right")setTimeout(function(){dir="left";},30);
			else if(key==38&&dir!="down")setTimeout(function(){dir="up";},30);
			else if(key==39&&dir!="left")setTimeout(function(){dir="right";},30);
			else if(key==40&&dir!="up")setTimeout(function(){dir="down";},30);
			if(key)e.preventDefault();
		}
		//Directions
		if(dir=="right")head_x++;
		else if(dir=="left")head_x--;
		else if(dir=="up")head_y--;
		else if(dir=="down")head_y++;
		//move snake
		tail.x=head_x;
		tail.y=head_y;
		snake.unshift(tail);
		if(head_x>=w/size||head_x<=-1||head_y>=h/size||head_y<=-1){
			if(over==0){
				hitType="wall";
				gameOver();
			}
			over++;
		}
		//Food cllision
		if(head_x==f.x&&head_y==f.y){
			coll=1;
			f=new Food();
			var tail = {x:head_x,y:head_y};
			snake.unshift(tail);
			score+=10;
			scoreText.innerHTML="Score: "+ score;
			foodMusic.pause();
			foodMusic.currentTime=0;
			foodMusic.play();
			//Increase speed
			if(speed<=45)speed++;
			clearInterval(game_loop);
			game_loop=setInterval(draw,1000/spped);
		}else{
			//check collision between snake parts 
			for(var j=1;j<snake.length;j++){
				var s=snake[j];
				if(head_x==s.x&&kead_y==s.y){
					if(over==0){
						hitType="self";
						gameorver();
					}
					over++;
				}
			}
		}
	},
	draw=function(){
		paintCanvas();
		paintSnake();
		updateSnake();
		// Draw food
		
	},
}
