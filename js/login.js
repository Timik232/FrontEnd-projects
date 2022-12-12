"use strict"
let like = document.getElementById("like");
let login = document.getElementById('tolog');
let admin = document.getElementById('admin');
let capcha = document.getElementById('capcha');
let create = document.getElementById('create__value');
let addto = document.getElementById('add__value');
let stop = document.getElementById('stop');
let sort = document.getElementById('sort');
let filter = document.getElementById('filter');

function getPosition(){
	let x = 0;
  let y = 0;
  let e = window.event;
	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY){
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return {x: x, y: y}
}

var count = 0;
var toDelete = 0;
var spawnTime = 0;
let date = new Date();
var liveTime = 0;

function spamming(){
		let date = new Date();
    let time = date.getMilliseconds() + date.getSeconds() * 1000;
		if (liveTime == 0){
			 liveTime = time;
		 }
		if ((time - spawnTime) > 50){
			spawnTime = time;
		  count+=1;
	  	var coord = getPosition();
			let div = document.createElement("div");
			div.id = "Div" + count;
			div.appendChild(document.createTextNode("❤"));
			div.style.position = "absolute";
			div.style.left = coord.x+'px';
			div.style.top = coord.y+'px';
			div.style.content = "❤";
			document.body.appendChild(div);
			if ((time-liveTime) > 300){
				liveTime = time;
				let el = document.getElementById("Div" + toDelete);
				toDelete+=1;
				if (el){
				document.body.removeChild(el);
				}
			}
	}
}

