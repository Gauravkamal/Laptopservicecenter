function navigateToPage(page) {
    window.location.href = page; // Navigate to the specified page
}



//  for typing effect
// type js plugin
let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;
let s = 0
let text = ["fix Keyboards", "Upgrade SSDs", "Upgrade RAMs", "Fix Screens", "Fix Motherboards", "Replace Chargers"]

typeJsText.innerHTML = "";

function typeJs() {
    if (counter < text[s].length) {
        counter++;
        typeJsText.innerHTML += text[s].charAt(counter);
        textArray = text[s].split("");
    } else {
        textArray.pop();
        typeJsText.innerHTML = textArray.join("");
        if (textArray.length == 0) {
            counter = -1;
            s++;
            if (s == text.length) { s = 0; }
        }
    }
}

setInterval(() => {
    typeJs();
}, 100);



function updateViewportSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}

// Update viewport size on page load and window resize
window.addEventListener('load', updateViewportSize);
window.addEventListener('resize', updateViewportSize);