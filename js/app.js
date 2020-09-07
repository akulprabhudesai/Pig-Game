
var activePlayer, score, currentScore, isPlaying,old;

begin();
 
//adding event listener on button click with anonymous fn as it not to be reused anywhere else
document.querySelector(".btn-roll").addEventListener("click", function(){
if(isPlaying){
 var diceDom = document.querySelector(".dice");
 var dice = Math.floor(Math.random() * 6) + 1;
 old = dice;
 if(old === 6 && dice === 6){
 	score[changePlayer] = 0;
 	document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
 	changePlayer();
 } 
 diceDom.src = "images/dice-" + dice + ".png";
 diceDom.style.display = "block";
 currentScore = currentScore + dice;
 if(dice === 1)	changePlayer();
 document.getElementById("current-" + activePlayer).textContent = currentScore;
}	
 
 });

document.querySelector(".btn-hold").addEventListener("click", function(){
if(isPlaying){
	score[activePlayer] = score[activePlayer] + currentScore;
 document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
 document.getElementById("score-" + activePlayer).textContent = score[activePlayer];
 if(score[activePlayer] >= 100){
  document.getElementById("name-" + activePlayer).textContent = "WINNER..!!";
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
  isPlaying = false;
 }
 else changePlayer();
}	
 
});


document.querySelector(".btn-new").addEventListener("click",begin );

function changePlayer(){
if(isPlaying){
 document.querySelector(".player-1-panel").classList.toggle("active");
 document.querySelector(".player-0-panel").classList.toggle("active");
 document.getElementById("current-" + activePlayer).textContent = 0;
 currentScore = 0;
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 document.querySelector(".dice").style.display = "none";
}
}

function begin(){
isPlaying = true;
activePlayer = 0;
score = [0,0];
currentScore = 0;
document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.add("active");
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
}
