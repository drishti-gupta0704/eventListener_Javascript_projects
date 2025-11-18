// const questions = document.querySelectorAll(".question");

// questions.forEach((q) => {
//     q.addEventListener("click", () => {

//         const answer = q.nextElementSibling;
//         const arrow = q.querySelector(".arrow"); 
//         if (answer.style.display === "block") {
//             answer.style.display = "none";
//             arrow.style.transform = "rotate(0deg)";  
//         } else {
//             answer.style.display = "block";
//             arrow.style.transform = "rotate(180deg)"; 
//         }
//     });
// });

// Select all FAQ questions
const questions = document.querySelectorAll(".question");


questions.forEach((q) => {
    q.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== q) {
                item.nextElementSibling.style.display = "none"; // closing other answers
                item.querySelector(".arrow").style.transform = "rotate(0deg)"; // reset arrow
            }
        });

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


// writing search filter functionality code
const search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("id", "search");
search.setAttribute("placeholder", "Search FAQs...");
document.body.insertBefore(search, document.querySelector(".accordion"));

search.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".item").forEach((item) => {
        const text = item.querySelector(".question").innerText.toLowerCase();
        item.style.display = text.includes(term) ? "block" : "none";
    });
});
