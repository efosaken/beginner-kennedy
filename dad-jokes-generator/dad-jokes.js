
//Getting the html elements we are going to need
const button = document.getElementById("btn");
const joke = document.getElementById("joke")

//Api key from apininja.com
const apiKey = "rY89w3gJMqJG2l0fQHBVMQ==qDrysiIV2H7YUBHM";

//the website the apikey is gotten from
const url = "https://api.api-ninjas.com/v1/dadjokes?"

//How to use the api according to the website using GET method
const options = {
    method :"GET",
    headers: {
        "X-Api-Key": apiKey,
}
}
//async function to get the joke since we are going to wait for the results. we used a try catch statemt inside the function to enable us detect errors
async function getJoke(){
    try {
        //Before we get our jokes we want the page to shiw something and the button to be disabled
        joke.innerHTML = "loading..."
        button.disabled = true;
        button.innerHTML = "Updating..."
    const response  = await fetch(url, options);
    const data =await response.json();

    //After getting the joke the button returns to normal
    button.disabled = false;
        button.innerHTML = "Tell me a joke"
    joke.innerHTML = data[0].joke
      
    } catch (error) {
        joke.innerHTML = "An error happened, try again later."
        joke.style.color = "red"
         button.disabled = true;
        button.innerHTML = "Tell me a joke"
        
    }}


button.addEventListener("click", getJoke)