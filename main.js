const quizData = [
  {
    question: "What is the capital of France?",
    a: "Paris",
    b: "London",
    c: "Berlin",
    d: "Rome",
    correct: "a"
  },
  {
    question: "What is the capital of Germany?",
    a: "Berlin",
    b: "Munich",
    c: "Hamburg",
    d: "Frankfurt",
    correct: "a"
  },
  {
    question: "What is the capital of Italy?",
    a: "Rome",
    b: "Milan",
    c: "Naples",
    d: "Turin",
    correct: "a"
  },
  {
    question: "What is the capital of Spain?",
    a: "Madrid",
    b: "Barcelona",
    c: "Valencia",
    d: "Seville",
    correct: "a"
  },
  {
    question: "What is the capital of Portugal?",
    a: "Lisbon",
    b: "Porto",
    c: "Braga",
    d: "Coimbra",
    correct: "a"
  },
  {
    question: "What is the capital of Greece?",
    a: "Athens",
    b: "Thessaloniki",
    c: "Piraeus",
    d: "Patras",
    correct: "a"
  },
  {
    question: "What is the capital of Turkey?",
    a: "Istanbul",
    b: "Ankara",
    c: "Izmir",
    d: "Bursa",
    correct: "b"
  },
  {
    question: "What is the capital of Poland?",
    a: "Warsaw",
    b: "Krakow",
    c: "Gdansk",
    d: "Wroclaw",
    correct: "a"
  },
  {
    question: "What is the capital of Russia?",
    a: "Moscow",
    b: "St. Petersburg",
    c: "Novosibirsk",
    d: "Yekaterinburg",
    correct: "a"
  },
  {
    question: "What is the capital of Ukraine?",
    a: "Kiev",
    b: "Kharkiv",
    c: "Odessa",
    d: "Dnipro",
    correct: "a"
  }
];





const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;



function loadQuiz(){
  deselectAnswer();
let currentQuizData = quizData[currentQuiz];

question.innerText = currentQuizData.question;
a_answer.innerText = currentQuizData.a;
b_answer.innerText = currentQuizData.b;
c_answer.innerText = currentQuizData.c;
d_answer.innerText = currentQuizData.d;

}

loadQuiz();


function getSelectAnswer(){
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
      console.log(answer);
    }
  });
return answer;
}


function deselectAnswer(){
  answerEls.forEach((answerEl)=>{
    answerEl.checked = false;
  });
}



submitBtn.addEventListener("click", () => {
  const answer = getSelectAnswer();

  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;


    if(currentQuiz < quizData.length){
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <div class="score-container">
      <h2 class="score"> u scored ${score}/${quizData.length} </h2>
      <button class="btn-play-again" onclick="location.reload()">Play Again</button>
      </div>
      
      `;
    }
  }
});













































// let arr = Array.from (["aa", "tt", "jj", "yy"]);
//  let txt = '';
// // let text = '';
// // for (let x of arr.entries()) {
// //   text += x + "\n";
// // }console.log(text);

// for(let x of arr){
//   txt += x + "<br>";

// }
// document.getElementById("demo").innerText = txt;






// let btn = document.getElementById('big');
// let counter = 1;


//   btn.addEventListener('click', function clickMe() {
//     // alert(counter + ', ' + 'hello');
//     document.getElementById('demo').innerText = counter + ', ' + 'Hello!'  + '<hr>';
//   counter++;
  
//   });

// let evenNum = [1, 2, 5, 8, 10];
// let txt = '';
// evenNum.forEach(function getEven(i){
//   if (i % 2 !== 0) {
//     txt += i + '<br>';}
// });
// document.getElementById("demo").innerText = txt;

  

// function add(){
// let x = 4;
//   let y = 2;
//   return x * y;
  
// }document.getElementById('demo').innerText = add();

// let btn = document.getElementById('button');
// let arr = [2, 22, 4, 3, 5, 6, 7, 8];
// let counter = 0;
// btn.addEventListener("click", function getEven() {
   
   

// for (let i = counter; i < arr.length; i++) {
//   let value = arr[i];
//   if (value % 2 === 0) {
//     document.getElementById('demo').innerText = value;
//     counter = i + 1;
//     return;

//   }
// }
// counter = 0;
// });



