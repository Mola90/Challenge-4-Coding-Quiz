 var timer = document.querySelector("#timer");
 var timerCount = 10;
 var startButton = document.querySelector(".button-start");

 // count down timer function
 console.log(timerCount);

 function startGame(){

   setInterval(function(){
      timerCount--;
      timer.textContent = timerCount;
      console.log(timerCount);
  
  
   },1000);

 }



 startButton.addEventListener("click", function(){
   startGame();

 });
