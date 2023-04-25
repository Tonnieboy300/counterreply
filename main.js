var currentQuestionNum = 1



begin = () => {
    localStorage.clear();
    window.location.href = "./question.html";
}

questionStore = () => {
    localStorage.setItem("question" + currentQuestionNum,document.getElementById("questionbox").value);
    window.location.href = "./answerInput.html";
}

loadQuestion = () => {
    document.getElementById("askQuestion").innerHTML = localStorage.getItem("question" + currentQuestionNum);
}

answerSubmit = (answerNum) => {
    localStorage.setItem("answer" + answerNum, document.getElementById("answer" + answerNum).value)
    //checks if both have been submitted
    if (answerNum == "One"){
        localStorage.setItem("answerOneDone", "yes");
    }
    if (answerNum == "Two"){
        localStorage.setItem("answerTwoDone", "yes");
    }

    if (localStorage.getItem("answerOneDone") == "yes" && localStorage.getItem("answerTwoDone") == "yes"){
        localStorage.setItem("answerOneDone", "no");
        localStorage.setItem("answerTwoDone", "no");
        window.location.href = "./displayAnswers.html";
    }
}

loadAnswers = () => {
    loadQuestion();
    document.getElementById("answer1").innerHTML = localStorage.getItem("answerOne")
    document.getElementById("answer2").innerHTML = localStorage.getItem("answerTwo")
}