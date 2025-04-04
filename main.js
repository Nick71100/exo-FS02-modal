const deleteProduct = document.querySelector(".delete-product");

let modal = null;
let productToDelete = null;

deleteProduct.addEventListener("click", function (e) {
  productToDelete = e.target.parentElement;
  createAndShowModal();
});

function createAndShowModal(onConfirm) {
  modal = document.createElement("div");
  const modalQuestion = document.createElement("p");
  const yesBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  setModalElement(modalQuestion, yesBtn, cancelBtn);
  modal.append(modalQuestion, yesBtn, cancelBtn);
  document.body.appendChild(modal);

  addEventToModal(yesBtn, cancelBtn);
}

function setModalElement(modalQuestion, yesBtn, cancelBtn) {
  modal.className = "modal";
  yesBtn.className = "yes-btn";
  cancelBtn = "cancel-btn";

  modalQuestion.textContent = "Are you sure to delete this product ?";
  yesBtn.textContent = "Yes";
  cancelBtn.textContent = "Cancel";
}

function addEventToModal(...buttons) {
  for (const button of buttons) {
    button.addEventListener("click", interactModal);
  }
}

function interactModal(e) {
  if (e.target.classList.contains("yes-btn")) {
    productToDelete.remove();
  }
  modal.remove();
}
