const animeContainer = document.querySelector(".anime-container");
const button = document.getElementById("btn");
const animeName = document.getElementById("name");
const animeImage = document.querySelector("img");



 async function getAnime(){
  try {
    button.disabled = true
  button.innerText = "Loading..."
  animeName.innerText = "Updating..."
  animeImage.src = "spinner2.svg"
    const response = await fetch("https://api.waifu.pics/sfw/waifu")
    const data = await response.json()
    button.disabled = false
    button.innerText = "Get anime"
    //console.log(data);
    animeContainer.style.display = "block"
    animeImage.src = data.url;
    animeName.innerText = "Unknown"
  } catch (error) {
    console.log(error);
    button.disabled = false;
    button.innerText = "Get Anime"
    animeName.innerText = "An error happened, try again later"
    
  }
    
}

  button.addEventListener("click", getAnime)