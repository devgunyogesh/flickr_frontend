# flickr_frontend
Git repo to consume flickr API for frontend app in React.js. 


//Dividing project into smaller components: 

FeedPage: term to refer the home page 
Navbar: term to refer top header
Feeds: term to refer photo cards 


//Sass pre processor used so reusable code can be defined in mixins, variables and functions

Base: This file includes removing basic styling thats by default there in browser.
Abstracts: It defined mixins used.
Component based styling is left to respective component folders only for the ease, but import file for all scss files is sane that is main.scss.

//Though folder structure canbe kept very light for this app, but I am trying to show how farther we can go in modularization and breaking down of the components.

//Implementing Reacts latest API Hooks.

//As Flickr API returns data in a callback, using JSONP. My personal preference for API calls is axios.

//To keep the assignment fast used Material UI.

//Added prop types 

//Implemeting search functionality also.

//Links will open in new tab

//Custom hooks extracted

//On infinite scroll if tag searched consistency maintained.