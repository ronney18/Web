/*
File: http://ronney18.github.io/Web/hw7/MultiplicationTable.html
COMP4610 Assignment 7: Creating a Multiplication Table with JQuery Validation Plugin
Ronney Sanchez, UMass Lowell Computer Science, Ronney_Sanchez@student.uml.edu
Copyright (c) 2018 by Ronney Sanchez.
updated by Ronney Sanchez on November 24, 2018 at 11:30 PM

Sources: https://www.w3schools.com/js/default.asp
         https://jqueryvalidation.org/
          Albara Mehene (class mate)
          Marittya Keu (class mate)

Description: This web page prompts the user for a specific number of rows and
columns and displays a multiplication table starting at the specified row
and column number and ending at a certain row and column number. This web
also validates for user inputs as soon as the user enters an input. If the input
is invalid, the user will automatically get notified by the JQuery validation
plugin.
*/

//Programming the button to execute the Javascript funtion
document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();
},false);

//The document will run these function whenever is ready
$(document).ready(function() {
    validate();
    valid();
});

//Checking if the form is valid in order to submit
function valid(){
    //Submit the form if the form is valid
    if($("#myForm").valid())
    {
        $("#myForm").submit();
    }
    //Don't do anything else of there is an error on the form
    else
    {
        return;
    }
}

//Validating the form from the html page
function validate{
    $("#myForm").validate({
        //Setting the rules of every rows and columns of the table of the form
        rules:{
          //An input for the start of the column is required only using digits and no characters
            beginColumn:{
              required: true,
              number: true,
              min: -150,
              max: 150
            },
            //An input for the end of the column is required only using digits and no characters
            endColumn:{
              required: true,
              number: true,
              min: -150,
              max: 150
            },
            //An input for the start of the row is required only using digits and no characters
            beginRow:{
              required: true,
              number: true,
              min: -150,
              max: 150
            },
            //An input for the end of the row is required only using digits and no characters
            endRow:{
              required: true,
              number: true,
              min: -150,
              max: 150
            }
        },
        //Display an error message before submitting if the user attempts to insert an ivalid input
        messages:{
            //Displaying an error message for the start of the column with requirements and digit validation
            beginColumn:{
              required: "Please enter a number from -150 to 150 except 0",
              number: "Only numbers are allowed!",
              min: "The minimum is -150!",
              max: "The maximum is 150!"
            },
            //Displaying an error message for the end of the column with requirements and digit validation
            endColumn:{
              required: "Please enter a number from -150 to 150 except 0",
              number: "Only numbers are allowed!",
              min: "The minimum is -150!",
              max: "The maximum is 150!"
            },
            //Displaying an error message for the start of the row with requirements and digit validation
            beginRow:{
              required: "Please enter a number from -150 to 150 except 0",
              number: "Only numbers are allowed!",
              min: "The minimum is -150!",
              max: "The maximum is 150!"
            },
            //Displaying an error message for the end of the row with requirements and digit validation
            endRow:{
              required: "Please enter a number from -150 to 150 except 0",
              number: "Only numbers are allowed!",
              min: "The minimum is -150!",
              max: "The maximum is 150!"
            }
        },
      //Make the table if there is no error or empty slots in the form
      submitHandler: function(event){
          makeTable();
          //Return false to the user
          return false;
      },
      //Hide the table if there is an invalid submission on the form
      invalidHandler: function(){
          $("#div1").empty();
      }
    });
}

function makeTable()
{
  //Getting the values of the rows and columns from the html page
  var StartColumn = Number(document.getElementById('beginColumn').value);
  var EndColumn = Number(document.getElementById('endColumn').value);
  var StartRow = Number(document.getElementById('beginRow').value);
  var EndRow = Number(document.getElementById('endRow').value);
  var temp;
  //Swap the start of the row with the end of the row if the end of the row is smaller
  if(EndRow < StartRow){
    //Assign the start of the row to a temporary variable
    temp = StartRow;
    //Assign the end of the row to the start of the row
    StartRow = EndRow;
    //Assign the temporary value to the end of the row
    EndRow = temp;
  }

  //Swap the start of the column with the end of the column if the end of the column is smaller
  if(EndColumn < StartColumn){
    //Assign the start of the column to a temporary variable
    temp = StartColumn;
    //Assign the end of the column to the start of the column
    StartColumn = EndColumn;
    //Assign the temporary value to the end of the column
    EndColumn = temp;
  }

  //Creating a table using the id of the divider in the HTML page
  //Albara Mehene (class mate) helped me in doing this table
  const table = document.getElementById("div1");
  //Creating the elements and the body of the table
  const tableEl = document.createElement("table");
  const tableBody = document.createElement("tbody");

  //Creating a table row
  var rows = document.createElement("tr");
  //Append the table header to the table row
  rows.appendChild(document.createElement("th"));
  //Looping through the rows of the table
  for(let i = StartRow; i <= EndRow; i++){
      //Creating an element for the table header
      const header = document.createElement("th");
      //Assign the indices to the header
      header.innerText = i;
      //Append the header to the table rows
      rows.appendChild(header);
  }
  //Append the rows to the table body
  tableBody.appendChild(rows);

  //Looping through the columns of the table
  for(let j = StartColumn; j <= EndColumn; j++){
      //Creating an element for the table rows
      rows = document.createElement("tr");
      //Creating an element for the table header
      let header = document.createElement("th");
      //Creating a node for the indices
      let node = document.createTextNode(j);
      //Append the node to the header
      header.appendChild(node);
      //Append the header to the table rows
      rows.appendChild(header);
      //Looping through the rows of the table
      for(let k = StartRow; k <= EndRow; k++){
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
