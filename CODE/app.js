document.addEventListener("DOMContentLoaded", () => {
    // Μόλις τελειώσει το loader, δείξε απλά την αρχική με τις κατηγορίες
    setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        const mainApp = document.getElementById("main-app");

        mainApp.classList.remove("hidden");
        loadingScreen.classList.add("fade-out");
    }, 2000); 
});

// Όταν ο πελάτης πατάει μια κάρτα κατηγορίας
function selectCategory(category) {
    // 1. Ενημέρωσε τον τίτλο της κατηγορίας στην οθόνη προϊόντων
    document.getElementById("current-category-title").innerText = category.toUpperCase();

    // 2. "Ζωγράφισε" τα προϊόντα αυτής της κατηγορίας
    renderMenu(category);

    // 3. Κρύψε την αρχική οθόνη κατηγοριών και δείξε την οθόνη προϊόντων
    document.getElementById("categories-screen").classList.add("hidden");
    document.getElementById("products-screen").classList.remove("hidden");
    
    // Σκρολάρισμα αυτόματα στην κορυφή
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Όταν ο πελάτης πατάει το κουμπί "Πίσω"
function showCategoriesHome() {
    document.getElementById("products-screen").classList.add("hidden");
    document.getElementById("categories-screen").classList.remove("hidden");
}

function renderMenu(category) {
    const wrapper = document.getElementById("menu-wrapper");
    wrapper.innerHTML = ""; 

    const items = menuData[category];

    // Αν η κατηγορία είναι άδεια ή δεν υπάρχει
    if (!items || items.length === 0) {
        wrapper.innerHTML = '<p class="no-items">Σύντομα κοντά σας...</p>';
        return;
    }

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
                ${item.description ? '<p class="item-details">' + item.description + '</p>' : ''}
            `;
            wrapper.appendChild(itemElement);
        }
    });
}