// concat() method 
function my_Function () {
 var X = " I learned a lot from this";
var Y = " Tech academy course !";
var Z = X.concat(Y)
document.getElementById("Demo").innerHTML = Z;    
}

// Slice Method 

function slice_Method() {
    var Sentence = " All work and no play makes Johny a dull boy ";
    var Section = Sentence.slice(27,33); //  numbers indicate which charecters in your string will be cut out and displayed.
    document.getElementById("Slice").innerHTML = Section;  // in this case it is "johnny"
}


// upercase functioin 
function new_Upper() {
    var string = " miguel montelongo "
    var res = string.toUpperCase();
    document.getElementById("upper").innerHTML = res ;
}



// search() method

function new_search() {
    var name = " Hi my name is Miguel";
    var N = name.search("Miguel");
    document.getElementById("search").innerHTML = N; 
}

// to string method 
function new_String() {
    var Q = 182;
document.getElementById("string").innerHTML = Q.toString();
}

// toprecsion Method 

function precision_Method() {
    var W = 12938.3012987376112;
    document.getElementById("Precision").innerHTML= W.toPrecision(10);
}


function method_Fix() {
    var H = 6.789654;
   var I = H.toFixed(2);
   document.getElementById("Fixed").innerHTML = I; 
}