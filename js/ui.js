export class UI {
    displayGames(result) {
        let gamesContainer = '';
        for (let i = 0; i < result.length; i++) {
            gamesContainer += `
        <div class="col-md-4">
                        <div data-id="${result[i].id}" class="card h-100 bg-transparent" >
                            <div class=" card-body">
                            <div class="position-relative">
                                <img class="card-img-top w-100 h-100"
                                    src=${result[i].thumbnail}>
                            </div>
                            <div class="py-3">
                                <div class="d-flex text-white justify-content-between py-2">
                                    <h3 class="h6 small">${result[i].title.split(' ').splice(0, 3).join(' ')}</h3>
                                    <span class="badge text-bg-primary p-2">Free</span>
                                </div>
                                <p class="card-text small text-center text-white opacity-50">
                                   ${result[i].short_description.split(' ').splice(0, 8).join(' ')}
                                </p>
                            </div>
                        </div>
                        <div class="card-footer small d-flex text-white justify-content-between">
                            <span class="badge badge-color">${result[i].genre}</span>
                            <span class="badge badge-color">${result[i].platform}</span>
                        </div>
                    </div>
                </div>
        `
        }
        document.getElementById('allGames').innerHTML = gamesContainer;
    }
    displayDetails(result) {
        let gameDetails = `
                <div class="col-md-4">
                    <img src="${result.thumbnail}" class="w-100" alt="image ">
                </div>
                <div class="col-md-8">
                    <h3 class="header-font">Title: ${result.title}</h3>
                    <p>Category: <span class="badge text-bg-info"> ${result.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${result.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${result.status}</span> </p>
                    <p class="fs-6">${result.description}</p>
                    <a class="btn btn-outline-warning" target="_blank"
                        href="${result.game_url}"> Show Game</a>
                </div>
        `
        document.getElementById("details").innerHTML = gameDetails
    }
}