localStorage.setItem("text", "click it");

document.getElementById("test").innerHTML = localStorage.getItem("text");

doit = () => {
    localStorage.setItem("text", ":)");
    document.getElementById("test").innerHTML = localStorage.getItem("text");
}