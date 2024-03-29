
# Filmpire - Your Movie Companion!





![Logo](https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png)


## Tech Stack

 React, Material UI, JavaScript, Redux,
 
<div align="center">
    <img src="https://skillicons.dev/icons?i=react,mui,javascript,redux" />
    <br>
</div>

## Features

- Search functionality
- Watchlist and Favorite
- User Login
- Dark mode
- Genre Filter



## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install --legacy-peer-deps
```

Start the server

```bash
  npm start
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DISABLE_ESLINT_PLUGIN`

`REACT_APP_TMDB_KEY`


# My Diary

## Navbar
Navbars were always a struggle for me, I always saw them as the most troublesome component in every web app for some reason. Building this NavBar was such a huge challenge to understand using material UI, but i eventually understood everything and got the hang of it. The Navbar in material ui is actually called AppBar which is interesting, and defaults with blue look to it. Material UI removes the hastle of positioning the Navbar which used to always be my problem which I am grateful for. The Navbar consists of a toolbar, a search field, a dark mode toggle, and a login button.


## Sidebar

I would have never known how to implement this without scowering the internet for resources, but again thankfully material ui provides it, and automatically positions it to the left. The sidebar is mobile responsive with simple media queries and allows for scrolling. Nothing much to talk about here except the fact that it is just a bunch of nested list components already provided by material UI.

## MovieList & Movies & Movie

Movies is the parent component, MovieList is its child and the last child is the Movie. Movies passes down a {movies} prop to MovieList and fetches movies using a react redux query to the tmdb API and it is the first occurence of the react redux state management workflow in this project. After the movies are fetched, this data is then passed on to MovieList and there i map over the result object to display each object as a singular, ofcousre passing the data of each movie as a prop. I also used <Grid> from material UI and i love how you can specify how many items you want displayed depending on the media query from just the props. for example xs={12} would display only 1 component on small devices,
while xl={2} would display 6.

## Authentication
By far the hardest part of this application, there was so much redux boilerplate code and hard concepts to grab at first such as what the useSelector() does or what is the point of useDispatch(). Anyhow, authentication here was provided by tmdb as session ids and tokens, using get requests to recieve a token and post requests to create a new session. And after many hours of debugging and following their documentation and queries, i finally made it work. I'd always get a 401 error because session_id would be undefined and i realized i had a small logical error somewhere in my code that just ruined everything.

## Movie Information

Dense component with so much logic and API calls and fetches, trying to organize this component was a nightmare. This component has many subcomponents and styling it was easy thanks to material UI's Grid component. The favorite and watchlist buttons were a hassle to implement as you have to fetch the user's favorited movie's from the api and use the .find() on the results array which threw an error because sometimes the result array would not be defined yet as it is an async function, and i fixed that by changing result. to result?.


