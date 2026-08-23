const pages = document.querySelectorAll(".page");

let currentPage = 0;

function nextPage() {

    if (currentPage < pages.length - 1) {

        pages[currentPage].style.transform = "rotateY(-180deg)";

        currentPage++;
    }
}

function prevPage() {

    if (currentPage > 0) {

        currentPage--;

        pages[currentPage].style.transform = "rotateY(0deg)";
    }
}
