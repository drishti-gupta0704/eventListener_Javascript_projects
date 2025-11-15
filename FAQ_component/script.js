const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
    q.addEventListener("click", () => {

        const answer = q.nextElementSibling;
        const arrow = q.querySelector(".arrow"); 
        if (answer.style.display === "block") {
            answer.style.display = "none";
            arrow.style.transform = "rotate(0deg)";  
        } else {
            answer.style.display = "block";
            arrow.style.transform = "rotate(180deg)"; 
        }
    });
});
