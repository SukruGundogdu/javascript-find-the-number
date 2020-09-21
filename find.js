document.getElementById("btn_1").addEventListener("click", girilen)

function girilen(){
    const num_1 = document.getElementById("inp_1").value;
    var num_2 = 55;

    if(isNaN(num_1)) {
        document.getElementById("res_1").innerHTML = "Are you sure that this is a number?"
    }  else if(num_1 < num_2) {
        document.getElementById("res_1").innerHTML = "I am thinking about higher number"
    }   else if(num_1 > num_2) {
        document.getElementById("res_1").innerHTML = "I am thinking about lower number"
    }   else if(num_1 == num_2) {
        alert("You are the winner :D.You guest after ...times!")
        alert("You wanna play again")
    }
    document.getElementById("res_2").innerHTML = btn_1.value=Number(btn_1.value)+1;
}