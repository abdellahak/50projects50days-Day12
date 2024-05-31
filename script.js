let questionsButtons = document.querySelectorAll('.btnq');

questionsButtons.forEach(btn => {
    btn.onclick = function(){
        let answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('hide');
        let hidden = answer.classList.contains('hide');
        if(!hidden){
            this.style.transform = "rotate(-45deg)";
        }else{
            this.style.transform = "rotate(0deg)";
        }
    }
})