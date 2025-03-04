document.addEventListener("DOMContentLoaded", function (){
    let paragraphs = document.querySelectorAll("#main p");

    paragraphs.forEach(function (p){
        p.style.fontSize = "24px";
        p.style.color = "red";
    })
})