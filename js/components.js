import { listBlogPosts } from "./script";

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

const url = "https://www.sampug.no/exam1/wp-json/wp/v2/posts?_embed=wp:featuredmedia&per_page=20";
//Code for slider
fetch(url)
  .then(response => response.json())
  .then(data => {
    /* listBlogPosts(data); */
  })
  .catch(error => console.error(error));


const slider = document.querySelector(".slider");
