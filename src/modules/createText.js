const createText = (response) => {
    let elementText = document.createElement('div');
    elementText.className = 'col-12 col-lg-12 col-md-4 col-sm-3 col-xs-2 card-text';
    elementText.innerHTML += `<div><p>${response}</p></div>`;
    document.querySelector('main .result').appendChild(elementText);

    return elementText
}

export default createText