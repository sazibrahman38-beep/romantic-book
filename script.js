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
