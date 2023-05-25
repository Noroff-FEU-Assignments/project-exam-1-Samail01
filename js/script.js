//Code for Home page.
const url = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=10";
const pageOne = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?page=2";
const blogContainer = document.getElementById("blog-container");
const slider = document.querySelector('.slider')
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")



fetch(url)
  .then(response => response.json())
  .then(data => {

    listBlogPosts(data);
  })
  .catch(error => console.error(error));

function listBlogPosts(data) {

  slider.innerHTML = "";

  data.forEach(post => {
    const {
      id, title, excerpt, date, _embedded
    } = post;

    const featured_image = _embedded["wp:featuredmedia"][0].source_url;
    const formatted_date = moment(date).format("MMMM Do, YYYY");


    slider.innerHTML += `
          <div class="card">
            <img src="${featured_image}" alt="" class="card-img" />
            <h3 class="card-title">${title.rendered}</h3>
            <span class="card-date">${formatted_date}</span>
            <p class="card-description">${excerpt.rendered}</p>
            <a href="specific.html?id=${id}" class="read-post-button">Read post</a>
          </div>
    `;

  });
}





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