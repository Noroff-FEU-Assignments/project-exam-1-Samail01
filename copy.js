const usedUrl ="https://sampug.no/cms/wp-json/wc/v3/products";
const jacketContainer = document.querySelector(".featured-jackets-container")
console.log(jacketContainer)

fetch(usedUrl, {

     method: 'GET',
    headers: new Headers({
    'Authorization': 'Basic ' + btoa(username + ":" + password)
    })
    
    })
    
    .then(response => response.json())
    .then(data => {
    console.log(data)
        displayOtherJackets(data)
        listData(data)
    })
    .catch(error => console.error(error));
 
    function listData(jacket) {
       
        for (const {name, price, featured, regular_price, description, images, id} of jacket){
if(featured === true && id === 32) {
    let imagePath = images[0].src
           
    jacketContainer.innerHTML += 
    `
    <div class="featured-jacket-card-two featured-jackets">
    <div class="featured-jacket-top-card">
      <img src="${imagePath}"/>
    </div>
    <div class="featured-jacket-bottom">
    <div class="jacket-bottom">
                <h3>${name}</h3>
                <p>Price: ${price}</p>
              </div>
    <a href="details.html?id=${id}" class="featured-link">See more</a>
    </div>
  </div>
    `


}
           
if(featured === true && id === 31) {
    let imagePath = images[0].src
           
    jacketContainer.innerHTML += 
    `
    <div class="featured-jacket-card-two featured-jackets">
    <div class="featured-jacket-top-card">
      <img src="${imagePath}"/>
    </div>
    <div class="featured-jacket-bottom">
    <div class="jacket-bottom">
                <h3>${name}</h3>
                <p>Price: ${price}</p>
              </div>
    <a href="details.html?id=${id}" class="featured-link">See more</a>
    </div>
  </div>
    `


}
if(featured === true && id === 30) {
    let imagePath = images[0].src
           
    jacketContainer.innerHTML += 
    `
    <div class="featured-jacket-card-two featured-jackets">
    <div class="featured-jacket-top-card">
      <img src="${imagePath}"/>
    </div>
    <div class="featured-jacket-bottom">
    <div class="jacket-bottom">
                <h3>${name}</h3>
                <p>Price: ${price}</p>
              </div>
    <a href="details.html?id=${id}" class="featured-link">See more</a>
    </div>
  </div>
    `


}


  

}
      
      
   
    };

    function displayOtherJackets(jackets) {
      const otherJacketsContainer = document.querySelector(".jackets-container");
      jackets.forEach(jacket => {
          const {name, price, regular_price, description, images, id, featured} = jacket;
        if (featured === false) {
          const imagePath = images[0].src;
          otherJacketsContainer.innerHTML += `
            <div class="jacket-card">
              <div class="jacket-top-card">
                <img src="${imagePath}" alt="${name}" />
                <div class="jacket-info>"
                <h1 class="jackets-header">${name}</h1>
                <p>Price: ${price}</p>
                </div>
                <a href="details.html?id=${id}" class="jacket-link"></a>
                </div>
            </div>
          `;
        }
      });
    }
