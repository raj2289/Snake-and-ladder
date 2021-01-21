




var sum1=0;
var sum2=0;



var img = new Image();
img.src = "images/dice1.png";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img2=new Image();
img2.src="images/dice2.png";

function soundsplay(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();

}



document.getElementById("but1").addEventListener("click", player1);

function player1() {
    soundsplay("red");
  console.log("player1");
document.getElementById("but1").style.backgroundColor = "green";
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
  if(sum1+randomNumber1<=30)
sum1=sum1+randomNumber1;
console.log(sum1);
if(sum1==3)
  sum1=22;
if(sum1==5)
  sum1==8;
if(sum1==11)
  sum1=26;
if(sum1==20)
  sum1=29;
  if(sum1==17)
    sum1=4;
  if(sum1==19)
    sum1==7;
  if(sum1==21)
    sum1=9;
  if(sum1==27)
    sum1=1;

  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";//images/dice1.png - images/dice6.png

    document.getElementById("img1").setAttribute("src", randomImageSource1);
  document.getElementById("but1").style.backgroundColor = "white";
  if(randomNumber1!=6 )
  document.getElementById("but2").style.backgroundColor = "green";
  else {
    document.getElementById("but1").style.backgroundColor = "green";
  }
  if (sum1==30) { $("body").addClass("game-over");
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      document.querySelector("h2").innerHTML = "game over";
      soundsplay("wrong");
       $("h1").text("Gameover press any key to restart");
        }

if((sum1>=0&&sum1<=6)||(sum1>=13&&sum1<=18)||(sum1>=25&&sum1<=30))
{
if(sum1%6!=0){
  ctx.clearRect(0, 0, c.width, c.height);
   ctx.drawImage(img,10+((sum1)%6-1)*40,190-Math.floor(sum1/6)*40,10,10);}
else {  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(img,10+(5)*40,190-Math.floor(sum1/6-1)*40,10,10);
}}
else {
  if(sum1%6!=0){  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(img,210-(sum1%6-1)*40,190-Math.floor(sum1/6)*40,10,10);}
  else {  ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img,210-(5)*40,190-Math.floor(sum1/6-1)*40,10,10);
  }
}
}





document.getElementById("but2").addEventListener("click", player2);
function player2() {
    soundsplay("blue");
  console.log("player2");
  document.getElementById("but2").style.backgroundColor = "green";
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  if(sum2+randomNumber2<=30)
   sum2=sum2+randomNumber2;
   console.log(sum2);
   if(sum2==3)
     sum2=22;
   if(sum2==5)
     sum2==8;
   if(sum2==11)
     sum2=26;
   if(sum2==20)
     sum2=29;
     if(sum2==17)
       sum2=4;
     if(sum2==19)
       sum2==7;
     if(sum2==21)
       sum2=9;
     if(sum2==27)
       sum2=1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.getElementById("img2").setAttribute("src", randomImageSource2);
document.getElementById("but2").style.backgroundColor = "white";
  if(randomNumber2!=6 )
document.getElementById("but1").style.backgroundColor = "green";
else {
  document.getElementById("but2").style.backgroundColor = "green";
}
if (sum2==30) {

  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  document.querySelector("h2").innerHTML = "game over";
  soundsplay("wrong");
   $("h1").text("Gameover press any key to restart");
   $("body").addClass("game-over");
}
if((sum2>=0&&sum2<=6)||(sum2>=13&&sum2<=18)||(sum2>=25&&sum2<=30))
{
if(sum2%6!=0){  ctx.clearRect(0, 0, c.width, c.height);
   ctx.drawImage(img2,10+((sum2)%6-1)*40,180-Math.floor(sum2/6)*40,10,10);}
else {  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(img2,10+(5)*40,180-Math.floor(sum2/6-1)*40,10,10);
}}
else {
  if(sum2%6!=0){  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(img2,210-(sum2%6-1)*40,180-Math.floor(sum2/6)*40,10,10);}
  else {  ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(img2,210-(5)*40,180-Math.floor(sum2/6-1)*40,10,10);
  }
}
}
