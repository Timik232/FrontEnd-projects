"use strict"
let like = document.getElementById("like");
let login = document.getElementById('tolog')
let admin = document.getElementById('admin')

function getPosition(e){
	var x = y = 0;

	if (!e) {
		var e = window.event;
	}

	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY){
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}

	return {x: x, y: y}
}

function spamming(e){
    function(e){
  	var coord = getPosition(e);
  	console.log(coord.x + "," + coord.y);
  });
}

like.addEventListener("click", () => {
  if (like.style.backgroundColor == "azure"){
    like.style.backgroundColor = "rgb(21, 200, 5)";
    like.style.color = "rgb(144, 8, 157)";
    document.body.addEventListener("mousemove",spamming(e));
  }
  else{
    document.body.removeEventListener("mousemove",spamming);
    like.style.backgroundColor = "azure";
    like.style.color = "rgb(152, 217, 255)";
  }
})

login.addEventListener("click", () => {
  let want = false;
  while (!want) {
    want = confirm("Ты хочешь зайти на сайт?");
    if (want){
      alert("Ты крутой!");
    }
    else{
      alert("Я сказал, ты хочешь зайти на сайт!!!");
  }
}
})

admin.addEventListener("click", () => {
    let login = prompt("Здравствуйте! Введите логин, чтобы зайти в панель админа");
    if (login == "Админ"){
      let password = prompt("Введите пароль");
      if (password == "Я главный"){
        alert("Я вам верю, проходите");
      }
      else{
        alert("Ты не админ!!! Обманщик");
      }
    }
    else if (login == null) {
      alert("ну и не надо");
    }
    else{
      alert("Вы кто такие? Я вас не звал. Уходите");
    }

})
