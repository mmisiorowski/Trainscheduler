//This is our code to initalize firebase which will link our app to the //
//database and allow us to pull up real time information//
 var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

//This is a variable that will reference or database linked above//
var database = firebase.database

//Below is where we tell the database what specific data that we want to grab and present//
//based on the user search input//
var route = $("#route-input").val()
var destination = $("#destination-input").val()
var next = $("#NextTrain-input.").val()
var run = $("#runtime-inout")

//down here is the start of getting the initial data from firebase by making//
// a new var to contain everything, I couldn't quite find the right code or find//
//proper examples//
var trainInfo = {

}

//we also need to make some code that pushes the Firebase date onto our info//
//tables that will populate the list of our app//

// We also want to create an on click function that will delete the date from //
//every colum of a row once it's no longer in use so our list doesnt become too//
//bloated looking or hard to read//


//This can be linked up to our JS to notify users when their//
//Data input was successful//
alert("Your search has been submitted")