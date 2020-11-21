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

var requestURL = '../produtos.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var produtos = request.response;
    addProdutos(produtos);
}

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
