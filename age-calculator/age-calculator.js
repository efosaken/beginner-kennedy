const button = document.getElementById("calculate")
const birthday = document.getElementById("birthday");
const result = document.getElementById("result")




function calculateAge(){
    const birthdayValue = birthday.value;
    if(birthdayValue === ""){
        alert("Please enter your birthday")
    } else{
        const age = getAge(birthdayValue)
        result.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }
}


function getAge(birthdayValue){
    const currenDate = new Date();
    const birthdayDate = new Date(birthdayValue)

    let ageNow = currenDate.getFullYear() - birthdayDate.getFullYear();
    
    const months = currenDate.getMonth() - birthdayDate.getMonth()

    if(months < 0 || (months === 0 && currenDate.getDate() < birthdayDate.getDate())){
        ageNow--
    }
 return ageNow 
   
}

button.addEventListener("click", calculateAge)