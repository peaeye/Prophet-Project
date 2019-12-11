var isTrueFalse;
//answers that the multiple choice questions could be in order
var possibleAnswers = [1, 1, 1, 1];

//the text of the question
var question;
//the index of the answer
var answerIndex = 2;

//possible keys to questions to ask
var questions = ["senior", "born", "mission", "job", "wife", "apostle"];
//2d arrays with prophets in first element and associated answer in questionindex + 1
var answers =
    [["Russell M. Nelson", "1", "1924", "None", "Surgeon", "Dantzel White", "1984"],
    ["Dallin H. Oaks", "2", "1932", "None", "Law Professor", "June Dixon", "1984"],
    ["M. Russell Ballard", "3", "1928", "Britain", "Salesman", "Barbara Bowen", "1985"],
    ["Jeffrey R. Holland", "4", "1940", "Britain", "President of BYU", "Patricia Terry", "1994"],
    ["Henry B. Eyring", "5", "1933", "None", "Professor at Stanford", "Kathleen Johnson", "1995"],
    ["Dieter F. Uchtdorf", "6", "1940", "None", "Pilot", "Harriet Reich", "2004"],
    ["David A. Bednar", "7", "1952", "Southern Germany", "President of Rick's College", "Susan Kae Robinson", "2004"],
    ["Quentin L. Cook", "8", "1940", "England", "Chairman of Sutter Health System", "Mary Gaddie", "2007"],
    ["D. Todd Christofferson", "9", "1945", "Argentina", "Law Clerk", "Kathy Jacob", "2008"],
    ["Neil L. Andersen", "10", "1951", "France", "Ad Agency Business", "Kathy Williams", "2009"],
    ["Ronald A. Rasband", "11", "1951", "New York", "President and COO of Huntsman Chemical Corp.", "Melanie Twitchell", "2015"],
    ["Gary E. Stevenson", "12", "1955", "Japan", "President and COO of ICON Fitness Inc.", "Lesa Jean Higley", "2015"],
    ["Dale G. Renlund", "13", "1952", "Sweden", "Professor of Medicine", "Ruth Lybbert", "2015"],
    ["Gerrit W. Gong", "14", "1953", "Taiwan", "Special Assistant to Undersecretary of State", "Susan Lindsay", "2018"],
    ["Ulisses Soares", "15", "1958", "Brazil Rio de Janeiro", "Accountant and Auditor", "Rosana Fernandes", "2018"]];



function loadNewQuestion() {
    possibleAnswers = [0, 0, 0, 0];
    var questionIndex = Math.floor(Math.random() * questions.length);
    var prophetIndex = Math.floor(Math.random() * answers.length);
    //if statements to put text into question based on questionindex and prophet chosen
    if (questions[questionIndex] == "born") {
        question = "What year was " + answers[prophetIndex][0] + " born?";
    }
    else if (questions[questionIndex] == "senior") {
        question = "Where does " + answers[prophetIndex][0] + " rank on the seniority list?";
    }
    else if (questions[questionIndex] == "mission") {
        question = "Which mission did " + answers[prophetIndex][0] + " serve?";
    }
    else if (questions[questionIndex] == "job") {
        question = "Which one was a job that " + answers[prophetIndex][0] + " worked in?";
    }
    else if (questions[questionIndex] == "wife") {
        question = "Who is " + answers[prophetIndex][0] + "'s wife (first if multiple)?";
    }
    else if (questions[questionIndex] == "apostle") {
        question = "When did " + answers[prophetIndex][0] + " get called as an apostle?";
    }

    document.getElementById("question").innerHTML = question;

    //get a random answerindex to be the correct answer
    answerIndex = Math.floor(Math.random() * 4);

    //temp answer var to store real answer gotten from answers array
    var answer = 0;
    var i = 0;
    while (possibleAnswers[0] == 0) {
        i++;
        if (i > 100) {
            break;
        }
        var rand = Math.floor(Math.random() * answers.length);
        if (answerIndex == 0) {
            answer = answers[prophetIndex][questionIndex + +1];
            document.getElementById("answer1").innerHTML = answer;
            possibleAnswers[0] = answer;
            break;
        }
        answer = answers[rand][questionIndex + +1];
        if (possibleAnswers.includes(answer) == false) {
            document.getElementById("answer1").innerHTML = answer;
            possibleAnswers[0] = answer;
            break;
        }
    }

    while (possibleAnswers[1] == 0) {
        i++;
        if (i > 100) {
            break;
        }
        var rand = Math.floor(Math.random() * answers.length);
        if (answerIndex == 1) {
            answer = answers[prophetIndex][questionIndex + +1];
            document.getElementById("answer2").innerHTML = answer;
            possibleAnswers[1] = answer;
            break;
        }
        answer = answers[rand][questionIndex + +1];
        if (possibleAnswers.includes(answer) == false) {
            document.getElementById("answer2").innerHTML = answer;
            possibleAnswers[1] = answer;
            break;
        }
    }

    while (possibleAnswers[2] == 0) {
        i++;
        if (i > 100) {
            break;
        }
        var rand = Math.floor(Math.random() * answers.length);
        if (answerIndex == 2) {
            answer = answers[prophetIndex][questionIndex + +1];
            document.getElementById("answer3").innerHTML = answer;
            possibleAnswers[2] = answer;
            break;
        }
        answer = answers[rand][questionIndex + +1];
        if (possibleAnswers.includes(answer) == false) {
            document.getElementById("answer3").innerHTML = answer;
            possibleAnswers[2] = answer;
            break;
        }
    }

    while (possibleAnswers[3] == 0) {
        i++;
        if (i > 100) {
            break;
        }
        var rand = Math.floor(Math.random() * answers.length);
        if (answerIndex == 3) {
            answer = answers[prophetIndex][questionIndex + +1];
            document.getElementById("answer4").innerHTML = answer;
            possibleAnswers[3] = answer;
            break;
        }
        answer = answers[rand][questionIndex + +1];
        if (possibleAnswers.includes(answer) == false) {
            document.getElementById("answer4").innerHTML = answer;
            possibleAnswers[3] = answer;
            break;
        }
    }
    console.log(possibleAnswers);
}

function answer1Clicked() {
    if (answerIndex == 0) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
    }
}

function answer2Clicked() {
    if (answerIndex == 1) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
    }
}

function answer3Clicked() {
    if (answerIndex == 2) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
    }
}

function answer4Clicked() {
    if (answerIndex == 3) {
        alert("Correct!");
    }
    else {
        alert("Incorrect!");
    }
}