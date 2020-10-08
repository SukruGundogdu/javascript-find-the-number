let random_number = Math.floor(Math.random() * 100 + 1);
// console.log(random_number);
document.querySelector("#check_it").addEventListener("click", checkNumber)
document.querySelector("#nr_game").addEventListener("keyup", function(event){
    if (event.keyCode === 13)  // enter tuşunun keycodu 13
        checkNumber()
})

let guess_count = 0;

function checkNumber(){
    // input elentine tekrar tekrar daha rahat erişim sağlamak için
   let userInputElement = document.querySelector("#nr_game");
   let answerLabelElement = document.querySelector("#answer");
   let guessLabelElement = document.querySelector("#count_it");



   if(userInputElement.value == random_number){
       alert("You are the winner! Guess time: "+ ++guess_count);
       

       const choice = confirm("Game agein?");     // tekrar oynamak istersem true istemezsem false dondurur

       if(choice){
        guess_count = 0; 
        random_number = Math.floor(Math.random() * 100 + 1);
        answerLabelElement.innerText = "";
       
       } else {
           alert("Thanks for palaying!");
           answerLabelElement.innerText = "Best guess time: " + guess_count;
           guessLabelElement.innerText = "";
       }

    //    console.log(choice);                  
   } 
   else if(userInputElement.value == ""){      
    answerLabelElement.innerText = "Enter a number!";
    }
   else if(userInputElement.value > random_number) {
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!";
   }
   else if (userInputElement.value < random_number) {
        guess_count++;
        guessLabelElement.innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!";
   }
   else if(isNaN(userInputElement.value)){
       answerLabelElement.innerText = "It's not a number!";
   }
   userInputElement.focus();   // fonksiyonumun içinde herhangi bir yere yazabiliyorum. 
   userInputElement.value = "";
}





