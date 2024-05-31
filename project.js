let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

function updatePage() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = totalPages;
        } else if (index < currentPage) {
            page.style.transform = 'rotateY(-180deg)';
            page.style.zIndex = totalPages - index;
        } else {
            page.style.transform = 'rotateY(180deg)';
            page.style.zIndex = totalPages - index;
        }
    });
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
}

updatePage();