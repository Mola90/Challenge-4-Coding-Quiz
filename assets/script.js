 var timer = document.querySelector("#timer");
 var score = document.querySelector("#score");
 var newScore = document.querySelector("#new-score");
 var mainQuestion = document.querySelector("#question-display");
 var mainAnswer = document.querySelector("#answer-display");
 var qaDisplay = document.querySelector("#display");
 var timerCount = 15;
 var flag = true;
 var a = 0;
 var qaDisplay = document.querySelector("#display");

 
 var startButton = document.querySelector(".button-start");
 var askedQustions = [];

 

 var scoreNum = 0;

 


 

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
      console.log("this is you're score" + person);

      localStorage.setItem(person, scoreNum)
      document.querySelector("#main-dispay").removeChild(startButton);
      alert("congratulation " + person + " you scored " + scoreNum + " points");

   
   }


   for (var i = 0; i < questions.length; i++) {

 

      console.log("for loop" + i);
   if (flag) {
      flag = false;
      askedQustions.push(questions[a]);
      console.log(i);

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
         console.log("score::");
         scoreNum ++;
         console.log("score::"+scoreNum);


         


         qaDisplay.innerHTML = "";

         

         console.log("this is the line after new question asked, in side click event");


         ques.textContent = "";
         flag = true;
         a ++;

         hasCommonElement(questions, askedQustions);
      }else {
         scoreNum --;
      }
   

   });

   var questionB = document.createElement("h2");
   questionB.id = "answerB"
   questionB.textContent = questions[a].B;
   qaDisplay.append(questionB);
   questionB.addEventListener("click", ()=>{

      if ("B" == asked.Correct){
         scoreNum ++;
         // score.textContent = scoreNum;

         // document.querySelector("#answerA").remove();
         // document.querySelector("#answerB").remove();
         // document.querySelector("#answerC").remove();
         // document.querySelector("#answerD").remove();

         questionA.remove();
         questionB.remove();
         questionC.remove();
         questionD.remove();
         
         


         ques.textContent = "";
         flag = true;
         a ++;
         
         hasCommonElement(questions, askedQustions);



         // document.querySelector("#display").remove();

         // var newDev = document.createElement("div");
         // newDev = 
         // var questionHeading = document.createElement("h1");
         // var answerHeading = document.createElement("h2");

         

         


         
         // clear qustions
         // add point done
         //ask new question
      }else {
         scoreNum --;
      }

   });

   var questionC = document.createElement("h2");
   questionC.id = "answerC"
   questionC.textContent = questions[a].C;
   qaDisplay.append(questionC);
   questionC.addEventListener("click", ()=>{

      if ("C" == asked.Correct){
         scoreNum ++;
         // score.textContent = scoreNum;

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
      }

   });

   var questionD = document.createElement("h2");
   questionD.id = "answerD"
   questionD.textContent = questions[a].D;
   qaDisplay.append(questionD);
   questionD.addEventListener("click", ()=>{

      if ("D" == asked.Correct){
         scoreNum ++;
         console.log("testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt");
         //alert(askedQustions.length);

         // score.textContent = scoreNum;
        
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
      }

   
   });

  
}
//break;

if ((timerCount < 1) || (askedQustions.length > 4)) {
   let person = prompt("Please enter you initials");
   console.log("this is you're score" + person);

}

   
}


}

 

 function startGame(){

   setInterval(function(){
      timerCount--;
      timer.textContent = "Time:" + timerCount;
      //console.log(timerCount);
  
  
   },1000);
   hasCommonElement(questions, askedQustions);

 }



 startButton.addEventListener("click", function(){
   startGame();

 });

 

