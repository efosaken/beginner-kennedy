//getting the Dom elements
const button = document.getElementById("roll")
const dice  = document.getElementById("dice")
const rollHistory = document.getElementById("roll-history")

//setting the history list to an empty array
let historyList = []


//function to make the dice roll 
function rollDice(){
    //using math.random to get a number from 1-6
    const rollResult = Math.floor(Math.random() * 6) + 1

    //getting the face of the dice based on the result of the above code
    const diceFace = getDiceFace(rollResult)
    dice.innerHTML = diceFace;
    //updating the history list as the dice is rolled
    historyList.push(rollResult)
    updateRollHistory()
}
//function to update the unordered list i.e results of the roll whenever the dice is rolled
function updateRollHistory(){
    //creating the list html elements and appending it to the unordered list
rollHistory.innerHTML = ""
for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`
    rollHistory.appendChild(listItem)
    
}
}

//function to get the face of the dice based on the roll result e.g if the roll result is 5, the face of the dice shows 5
function getDiceFace(rollResult){
switch(rollResult){
    case 1:
        return "&#9856"
        break;
        case 2:
            return "&#9857"
            break
            case 3:
                return "&#9858";
                break;
                case 4:
                    return "&#9859"
                    break;
                    case 5:
                        return "&#9860"
                        break;
                        case 6:
                            return "&#9861"
                            break;
                            default:
                                return ""
                            
}
}

//adding functionality to the dice to roll it
button.addEventListener("click", ()=>{
    //adding and removing the rolling of the dice
    dice.classList.add("roll-animation");
    setTimeout(()=>{
        dice.classList.remove("roll-animation");
        rollDice()
    },1000)
})