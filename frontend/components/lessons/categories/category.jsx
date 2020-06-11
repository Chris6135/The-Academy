//you've set up the routes so that ti will be /categoryId/lessons. 
//that index action will make a request and get all the lessons of a given category. 
// now what you need to do is just make a functional component that's prepared to occupy any category. 

//go into each category and add a column with a tagline. stock text "learn to love {tagline}" will populate the banner.
//set a class for each category in scss .show-banner-{category} this will let you dynamically swtich aroudn the banner. 

//next step is to render all of the lessons. This should be easy enough as your call to the backend will grab all relevant data. 

// iterate through them and just grid them on the board. Dont have to worry about seperate content categories for these pages. 

//for styling its just a straight rip of the splash. 