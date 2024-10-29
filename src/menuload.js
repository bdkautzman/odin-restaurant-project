export default function menuLoad(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Brian's Cafe";
    content.appendChild(title);
    
    const foodheading = document.createElement("h3");
    foodheading.textContent = "Food";
    content.appendChild(foodheading);
    
    const array = ["Quiche - $7", "Croissant - $4", "Chocolate Croissant - $5", "Bagel - $4 (+$1 w/cream cheese)", "Parfait - $6"]
    
    for (let i = 0; i < array.length; i++) {
        const el = document.createElement("div");
        el.textContent = array[i];
        content.appendChild(el);
    }
}