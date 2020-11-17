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

function closeFilter() {
    let asideFilter = document.getElementById("aside-popper")
    let btnCloseFilter = document.getElementById("close-filter")
    let filterCol = document.getElementsByClassName("filter-col")
       
    asideFilter.classList.toggle("active");

    if(asideFilter.classList.contains("active")) {
        btnCloseFilter.style.display = "block";
        // filterCol.classList.add("col-lg-2");
    } else {
        btnCloseFilter.style.display = "none";
        // filterCol.classList.add("col-lg-1");
    }
}