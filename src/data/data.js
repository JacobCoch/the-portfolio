import chatschatapp from "../assets/projects/chatschatapp.png";
import devmeetups from "../assets/projects/devmeetups.jpg";
import eventBack from "../assets/projects/modals/eventbackModal.jpg";
import eventFront from "../assets/projects/modals/eventfrontModal.jpg";
import mobileExample from "../assets/projects/modals/iphoneimg.jpg";
import myfliix from "../assets/projects/myflix.jpg";
import mymovieapi from "../assets/projects/mymovieapi.png";
import PokemonIndex from "../assets/projects/pokemonindex.png";
import tastebuds from "../assets/projects/tastebuds.jpg";

const data = [
    {
        id: 1,
        name: "React Movie App",
        image: myfliix,
        github: "https://github.com/JarJarDinks/myFLix-client",
        live: "https://themovieflicks.netlify.app/",
    },
    {
        id: 2,
        name: "Dev Meetup App",
        image: devmeetups,
        github: "https://github.com/JarJarDinks/Dev-Meetups/",
        live: "https://jarjardinks.github.io/Dev-Meetups/",
        mobile: mobileExample,
        eventBack,
        eventFront,
    },

    {
        id: 3,
        name: "Django Recipe App",
        image: tastebuds,
        github: "https://github.com/JarJarDinks/recipe-app",
        live: "https://shrouded-forest-61463-f52cd1412c70.herokuapp.com/",
    },
    {
        id: 4,
        name: "Vanilla JS Pokemon Index",
        image: PokemonIndex,
        github: "https://github.com/JarJarDinks/pokemon-index",
        live: "https://jarjardinks.github.io/pokemon-index/",
    },
    {
        id: 5,
        name: "React Native Chat App",
        image: chatschatapp,
        github: "https://github.com/JarJarDinks/ChatApp",
        live: "https://github.com/JarJarDinks/ChatApp#installation-and-usage",
    },
    {
        id: 6,
        name: "Node & Express API",
        image: mymovieapi,
        github: "https://github.com/JarJarDinks/myFlix-API",
        live: "https://mymovieapidb.herokuapp.com/",
    },
];

export default data;
