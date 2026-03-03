function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showSection(sectionId) {
    // Hide all sections
    document.getElementById('home').classList.add('hidden');
    document.getElementById('about').classList.add('hidden');
    document.getElementById('auth').classList.add('hidden');
    
    // Show the selected one
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Close the sidebar
    closeNav();
}
