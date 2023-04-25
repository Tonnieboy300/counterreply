var currentQuestionNum = 1



begin = () => {
    localStorage.setItem("question1", "");
    window.location.href = "./question1.html";
}

question = () => {
    localStorage.setItem("question" + currentQuestionNum,document.getElementById("questionbox").value);
    document.getElementById("question1").innerHTML = localStorage.getItem("question" + currentQuestionNum);
    document.getElementById("questionbox").value = "";
}