this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".question")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
            console.log('acktive');
        }
        else{
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
        }

    }))
}) 