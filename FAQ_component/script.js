
const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
    q.addEventListener("click", () => {
        
        const answer = q.nextElementSibling;

  
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});
