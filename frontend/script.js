async function loadNews() {
    let apiUrl = "https://una-c5wb.onrender.com"; // Use the deployed API
    let response = await fetch(apiUrl);
    let newsData = await response.json();
    
    let newsSection = document.getElementById("news-section");
    newsSection.innerHTML = "";

    newsData.forEach(news => {
        let newsCard = `
            <div class="news-container">
                <div class="article-image">
                    <img src="${news.image_url}" alt="News Image">
                </div>
                <div class="article-content">
                    <div class="article-title">${news.title}</div>
                    <div class="article-description">${news.description}</div>
                    <div class="article-category">${news.category}</div>
                </div>
            </div>`;
        
        newsSection.innerHTML += newsCard;
    });
}

document.addEventListener("DOMContentLoaded", loadNews);
