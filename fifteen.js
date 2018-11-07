window.onload = function(){
    var puzzleArea = document.getElementById("puzzlearea");
    var puzzlePieces = puzzleArea.getElementsByTagName("div");
    emptyDiv(puzzlePieces);
    setPosition(puzzlePieces);
    
    document.getElementById("shufflebutton").onclick = shuffle;
}

function setPosition(puzzlePieces){
    for(var i=0; i < puzzlePieces.length; i++){
        puzzlePieces[i].classList.add("puzzlepiece");
        puzzlePieces[i].style.left = (i % 4 * 100) + "px";
        puzzlePieces[i].style.top = (parseInt(i / 4) * 100) + "px";
        puzzlePieces[i].style.backgroundPosition = "-" + puzzlePieces[i].style.left + " " + "-" + puzzlePieces[i].style.top;
    }  
}

function emptyDiv(){
    var emptydiv = document.createElement("div");
    emptydiv.addClassName = ('puzzlepiece');
    emptydiv.style.background = "none";
    var area = document.getElementById("puzzlearea");
    area.appendChild(emptydiv);
}

// 
function movePiece(puzzlePieces,piece){
    // var puzzlePieces = puzzleArea.getElementsByTagName("div");
    puzzlePieces[piece].addClassName("movablepiece");
}

function isValidMove(puzzplePieces){
    // for (var i=0; i<puzzplePieces.length; i++){
    //     if 
    // }
    if (puzzplePieces[0])

}

function movePiece(){

}
function shuffle(){
    var puzzle = document.getElementById('puzzlearea').children;

    // for (var i=puzzle.length; i>0; i){
	// 	var j = Math.floor(Math.random() * i);
	// 	var x = numArray[--i];
	// 	var test = numArray[j];
	// 	if(test == "0") { 
	// 		puzzle[i].addClassName("puzzlepiece");
	//  		blankP(puzzle[i]);
	//  		puzzle[i].innerHTML = "";
	// 				}
	// 	else{
    //  			puzzle[i].innerHTML = numArray[j];
    //   			regularP(puzzle[i]);
    //   			background_Position(puzzle[i], test);
    //       }
    //         numArray[j] = x;
            
    // }
    
    var currentPass = pieces.length;
    var index, temp;

    while (currentPass > 0) {
        index = Math.floor((Math.random()*currentPass));
        currentPass--;

        temp = pieces[currentPass];
        pieces[currentPass] = pieces[index];
        pieces[index] = temp;
    }
    setPosition(pieces);
}
