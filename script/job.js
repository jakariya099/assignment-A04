
const jobCards = document.querySelectorAll(".job-card");

document.getElementById("totalCount").innerText = jobCards.length;

 
document.querySelectorAll(".interview-btn").forEach(function(button) {

  button.addEventListener("click", function() {

    const card = this.parentElement.parentElement;
    const status = card.querySelector(".status");

    card.dataset.status = "INTERVIEW";
    status.innerText = "INTERVIEW";
    status.className = "status inline-block text-xs bg-green-100 text-green-700 px-3 py-1 my-3";

    updateCount();
  });

});


 
document.querySelectorAll(".rejected-btn").forEach(function(button) {

  button.addEventListener("click", function() {

    const card = this.parentElement.parentElement;
    const status = card.querySelector(".status");

    card.dataset.status = "REJECTED";
    status.innerText = "REJECTED";
    status.className = "status inline-block text-xs bg-red-100 text-red-700 px-3 py-1 my-3";

    updateCount();
  });

});


 
function updateCount() {

  let interview = 0;
  let rejected = 0;

  jobCards.forEach(function(card) {

    if(card.dataset.status === "INTERVIEW"){
      interview++;
    }

    if(card.dataset.status === "REJECTED"){
      rejected++;
    }

  });

  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
}


 

document.getElementById("allBtn").addEventListener("click", function(){

  jobCards.forEach(function(card){
    card.style.display = "block";
  });

});

document.getElementById("interviewBtn").addEventListener("click", function(){

  jobCards.forEach(function(card){

    if(card.dataset.status === "INTERVIEW"){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

document.getElementById("rejectedBtn").addEventListener("click", function(){

  jobCards.forEach(function(card){

    if(card.dataset.status === "REJECTED"){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

});

