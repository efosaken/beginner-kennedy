const xFamily = ["Daddy", "Mummy", "Uncle", "Aunt", "Friend"];
const yAge = [34, 29, 33, 36, 25];
const barColors = ["red", "green","blue","orange","black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xFamily,
    datasets: [{
      backgroundColor: barColors,
      data: yAge
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Some family members and their ages"
    }
  }
});

document.getElementById("myefosa").src = "images/starboy.jpg" 
 document.getElementById("mydate").innerHTML = "created : " + Date();
      function myFunction() {
        let x = document.getElementById("numb").value;
        let text;
        if (isNaN(x) || x < 1 || x > 20) {
          text = "Input is not valid"
        } else {
          text = "Input is correct"
        }
document.getElementById("num1").innerHTML = text;
      }
      function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function myFunction(x) {
  x.style.background = "green";
}
function mum() {
  document.getElementById('myefosa').src = "images/starmum.jpg";
}
function me() {
  document.getElementById('myefosa').src = "images/starboy.jpg";
}
function us() {
  document.getElementById('myefosa').src = "images/efosa2.jpg";
}
const para = document.createElement("p");
const node = document.createTextNode("As you can see, i have put  up a lot of info about me");
para.appendChild(node);
const element = document.getElementById("foot");
const child = document.getElementById("mydate")
element.insertBefore(para,child);
