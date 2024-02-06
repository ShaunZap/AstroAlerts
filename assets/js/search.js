
document.getElementById("search").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchbar").value;
        if (searchQuery !== "") {
            getSpaceNews(currentPage, searchQuery);
        } else {
            getSpaceNews(currentPage);
    }
});

