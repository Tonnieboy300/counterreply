begin = () => {
  localStorage.clear();
  window.location.href = "./question.html";
};

questionStore = () => {
  localStorage.setItem(
    "question",
    document.getElementById("questionbox").value
  );
  window.location.href = "./answerInput.html";
};

loadQuestion = () => {
  document.getElementById("askQuestion").innerHTML =
    localStorage.getItem("question");
};

buttonChange = (answerNum) => {
  var currentButton = document.getElementById("button" + answerNum);
  currentButton.classList.remove("btn-primary");
  currentButton.classList.remove("btn-danger");
  currentButton.classList.add("btn-success");

  currentButton.innerHTML = "Submitted!";
};

answerSubmit = (answerNum, isCounter) => {
  if (isCounter == true){
    var inputType = "counter"
    var nextPage = "Counters"
  } else{
    var inputType = "answer"
    var nextPage = "Answers"
  }


  localStorage.setItem(
    inputType + answerNum,
    document.getElementById(inputType + answerNum).value
  );
  //checks if both have been submitted
  if (answerNum == 1) {
    localStorage.setItem("answerOneDone", "yes");
  }
  if (answerNum == 2) {
    localStorage.setItem("answerTwoDone", "yes");
  }

  if (
    localStorage.getItem("answerOneDone") == "yes" &&
    localStorage.getItem("answerTwoDone") == "yes"
  ) {
    localStorage.setItem("answerOneDone", "no");
    localStorage.setItem("answerTwoDone", "no");
    window.location.href = "./display"+nextPage+".html";
  }

  buttonChange(answerNum);
};

loadAnswers = () => {
  loadQuestion();
  document.getElementById("answer1").innerHTML =
    localStorage.getItem("answer1");
  document.getElementById("answer2").innerHTML =
    localStorage.getItem("answer2");
};

counterRedirect = () => {
  window.location.href = "./counterInput.html";
};

loadCounters = () => {
  loadQuestion();
  document.getElementById("answer1").innerHTML =
    localStorage.getItem("answer1");
  document.getElementById("answer2").innerHTML =
    localStorage.getItem("answer2");
  document.getElementById("counter1").innerHTML =
    localStorage.getItem("counter1");
  document.getElementById("counter2").innerHTML =
    localStorage.getItem("counter2");
};
