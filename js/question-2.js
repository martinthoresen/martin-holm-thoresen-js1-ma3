const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=3b7c97801f2a41aa9e2b97768e5b66d6";

const resultsContainer = document.querySelector(".container");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const games = data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="games">Title: ${games[i].name} <br> Rating: ${games[i].rating} <br> Number of Tags: ${games[i].tags.length}</div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = "An error occured when calling the API";
    console.log(error);
  }
}

getGames();
