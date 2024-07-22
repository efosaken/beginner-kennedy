const btn = document.getElementById("calculate")
const bill = document.getElementById("bill")
const tip = document.getElementById("tip")
const total = document.getElementById("total")



function calculateTotal() {
    const billValue = bill.value
const tipValue = tip.value;

const totalValue  = (billValue * (1 + tipValue/ 100)).toFixed(2) 
total.innerHTML = totalValue
console.log(totalValue);
}


btn.addEventListener("click", calculateTotal)