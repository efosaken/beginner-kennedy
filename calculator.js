//getting all the buttons and input field
const buttons = document.querySelectorAll("button")
const inputField = document.getElementById("result")

//looping through the buttons and adding an event listener to each one
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const buttonValue= buttons[i].textContent;
        console.log(buttonValue);

        //adding conditions to when the "C", "=" and other buttons are clicked to perform our respective functions
        if(buttonValue === "C") {
            clearResult()
        } else if(buttonValue === "="){
            calculateResult()
        } else if(buttonValue === "<"){
         deletevalue(buttonValue)
        } else{
            appendValue(buttonValue)
        }
    })
    
}
// function to clear the input field 
function clearResult(){
    inputField.value = ""
    
}
//function to perform our calculattions
function calculateResult(){
    //eval is a JS method that calculates values passed into it, in our case "the values in  our inputfield" 
inputField.value = eval(inputField.value)
}
//function to put our numbers and operators on the input field when they are clicked
function appendValue(buttonValue){
    inputField.value += buttonValue
}
function deletevalue() {
inputField.value = inputField.value.slice(0, -1)
}