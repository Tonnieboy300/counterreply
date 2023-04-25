begin = () => {
    localStorage.clear();
    window.location.href = "./question.html";
}

questionStore = () => {
    localStorage.setItem("question",document.getElementById("questionbox").value);
    window.location.href = "./answerInput.html";
}

loadQuestion = () => {
    document.getElementById("askQuestion").innerHTML = localStorage.getItem("question");
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

counterRedirect = () => {
    window.location.href = "./counterInput.html"
}

counterSubmit = (answerNum) => {
    localStorage.setItem("counter" + answerNum, document.getElementById("counter" + answerNum).value)
    //checks if both have been submitted
    if (answerNum == "One"){
        localStorage.setItem("counterOneDone", "yes");
    }
    if (answerNum == "Two"){
        localStorage.setItem("counterTwoDone", "yes");
    }

    if (localStorage.getItem("counterOneDone") == "yes" && localStorage.getItem("counterTwoDone") == "yes"){
        localStorage.setItem("counterOneDone", "no");
        localStorage.setItem("counterTwoDone", "no");
        window.location.href = "./displayCounters.html";
    }
}

loadCounters = () => {
    loadQuestion();
    document.getElementById("answer1").innerHTML = localStorage.getItem("answerOne")
    document.getElementById("answer2").innerHTML = localStorage.getItem("answerTwo")
    document.getElementById("counter1").innerHTML = localStorage.getItem("counterOne")
    document.getElementById("counter2").innerHTML = localStorage.getItem("counterTwo")
}