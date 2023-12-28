import chatschatapp from "../assets/projects/chatschatapp.png";
import devmeetups from "../assets/projects/devmeetup.jpg";
import myfliix from "../assets/projects/myflix.jpg";
import mymovieapi from "../assets/projects/mymovieapi.png";
import PokemonIndex from "../assets/projects/pokemonindex.png";
import tastebuds from "../assets/projects/tastebuds.jpg";

const data = [
    {
        id: 1,
        name: "myFlix",
        details: "A movie app built with React, Redux, and React-Bootstrap.",
        image: myfliix,
        github: "https://github.com/JacobCoch/myFLix-client",
        live: "https://themovieflicks.netlify.app/",
    },
    {
        id: 2,
        name: "Dev-Meetups",
        details: "A meetup app for developers.",
        image: devmeetups,
        github: "https://github.com/JacobCoch/Dev-Meetups/",
        live: "https://jacobcoch.github.io/Dev-Meetups/",
    },

    {
        id: 3,
        name: "TasteBuds",
        details: "A recipe management app built with Python and Django.",
        image: tastebuds,
        github: "https://github.com/JacobCoch/recipe-app",
        live: "https://shrouded-forest-61463-f52cd1412c70.herokuapp.com/",
    },
    {
        id: 4,
        name: "Pokedex",
        details: "A vanilla JavaScript app that uses the Pokemon API.",
        image: PokemonIndex,
        github: "https://github.com/JacobCoch/pokemon-index",
        live: "https://jacobcoch.github.io/pokemon-index/",
    },
    {
        id: 5,
        name: "Chat App",
        details: "A React Native chat app built with Expo and Firebase.",
        image: chatschatapp,
        github: "https://github.com/JacobCoch/ChatApp",
        live: "https://github.com/JacobCoch/ChatApp#installation-and-usage",
    },
    {
        id: 6,
        name: "API",
        details: "A node.js and express API for myFlix app.",
        image: mymovieapi,
        github: "https://github.com/JacobCoch/myFlix-API",
        live: "https://mymovieapidb.herokuapp.com/",
    },
];

export default data;
