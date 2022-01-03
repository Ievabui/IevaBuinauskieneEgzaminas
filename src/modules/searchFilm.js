import ajaxService from "./ajaxService";
import createPoster from "./createPoster";
import createText from "./createText";

const searchFilm = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(() => console.log(searchResponse))
            .then(() => {
                if (searchResponse.Response !== 'False') {
                    document.querySelector('main .result').innerHTML = '<span></span>'
                    createPoster(searchResponse.Poster);
                    createText("Filmo pavadinimas: " + searchResponse.Title);
                    createText("Filmo trukmė: " + searchResponse.Runtime)
                    createText("Režisierius: " + searchResponse.Director)
                    createText("Aktoriai: " + searchResponse.Actors)
                    createText("IMDb reitingas: " + searchResponse.imdbRating)
                } else {
                    document.querySelector('main .result').innerHTML = '<span>No results</span>'
                }
            })
    })
}

export default searchFilm