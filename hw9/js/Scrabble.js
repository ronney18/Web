/*
File: http://ronney18.github.io/Web/hw9/Scrabble.html
COMP4610 Assignment 9: Implementing a Bit of Scrabble with Drag and Drop
Ronney Sanchez, UMass Lowell Computer Science, Ronney_Sanchez@student.uml.edu
Copyright (c) 2018 by Ronney Sanchez.
updated by Ronney Sanchez on December 18, 2018 at 6:30 PM

Sources: https://www.w3schools.com/js/default.asp
					Albara Mehene (class mate)
					Marittya Keu (class mate)

Description: This web page plays a bit of the game of Scrabble using drag-and-drop.
The idea is to display one line of the Scrabble board (one line sample) to the user
along with seven letter tiles on a tile rack. The user then drags tiles to the board
to make a word, I am to report his or her score, taking the letter values and bonus
squares into consideration.
*/

//Array for each of the scrabble tile images
 var ScrabbleTiles = [];
 ScrabbleTiles["A"] = {"value": 1, "original-distrubution": 9, "number-remaining": 9};
 ScrabbleTiles["B"] = {"value": 3, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["C"] = {"value": 3, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["D"] = {"value": 2, "original-distrubution": 4, "number-remaining": 4};
 ScrabbleTiles["E"] = {"value": 1, "original-distrubution": 12, "number-remaining": 12};
 ScrabbleTiles["F"] = {"value": 4, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["G"] = {"value": 2, "original-distrubution": 3, "number-remaining": 3};
 ScrabbleTiles["H"] = {"value": 4, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["I"] = {"value": 1, "original-distrubution": 9, "number-remaining": 9};
 ScrabbleTiles["J"] = {"value": 8, "original-distrubution": 1, "number-remaining": 1};
 ScrabbleTiles["K"] = {"value": 5, "original-distrubution": 1, "number-remaining": 1};
 ScrabbleTiles["L"] = {"value": 1, "original-distrubution": 4, "number-remaining": 4};
 ScrabbleTiles["M"] = {"value": 3, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["N"] = {"value": 1, "original-distrubution": 6, "number-remaining": 6};
 ScrabbleTiles["O"] = {"value": 1, "original-distrubution": 8, "number-remaining": 8};
 ScrabbleTiles["P"] = {"value": 3, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["Q"] = {"value": 10, "original-distrubution": 1, "number-remaining": 1};
 ScrabbleTiles["R"] = {"value": 1, "original-distrubution": 6, "number-remaining": 6};
 ScrabbleTiles["S"] = {"value": 1, "original-distrubution": 4, "number-remaining": 4};
 ScrabbleTiles["T"] = {"value": 1, "original-distrubution": 6, "number-remaining": 6};
 ScrabbleTiles["U"] = {"value": 1, "original-distrubution": 4, "number-remaining": 4};
 ScrabbleTiles["V"] = {"value": 4, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["W"] = {"value": 4, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["X"] = {"value": 8, "original-distrubution": 1, "number-remaining": 1};
 ScrabbleTiles["Y"] = {"value": 4, "original-distrubution": 2, "number-remaining": 2};
 ScrabbleTiles["Z"] = {"value": 10, "original-distrubution": 1, "number-remaining": 1};
 ScrabbleTiles["["] = {"value": 0, "original-distrubution": 2, "number-remaining": 2};

//Variable for a rack array
var rackArray = [];
//Initializing the length of the tiles in the tile array
var tableTiles = Object.keys(ScrabbleTiles).length;
//Initializing the length of the tiles in the rack
var rackTiles = Object.keys(rackArray).length;
//Initializing the score board to 0
var scoreBoard = 0;
//Initializing a tile remain array to all false in the indices
var tileRemaining = [false, false, false, false, false, false, false, false, false, false];

//Creating a function for a random number generator
function generateTile()
{
    //Generating a random number
    return Math.floor((Math.random() * 27));
}

//Creating a function to calculate any left over tiles
function leftOverTiles()
{
    //Initializing the extra tiles to false
    var extraTiles = false;
    //Looping through the Scrabble tile array
    for(var diff = 0; diff < 27; diff++)
    {
        //Assign true to the extra tiles if any of that specific tile remains in the scrabble tile array
        if (ScrabbleTiles[ String.fromCharCode(65 + diff) ][ "number-remaining" ] !== 0)
        {
            extraTiles = true;
        }
    }
    //Return the extra tile boolean variable to the user
    return extraTiles;
}

function printTiles()
{
    //Looping through the tile array
    for (var i = 0; i < tableTiles; i++)
    {
        //Pring the tile to the user with the console log function
        console.log(String.fromCharCode(65 + i) + " : " + ScrabbleTiles[ String.fromCharCode(65 + i) ][ "value" ] + " : " + ScrabbleTiles[ String.fromCharCode(65 + i) ][ "original-distribution" ] + " : " + ScrabbleTiles[ String.fromCharCode(65 + i) ][ "number-remaining"]);
    }
}

//Constructing the rack
function constructRack()
{
    //Initializing the maximum number of tiles in rack to 7
    var MAX_TILES = 7;
    //Initialize the counter to 1
    var counter = 1;
    //Declaration for html variables
    var src;
    var id;
    var title;
    var tileClass = "scrabble";
    //Initializing the rack divider to an empty rack
    $('#myRack div').empty();
    //Looping until the counter reaches the maximum number of tiles
    while(counter <= MAX_TILES)
    {
        //Generating a ramdon number to a variable
        var randomTileNum = generateTile();

        if (ScrabbleTiles[ String.fromCharCode(65 + randomTileNum) ][ "number-remaining"] !== 0 && leftOverTiles() == true)
        {
            //Generating random tiles for the rack array
            rackArray[counter] = {"letter": String.fromCharCode(65 + randomTileNum), "value": ScrabbleTiles[ String.fromCharCode(65 + randomTileNum) ][ "value" ]};
            //Decrementing the scrabble tile array after pulling out a random tile
            ScrabbleTiles[ String.fromCharCode(65 + randomTileNum) ][ "number-remaining"]--;
            //Assigning the length of the rack array to the tile rack
            rackTiles = Object.keys(rackArray).length;
            console.log("rackArray: Tile: " + (counter) + " Letter: " + rackArray[counter][ "letter" ] + " Value: " + rackArray[counter][ "value" ]);
            id = "tile" + counter;
            //Assign the letter of the tile to the title variable
            title = rackArray[counter][ "letter" ];
            src = "img/Tile_" + rackArray[counter][ "letter" ] + ".JPG";
            //Prepend the tiles to the rack with its proper image and ids
            $('#theRack').prepend($('<img>', {id: id, src: src, class: tileClass, title: title}));
            //Increment the counter by 1
            counter++;
        }
        //Notifying the user for no remaining tile in the scrabble tile array
        if (leftOverTiles() === false)
        {
            //Display a message for no tiles remaining in the scrabble tile array
            $('#gameButton').append("<p>There are no tiles left over!</p>");
            //Disabling the button for new tile generation
            $("#genNewTile").prop("disabled", true);
            return;
        }
        //Making the tile images draggable to the html page
        $("#" + id).draggable({snap: ".line", snapMode: "inner",refreshPositions: true, snapTolerance: "30"});
    }
}

//Function to drop the tiles
function dropTile(event, ui)
{
    //Multiplying the score by 2 and adding to the sum if the letter tile was dropped on a double letter board
    if (tileRemaining[$(this).attr("id") - 1] === false && $(this).attr("title") === 'doubleLetter')
    {
        scoreBoard += (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ] * 2);
    }
    //Multiplying the score by 3 and adding to the sum if the letter tile was dropped on a triple letter board
    else if (tileRemaining[$(this).attr("id") - 1] === false && $(this).attr("title") === 'tripleLetter')
    {
        scoreBoard += (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ] * 3);
    }
      //Adding the score to the sum if the letter tile was dropped on a blank letter board
    else if (tileRemaining[$(this).attr("id") - 1] === false && $(this).attr("title") === 'blank')
    {
        scoreBoard += (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ]);
    }
    //Doubling the score of the word and adding to the sum if the word was lying on a double word board
    else if (tileRemaining[$(this).attr("id") - 1] === false && $(this).attr("title") === 'doubleWord')
    {
        scoreBoard = ((scoreBoard + ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("id").charCodeAt(0)) ][ "value" ]) * 2);
    }
    //Assigning true to the tiles remaining
    tileRemaining[$(this).attr("id") - 1 ] = true;
    //Recalculate the score
    calculateScore();
}

//Getting the score from the score header text
function calculateScore()
{
    $('#myScore').text(scoreBoard);
}

function removeTile(event, ui)
{
    //Multiplying the score by 2 and removing it from the sum if the letter tile was removed from a double letter board
    if (tileRemaining[$(this).attr("id") - 1] === true && $(this).attr("title") === 'doubleLetter')
    {
        scoreBoard -= (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ] * 2);
    }
    //Multiplying the score by 3 and removing it from the sum if the letter tile was removed from a triple letter board
    else if (tileRemaining[$(this).attr("id") - 1] === true && $(this).attr("title") === 'tripleLetter')
    {
        scoreBoard -= (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ] * 3);
    }
    //Subracting the score from the sum if the letter tile was removed from a blank board
    else if (tileRemaining[$(this).attr("id") - 1] === true && $(this).attr("title") === 'blank')
    {
        scoreBoard -= (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ]);
    }
    else if (tileRemaining[$(this).attr("id") - 1] === true && $(this).attr("title") === 'doubleWord') {
        scoreBoard = ((scoreBoard / 2) - (ScrabbleTiles[ String.fromCharCode(ui.draggable.attr("title").charCodeAt(0)) ][ "value" ]));
    }
    //Assigning false to the tiles remaining
    tileLeft[$(this).attr("id") - 1 ] = false;
    //Recalculating the score
    calculateScore();
}
$(document).ready(function () {
    //Construct the rack
    constructRack();
    //Make each blank boards from the table rows droppable
    $(".line").droppable({drop: dropTile, out: removeTile});
});
