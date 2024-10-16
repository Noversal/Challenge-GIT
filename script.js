const presentation = document.querySelector("#presentation");

setTimeout(() => presentation.showModal(), 1500);

const presentationCloseButton = presentation.querySelector("button");

presentationCloseButton.addEventListener("click", () => {
    presentation.close();
})