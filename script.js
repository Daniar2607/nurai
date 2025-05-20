document.addEventListener("DOMContentLoaded", function() {
    // Брондау формасы
    const reserveForm = document.querySelector(".reservation form");
    if (reserveForm) {
        reserveForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Үстеліңіз сәтті брондалды!");
        });
    }

    // Пікір қосу
    const reviewForm = document.querySelector(".reviews form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let reviewText = document.querySelector(".reviews textarea").value;
            if (reviewText) {
                let newReview = document.createElement("p");
                newReview.textContent = `"${reviewText}" - Белгісіз қолданушы`;
                document.querySelector(".reviews").appendChild(newReview);
                document.querySelector(".reviews textarea").value = "";
                alert("Пікіріңіз сақталды!");
            }
        });
    }
});
