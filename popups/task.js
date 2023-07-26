const popup = document.querySelector("#modal_main");
popup.classList.add("modal_active");

const wellDone = document.querySelector("#modal_success");

const doWell = document.querySelector(".show-success");
doWell.onclick  = () => {
    popup.className = "modal";
    wellDone.className = "modal modal_active";
};

const modalClose = document.querySelectorAll(".modal__close_times");
closePopup = () => {
    for (let i = 0; i < modalClose.length; i++) {
        let element = modalClose[i];
        let closeFunc = () => {
            wellDone.style.display = "none";
            popup.style.display = "none";
        };
        element.onclick = closeFunc;
    }
}

closePopup();
