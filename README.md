## YelpCamp

<p align="center"><img src="pictures/home-page.jpg" alt="Home Page"></p>

### Description
YelpCamp is a responsive website for people to share camping experience. Users can create an account and sign in to create their own campground and leave reviews. This full-stack project is part of Colt Steele's web development course on Udemy. To learn more details, please see the [demo video](https://www.youtube.com/watch?v=3Gy5JuoH9Cw).

### Tools and Technologies
* <strong>Front-end: </strong>HTML5, CSS3, Bootstrap 5, JavaScript, AJAX
* <strong>Back-end: </strong>Node.js, Express, MongoDB (Mongo Atlas)
* <strong>User Authentification & Authorization: </strong>Passport.js
* <strong>Image Upload: </strong>Cloudinary
* <strong>Map & Geocoding: </strong>Mapbox
* <strong>Deploying App: </strong>Heroku

### Main Features

<p align="center"><img src="pictures/campground-page.jpg" alt="Campground Page"></p>

* Users may create an account, sign in or sign out
* Once logged in, users may create their own campgrounds with name, description, location, price and image(s), and update or delete them later on
* Users may leave reviews with star ratings, and delete their own reviews
* Users may view geographical distribution of campgrounds on a cluster map, and see the map of each campground on their page

### How to Run Locally
1. Download the project, cd into its directory and run `npm install` to download dependencies needed (you should have node, npm and mongodb installed on your local machine)
2. Create a cloudinary account to get an API key and secret code, and store these variables in a .env file
3. To run the project on localhost, use command  `node app.js` or  `nodemon app.js` 
4. To publish new local commits, use git command `git push heroku master`

### Certificate
<p align="center"><img src="pictures/certificate.jpg" alt="Certificate of Completion"></p>

<br><em>Ruichen Zhang</em>
<br><br>Mar 10, 2021




