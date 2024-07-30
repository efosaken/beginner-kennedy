const button = document.getElementById("btn");
const fact = document.getElementById("fact");
const apiKey = "B59DY1hTgKBCOsEKoIx73Q==y9yfhtDfvZfk1pu5";

const url = "https://api.api-ninjas.com/v1/facts"

const options = {
    method: "GET",
    headers: {
         'X-Api-Key': apiKey},
}

 async function getFact() {
    try {
         fact.innerHTML = "Updating..."
        button.disabled = true;
        button.innerHTML = "loading..."
        const response  = await fetch(url, options);
    const data = await response.json();
    
    button.disabled = false;
    button.innerHTML = "TELL ME A FACT"
    

    fact.innerHTML = data[0].fact
    } catch (error) {
        fact.innerHTML = "something is wrong, please try again";
        fact.style.color = "red"
    }
    
}


button.addEventListener("click", getFact)