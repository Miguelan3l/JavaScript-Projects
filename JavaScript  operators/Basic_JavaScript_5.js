function type_of() {//created the function  
document.write(typeof 3);// gave type of number 3 to output word:
}


// function for 3 unique values 

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('009'); //  isNAN  NaN(not a number) infinity -infinity
}


// funtion for infinity (positive)

function my_infinity() {

    document.write(2E310);// displays infinity(positive)
}



// function for infinity (negitive)

function my_negitive() {

    document.write(-2E310);// displays -infinity
}


// Ture boolean 
 function my_true () {
     document.write( 10< 9);
 }



 // False boolean 
 function my_false () {

    document.write( 10 < 2 );
 }

 // type coercion 

function my_type() {
    document.write("10" + 5);

}
// Double equal (ture)

function my_Equal() {

    document.write( 10 == 10 );
}
 
// Double equal (negitive)
function equal_Neg() {

    document.write( 13 == 11 );
}
 

 
// Tripple equal signs Ture  data type and value match
function equal_Trip() {
    X = 10;
    Y = 10;

    document.write( 10 === 10 );
}
 
 // Tripple equal signs Ture  data type and value are diffrent 

 function diff_Data() {
    R = 12;
    V = "13";

    document.write( V === R );
}
 

// Tripple equal signs different data type but the same value for both

function same_Value() {
    E = 30 
    D = "30"
    document.write( E === D);

}

// Tripple EQUAL SIGNS same data type but a different value for both.(False)

function false_Value()  {

    Q = 10
    S = 12
    document.write( 12 == 10);
}



// And operator ture

function true_And() {

    document.write( 5 > 2 && 10 > 4);

}

// And operator false

function false_And() {

    document.write( 6 < 2 && 20 > 4);

}


// Or operator Ture

function true_Or() {

    document.write( 8 < 4 || 20 > 4);

}



// Or operator false

function false_Or() {

    document.write( 4 > 10|| 20 < 4);

}




// The ! (not) operator (ture)

function true_Op() {
    document.getElementById("Not").innerHTML= ! (5 > 10);
}


// The ! (not) operator (false)


// The ! (not) operator (ture)

function false_Op() {
    document.getElementById("Not2").innerHTML= ! (20 > 10);
}