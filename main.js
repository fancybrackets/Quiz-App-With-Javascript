const startButton = document.querySelector(".startbtn");
const wrapper = document.querySelector(".wrapper");
const rules = document.querySelector(".rules");
const exit = document.querySelector(".exit");

startButton.addEventListener("click" , () => {
startButton.style.display = "none" ; 
wrapper.style.display = "block" ;

});

exit.addEventListener("click" , () => {
startButton.style.display = "block" ; 
wrapper.style.display = "none" ;
});

document.querySelector(".continue").addEventListener("click" , () => {
    document.querySelector(".rules").style.display = "none";
    document.querySelector(".content").style.display =  "block";
    document.querySelector(".question1-wrapper").style.display ="block";
    document.querySelector("footer").style.display = "flex";
    document.querySelector(".animation").style.display = "block";
    document.querySelector(".animation").classList.add("animationActive");
    timerfunction() ; 
});
let questionCounter = 0 ;
let trueCount = 0 ;  
const animation =document.querySelector(".animation") ; 
const questionOptions =document.querySelectorAll(".question1-wrapper div , .question2-wrapper div , .question3-wrapper div , .question4-wrapper div ,  .question5-wrapper div");
questionOptions.forEach(option => {

    option.addEventListener("click" , () => {
        

        clearInterval(timer) ; 
        if(option.classList.contains("true") )  {
            console.log("true option");
            trueCount++ ; 
            option.style.backgroundColor = "lightgreen" ;
         
        }
        else {
         
            console.log("false option");
            option.style.backgroundColor ="#f8d7da" ; 
            const trueOptions = document.querySelectorAll(".question1-optionD.true , .question2-optionB.true , .question3-optionA.true , .question4-optionD.true, .question5-optionA.true ")
            trueOptions[questionCounter].style.backgroundColor = "lightgreen" ;
        }
        const options = document.querySelectorAll(".question1-wrapper div , .question2-wrapper div , .question3-wrapper div , .question4-wrapper div ,  .question5-wrapper div ") ; 
        for(let i = 0 ; i<options.length ; i++ ) {
            options[i].style.pointerEvents = "none" ; 
            }

            document.querySelector(".nextQue").style.display = "block" ;
            questionCounter++ ; 

            
            const width = window.getComputedStyle(animation).getPropertyValue("width");
            animation.style.width = width ; 
            document.querySelector(".animation").classList.remove("animationActive");
    });
})  
let clickCounter = 0 ;
document.querySelector(".nextQue").addEventListener("click" ,() => {
   

    if(clickCounter == 0 ) { 
    document.querySelector(".question1-wrapper").style.display ="none";
    document.querySelector(".question2-wrapper").style.display ="block";
    document.querySelector(".nextQue").style.display  = "none" ; 
     const question2Options = document.querySelectorAll(".question2-wrapper div ") ; 
     question2Options.forEach( (option) => {
        option.style.pointerEvents = "auto  "
     }) ;
    
    clickCounter++ ;
    document.querySelector(".queNumberinfo").innerHTML = `<span style="font-weight : 600">${clickCounter+1}</span> of <span style="font-weight : 600">5</span> Questions`;
    time = 13 ; 
    timerfunction();
    }
    
    else if(clickCounter == 1 ){
        document.querySelector(".question2-wrapper").style.display ="none";
        document.querySelector(".question3-wrapper").style.display ="block";
        document.querySelector(".nextQue").style.display  = "none" ; 
        const question3Options = document.querySelectorAll(".question3-wrapper div ") ; 
        question3Options.forEach( (option) => {
           option.style.pointerEvents = "auto  "
        }) ;
        clickCounter++ ;
        document.querySelector(".queNumberinfo").innerHTML = `<span style="font-weight : 600">${clickCounter+1}</span> of <span style="font-weight : 600">5</span> Questions`;
        time = 13 ; 
        timerfunction();
    }

    else if(clickCounter == 2 ){
        document.querySelector(".question3-wrapper").style.display ="none";
        document.querySelector(".question4-wrapper").style.display ="block";
        document.querySelector(".nextQue").style.display  = "none" ; 
         const question4Options = document.querySelectorAll(".question4-wrapper div ") ; 
         question4Options.forEach( (option) => {
            option.style.pointerEvents = "auto  "
         }) ;
        
        clickCounter++ ;
        document.querySelector(".queNumberinfo").innerHTML = `<span style="font-weight : 600">${clickCounter+1}</span> of <span style="font-weight : 600">5</span> Questions`;
        time = 13 ; 
        timerfunction();
    }

    else if(clickCounter == 3 ){
        document.querySelector(".question4-wrapper").style.display ="none";
        document.querySelector(".question5-wrapper").style.display ="block";
        document.querySelector(".nextQue").style.display  = "none" ; 
         const question4Options = document.querySelectorAll(".question5-wrapper div ") ; 
         question4Options.forEach( (option) => {
            option.style.pointerEvents = "auto  "
         }) ;
        
       clickCounter++   ;
       document.querySelector(".queNumberinfo").innerHTML = `<span style="font-weight : 600">${clickCounter+1}</span> of <span style="font-weight : 600">5</span> Questions`;
       time = 13 ; 
       timerfunction();
    }


    
    else if(clickCounter == 4 ){

        document.querySelector(".completed").style.display = "flex";
        document.querySelector(".content").style.display =  "none";
        document.querySelector(".animation").style.display = "none";
        document.querySelector(".question5-wrapper").style.display ="none";
        document.querySelector(".nextQue").style.display  = "none" ; 
        document.querySelector("footer").style.display  = "none" ; 
        document.querySelector(".score").innerText = `and nice 😎, You got ${trueCount} out of 5`;
        document.querySelector(".queNumberinfo").innerHTML = `<span style="font-weight : 600">1</span> of <span style="font-weight : 600">5</span> Questions`;
        time = 13 ; 
    
    }

    document.querySelector(".animation").classList.add("animationActive");
});

