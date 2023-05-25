
const specificMain = document.querySelector(".specific-main")
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")
console.log(id);
const url = `https://www.sampug.no/exam1/wp-json/wp/v2/posts/${id}?_embed=wp:featuredmedia`;
fetch(url)
  .then(response => response.json())
  .then(data => {

    getSpecificPost(data);
    console.log(data)
  })
  .catch(error => console.error(error));

  function getSpecificPost(post) {

    const title = post.title.rendered;
    console.log()
   /*  const formattedDate = moment(post.date).format("MMMM Do, YYYY"); */
    const content = post.content.rendered;
    /* const featuredImage = post._embedded["wp:featuredmedia"][0].source_url; */
    

  
    specificMain.innerHTML = `
      <main class="specific-main">
        <div class="specific-blog-post">
          <h1>${title}</h1>
          <span>Published in ${post.date}</span>
           <p>${content}</p> 
        </div>
        <a class="back-link" href="./blogs.html">&larr; Back to Blog</a>
      </main>
    `;
  
    
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
    navMenu.classList.remove("active")
}));