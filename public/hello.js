//Second callback function to handle the text return 
function onTextReady(text){
    console.log(text);

        
    const name = message.name;
    const email = message.email;

    red = document.getElementById("post-response");
    red.style.cssText = "color: red;";
    red.textContent = "POST: NAME: "  + name + ", email: " +email ;

}

//first callback function
function onResponse(response){
    return response.text();
}


//DATA BEING SENT TO NODE
const message = {
    name: 'Mark',
    email: 'fpv22bbu@uea.ac.uk'
};

//CONVERT JS OBJECT TO JSON 
const serializedMessage = JSON.stringify(message);


//THE REQUEST DATA 
const fetchOptions = {
    method: 'POST',
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: serializedMessage
}


fetch('http://localhost:3000/hello', fetchOptions)
.then(onResponse)
.then(onTextReady);

