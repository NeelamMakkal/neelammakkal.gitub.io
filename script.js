function toggleMenu() {
    const nav = document.getElementById('sideNav');
    nav.style.right = nav.style.right === '0px' ? '-300px' : '0px';
}

function showPage(pageId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    toggleMenu(); // Close menu after selection
}

function toggleAuth(type) {
    // Logic to switch between login and signup forms
    alert("Please complete the " + type + " setup.");
}
