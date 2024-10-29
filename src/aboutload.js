
export default function aboutLoad() {
const content = document.getElementById("content");

const title = document.createElement("h1");
title.textContent = "Brian's Cafe";
content.appendChild(title);

const aboutheading = document.createElement("h3");
aboutheading.textContent = "About";
content.appendChild(aboutheading);

const el = document.createElement("div");
el.textContent = "Brian's Cafe is the result of years of home barrista-ing by owner Brian Kautzman. After buying his first espresso machine in 2021, Brian was hooked. He'd always dreamed of starting a coffee shop and that dream became a reality in 2024.";
content.appendChild(el);
}