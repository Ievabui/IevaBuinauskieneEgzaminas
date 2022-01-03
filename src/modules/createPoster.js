const createPoster = (response) => {
    if (response !== "N/A") {
        let elementPoster = document.createElement('div');
        elementPoster.className = 'col-12 col-lg-12 col-md-12 col-sm-3 col-xs-2';
        elementPoster.innerHTML += `<div><img class="img-thumbnail" src="${response}" alt="poster"/>
</div>`;
        document.querySelector('main .result').appendChild(elementPoster);
        return elementPoster;

    } else {
        document.querySelector('main .result').innerHTML = '<div><img class="img-rounded" src="../../images/img2.jpg" alt="Film"></div>'
    }
}

export default createPoster


