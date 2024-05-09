 var timer = document.querySelector("#timer");
 var score = document.querySelector("#score");
 var newScore = document.querySelector("#new-score");
 var mainQuestion = document.querySelector("#question-display");
 var mainAnswer = document.querySelector("#answer-display");
 var qaDisplay = document.querySelector("#display");
 var timerCount = 60;
 var flag = true;
 var a = 0;
 var qaDisplay = document.querySelector("#display");
 var timerinterval;
 var startButton = document.querySelector(".button-start");
 var askedQustions = [];
 var scoreNum = 0;

 
function printHighScore(){
   console.log("first line");

   var scoreContainer = document.createElement("div");
   scoreContainer.className = "score-container";

   var title = document.createElement("h1");
   title.textContent = "High Score";
   scoreContainer.appendChild(title);

   for(let i = 0; i < localStorage.length; i++){
      let name = localStorage.key(i);
      let value = localStorage.getItem(name);

      var scoreDiv = document.createElement("div");
      scoreDiv.className = "high-score-container";
      scoreDiv.textContent = `${name} ${value}`;
      scoreContainer.appendChild(scoreDiv);
      console.log("inside for loop" + i);

   }
   document.body.appendChild(scoreContainer);
   console.log("last line");


}

 

 var questions = [{question: "What does the === operator do in JavaScript?",
                   A:"Assigns a value to a variable",
                   B:"Checks if two values are equal in value and type",
                   C:"Checks if two values are equal in value only",
                   D:"Converts a string to a number",
                   Correct: "B"
                  },
                   {question: "Which keyword is used to declare a variable in JavaScript?",
                   A:"var",
                   B:"let",
                   C:"const",
                   D:"all of the above",
                   Correct: "D"
                  },
                   {question: "What does the querySelector() method do in JavaScript?",
                   A:"Queries the document for elements that match a specified CSS selector",
                   B:"Queries the document for elements that have a specified ID",
                   C:"Queries the document for elements that have a specified class",
                   D:"Queries the document for elements that have a specified tag name",
                   Correct: "D"
                  },
                   {question: "What does the forEach() method do in JavaScript?",
                   A:"Loops through the properties of an object",
                   B:"Loops through the elements of an array",
                   C:"Loops through the characters of a string",
                   D:"None of the above",
                   Correct: "B"
                  }
                  ];






 function hasCommonElement(questions, askedQustions) {
   if ((timerCount < 1) || (askedQustions.length > 3)) {
      let person = prompt("Please enter you initials");

      localStorage.setItem(person, scoreNum)
      document.querySelector("#main-dispay").removeChild(startButton);
      alert("congratulation " + person + " you scored " + scoreNum + " points");
      clearInterval(timerinterval);

      printHighScore();


   
   }


   for (var i = 0; i < questions.length; i++) {

 

   if (flag) {
      flag = false;
      askedQustions.push(questions[a]);

      var asked = questions[a];


      
   var ques = document.createElement("h1");
   ques.id = "question"
   ques.textContent = questions[a].question;
   qaDisplay.append(ques);
   mainQuestion.remove();
   mainAnswer.remove();
 

   var questionA = document.createElement("h2");
   questionA.id = ""
   questionA.textContent = questions[a].A;
   qaDisplay.append(questionA);
   questionA.addEventListener("click", ()=>{

      if ("A" == asked.Correct){
         scoreNum ++;


         


         qaDisplay.innerHTML = "";

         



         ques.textContent = "";
         flag = true;
         a ++;

         hasCommonElement(questions, askedQustions);
      }else {
         scoreNum --;
         timerCount = timerCount - 5;
      }
   

   });

   var questionB = document.createElement("h2");
   questionB.id = "answerB"
   questionB.textContent = questions[a].B;
   qaDisplay.append(questionB);
   questionB.addEventListener("click", ()=>{

      if ("B" == asked.Correct){
         scoreNum ++;


         questionA.remove();
         questionB.remove();
         questionC.remove();
         questionD.remove();
         
         


         ques.textContent = "";
         flag = true;
         a ++;
         
         hasCommonElement(questions, askedQustions);




      }else {
         scoreNum --;
         timerCount = timerCount - 5;
      }

   });

   var questionC = document.createElement("h2");
   questionC.id = "answerC"
   questionC.textContent = questions[a].C;
   qaDisplay.append(questionC);
   questionC.addEventListener("click", ()=>{

      if ("C" == asked.Correct){
         scoreNum ++;

         questionA.remove();
         questionB.remove();
         questionC.remove();
         questionD.remove();        
         ques.remove();
         flag = true;
         a ++;
         hasCommonElement(questions, askedQustions);
      }else {
         scoreNum --;
         timerCount = timerCount - 5;
      }

   });

   var questionD = document.createElement("h2");
   questionD.id = "answerD"
   questionD.textContent = questions[a].D;
   qaDisplay.append(questionD);
   questionD.addEventListener("click", ()=>{

      if ("D" == asked.Correct){
         scoreNum ++;
 
        
         questionA.remove();
         questionB.remove();
         questionC.remove();
         questionD.remove();        
         ques.remove();
         flag = true;
         



         a ++;
         hasCommonElement(questions, askedQustions);
      }else {
         scoreNum --;
         timerCount = timerCount - 5;
      }

   
   });

  
}




   
}


}

 

 function startGame(){

   timerinterval = setInterval(function(){
      timerCount--;
      if (timerCount < 1) {
        
      clearInterval(timerinterval)
      alert("Game Over. You Scored " + scoreNum);
      }
      timer.textContent = "Time:" + timerCount;
   
  
   },1000);
   hasCommonElement(questions, askedQustions);

 }



 startButton.addEventListener("click", function(){
   startGame();

 });

 

