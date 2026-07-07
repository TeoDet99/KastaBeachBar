document.addEventListener("DOMContentLoaded", () => {
    // Φόρτωσε τα πρώτα προϊόντα στο παρασκήνιο
    renderMenu('coffee');

    // Κράτησε το loading screen για 2 δευτερόλεπτα
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        const mainApp = document.getElementById("main-app");

        // Εμφάνισε το κυρίως μενού
        mainApp.classList.remove("hidden");
        
        // Σβήσε smooth το loading screen
        loadingScreen.classList.add("fade-out");
    }, 2000); 
});

function renderMenu(category) {
    const wrapper = document.getElementById("menu-wrapper");
    wrapper.innerHTML = ""; 

    const items = menuData[category];

    // Έλεγχος αν υπάρχουν προϊόντα στην κατηγορία
    if(!items) return;

    items.forEach(item => {
        if (item.available) {
            const itemElement = document.createElement("div");
            itemElement.className = "menu-item";
            itemElement.innerHTML = `
                <div class="item-main">
                    <span class="item-title">${item.name}</span>
                    <span class="item-line"></span>
                    <span class="item-price">${item.price}€</span>
                </div>
                ${item.description ? `<p class="item-details">${item.description}</p>` : ''}
            `;
            wrapper.appendChild(itemElement);
        }
    });
}

function switchCategory(category) {
    const buttons = document.querySelectorAll('.nav-link');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderMenu(category);
}