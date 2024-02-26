 var timer = document.querySelector("#timer");
 var score = document.querySelector("#score");
 var mainQuestion = document.querySelector("#question-display");
 var mainAnswer = document.querySelector("#answer-display");
 var qaDisplay = document.querySelector("#display");
 var timerCount = 10;
 
 var startButton = document.querySelector(".button-start");
 var askedQustions = [];

 var scoreNum = 0;

 // Array of questions

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
                   Correct: "A"
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
                   Correct: "C"
                  }
                  ];




 //function renderQuestions (){

   //check to see if this length of asked questions is shorter then length of questions
// generate a random number and select that questions from the arrray
// check to see if that question has already been asked
// if yes, generate a new random number a
// check to see if this question has already been asked.
// repeat
// check to see if the time has run out, if yes end game


// if yes, end game
//



      
// after finishing change the 10 length back to questions.length

 function hasCommonElement(questions, askedQustions) {
   for (let i = 0; i < 11; i++) {
   if (!askedQustions.includes(questions[i])) {
      askedQustions.push(questions[i]);
      console.log(i);

      var asked = questions[i];


      
   var ques = document.createElement("h1");
   ques.id = "question"
   ques.textContent = questions[i].question;
   qaDisplay.append(ques);
 

   var questionA = document.createElement("h2");
   questionA.id = "answerA"
   questionA.textContent = questions[i].A;
   qaDisplay.append(questionA);
   questionA.addEventListener("click", ()=>{

      if ("A" == asked.Correct){
         scoreNum ++;
         score.textContent = scoreNum;

         document.querySelector("#display").remove();


         
         // clear qustions
         // add point done
         //ask new question
      }else {
         scoreNum --;
      }
   

   });

   var questionB = document.createElement("h2");
   questionB.id = "answerB"
   questionB.textContent = questions[i].B;
   qaDisplay.append(questionB);
   questionB.addEventListener("click", ()=>{

      if ("B" == asked.Correct){
         scoreNum ++;
         score.textContent = scoreNum;

         document.querySelector("#display").remove();


         
         // clear qustions
         // add point done
         //ask new question
      }else {
         scoreNum --;
      }

   });

   var questionC = document.createElement("h2");
   questionC.id = "answerC"
   questionC.textContent = questions[i].C;
   qaDisplay.append(questionC);
   questionC.addEventListener("click", ()=>{

      if ("C" == asked.Correct){
         scoreNum ++;
         score.textContent = scoreNum;

         document.querySelector("#display").remove();


         
         // clear qustions
         // add point done
         //ask new question
      }else {
         scoreNum --;
      }

   });

   var questionD = document.createElement("h2");
   questionD.id = "answerD"
   questionD.textContent = questions[i].D;
   qaDisplay.append(questionD);
   questionD.addEventListener("click", ()=>{

      if ("D" == asked.Correct){
         scoreNum ++;
         score.textContent = scoreNum;

         document.querySelector("#display").remove();


         
         // clear qustions
         // add point done
         //ask new question
      }else {
         scoreNum --;
      }

   
   });

   break;
   
}}}

 

 function startGame(){

   setInterval(function(){
      timerCount--;
      timer.textContent = timerCount;
      //console.log(timerCount);
  
  
   },1000);

 }



 startButton.addEventListener("click", function(){
   startGame();

 });

 hasCommonElement(questions, askedQustions);

