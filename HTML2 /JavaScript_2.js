// function to calidate form 
function Return_validfrom() {
    var x = document.forms["myform"]["fname"].value;
if (x == "") {
    alert("Name must be filled out");
    return false; 
}
}