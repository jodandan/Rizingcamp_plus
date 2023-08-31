const emailBtn = document.getElementById("emailBtn");
const subBtn = document.getElementById("subBtn");

emailBtn.addEventListener('keyup', activeEvent);
subBtn.addEventListener('click', errorEvent);

function activeEvent() {
  switch(!(emailBtn.value)){
    case true : subBtn.disabled = true; break;
    case false : subBtn.disabled = false; break
  }
}
