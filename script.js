const quizdb = [{
    question: "Q1: Who is the father of C language ?",
    a: " Steve Jobs",
    b: "James Gosling",
    c: " Dennis Ritchie",
    d: "Rasmus Lerdorf",
    ans: "ans3"
}, {
    question: "Q2:Which of the following is not a valid C variable name ?",
    a: "int number",
    b: " float rate",
    c: "int variable_count",
    d: "int $main",
    ans: "ans4"
}, {
    question: "Q3: All keywords in C are in ____________ ",
    a: " LowerCase letters",
    b: "UpperCase letters",
    c: "UpperCase letters",
    d: "None of the mentioned",
    ans: "ans1"
}, {
    question: "Q4:Which of the following is true for variable names in C ?",
    a: "They can contain alphanumeric characters as well as special characters",
    b: "It is not an error to declare a variable to be one of the keywords(like goto, static)",
    c: "Variable names cannot start with a digit",
    d: "Variable can be of any length",
    ans: "ans3"
}, {
    question: "Q5:Which is valid C expression? ?",
    a: " int my_num = 100,000;",
    b: "int my_num = 100000;",
    c: "int my num = 1000;",
    d: " int $my_num = 10000;",
    ans: "ans2"
}, {
    question: "Q6:Which of the following cannot be a variable name in C ?",
    a: "volatile",
    b: "true",
    c: "friend",
    d: "export",
    ans: "ans1"
}, {
    question: "Q7:What is short int in C programming ?",
    a: "The basic data type of C",
    b: "Qualifier",
    c: "Short is the qualifier and int is the basic data type",
    d: "All of the mentioned",
    ans: "ans3"
}, {
    question: "Q8:Which of the following declaration is not supported by C ?",
    a: "String str;",
    b: "char *str;",
    c: "float str = 3e2;",
    d: "Both String str; & float str = 3e2;",
    ans: "ans1"
}, {
    question: "Q9:Which keyword is used to prevent any changes in the variable within a C program ?",
    a: "immutable",
    b: "mutable",
    c: "const",
    d: "volatile",
    ans: "ans3"
}, {
    question: "Q10: What is the result of logical or relational expression in C ?",
    a: "True or False",
    b: " 0 or 1",
    c: "0 if an expression is false and any positive number if an expression is true",
    d: "None of the mentioned",
    ans: "ans2"
}
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizdb[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
        
    })
    return answer;
    
};

const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked =false);

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer === quizdb[questionCount].ans) {
        score++;
    };
    questionCount++;
    deselectAll();

    if (questionCount < quizdb.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = 
        `<h3> You Scored ${score}/${quizdb.length}  &#129321 </h3>
      <button class ="btn" onclick="location.reload()"> Play Again </button>
      `;
        showScore.classList.remove('scoreArea');
    }

});