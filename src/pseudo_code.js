// Dota 2 Hero Statistics

// Choose a hero to view statistics fetched from the opendota API

//There are currently 124 heroes in the game, but this app will use a limited amount for version 1.0 (so all the heroes from "New Player Game Mode") 

//Core - 3 per team
//Axe; Dragon Knight; Drow Ranger; Juggernaut; Phantom Assassin; Sniper; Tidehunter; Viper; Windranger; Wraith King; Zeus

//Support - 2 per team
// Crystal Maiden; Jakiro ; Lich ; Lion ; Pudge ; Vengeful Spirit ; Warlock ; Witch Doctor

// MVP

// 1. Setting everything up
// create a new react app
// create a new firebase project to store hero images and anything else
// initialize firebase, configure (oops, forgot to mention this was stretch goal as i dont need firebase for pictures)

// 2. Make components
// create an app component
// create components for the following:
// - display list of heroes 'HeroList'
// - individual details of each hero 'HeroDetails'

// 3. Fetch data from Opendota API
// use the function 'fetchGameStats' to fetch stats from the Opendota API using 'fetch'
// store fetched data in 'gameStats' state within the 'App' component

// 4. Display Hero List
// in 'HeroList', map through 'gameStats' and display a list of heroes
// implement the function 'handleHeroSelect' to handle when user selects a hero from the list

// 5. Display Hero Details
// in the 'HeroDetails' component, display detailed info about selected hero (e.g. stats, abilities, etc)
// use the 'selectedHero' state from the 'App' component to show the details of chosen hero

// 6. Finish styling, work on UI
// use css/sass to make things pretty
// make sure ui and website are responsive and accessible!

// 7. Deploy on netlify
// this is the easy part lol

// Stretch Goals

// Implement search functionality
// create a SearchBar component
// in the 'SearchBar' component, add an input field for users to enter their search queries
// implement the function 'handleSearch' to update the 'searchQuery' state in the 'App' component based on user input
// use 'searchQuery' to filter the list of heroes displayed in the 'HeroList' component

// Integrate firebase for hero images 
// fetch hero image urls from firebase and store them in the 'heroes' state in the 'App' component
// use the 'heroes' state to display hero images alongside the game stats in the 'HeroList' Component
