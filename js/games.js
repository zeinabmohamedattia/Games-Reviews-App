import { UI } from "./ui.js";
import { Details } from "./details.js";
let links = document.querySelectorAll('li a');
let category = ''
export class Game {
    constructor() {
        this.getData("mmorpg");
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', e => {
                document.querySelector("li .active").classList.remove("active");
                e.target.classList.add("active");
                category = e.target.innerText.toLowerCase();
                this.getData(category);
            })
        }
        this.ui = new UI()
    }
    async getData(category) {
        document.querySelector('.loading').classList.remove('d-none')
        document.querySelector('body').classList.add('overflow-hidden')
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.${category}.fantasy.pvp&platform=pc`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9c010fca2msh56d74f6fa346867p134a2fjsnb350f58bdae8',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com' 
            }
        })
        let result = await data.json()
        console.log(result)
        this.ui.displayGames(result)
        this.getId();
        document.querySelector('.loading').classList.add('d-none')
        document.querySelector('body').classList.remove('overflow-hidden')
    }
    getId() {
        let cards = document.querySelectorAll(".card")
        for (let i = 0; i < cards.length; i++) {
            cards[i].addEventListener('click', e => {
                let id = cards[i].getAttribute('data-id');
                this.showCurrentGame(id)
            })
        }
    }
    showCurrentGame(idGame) {
        const details = new Details(idGame);
        document.querySelector("home").classList.add("d-none");
        document.querySelector(".game-details").classList.remove("d-none");
    }
}
