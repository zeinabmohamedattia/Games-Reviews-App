import { UI } from "./ui.js";
export class Details {
    constructor(id) {
        this.ui = new UI();
        document.querySelector(".close").addEventListener("click", () => {
            document.querySelector("home").classList.remove("d-none");
            document.querySelector(".game-details").classList.add("d-none");
        });
        this.getDetails(id);
    }
    async getDetails(id) {
        document.querySelector('.loading').classList.remove('d-none')
        document.querySelector('body').classList.add('overflow-hidden')
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e9c010fca2msh56d74f6fa346867p134a2fjsnb350f58bdae8',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        let result = await data.json()
        this.ui.displayDetails(result)
        document.querySelector('.loading').classList.add('d-none')
        document.querySelector('body').classList.remove('overflow-hidden')
    }
}