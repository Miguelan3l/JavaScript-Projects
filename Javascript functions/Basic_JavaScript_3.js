function addition_Function() { // named function
    var addition = 2 + 2;// difined var additon
    document.getElementById("math").innerHTML=" 2 + 2 = " + addition; // result on click
}



function sub_Function() {
    var sbtract = 5 - 5;
    document.getElementById("sub").innerHTML= "5 - 5 = " + sbtract;
}



function multi_Function() {
    var simple_math = 6 * 8;

    document.getElementById("multy").innerHTML="6 x 8 = " + simple_math;

}


function div_Function() {
    var simple_div = 48 / 6 ;
    document.getElementById("div").innerHTML=" 48 / 6 = " + simple_div;
}


function more_math() {
    var multi_op = (1 + 2) * 10 / 2 -5;
    document.getElementById("math2").innerHTML= " (1 + 2) * 10 / 2 -5 = " + multi_op; 

}


function mod_op() {
    var remain = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of:" + remain;
}


function unat_opera() {
    var x = 10;
    document.getElementById("unary").innerHTML = -x;
}


function increment() {
    var X = 5;
    X++;
    document.write(X);
}

function dec(){
    var Y = 5.25;
    Y--;
    document.write(Y)
}
 
 

function sqr_root() {
    document.getElementById("sqr").innerHTML= Math.sqrt(64)
}
