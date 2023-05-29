const specificMain = document.querySelector(".specific-main");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `https://www.sampug.no/exam1/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    getSpecificPost(data);
  })
  .catch(error => console.error(error));

function getSpecificPost(post) {
  const title = post.title.rendered;
  const formattedDate = moment(post.date).format("MMMM Do, YYYY");
  const content = post.content.rendered;
  const featuredImage = post._embedded["wp:featuredmedia"][0].source_url;

  specificMain.innerHTML = `
    <div class="modal" id="modal">
      <div class="modal-content">
        <span class="close-button">X</span>
        <img src="${featuredImage}" alt="Modal Image" class="modal-image" id="modal-image" />
      </div>
    </div>
    <div class="specific-blog-post">
      <div>
        <h1>${title}</h1>
        <span>Published in ${formattedDate}</span>
      </div>
      <img src="${featuredImage}" class="specific-1-image">
      <p>${content}</p>
    </div>
    <a class="back-link" href="./blogs.html">&larr; Back to Blog</a>
  `;

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const imageToClick = document.querySelector('.specific-1-image');
  
  function openModal() {
    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  imageToClick.addEventListener("click", openModal);
  modal.addEventListener("click", closeModal);
}

//Code start for Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));
