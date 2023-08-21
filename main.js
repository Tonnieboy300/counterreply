const streamChannel = new BroadcastChannel("streamerModeChannel");

//check switch statement at line 110 for message number meanings

begin = () => {
  localStorage.clear();
  window.location.href = "./question.html";
};

beginStreamer = () => {
  localStorage.clear();
  window.open("./streamer/waiting.html")
  window.location.href = "./streamer/question.html";
};

questionStore = () => {
  localStorage.setItem(
    "question",
    document.getElementById("questionbox").value
  );
  window.location.href = "./answerInput.html";
};

questionStoreStream = () => {
  localStorage.setItem(
    "question",
    document.getElementById("questionbox").value
  );
  sendMessage(1)
  window.location.href = "./answerInput.html"
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

answerSubmitStream = (answerNum, isCounter) => {
  if (isCounter == true){
    var inputType = "counter"
    var messageNum = 3
    var nextPage = "./index.html"
  } else{
    var inputType = "answer"
    var messageNum = 2
    var nextPage = "./counterInput.html"
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
    sendMessage(messageNum);
    window.location.href = nextPage;
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

sendMessage = (message) => {
  streamChannel.postMessage(message);
  console.log(message)
}

streamChannel.onmessage = (event) => {
  switch(event.data) {
    case 1:
      window.location.href = "./displayQuestion.html"
      break;
    case 2:
      window.location.href = "./displayAnswers.html"
      break;
    case 3:
      window.location.href = "./displayCounters.html"
      break;
    case 4:
      window.location.href = "./waiting.html"
      break;
  }
}
