import aboutLoad from "./aboutload.js"
import homeLoad from "./homeload.js"
import hoursLoad from "./hoursload.js"
import menuLoad from "./menuload.js"

homeLoad();

const homebtn = document.getElementById("home");
homebtn.addEventListener("click", () => {
    clearMainContent();
    homeLoad();
});

const menubtn = document.getElementById("menu");
menubtn.addEventListener("click", () => {
    clearMainContent();
    menuLoad();
});

const hoursbtn = document.getElementById("hours");
hoursbtn.addEventListener("click", () => {
    clearMainContent();
    hoursLoad();
});

const aboutbtn = document.getElementById("about");
aboutbtn.addEventListener("click", () => {
    clearMainContent();
    aboutLoad();
});

function clearMainContent() {
    const content = document.getElementById("content");
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }
}