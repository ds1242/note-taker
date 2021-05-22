
  # Note Taker ![badmath](https://img.shields.io/badge/license-MIT-blue)

  ## About/Description

  This application allows a user to write and save notes.  The notes are written to a JSON file so they can be retrieved anytime.  The application front end was already written so I worked to create the routes on server.js which implemented the functionality of the webpage.  This application uses express for the routes to function.   I also added uuid to the project to generate a unique id each time a new note is created.  This allows for the id on each note to help identify the index in the array when using the delete function of the app.  Finally this application uses Heroku to deploy to a live environment.

  ### User Story

  AS A small business owner
  I WANT to be able to write and save notes
  SO THAT I can organize my thoughts and keep track of tasks I need to complete

  ### Acceptance Criteria
  
  GIVEN a note-taking application
  WHEN I open the Note Taker
  THEN I am presented with a landing page with a link to a notes page
  WHEN I click on the link to the notes page
  THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
  WHEN I enter a new note title and the note’s text
  THEN a Save icon appears in the navigation at the top of the page
  WHEN I click on the Save icon
  THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
  WHEN I click on an existing note in the list in the left-hand column
  THEN that note appears in the right-hand column
  WHEN I click on the Write icon in the navigation at the top of the page
  THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Languages](#languages)
  * [Contributing](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  Express and UUID were installed in order to make this function.  npm install should download the items required.

  ## Usage

  Clicking the live link https://fierce-fjord-09218.herokuapp.com/notes will open the live application

  ### Screenshots

  #### Main Page When Opening The Application

  <img width="1000" src="./img/homepage.jpg" alt="homepage when app is opened">

  #### Main Note Page 

  <img width="1000" src="./img/mainNotePage.jpg" alt="main note page after clicking get started">

  #### Adding A New Note

  <img width="1000" src="./img/addingNewNote.jpg" alt="user inputs information to add a note">

  #### Note Added After Clicking Save

  <img width="1000" src="./img/newNoteAdded.jpg" alt="new note added to list when clicking save">

  #### Note Displays When Clicked On

  <img width="1000" src="./img/noteDisplay.jpg" alt="note displays when clicked">

  #### Note Removed From List When Trash Button Clicked To Delete

  <img width="1000" src="./img/deleteNote.jpg" alt="note deleted when trash clicked">
  

  ## Languages

  JavaScript<br>HTML<br>CSS<br>ES6<br>jQuery<br>Bootstrap<br>Express<br>Node.js<br>UUID<br>Heroku

  ## Contributing

  Contributions by: David Shaw, start code provided by Bootcamp

  If you would like to contribute to this project we follow the [Contributor Covenant](https://www.contributor-covenant.org/)

  ## License

  https://choosealicense.com/licenses/mit/

  ## Tests

  none

  ## Questions:

  If you have any questions please contact us or refer to our github below:

  Email Us At: david.shaw1242@gmail.com

  Github Repo: https://github.com/ds1242/note-taker



