document.addEventListener("DOMContentLoaded", function() {
  const showButtons = document.querySelectorAll(".show-button");
  const posts = document.querySelectorAll(".post");

  showButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
          scrollToPost(posts[index]);
      });
  });

  function scrollToPost(textArea) {
      const postPosition = post.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
          top: postPosition,
          behavior: "smooth"
      });
  }
});
