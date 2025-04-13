let question = document.querySelectorAll(".question");
question.forEach((ques)=>{
    ques.addEventListener("click",()=>{
        let answer = ques.nextElementSibling;
        answer.classList.toggle("active")
        ques.classList.toggle("active")
    })
})