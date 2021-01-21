
this.addEventListener("DOMContentLoaded",()=>{
    let faqheader=document.querySelectorAll(".faqHeader")
    faqheader.forEach((question)=>{
        question.addEventListener("click",()=>{
            if(question.parentNode.classList.contains("active")){
                question.parentNode.classList.toggle("active")
            } else{
                faqheader.forEach((question)=>{
                    question.parentNode.classList.remove("active")
                })
                question.parentNode.classList.add("active")
            }
        })
    })
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    