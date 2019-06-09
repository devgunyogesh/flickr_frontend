# About
This project is Flickr frontend web app task.

## Tech stack

- Javascript 3.x ✔️
- React 16.8.x  ✔️
- Hook API(Custom and Inbuilt hooks used) ✔️
- Any styles pre-processor(SASS) ✔️ 

## Cross-browser

- 11+ ✔️
- Edge 
- FF ✔️
- Chrome ✔️

## Installation

1. Clone project from the repo.
2. In project root folder run command `npm install`.
3. After that run command `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# REQUIREMENTS

## !!! IMPORTANT !!!

## While completing the task following points has been given high priority:
- The website you create should function as a single page app: ✔️
- You must use HTML and CSS (using pre-compilers such as Sass or LESS is fine): ✔️
- Your app should support the major browsers (Chrome, Firefox, Safari, IE10+). ✔️
- We would encourage that you use a framework to speed up development time. ✔️
- If you do decide to use other Flickr API feeds to show us what you can do, be aware that some endpoints do require an API key. You can apply for your own here. ❌
- Where possible, only request images with a 'safe' tag to ensure the application remains suitable for all ages. ✔️
- CSS frameworks- Material UI (to expedite the task) ✔️
- JSON content is loaded with JSONP from the provided url: ✔️ ️ ️

As Flickr API returns data in a callback, using JSONP. My personal preference for API calls is axios or fetch.

## Bonus points

Bonus points to the task completion are going to be awarded for:

- Code Linting: ✔️
- Prop Types: ✔️
- Search Functionality: ✔️
- Infinite Scrolling: ✔️
- Image fetch only when in view through IntersectionObserver: ✔️
- Two href opens in new  tab: ✔️
- Adding animation and thumbnail loader in every card: ✔️
- Card transition made smooth through fade in transition: ️️✔️
- Added loaders: ✔️ 
- Polyfill

Ways to improve the speed of the page in terms of the images/content loading: This could be achieved through various ways like code splittiing through React.lazy() and suspense fallback.

## Project terminology: 

FeedPage: term to refer the home page 
Navbar: term to refer top header
Feeds: term to refer photo cards 

## Folder structure for styling:

Base: This file includes removing basic styling thats by default there in browser.
Abstracts: It defines the mixins.

Component based styling is left to respective component folders for the ease, but import file for all scss files is one that is main.scss.

Though folder structure can be kept very light for this app, but I am trying to show how farther we can go in modularization and breaking down of the components and styling.

## Following point was taken care:

- structure 
- quality
- consistency
- reusability
- modularity