like.addEventListener("click", () => {
  if (like.style.backgroundColor == "azure"){
    like.style.backgroundColor = "rgb(21, 200, 5)";
    like.style.color = "rgb(144, 8, 157)";
    document.body.addEventListener("mousemove",spamming);
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

capcha.addEventListener("click", () => {
	 var result = '';
	 var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	 var charactersLength = characters.length;
	 let min = 4;
   let max = 10;
	 for ( var i = 0; i < Math.floor(Math.random() * (max - min + 1) + min); i++ ) {
			 result += characters.charAt(Math.floor(Math.random() * charactersLength));
	 }
	 let answer = prompt(`Докажите, что вы человек, введите это:\n${result}`);
	 if (answer == result){
		 alert("Вы человек, поздравляю");
	 }
	 else if (answer == undefined){
		 alert("Ну и не надо");
	 }
	 else if (answer == ""){
		 alert("Ничего не ввели");
	 }
	 else {
		 let flag = false;
		 while(!flag){
			 let first = Math.ceil(Math.random()*10);
			 let second = Math.ceil(Math.random()*10);
			 answer = prompt(`Дам ещё один шанс. Введите сумму этих чисел:\n${first} + ${second}`);
			 if (answer == (first+second)){
				 alert("Хотя бы с этим вы справились, проходите");
				 flag = true;
			 }
			 else if (answer == ""){
				 alert("Вы ничего не ввели");
			 }
			 else if (answer == undefined){
				 alert("Ну не хотите и не надо");
				 flag = true;
			 }
			 else{
				 alert("Я хочу верить, что вы человек, попробуйте снова");
			 }
	 	}
	 }
})

function Accumulator(startingValue){
	this.value = startingValue;
	this.read = function(newvalue) {
		this.value += newvalue;
	}
	this.print = function() {
		let label = document.getElementById("add__label");
		label.textContent = "Значение объекта равно: " + this.value;
	}
}
var Accum = {};
create.addEventListener("click", () => {
	let value = prompt("Введите число для создания объекта");
	Accum = new Accumulator(parseInt(value));
	create.disabled = true;
	create.style.cursor = "default";
	addto.disabled = false;
	addto.style.cursor = "pointer";
	Accum.print();
})

addto.addEventListener("click", () => {
	let value = prompt("Введите число для добавления значения");
	Accum.read(parseInt(value));
	Accum.print();
})

function truncate(str,maxlength){
	if (str.length > maxlength){
		str = str.slice(0,maxlength) + "...";
		return str;
	}
}
let verylong = document.getElementById('verylongtext');
verylong.textContent = truncate(verylong.textContent,8);

function addNotif(){
	let notif = document.getElementById('notif');
	let val = Number(notif.innerHTML);
	val+=1;
	notif.innerHTML = val;
}

let timerID = setInterval(addNotif, 3000);

function timerGO()
{
		timerID = setInterval(addNotif, 3000);
}

stop.addEventListener("click", () => {
 clearInterval(timerID);
 alert("На 10 секунд уведомления выключены");
 setTimeout(timerGO,10000);
})

let items = [];
let blocks = [];

let htmlItems = document.querySelector(".trash");

items.push("фотосессия");
items.push("предметная съёмка");
items.push("портретная съёмка");
for (let i = 0; i < 3; i++)
{
	blocks.push([`
	<div class="trash__el el${i}">
		<div class="trash__text trash__text${i}">${items[i]}
		</div>`,
		`<div class="trash__cost trash__cost${i}"> ${Math.ceil(Math.random()*1000)}
		</div>`,
		`<div class="add__el"><span class="amount__el amount__el${i}">0</span><span class="plus plus${i}">+</span>
		</div>`,
		`<div class="clear"><img src="images/trash.svg" alt="trash" height=32px class="clear__this">
		</div>
	</div>
	`]);
	htmlItems.innerHTML += blocks[i].join("");
}
htmlItems.innerHTML += "<br>";



let plus = document.querySelectorAll(".plus");

for (let i = 0; i < 3; i++){
	plus[i].addEventListener("click", () => {
		let el = document.querySelector(`.amount__el${i}`);
		el.innerHTML = Number(el.innerHTML) + 1;
		let cost = document.querySelector(`.trash__cost${i}`).innerHTML;
		let result = document.getElementById('result');
		result.innerHTML = Number(result.innerHTML) + Number(cost);
		//blocks[i][2] = blocks[i][2].splice(indexOf(i)+2,indexOf(`</span><span class="plus`),el.innerHTML);
		//console.log(blocks[i][2]);
	})
}

let trash = document.querySelectorAll(".clear__this");
trash[0].addEventListener("click", () => {
	document.getElementById("more").value = "";
	document.getElementById("less").value = "";
	document.getElementById('result').innerHTML = 0;
	for (let i = 0; i < 3; i++){
		document.querySelector(`.amount__el${i}`).innerHTML = 0;
	}
});
for (let i = 1; i < 4; i++){
		trash[i].addEventListener("click", () => {
			let el = document.querySelector(`.amount__el${i-1}`);
			let cost = document.querySelector(`.trash__cost${i-1}`).innerHTML;
			let result = document.getElementById('result');
			result.innerHTML = Number(result.innerHTML) - el.innerHTML * cost;
			el.innerHTML = 0;
	})
};


let sortTact = 0;
function sortButton() {
	//let position = [];
	let to_sort = [];
	let names = [];
	for (let i = 0; i < 3; i++)	{
		to_sort.push(blocks[i][1].slice(blocks[i][1].indexOf(i)+3,blocks[i][1].indexOf("</div>")));
		names.push(document.querySelector(`.trash__text${i}`).textContent);
	}
	for (let j = 2; j > 0; j--){
		for (let i = 0; i < j; i++){
			if (sortTact%2 == 0){
			if (to_sort[i] > to_sort[i + 1]) {
        let temp = to_sort[i];
        to_sort[i] = to_sort[i + 1];
        to_sort[i + 1] = temp;
				temp = names[i];
				names[i] = names[i+1];
				names[i + 1] = temp;
				/*temp = blocks[i];
				blocks[i] = blocks[i + 1];
        blocks[i + 1] = temp;*/
		}
	}
	else {
		if (to_sort[i] < to_sort[i + 1]) {
			let temp = to_sort[i];
			to_sort[i] = to_sort[i + 1];
			to_sort[i + 1] = temp;
			temp = names[i];
			names[i] = names[i+1];
			names[i + 1] = temp;
	}
	}
 }
}
 let result = "";
 for (let i = 0; i < 3; i++){
	 result += names[i].trim() + " " + to_sort[i].trim() + "\n";
 }
 alert("Отсортированный список:\n" + result);
 sortTact+=1;
 /*let inner = htmlItems.innerHTML;
 inner = inner.slice(inner.indexOf(`<div class="trash__el el0">`), inner.indexOf("<br>") + 3);
 htmlItems.innerHTML = htmlItems.innerHTML.replace(inner,"");
for (let i = 0; i < 3; i++){
 	htmlItems.innerHTML += blocks[i].join("");
}*/
}



function filterButton() {
	let more = Number(document.getElementById("more").value);
	console.log(more);
	let less = Number(document.getElementById("less").value);
	let elements = [];
	let cost;
	let name;
	for (let i = 0; i < 3; i++){
		cost = document.querySelector(`.trash__cost${i}`).textContent;
		name = document.querySelector(`.trash__text${i}`).textContent;
		if (Number(cost) >= more && Number(cost) <= less){
			elements.push(name.trim() + " " + cost.trim());
	}
	}
	if (elements.length == 0){
		alert("Ничего не подходит")
	}
	else {
		alert("Подходят следующие услуги:\n" + elements.join("\n"));
}
}
let hrref = document.querySelectorAll(".changecolor");
for (let hr of hrref){
	hr.style.color = "red";
}

let addlist = document.querySelector(".addlist");
addlist.addEventListener("click", () => {
	while(true)
	{
		let text = prompt("Введите элемент списка");
		let ul = document.querySelector(".list-to-add");
		if (!text) {
	    break;
	  }
		 let elem = document.createElement("li");
		 elem.innerText = text;
		 ul.appendChild(elem);
	}
});

let i = 1;
let showAlert = document.getElementById("show-notif");
showAlert.addEventListener ("click", e => {
    let elem = document.createElement("li");
    elem.className = "notification";
    let text = document.createElement("p");
    text.innerText = "Новое уведомление " + i;
		i++;
    elem.appendChild(text);
    document.getElementById("notif-container").appendChild(elem);
    addAlert ("Уведомление");
    setTimeout (() => {
        elem.classList.add("notification-shown");
    }, 0);
    setTimeout (() => {
        elem.classList.remove("notification-shown");
    }, 2000);
    setTimeout (() => {
        elem.remove();
    }, 2500)
})

function addAlert (text) {
    let item = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = "x";
    button.className = "del"
    item.innerText = text;
    item.appendChild(button);
    document.getElementById('notif-list').appendChild(item);
    document.getElementById('notif-count').innerHTML++;
}

let alertList = document.getElementById("notif-list");
alertList.addEventListener ("click", e => {
    if (e.target.className == "del") {
        e.target.parentElement.remove();
        document.getElementById("notif-count").innerText--;
    }
})
let cent = document.getElementById("image-center");

function res(){
    cent.style.marginLeft = ((window.innerWidth - cent.clientWidth) / 2).toString()+"px";
    cent.style.marginTop = ((window.innerHeight - cent.clientHeight) / 2).toString()+"px";
}
setInterval(res, 100);

let contents = document.querySelector(".prevent-content");
contents.addEventListener ("click", e => {
    if (e.target.tagName == "A") {
        if (!confirm("Вы уверены, что хотите перейти по ссылке?")) {
            e.preventDefault();
        }
    }
});

let cursor = document.getElementById("vert-line");
cursor.addEventListener("mousedown", e => {
    e.preventDefault();
    let line = document.getElementById("line");
    let width = parseFloat(getComputedStyle(cursor).width);
    let lineBegin = line.getBoundingClientRect().x;
    document.onmousemove = e => {
        if (e.pageX > lineBegin - width / 2 && e.pageX < parseFloat(getComputedStyle(line).width) + lineBegin - width / 2) {
            cursor.style.left = e.pageX + - lineBegin + "px";
        }
    }
    document.onmouseup = e => {
        document.onmousemove = null;
    }
})

let cost = 0;
let shop = document.getElementById("market");
let cartList = document.getElementById("cart-list");
let costElem = document.getElementById("cost");
shop.addEventListener("mousedown", e => {
    e.preventDefault();
    let item = e.target;
    if (item.tagName == "LI") {
        let movingItem = document.createElement("li");
        movingItem.innerHTML = item.innerHTML;
        movingItem.classList.toggle("moving");
				  movingItem.style["list-style-type"] = "none";
        document.body.appendChild (movingItem);

        document.onmousemove = e => {
            movingItem.style.top = e.clientY + "px";
            movingItem.style.left = e.clientX + "px";
        }

        document.onmouseup = e => {
            movingItem.hidden = true;
            let elemBellow = document.elementFromPoint(e.clientX, e.clientY);
            if (elemBellow.id == "cart" || elemBellow.id == "cart-list" || elemBellow.parentNode.id == "cart-list") {
                cartList.appendChild (movingItem);
                movingItem.hidden = false;
                movingItem.classList.toggle("moving");
                cost += +movingItem.innerText.split(" ")[1];
                costElem.innerText = "Стоимость: " + cost;
            } else {
                movingItem.remove();
            }
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
})

let camera = document.getElementById("camera");
let start = performance.now();
function animateCamera (time) {
    let duration = 10000;
    let timeFraction = (time - start) % duration / duration;
    if (timeFraction < 0.5) {
        camera.style.left = timeFraction * 180 + "%";
        //camera.style.transform = "scaleX(1)";
    } else {
        camera.style.left = (1 - timeFraction) * 180 + "%";
        //camera.style.transform = "scaleX(-1)";
    }
    if (timeFraction > 1) timeFraction = 1;
    requestAnimationFrame(animateCamera);
}
requestAnimationFrame(animateCamera);


let randomStart = performance.now();
let rand = Math.random();
let randomMax = rand * 180;
let randomCamera = document.getElementById("random-camera");
let randomDuration = rand * 10000;
let last;
let lastTime = performance.now();

function animateRandomCamera (time) {
    let timeFraction = (time - randomStart) % randomDuration / randomDuration;
    if (timeFraction < 0.5) {
        if (!last) {
            rand = Math.random();
            randomMax = rand * 180;
            randomDuration = rand * 10000;
            randomStart = performance.now();
            //console.log(rand);
        }
        last = true;
        randomCamera.style.left = timeFraction * randomMax + "%";
        //randomCamera.style.transform = "scaleX(1)";
    } else if (timeFraction > 0.5 && timeFraction < 0.53) {
			let contain = document.getElementById("random-camera-container");
			contain.style.background = "white";
			contain.style.filter = "blur(30px)";
			setTimeout (() => {
	        contain.style.background = "transparent"
					contain.style.filter = "blur(0px)";
	    }, 100);
		}
		else {
        last = false;
        randomCamera.style.left = (1 - timeFraction) * randomMax + "%";
        //randomCamera.style.transform = "scaleX(-1)";
    }
    if (timeFraction > 1) timeFraction = 1;
    requestAnimationFrame(animateRandomCamera);
}
requestAnimationFrame(animateRandomCamera);
