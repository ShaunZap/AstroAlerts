let currentPage = 1;

//DOMContentLoaded to ensure HTML has been completly loaded
document.addEventListener('DOMContentLoaded', function () {
   getSpaceNews(currentPage);
   
   const intro = document.getElementById("intro");
   intro.innerHTML = ` Welcome to AstroAlerts - your premier source for the latest in 
   space exploration and celestial wonders. Dive into captivating stories, breaking news, and cosmic discoveries, 
   as we unravel the mysteries of the universe. Join us on this stellar journey and stay connected with the 
   extraordinary world beyond our atmosphere. Welcome to AstroAlerts, where the cosmos comes to life!`;
});



