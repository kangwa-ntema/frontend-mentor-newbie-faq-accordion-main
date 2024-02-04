/* const questions = document.querySelectorAll(".question");
console.log(questions[1].innerHTML)

for(i=0; i<=questions.length; i++){
    questions[i].addEventListener('click', function(){

        if(questions[i].classList.contains('active')){
            this.classList.remove('active')  
        } else {
            this.classList.add('active')  
        }
    })
} */


const askedQuestions = document.querySelectorAll(".asked_question");

askedQuestions.forEach((item, index) => {
    let question = item.querySelector('.question');
    question.addEventListener('click', () => {
        item.classList.toggle("active");

        let questionAnswer = item.querySelector(".question_answer");
        let questionIconClosed = item.querySelector("span");
        console.log(questionIconClosed);
        if(item.classList.contains('active')){
            questionAnswer.style.height = `${questionAnswer.scrollHeight}px`
            item.querySelector("span").classList.replace('question_icon_closed', "question_icon_open");
        } else {
            questionAnswer.style.height = "0px";
            item.querySelector("span").classList.replace('question_icon_open', "question_icon_closed");
            
        }
        removeOpen(index)
    })
})

function removeOpen(index1){
 askedQuestions.forEach((item2, index2) => {
     if(index1 != index2){
         item2.classList.remove("active");

         let ans = item2.querySelector(".question_answer");
         ans.style.height = "0px";
         item2.querySelector("span").classList.replace('question_icon_open', "question_icon_closed");
     }
 })
}