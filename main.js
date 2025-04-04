const deleteProduct = document.querySelector(".delete-product");

let modal = null;
let productToDelete = null;

deleteProduct.addEventListener("click", function (e) {
  productToDelete = e.target.parentElement;
  createAndShowModal();
});

function createAndShowModal(onConfirm) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  const modalQuestion = document.createElement("p");
  modalQuestion.textContent = "Are you sure to delete this product ?";
  const yesBtn = document.createElement("button");
  yesBtn.textContent = "Yes";
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

  yesBtn.addEventListener("clique", () => {
    onConfirm();
    document.body.removeChild(modal);
  });

  cancelBtn.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  modalContent.appendChild(modalQuestion);
  modalContent.appendChild(yesBtn);
  modalContent.appendChild(cancelBtn);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}
