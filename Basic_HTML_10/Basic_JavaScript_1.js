// fucntion to make a pop up working adding async to the code
// example of a loop funciton 
function call_loop() {
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
        document.getElementById("loop").innerHTML = digit; 
    }
}


// functioin for  string length property 

function string_length() {
    var str = "Miguel Montelongo";
    var M = str.length;
    document.getElementById("string").innerHTML = M; 
}

// For Loop Funtioin 


    var instruments = ["Guitar", " Drums","Piano","Bass","Violen","Trumpet","Flute"];
    var content = "";
    var y; 
    function for_loop() {
          for (y = 0; y < instruments.length; y++) {
              content += instruments[y] + "<br>";
          }  
          document.getElementById("list_of_Instruments").innerHTML = content ; 
    }
// function for array and objects 

function cat_pics() {
    var Cat_Picture = []; 
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring"; 
    document.getElementById("Cat").innerHTML = "In this picture , the cat " + Cat_Picture[3] + ".";

}

// constant key word function 
function constant_function() { 
 const Musical_Instrument = {type:"guitar", brand:" Fender", color:"black "}; 
 Musical_Instrument.color = "blue";
 Musical_Instrument.price = "$900";
 document.getElementById("Constant").innerHTML = " The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;


}

// let keyword funtion 

function Let_function () {
    var X = 82; {
    let X = 2;

    } 
document.getElementById("Let").innerHTML = X 
}




// math return pi function 
function Pi_function() {
document.getElementById("math").innerHTML = Math.PI; 
}

// object function 

function function_ob() {
    let car = {
        make: "Dodge", 
        model: " Viper", 
        year: "2021",
        color: "red ", 
        description : function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
        
    };
    document.getElementById("car_object").innerHTML = car.description(); 
    
}

// break statement with loop 

function break_Function() {
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
      if (i === 7) { break; }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}


// continue statement function 
function conti_function() {
    var text = "";
var Y;
for (Y = 0; Y < 10; Y++) {
  if (Y === 7) { continue; }
  text += "The number is " + Y + "<br>";
}
document.getElementById("contuine").innerHTML = text;
}