    function toggleReadMore() {
      var moreContent = document.getElementById("more");
      var btnText = document.getElementById("readMoreBtn");
  
      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btnText.textContent = "Read less";
      } else {
        moreContent.style.display = "none";
        btnText.textContent = "Read more";
      }
    }
