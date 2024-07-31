//Getting our html element we need
const ratings  = document.querySelectorAll(".ratings")
const button = document.getElementById("btn");
const container = document.querySelector(".container")

//initially placing the selected rating to an empty string
let selectedRating = ""

//looping through the ratings so as to target each one individually
ratings.forEach(rating => {
    rating.addEventListener("click", (event)=> {
      removeActiveClass();

selectedRating = event.target.innerText || event.target.parentNode.innerText
//targeting each rating so that when clicked the active class is added
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
});

//making the button functional so that when it's clicked the text in the container is displayed
button.addEventListener("click", () => {
    if(selectedRating !== "") {
        //writing the html text that'll be displayed in the container when the button is clicked
        container.innerHTML = `<strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})

//function to remove the active class from all the ratings so that it can be applied individually
function removeActiveClass() {
    ratings.forEach(rating => {
rating.classList.remove("active")
    })
}