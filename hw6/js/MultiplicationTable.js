/*
File: http://ronney18.github.io/Web/hw6/MultiplicationTable.html
COMP4610 Assignment 6: Creating a Multiplication Table
Ronney Sanchez, UMass Lowell Computer Science, Ronney_Sanchez@student.uml.edu
Copyright (c) 2018 by Ronney Sanchez.
updated by Ronney Sanchez on November 14, 2018 at 9:30 PM

Sources: https://www.w3schools.com/js/default.asp
          Albara Mehene (class mate)

Description: This web page prompts the user for a specific number of rows and
columns and displays a multiplication table starting at the specified row
and column number and ending at a certain row and column number.
*/
//Programming the button to execute the Javascript funtion
document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault();
}, false);

//Javascript function to print the table to the html page
function printTable(){
    //Getting the 4 values of the rows and columns from the user
    //Initialize the start of the row to the value of the user input in the form
    var startRow = Number(document.getElementById("beginRow").value);
    //Initialize the end of the row to the value of the user input in the form
    var endRow = Number(document.getElementById("endRow").value);
    //Initialize the start of the column to the value of the user input in the form
    var startColumn = Number(document.getElementById("beginColumn").value);
    //Initialize the end of the column to the value of the user input in the form
    var endColumn = Number(document.getElementById("endColumn").value);
    //Using a validator and error checker
    var validation = "";
    //Assign error checker to 0 (false)
    var error = 0;

    //Display an error message if the input for the start of the row is not a number
    if(isNaN(startRow)){
        validation = "This entry is invalid! Numbers only!";
        document.getElementById("message3").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error if the input is empty
    else if(startRow == ""){
        validation = "This entry is empty or it's a zero! Non-zero entry only!";
        document.getElementById("message3").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    else{
      //Assign a blank string to the validator
      validation = "";
      document.getElementById("message3").innerHTML = validation;
    }

    //Display an error message if the input for the start of the row is out of bounds
    if(startRow < -150 || startRow > 150)
    {
        validation = "The limit is from -150 to 150!";
        document.getElementById("message3").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error message if the input for the end of the row is not a number
    if(isNaN(endRow)){
        validation = "This entry is invalid! Numbers only!";
        document.getElementById("message4").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error if the input is empty
    else if(endRow == ""){
        validation = "This entry is empty or it's a zero! Non-zero entry only!";
        document.getElementById("message4").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    else{
      //Assign a blank string to the validator
      validation = "";
      document.getElementById("message4").innerHTML = validation;
    }

    //Display an error message if the input for the end of the row is out of bounds
    if(endRow < -150 || endRow > 150)
    {
        validation = "The limit is from -150 to 150!";
        document.getElementById("message4").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error message if the input for the start of the column is not a number
    if(isNaN(startColumn)){
        validation = "This entry is invalid! Numbers only!";
        document.getElementById("message1").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error if the input is empty
    else if(startColumn == ""){
        validation = "This entry is empty or it's a zero! Non-zero entry only!";
        document.getElementById("message1").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    else{
      //Assign a blank string to the validator
      validation = "";
      document.getElementById("message1").innerHTML = validation;
    }

    //Display an error message if the input for the start of the column is out of bounds
    if(startColumn < -150 || startColumn > 150)
    {
        validation = "The limit is from -150 to 150!";
        document.getElementById("message1").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error message if the input for the end of the column is not a number
    if(isNaN(endColumn)){
        validation = "This entry is invalid! Numbers only!";
        document.getElementById("message2").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //Display an error if the input is empty
    else if(endColumn == ""){
        validation = "This entry is empty or it's a zero! Non-zero entry only!";
        document.getElementById("message2").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    else{
      //Assign a blank string to the validator
      validation = "";
      document.getElementById("message2").innerHTML = validation;
    }

    //Display an error message if the input for the end of the column is out of bounds
    if(endColumn < -150 || endColumn > 150)
    {
        validation = "The limit is from -150 to 150!";
        document.getElementById("message2").innerHTML = validation;
        //Assign the error checker to 1 (true)
        error = 1;
    }

    //End the program if the error checker is true
    if(error == 1){
        return;
    }

    //Make the table if the error checker is false
    else{
        makeTable(startRow, endRow, startColumn, endColumn);
    }
}

//Javascript function to make the table
function makeTable(startRow, endRow, startColumn, endColumn){
    var temp;
    //Swap the start of the row with the end of the row if the end of the row is smaller
    if(endRow < startRow){
      //Assign the start of the row to a temporary variable
      temp = startRow;
      //Assign the end of the row to the start of the row
      startRow = endRow;
      //Assign the temporary value to the end of the row
      endRow = temp;
    }

    //Swap the start of the column with the end of the column if the end of the column is smaller
    if(endColumn < startColumn){
      //Assign the start of the column to a temporary variable
      temp = startColumn;
      //Assign the end of the column to the start of the column
      startColumn = endColumn;
      //Assign the temporary value to the end of the column
      endColumn = temp;
    }

    //Creating a table using the id of the divider in the HTML page
    //Albara Mehene (class mate) helped me in doing this table
    var table = document.getElementById("tbl");
    //Creating the elements and the body of the table
    var tableEl = document.createElement("table");
    var tableBody = document.createElement("tbody");

    //Creating a table row
    var rows = document.createElement("tr");
    //Append the table header to the table row
    rows.appendChild(document.createElement("th"));
    //Looping through the rows of the table
    for(var i = startRow; i <= endRow; i++){
        //Creating an element for the table header
        var header = document.createElement("th");
        //Assign the indices to the header
        header.innerText = i;
        //Append the header to the table rows
        rows.appendChild(header);
    }
    //Append the rows to the table body
    tableBody.appendChild(rows);

    //Looping through the columns of the table
    for(var j = startColumn; j <= endColumn; j++){
        //Creating an element for the table rows
        rows = document.createElement("tr");
        //Creating an element for the table header
        var header = document.createElement("th");
        //Creating a node for the indices
        var node = document.createTextNode(j);
        //Append the node to the header
        header.appendChild(node);
        //Append the header to the table rows
        rows.appendChild(header);
        //Looping through the rows of the table
        for(var k = startRow; k <= endRow; k++){
            //Creating the cells for the table
            var blocks = document.createElement("td");
            //Creating the node by multiplying the indices of the rows and colums
            var blockNode = document.createTextNode(j * k);
            //Append the node to the cells of the table
            blocks.appendChild(blockNode);
            //Append the cells to the rows of the table
            rows.appendChild(blocks);
        }
        //Append the rows to the table body
        tableBody.appendChild(rows);
    }
    //Append the body to the elements of the table
    tableEl.appendChild(tableBody);
    //Append the elements to the table
    table.appendChild(tableEl);
    //Replace the elements with the node at the starting point
    table.replaceChild(tableEl, table.childNodes[0]);
}
