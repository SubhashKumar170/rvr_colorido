const modal = document.getElementById("myModal");
const btn = document.getElementById("showRoutesBtn");
const closeBtn = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


const leftSets = document.querySelectorAll(".left-content .event-set");
const rightSets = document.querySelectorAll(".right-content .event-set");

let leftIndex = 0;
let rightIndex = 0;

function rotateEvents() {
  leftSets.forEach(set => set.classList.remove("active"));
  rightSets.forEach(set => set.classList.remove("active"));

  leftSets[leftIndex].classList.add("active");
  rightSets[rightIndex].classList.add("active");

  leftIndex = (leftIndex + 1) % leftSets.length;
  rightIndex = (rightIndex + 1) % rightSets.length;
}

setInterval(rotateEvents, 2000);
rotateEvents();





