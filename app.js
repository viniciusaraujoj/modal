const btnCard = document.querySelector(".btn-card");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btnCard.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});
