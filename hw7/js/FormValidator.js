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
//Validating the form from the html page
$(document).ready(function(){
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
        }
    });
});
