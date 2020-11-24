let dropFilter = document.getElementsByClassName("section-header")
let i;

for (i = 0; i < dropFilter.length; i++) {
    dropFilter[i].addEventListener('click', function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const asideFilter = document.getElementById("aside-popper")

function closeFilter() {
    let btnCloseFilter = document.getElementById("close-filter")
    let filterCol = document.getElementById("filter-col")
    
    asideFilter.classList.toggle("active");
    filterCol.classList.toggle("open");

    if(asideFilter.classList.contains("active")) {
        btnCloseFilter.style.width = "60px";
    } else {
        btnCloseFilter.style.width = "0"
    }
}

// var requestURL = '../produtos.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//     var produtos = request.response;
//     addProdutos(produtos);
// }

// function addProdutos(jsonObj) {
//     let prodInfos = jsonObj;
//     let container = document.getElementsByClassName("box-row")
//     let imgProd = document.getElementsByClassName("img")
//     let color = document.getElementsByClassName("color-prod")
//     let capacity = document.getElementsByClassName("capacidade")
//     let nome = document.getElementsByClassName("nome-prod")
//     let heightProd = document.getElementsByClassName("height-prod")
//     let diameterProd = document.getElementsByClassName("diameter-prod")
//     let weightProd = document.getElementsByClassName("weight-prod")

//     for (var i = 0; i < prodInfos.length; i++) {
//         container.;
//     }
// }


// RANGE SLIDE CAPACIDADE //
var inputLeftCap = document.getElementById("input-left-cap");
var inputRightCap = document.getElementById("input-right-cap");

var thumbLeftCap = document.querySelector(".capacidade .slider > .thumb.left");
var thumbRightCap = document.querySelector(".capacidade .slider > .thumb.right");
var rangeCap = document.querySelector(".capacidade .slider > .range");

function setLeftValueCap() {
	var _this = inputLeftCap,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRightCap.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeftCap.style.left = percent + "%";
	rangeCap.style.left = percent + "%";
}
setLeftValueCap();

function setRightValueCap() {
	var _this = inputRightCap,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeftCap.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRightCap.style.right = (100 - percent) + "%";
	rangeCap.style.right = (100 - percent) + "%";
}
setRightValueCap();

inputLeftCap.addEventListener("input", setLeftValueCap);
inputRightCap.addEventListener("input", setRightValueCap);

// RANGE SLIDE Altura //
var inputLeftAlt = document.getElementById("input-left-alt");
var inputRightAlt = document.getElementById("input-right-alt");

var thumbLeftAlt = document.querySelector(".altura .slider > .thumb.left");
var thumbRightAlt = document.querySelector(".altura .slider > .thumb.right");
var rangeAlt = document.querySelector(".altura .slider > .range");

function setLeftValueAlt() {
	var _this = inputLeftAlt,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRightAlt.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeftAlt.style.left = percent + "%";
	rangeAlt.style.left = percent + "%";
}
setLeftValueAlt();

function setRightValueAlt() {
	var _this = inputRightAlt,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeftAlt.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRightAlt.style.right = (100 - percent) + "%";
	rangeAlt.style.right = (100 - percent) + "%";
}
setRightValueAlt();

inputLeftAlt.addEventListener("input", setLeftValueAlt);
inputRightAlt.addEventListener("input", setRightValueAlt);

// RANGE SLIDE Diametro //
var inputLeftDia = document.getElementById("input-left-dia");
var inputRightDia = document.getElementById("input-right-dia");

var thumbLeftDia = document.querySelector(".diametro .slider > .thumb.left");
var thumbRightDia = document.querySelector(".diametro .slider > .thumb.right");
var rangeDia = document.querySelector(".diametro .slider > .range");

function setLeftValueDia() {
	var _this = inputLeftDia,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRightDia.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeftDia.style.left = percent + "%";
	rangeDia.style.left = percent + "%";
}
setLeftValueDia();

function setRightValueDia() {
	var _this = inputRightDia,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeftDia.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRightDia.style.right = (100 - percent) + "%";
	rangeDia.style.right = (100 - percent) + "%";
}
setRightValueDia();

inputLeftDia.addEventListener("input", setLeftValueDia);
inputRightDia.addEventListener("input", setRightValueDia);