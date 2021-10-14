/*//desplegables
const panel = document.getElementById("panel");
const list = document.getElementById("list");

//botones
const panelBtn = document.getElementById("showPanel");
const listBtn = document.getElementById("showList");

//panel del costado

panelBtn.onclick = function () {
    if (panel.style.display === "none") {
        panel.style.display = "block"
    }
}*/
//panel del costado:

const panel = document.getElementById("panel");
const panelBtn = document.getElementById("showPanel");

//hamburguesa:
const list = document.getElementById("list");
const listBtn = document.getElementById("showList");

//panel del costado:
panelBtn.onclick = function () {
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
};

//hmaburguesa:
listBtn.onclick = function () {
    if (list.style.display === "none") {
        list.style.display = "flex";
    } else {
        list.style.display = "none";
    }
};