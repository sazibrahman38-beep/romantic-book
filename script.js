const pages = document.querySelectorAll(".page");

let currentPage = 0;

function nextPage() {

    if (currentPage < pages.length - 1) {

        pages[currentPage].style.transform =
            "rotateY(-180deg)";

        currentPage++;

        pages[currentPage].style.zIndex =
            pages.length - currentPage;
    }
}

function prevPage() {

    if (currentPage > 0) {

        currentPage--;

        pages[currentPage].style.transform =
            "rotateY(0deg)";

        pages[currentPage].style.zIndex =
            pages.length - currentPage;
    }
}
let startX = 0;

document.querySelector(".book").addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

document.querySelector(".book").addEventListener("touchend", function(e) {

    let endX = e.changedTouches[0].clientX;
    let difference = startX - endX;

    // Swipe left → Next page
    if (difference > 50) {
        nextPage();
    }

    // Swipe right → Previous page
    if (difference < -50) {
        prevPage();
    }

});
