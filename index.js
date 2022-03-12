console.log("(FOTTBALL-QUIZ)")
console.log("Lets Start The Game:")
console.log("*************BEST OF LUCK************")
var readlineSync = require('readline-sync');
var Score =0;
function Play (question,Answer){
var username = readlineSync.question(question);
 

if(username==Answer )
{
  console.log ("Right Answer!")
  Score++;
  
}
else 
{
  console.log ( "Wrong Answer(X)")
  
}
}
Play("(Q1): Which country won the first ever world cups in 1930? ", "uruguay");
Play("(Q2): which country has won the most world cups ", "brazil");
Play("(Q3): The fastest goal scored in prier league history came in 7.69 ? ","shane long");
Play("(Q4): messi has won a recored number of Ballon d'or awards-how many(write a number) ","8");
Play("(Q5): which player holds the record for the most champions leauge winner's medals ","francisco gento");
Play("(Q6): In which year was the first European championship held","1960");
Play("(Q7): The most capped germany international of all the time? ","lothar matthaus" );
Play("(Q8):) what is the nickname of Borussia Monchengladbach ","die fohlen");
Play("(Q9): which club is associate wih 'Galacticos'","dog");
Play("(Q10): How many clubs competed in the inaugural Premier league season?","22")
console.log("***Your Total Score out of 10 is****:",Score)
console.log("THANK YOU")
