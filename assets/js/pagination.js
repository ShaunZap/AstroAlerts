//function to go to the next page of articles
function nextPage() {
    if (currentPage < 10) {
        currentPage++;
        const searchQuery = document.getElementById("searchbar").value;
        if (searchQuery !== "") {
            getSpaceNews(currentPage, searchQuery);
        } else {
            getSpaceNews(currentPage);
        }
    }
    updatePaginationButtons(currentPage);
 }
 
 //function to go to previous page of articles
 function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        getSpaceNews(currentPage);
        const searchQuery = document.getElementById("searchbar").value;
        if (searchQuery !== "") {
            getSpaceNews(currentPage, searchQuery);
        } else {
            getSpaceNews(currentPage);
        }
    }
 }
 
 //function to disable the next and previous buttons
 function updatePaginationButtons(currentPage) {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const prevButton1 = document.getElementById("prevButton1");
    const nextButton1 = document.getElementById("nextButton1");
 
    if (currentPage === 1) {
     prevButton.classList.add("disabled");
     prevButton1.classList.add("disabled");
     prevButton.disabled
     prevButton1.disabled
     } 
     else {
     prevButton.classList.remove("disabled");
     prevButton1.classList.remove("disabled");
     }
     if(currentPage >= 10){
         nextButton.classList.add("disabled");
         nextButton1.classList.add("disabled");
         nextButton.disabled 
         nextButton1.disabled 
     }
     else{
         nextButton.classList.remove("disabled");
         nextButton1.classList.remove("disabled");
     }
 }