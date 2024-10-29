export default function hoursLoad(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Brian's Cafe";
    content.appendChild(title);
    
    const hoursheading = document.createElement("h3");
    hoursheading.textContent = "Hours";
    content.appendChild(hoursheading);
    
    const array = ["Monday: 6am - 8pm", "Tuesday: 6am - 8pm", "Wednesday: 6am - 8pm", "Thursday: 6am - 8pm", "Friday: 6am - 8pm", "Saturday: 7am - 10pm", "Sunday: 7am - 10pm"]
    
    for (let i = 0; i < array.length; i++) {
        const el = document.createElement("div");
        el.textContent = array[i];
        content.appendChild(el);
    }
}