// color funtion 
function Color_Function() {
    var Color_Output; 
    var Colors = document.getElementById("Color_Input").value; 
    var Color_String = " is a great color! ";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String; 
            break;
            case "Yellow": 
            Color_Output = "Yellow" + Color_String;
            break; 
            case "Green":
            Color_Output = "Green" + Color_String;
            break;
            case " Blue": 
            Color_Output = "Blue" + Color_String;
            break; 
            case "Pink": 
            Color_Output = "Pink" + Color_String; 
            break; 
            case "Purple":
             Color_Output = "Purple" + Color_String;
             break; 
             default: 
             Color_Output = " Please enter a color exacaly as written on the above list. "; 
             


    }
    document.getElementById("Output").innerHTML = Color_Output;
}


// funtion getelement by id 

function Hello_World_Funtion() { 
    var A = document.getElementsByClassName("click"); 
    A[0].innerHTML = "The text has changed! "; 
}
// funtion for canvas picture 

window.onload = function() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("pic");
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 600, 600);
    ctx.drawImage(img, 3, 3,)
   
}