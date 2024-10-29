export default function homeLoad(){
    const content = document.getElementById("content");

    const title = document.createElement("h1");
    title.textContent = "Brian's Cafe";

    const summary = document.createElement("h3");
    summary.textContent = "Welcome to the Twin Cities premiere Cafe! Enjoy our cozy ambiance, seasonal small plates and hand-crafted beverages. Located on the corner of 5th and Broadway, the cafe is open 6am to 8pm on weekdays and 7am to 10pm on weekends.";

    content.appendChild(title);
    content.appendChild(summary);
};