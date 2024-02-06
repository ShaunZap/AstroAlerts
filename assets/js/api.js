
async function getSpaceNews(page, query="") {
    let apiURL;
    if (query !== ""){
        apiURL = `https://api.spaceflightnewsapi.net/v4/articles/?title_contains=${query}&limit=10&offset=${(page - 1) * 10}`;
    }
    else{
        apiURL = `https://api.spaceflightnewsapi.net/v4/articles/?limit=20&offset=${(page - 1) * 20}`;
    }
    let response = await fetch(apiURL);
    let data = await response.json();
    console.log(data);
    const container = document.getElementById("container");
    // Clear existing articles
    container.innerHTML = "";
 
    // Display new articles
    data.results.forEach(element => {
        let extractedDate = extractDate(element.published_at);
        const card = document.createElement("div");
        container.appendChild(card);
        card.className = "spaceCard";
        card.innerHTML = `
            <div class="spaceTitle">${element.title}</div>
            <div class="imageContainer">
                <img class="spaceImage" alt="blocked or lost" src="${element.image_url}">
            </div>
            <div class="spaceContent">${element.summary}</div>
            <div class="wrapper">
                <a class="spaceButton" href="${element.url}" target="_blank" >Read</a>
                <div class="publishTime">${extractedDate}</div>
            </div>
            <div class="publisher">${element.news_site} </div>
        `;
    });
 
    //to keep count of the page number
    let pagecount1 = document.querySelector(".count1");
    let pagecount2 = document.querySelector(".count2");
    pagecount1.innerHTML = page;
    pagecount2.innerHTML = page;
    updatePaginationButtons(page);
 }
 
 // funtion to extract only yyyy-mm-dd
 function extractDate(dateString) {
    return dateString.slice(0, 10);
 }