
const loadPictures = () => {
   const loadMorePictures = document.querySelector(".load_more_pictures");
   const unloadedPictures = document.querySelector(".unloaded_pictures");

   if (window.getComputedStyle(unloadedPictures).display === "block") {
      loadMorePictures.textContent = "Load more";
      unloadedPictures.style.display = "none";
   } else {
      loadMorePictures.textContent = "Load less";
      unloadedPictures.style.display = "block";
   }
}