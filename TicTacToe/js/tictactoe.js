// This varible keeps track of whos turn it is. 
let activePlayer = 'X';
//This array stores an arrat of moves.We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in the square.
function placeXoro(squareNumber) {
    //This conditon esures a square hasnt be selected already. 
    // The .some() method is used to check each element of selectedsquare array to 
    // see if it contains the square number clicked on. 
    if (!selectedSquares.some(Element => Element.includes(squareNumber))) {
        //This variable retrives the html element id that was clicked. 
        let select = document.getElementById(squareNumber);
        //This condition checks whos turn it is. 
        if(activePlayer == 'X') {
            //If activeplayer is equal to 'X',the x.png is placed in HTML.
            select.style.backgroundImage = "url('images/x.png')";
            //Active player may only be 'X' or 'O' so, if not 'X' is must be 'O'
        } else {
            //If activePlayer is equal to 'O',the o.png is placed HTML.
            select.style.backgroundImage = 'url("images/o.png")'
        }
        //squareNumber and activePlayer are concatenated togher and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a funtion to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player
        if (activePlayer == 'X') {
            // if active player is 'X' change it to 'O'.
            activePlayer = 'O';
            //if active player is anything other than 'X'
        } else {
            //Change the active player to 'X';
        }



        // this funtion plays placement sound. 
        Audio("./media/place.mp3");
        //This condtion cheks to see if it is computers turn.
        if(activePlayer == 'O') {
            //This function disbles clicking for computer chocie.
            disableClick();
            // this funtion waits 1 secound before placing the image 
            // and enabling click.
            setTimeout(function() {computersTurn();}, 1000);
        }
        //returning ture is needed for our compoutersTurn() funciton to work.
        return true;

    } 

    // This Funtion results in a random square being selected. 
    function computersTurn() {
        //This boolean is needed fro our while loop.
        let sccess = false; 
        // This varible stores a random number 0-8
        let pickASquare; 
        // This condition allows our while loop to keep 
        // trying if a square is selected already.
        while(!success) {
            // A random number between 0 and 8 is slected 
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evluates ture, the square hasnet been selected yet.
            if (placeXoro(pickASquare)){
                //This line calls the function.
                placeXoro(pickASquare);
                //this changes our boolean and ends the loops. 
                success = true;
            };
        }
    } 

}




// This Funtion parses the selectedSquare arraay to search for win conditions.
//drawwinline fucntion is called to draw line if condition is met.
function checkWinConditions() {
    // x 0, 1, 2 condition. 
    if   (arrayIncludes('0X', '1X', '2X')) {  drawWinLine (50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558,508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100,558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304,558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508,558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510,90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520,520);}
    else if (arrayIncludes('0o', '1o', '2o')) { drawWinLine(50, 100, 558,100); }
    else if (arrayIncludes('3o', '4o', '5o')) { drawWinLine(50, 304, 558,304); }
    else if (arrayIncludes('6o', '7o', '8o')) { drawWinLine(50, 508, 558,508); }
    else if (arrayIncludes('0o', '3o', '6o')) { drawWinLine(100, 50, 100,588); }
    else if (arrayIncludes('1o', '4o', '7o')) { drawWinLine(304, 50, 304,508); }
    else if (arrayIncludes('2o', '5o', '8o')) { drawWinLine(508, 50, 508,558); }
    else if (arrayIncludes('6o', '4o', '2o')) { drawWinLine(100, 508, 510,90 );}
    else if (arrayIncludes('0o', '4o', '8o')) { drawWinLine(100, 100, 520,520);}
    // This condition checks for tie. if none of the above codition register 
    // and 9 sqarues are slected, the code executes.
    else if (selectedSquares.length >= 9) {
        //This Function plays the tie game sound.
        audio('media/tie.mp3');
        //funtion sets a .3 secound timer before the resetgame is called. 
        setTimeout(function () {resetGame(); }, 1000);
    }


        // This funtion checks if an anrry includes 3 strings. 
        // it is used to check for each win conditions. 
        function arrayIncludes (squareA, squareB, squareC) {
            // The nexgt 3 varibles will used to check for 3 in a row.
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);
            // if the 3 varible we pass are all included in our arry true is 
            // retunred and our else if the condition executes the drawline funtion.

            if(a === true && b === true && c == ture) {return true;}
        }
}

// This function makes our body element temporaily unclikcable.
function disableClick() {
    //This makes our unclickable 
    body.style.pointerEvents = 'none'; 
    // This makes our body clickable agian 1 secound
    setTimeout( function() {body.style.pointerEvents = 'auto';}, 1000);
}

// This fucntion takes a string parameter of othe path you set eariler for 
//placement sound ('./media/place.mp3;)
function audio(audioURL) {
    // we create a new audio object and we pass the path as a parameter. 
    let audio = new Audio (audioURL); 
    //play method plays our audio sound 
    audio,play();
}


// This function utilizez html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // This line access our html canvas element
    const canvas = document.getElementById('win-lines');
    //This  line gives access to methods and properties to use canvas.
    const c = canvas.getContext('2d');
    // this lindicates where the start of a lines x axis is)
    let x1 = coordX1,
    // this line indicates where the start of a lines y axis is.
    y1 = coordY1,
    // this line indicates where the end of a line x axis is. 
    x2 = coordX2,
    // This line indicates where the end of a line x axis is 
    y2 = coordY2,
    // THis varible stores temporary x axis data we update in our animation.
    x =x1,
    // This varible stores temporary y axis data we update in our animation.
    y = Y1;





    // This function interacts with the canvas
    function animateLineDrwaing() {
        // THis varible creates the loop for when the game ends it restarts. 
        const animationLoop = requestAnimationFrame(animateLineDrwaing);
        // THis method clears contecnt frim the last loop for iteration.
        c.clearRect(0, 0, 608, 608); 
        //This method starts a new path.
        c.beginPath();
        // This method moves us to a starting poin for our line.
        c.moveTo(x1, y1);
        // This method indicates the end poiint in our line.
        c.lineTo(x, y);
        //This methoid set the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line.
        c.strokeStyle = "rgba(70, 255,33,.8)"; 
        // This method draws everything we laid out above.
        c.stroke();
        //This condition checks if we've reached the end point.
        if (x1 <= x2 && Y1 <= Y2) {
            //This condition adds 10 to the previous end x point.
            if (x < x2) {  x += 10; }
            //This condition adds 10 to the previous end x point.
            if (Y < Y2) { Y += 10; }
            //This condition cancels our animation loop if reach the end point
            if (x > x2 && Y >= Y2) { cancelAnimationFrame(animationLoop);}
        }
    }


    // This function clears our canvas after our win line is drwan.
    function clear() {
        //this line starts our animation loop. 
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608,608);
        //This line stops our animation loop 
        cancelAnimationFrame(animationLoop);

    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //This line plays the win sound.
    audio('./media/winGamne.mp3');
    //This line calls our main animation loop. 
    animateLineDrwaing();
    //This Line calls our main animation loop. 
    animateLineDrwaing();
    // This line waits 1 second.
    //Then clears canvas resets game and allows clicking agian.
    setTimeout(function() { clear(); resetGame(); }, 1000 );  
}


//This funciton rests the game in a tie or win 
function resetGame() { 
    //This for loop iterates though eatch Html sqaure element.
    for (let i = 0; i < 9; i++) {
        //This varible gets the html element of i 
        let sqaure = document.getElementById(string(i));
        //This removes our element backgroundimage
        square.style.backgroundImage = '';
    }
    //This resets our array so its empty and we can start over.
    selectedSquares = [];
}