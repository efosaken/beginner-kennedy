//Getting the html elements we need
const input  = document.getElementById("input")
const infoText = document.getElementById("info-text")
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title")
const meaning = document.getElementById("meaning");
const audio = document.getElementById("audio")


//An async function to get the meaning of a word from a remote site. we are not using an api key cos the site is free
 async function fetchAPI(word){
//using a try catch statement to handle errors
    try {
        //while we are waiting , we want our page to load
        infoText.style.display = "block"
        infoText.innerText = `Searching the meaning of "${word}"`
        //the api site we are using and using .then instead of await for the response
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    
    const result =  await fetch(url)
    .then((response) => response.json());
    
    //using a conditional statement in case a word that doesn't exist is typed
    if(result.title){
        meaningContainer.style.display = "block";
        infoText.style.display = "none"
        title.innerText = word;
        meaning.innerText = "N/A"
        audio.style.display = "none"
    }
    //what we want to happen if a correct word is typed
    else{
        infoText.style.display = "none"
        meaningContainer.style.display = "block";
        audio.style.display = "inline-flex"

        //filling our page with the results from the api site
        title.innerText =result[0].word
        meaning.innerText = `1. ${result[0].meanings[0].definitions[0].definition}
        
        2. ${result[0].meanings[0].definitions[1]?.definition || "N/A"}
        3. ${result[0].meanings[0].definitions[2]?.definition || "N/A"}
        4. ${result[0].meanings[0].definitions[3]?.definition || "N/A"}
        5. ${result[0].meanings[0].definitions[4]?.definition || "N/A"}
        `
        
        audio.src = result[0].phonetics[0].audio;
        
    }//handling errors
     //
    } catch (error) {
        console.log(error);
        infoText.innerText = "An error happened, try again later"
    }


}

//adding an event listener to the input to submit it when the "Enter" key is pressed
input.addEventListener('keyup', (event) =>{
    if(event.target.value && event.key === "Enter"){
        fetchAPI(event.target.value)
    }
})