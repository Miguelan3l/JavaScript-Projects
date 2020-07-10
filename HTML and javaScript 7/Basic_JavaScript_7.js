// Local varible

function Add_numbers_1() {
    var X = 10; 
    document.write(20 + X + "<br>");

}
function Add_numbers_2() {
    document.write( X + 100);
}
Add_numbers_1();
Add_numbers_2();


// global varible 

var T = 10;
function numbers_1() {
    document.write(20 + X + "<br>");

}
function number_2() {
    document.write(X +100);

}

numbers_1();
number_2();



// date function 
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today";
    }
}

// else statements 

function Age_Function() {
    Age = document.getElementById("Age").Value;
    if (Age >= 18) {
        Vote = "you are old enough to vote";
    }
    else { 
        Vote = " you are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; 
}


// Else if statement 

function time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = " It is morning time! "; 
    }
    else if (Time > 12 == Time < 18) {
        Reply = " It is the afternoon. ";
    }
    else {
        Reply = "It is eveling time"
    }
    document.getElementById("Time_of_day").innerHTML = Reply; 
}