document.querySelector(".replay").addEventListener("click" , () => {
    questionCounter = 0 ; 
    clickCounter = 0  ;
    trueCount = 0 ;
    time = 13 ;  
    timerfunction(); 
    document.querySelector(".content").style.display =  "block";
    document.querySelector(".completed").style.display =  "none";
    document.querySelector(".question1-wrapper").style.display ="block";
    document.querySelector("footer").style.display = "flex";
    document.querySelector(".animation").style.display = "block";

    questionOptions.forEach( (option) => {
        option.style.backgroundColor = "aliceblue" ; 
        option.style.pointerEvents = "auto" ; 
    });

})

document.querySelector(".quit").addEventListener("click" , () => {
    questionCounter = 0 ; 
    clickCounter = 0  ;
    trueCount = 0 ; 
    questionOptions.forEach( (option) => {
        option.style.backgroundColor = "aliceblue" ; 
        option.style.pointerEvents = "auto" ; 
    });

    document.querySelector(".completed").style.display = "none";
    startButton.style.display = "block" ; 
    wrapper.style.display = "none" ;
    document.querySelector(".rules").style.display = "block";

});

let time = 13 ; 
let timer; 
function timerfunction() {
     timer = setInterval(function(){
        time-- ;
        document.querySelector(".remaining").innerText = time; 
        if(time == 0 ) {
            clearInterval(timer);
            for(let i = 0 ; i<(clickCounter+1)*4 ; i++) {
                questionOptions[i].style.pointerEvents ="none" ; 
                if(questionOptions[i].classList.contains("true")){
                    questionOptions[i].style.backgroundColor = "lightgreen" ;
                }
                else {
                    questionOptions[i].style.backgroundColor = "#f8d7da" ;
                }
            }
            document.querySelector(".nextQue").style.display = "block" ;
            animation.style.width = "100%" ; 
            document.querySelector(".animation").classList.remove("animationActive");
        }
    },1000);
    
}