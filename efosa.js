// Creating a bar chart
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
//changing image using dom
document.getElementById("myefosa").src = "images/starboy.jpg" 
//creating a date objects 
document.getElementById("mydate").innerHTML = "created : " + Date();
     
//usin Js to change images by mouse movement
function mum() {
  document.getElementById('myefosa').src = "images/starmum.jpg";
}
function me() {
  document.getElementById('myefosa').src = "images/starboy.jpg";
}
function us() {
  document.getElementById('myefosa').src = "images/efosa2.jpg";
}
function dad() {
  document.getElementById("myefosa").src = "images/fine-boy.jpg"
}
//using JS to create new paragraphs
const para = document.createElement("p");
const node = document.createTextNode("As you can see, i have put  up a lot of info about me");
para.appendChild(node);
//putting a date in the footer
const element = document.getElementById("foot");
const child = document.getElementById("mydate")
element.insertBefore(para,child);
