const blogListContainer = document.getElementById("blog-list-container");
const viewMoreBtn = document.getElementById("view-more-btn");

const url = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=20";
const pageOne = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?page=2";

function fetchBlogs(url) {
  fetch(url)

    .then(response => response.json())

    .then(data => {
      listBlogPosts(data);
      if (data.length > 2) {
        viewMoreBtn.style.display = "block";
      }
    })

    .catch(error => console.error(error));
}

function listBlogPosts(data) {
  data.forEach(post => {
    const {id, title, excerpt, date, _embedded} = post;

    const featuredImage = _embedded["wp:featuredmedia"][0].source_url;
    const formattedDate = new Date(date).getFullYear();

    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    const imageElement = document.createElement("img");
    imageElement.src = featuredImage;
    imageElement.alt = "";
    blogPost.appendChild(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title.rendered;
    blogPost.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = excerpt.rendered;
    blogPost.appendChild(descriptionElement);

    const dateElement = document.createElement("span");
    dateElement.textContent = formattedDate;
    blogPost.appendChild(dateElement);

    blogListContainer.appendChild(blogPost);
  });
}

fetchBlogs(url);

//Code start for Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}));



