let submit =  document.querySelector('.sendMessage');
let turnoff = document.getElementById("turnoff");
let box = document.querySelector(".box");
let isTurn = false;

submit.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Сообщение отправлено");
  location.reload ()
});

turnoff.addEventListener("click", () => {
  if (!isTurn){
    box.style.visibility = "hidden";
    isTurn = true;
    turnoff.textContent = "Включить эффекты"
  }
  else {
    box.style.visibility = "visible";
    turnoff.textContent = "Выключить эффекты"
    isTurn = false;
  }
});
