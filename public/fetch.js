// this function will call if fetch is successful
function onResponse(response) {     //parantheses store arguments that the function works with
    console.log(response);
    response.text().then(onStreamProcessed);
}

// this function will call if fetch fails
function onError(e){
    
}

// main
// fetch api returns a promise where the response object resolves into
fetch('images.txt')
    .then(onResponse, onError);

// callback function
function onStreamProcessed(text) {
    console.log(text);

    // split content line by line
    const urls = text.split('\n');

    // iterate each of the value
    for (const url of urls) {
        // create a new image
        const image = createImage(url);
        // grab element with an id called album view
        const albumView = document.querySelector('#album-view');
        // append new image to this album view
        albumView.appendChild(image);

        // add click event to the created image
        image.addEventListener('click', function (e) {
            displayImageInModal(e.target.src);
        });
    }
}

// this function creates a new image
function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
}

// function to display clicked image in modal
function displayImageInModal(e) {
    const modalView = document.getElementById('modal-view');        //gets modal-view ID
    const modalImage = document.createElement('img');              
    modalImage.src = e;                                           //event from createImage(e) is set to modalImage.src

    // Append the modal image to the modal view
    modalView.appendChild(modalImage);                          //adds clicked image to modal-view

}




