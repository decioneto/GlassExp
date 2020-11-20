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

