var dropFilter = document.getElementsByClassName("section-header")
var i;

for (i = 0; i < dropFilter.length; i++) {
    dropFilter[i].addEventListener('click', function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}