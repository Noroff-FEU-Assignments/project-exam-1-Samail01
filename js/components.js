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


//Code for slider
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    listBlogPosts(data);
  })
  .catch(error => console.error(error));

import { listBlogPosts } from "./script";
const slider = document.querySelector(".slider");
