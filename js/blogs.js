const blogListContainer = document.getElementById("blog-list-container");

const url = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=20";
const pageOne = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?page=2";
const postsPerPage = 10;
let displayedPosts = 0;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const viewMore = document.querySelector(".view-more");


function fetchBlogs(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      listBlogPosts(data);
    })
    .catch(error => console.error(error));
}

function listBlogPosts(data) {

 data.forEach((post, index)=> {

    const { id, title, excerpt, date, _embedded } = post;
    const featuredImage = _embedded["wp:featuredmedia"][0].source_url;
    const formattedDate = new Date(date).getFullYear();

if(index > 7) {

    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    const imageElement = document.createElement("img");
    imageElement.src = featuredImage;
    imageElement.alt = "";
    blogPost.appendChild(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title.rendered;
    blogPost.appendChild(titleElement);

    const dateElement = document.createElement("span");
    dateElement.textContent = formattedDate;
    blogPost.appendChild(dateElement);

    const readPostButton = document.createElement("a");
    readPostButton.textContent = "Read Post";
    readPostButton.classList.add("read-post-button");
    readPostButton.href = `specific.html?id=${id}`;

    

    blogPost.appendChild(readPostButton);

    blogListContainer.appendChild(blogPost);
}


function loadMorePosts(){
if(index < 8){

    const blogPost = document.createElement("div");
    blogPost.classList.add("blog-post");

    const imageElement = document.createElement("img");
    imageElement.src = featuredImage;
    imageElement.alt = "";
    blogPost.appendChild(imageElement);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title.rendered;
    blogPost.appendChild(titleElement);

    const dateElement = document.createElement("span");
    dateElement.textContent = formattedDate;
    blogPost.appendChild(dateElement);

    const readPostButton = document.createElement("a");
    readPostButton.textContent = "Read Post";
    readPostButton.classList.add("read-post-button");
    readPostButton.href = `specific.html?id=${id}`;

    

    blogPost.appendChild(readPostButton);

    blogListContainer.appendChild(blogPost);

viewMore.remove()
}};
viewMore.addEventListener("click", loadMorePosts)
})


  
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
