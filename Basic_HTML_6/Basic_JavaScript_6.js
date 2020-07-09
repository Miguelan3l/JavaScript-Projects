// function for voting age
function Vote_Function() {

    var Voteage, Can_Vote;
    Voteage = document.getElementById("Voteage").value;
    Can_Vote = (Voteage < 18 ) ? "You are too young ": "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote ";
}



// function for Vehicle 

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
}

var Jack = new Vehicle("Dodge","viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and BLack");
var Erick = new Vehicle("Ford", "pinto", 1971,"Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erick drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model + 
    " manufactured in " + Erick.Vehicle_year;
}


// nested function 

function count_Function() {

    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9; 
        function Plus_one() (Starting_point += 1;)
        Plus_one();
        return Starting_point;
    }
}ß