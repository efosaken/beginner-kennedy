const quote = document.getElementById("quote")
const button = document.getElementById("btn");
const author = document.getElementById("author")

const apiUrl = "https://www.quotable.io/random"

async function getQoute(){
    try {
button.innerText = "Loading..."
quote.innerText = "Updating..."
button.disabled = true;
author.innerText = "Updating.."


        const response = await fetch(apiUrl)
        const data = await response.json()

        button.innerText = "GET A QUOTE"
        button.disabled = false;

console.log(data);


quote.innerText = data.content;
author.innerText = "~ " + data.author
    } catch (error) {
        console.log(error);
        quote.innerText = "An error happened, try again later";
        author.innerText = ""
        quote.style.color = "red"
        author.innerText  = "An error happened";
        author.style.color  = "red"
        button.innerText = "GET A QUOTE"
    }
}
 getQoute()

button.addEventListener("click", getQoute)