//Selecting Elements
var input = document.getElementById("inputbox")
var res = document.getElementById("result")
var guesscount = document.getElementById("guess")
var noofguess=3

//Generate Random number
var randomnumber = Math.floor(Math.random() * 10) + 1 // 1 to 10
if (randomnumber > 5) 
{
    randomnumber = randomnumber - 5
}

//function check the number
function checknumber()
{
    if(inputbox.value==randomnumber)
    {
        alert("You Got it Right! Congratulation")
        result.textContent("You are Right")
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You Lost,Generated Random Number is:"+ randomnumber)
        }
        guesscount.textContent="Available Guesses:"+noofguess
        result.textContent="You are wrong"
    }
}