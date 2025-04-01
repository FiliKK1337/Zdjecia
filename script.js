document.addEventListener("DOMContentLoaded", function() {
    function getDailyImage() {
        const imgElement = document.getElementById("dailyImage");

        if (!imgElement) {
            console.error("Element #dailyImage nie został znaleziony!");
            return;
        }

        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const imageNumber = (day + month + year) % 45 + 1;
        const imagePath = `${imageNumber}.jpg`;

        console.log("Wczytywanie obrazu:", imagePath);
        imgElement.src = imagePath;

        imgElement.onerror = function () {
            console.error("Błąd ładowania obrazu:", imagePath);
            imgElement.alt = "Brak zdjęcia na dziś!";
        };
    }

    getDailyImage();
});
