


function FirstPart() {
    var First=document.getElementById("SecondPart");
        onclick=First.style.animation="glissement 1s ease-in-out";

    var Second=document.getElementById("FirstPart");
        onclick=Second.style.visibility="hidden";

      
    var Second=document.getElementById("TypingAboutMe");
        onclick=Second.style.animation="typing 4.5s 2s forwards";
                                    
    var Second=document.getElementById("AnimationSecondPart");
        onclick=Second.style.animation="SecondPartAnim 1s ease-in-out 2s forwards";
                                
    
    
  }

 function SecondPart(){
    var First=document.getElementById("ThirdPart");
        onclick=First.style.animation="glissement1 1s ease-in-out" ;
        onclick=First.style.visibility="visible" ;

    var Second=document.getElementById("SecondPart");
        onclick=Second.style.visibility="hidden";

    var Second1=document.getElementById("cardView");
        onclick=Second1.style.animation="SecondPartAnim1 5s forwards";

    var Second1=document.getElementById("ThirdPartbtn");
        onclick=Second1.style.animation="SecondPartAnim1 5s forwards";

       
   
  }

  function ThirdPart(){
    var First=document.getElementById("FourthPart");
        onclick=First.style.animation="glissement2 1s ease-in-out";
        onclick=First.style.visibility="visible" ;

    var Second=document.getElementById("ThirdPart");
        onclick=Second.style.visibility="hidden";

    var Contact=document.getElementById("Contact");
    onclick=Contact.style.visibility="visible"

    var AllFourthPart=document.getElementById("AllFourthPart");
    onclick=AllFourthPart.style.animation="AllContactTransition 10s forwards";

    var TypingJunior=document.getElementById("TypingJunior")
    onclick=TypingJunior.style.animation="typing 5s forwards "

    var SlideJunior=document.getElementById("SlideJunior")
    onclick=SlideJunior.style.animation="SlideJunior 3s  ease-in-out 2s forwards";


   
  }



  function ContactMe() {


    var ContactMe=document.getElementById("hiddenContact")
    var Contact=document.getElementById("Contact")
    
   onclick=ContactMe.style.animation="ContactTransition 1s ease-in-out 0.5s forwards"
    onclick=Contact.style.visibility="hidden"
  }