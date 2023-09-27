const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';


//TODO: Variables for Part 2
let questions = [];
let correctAnswers = [];
let candidateAnswers =[];

let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = 'What is the minimum crew size for the ISS? ';

questions = [question, question2, question3, question4, question5];

let correctAnswer2 = "true";
let correctAnswer3 = "40";
let correctAnswer4 = "Trajectory";
let correctAnswer5 = "3";

correctAnswers = [correctAnswer, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i <= questions.length - 1; i++){
    candidateAnswers.push(input.question(questions[i]));
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i <= questions.length - 1; i++){
    if ((candidateAnswers[i].toLowerCase().trim()) === (correctAnswers[i].toLowerCase().trim())) {
      console.log(`Question ${i + 1}: ${questions[i]} 
      Correct!! You answered '${candidateAnswers[i]}' and the correct answer is '${correctAnswers[i]}'.\n`);
    } else {
      console.log(`Question ${i + 1}: ${questions[i]} 
      WRONG! You answered '${candidateAnswers[i]}' and the correct answer is '${correctAnswers[i]}'.\n `);
    }
    
  }


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let numOfCorrectAnswers = 0;
  for (let i = 0; i <= questions.length - 1; i++){
    if ((candidateAnswers[i].toLowerCase().trim()) === (correctAnswers[i].toLowerCase().trim())) {
      numOfCorrectAnswers += 1;
    }
    
  }
  grade = (numOfCorrectAnswers / questions.length) * 100;
  
  if (grade >= 80) {
    console.log(`Congratulations! You have passed the test with a score of ${grade}%!!! \n Status: PASS`);
  } else {
    console.log(`Sorry you have failed this quiz with a score of ${grade}%!!!\n Status: FAILED`);
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log('Hello,', candidateName,'Welcome!');
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};