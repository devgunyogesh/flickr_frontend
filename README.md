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

//Ways to improve the speed of the page in terms of the images/content loading could have been by code splittiing through React.lazy(), but as we don't have much of code or pages can't use this.
Another way to speed up and make the images/content better in UX terms is by adding animation and thumbnail loader in every card till then load completely/

//Suspense and Lazy load used 

//Card transition made smooth.

//added flickr loader

//useIntersectionObserver hook created to use IntersectionObserver API to load those images only which are in viewport.

//Have to remove react.lazy and suspense as they are still under beta stage and couldn't control api request according to viewport.

//React hooks are bit tricky comared to normal component life cycle methods

//Trying to retain infinite load for searched optin as well.