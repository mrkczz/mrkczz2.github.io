// Grab the form element
const form = document.querySelector('#form');

// Listen to the submit event
form.addEventListener('submit', processSubmit);

// Event handler for form submission
function processSubmit(e) {
    e.preventDefault(); // Prevent the browser from submitting the form automatically

    // Retrieve form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Data to be sent to the server
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Convert JS object to JSON
    const serializedFormData = JSON.stringify(formData);

    // Fetch options
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: serializedFormData
    };

    // Use fetch API to send data to Node server
    fetch('http://localhost:3000/form', fetchOptions)
        .then(onResponse)
        .then(onTextReady);
}

// Callback function to handle the text return
function onTextReady(text) {
    // Render the returned text below the form
    const responseDiv = document.getElementById('post-response');
    responseDiv.textContent = text;
}

// Callback function for fetch API response
function onResponse(response) {
    return response.text();
}
