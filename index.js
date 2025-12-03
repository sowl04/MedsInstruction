function showPopup(meds) {
    const popupContent = document.getElementById('popup-content');
    popupContent.innerHTML = ""; // Clear previous content

    meds.forEach(med => {
        const medDiv = document.createElement('div');
        medDiv.className = "med-item";

        // Create an image element dynamically
        if (medsImages[med]) {
            const img = document.createElement('img');
            img.src = medsImages[med];
            img.alt = med;
            medDiv.appendChild(img);
        }

        // Add medication name
        const label = document.createElement('span');
        label.textContent = med;
        medDiv.appendChild(label);

        popupContent.appendChild(medDiv);
    });

    document.getElementById('popup-bg').style.display = "flex";
}