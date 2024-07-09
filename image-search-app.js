//getting our api key from unsplash website
const apiKey = "Vrl4ObykjIQLxdebj7rsdYqPr8y4r_5EVF-JDwdMgSw";

//getting our variables fromthe html
const form = document.querySelector("form");
const input = document.getElementById("search-input");
const searchContainer = document.querySelector(".search-container");
const showMoreButton = document.getElementById("show-more")
 
//setting the input to empty
let inputData = "";
//our page is 1 initially
let page = 1

//adding an event listener to the form so that when it's submitted it performs our function
form.addEventListener("submit", (event)=> {
event.preventDefault();
page = 1
searchImages()
})

//function to get our images. using async function cos we're fetching data from a remote server using an api
async function searchImages() {
    inputData = input.value;
    //website we're getting our data from and describing what we want
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`

    //since we are using async, we have to fetch the data from the url and await the response
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    if(page === 1) {
        searchContainer.innerHTML = ""
    }
    const results = data.results;
    console.log(results);

    //looping through our results from the website using the map method and appending each result to our app
results.map(result => {
    //creating the html and later append them to the search container div
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    
    imageContainer.appendChild(image);
    imageContainer.appendChild(imageLink);

    searchContainer.appendChild(imageContainer)
})
    page++
//show more button was hidden in css , we are now showing it if the page is more than 1
    if(page > 1) {
        showMoreButton.style.display = "block"
    }
   
}
//adding functionality to the show more button
showMoreButton.addEventListener("click", () => {
    searchImages();
})

