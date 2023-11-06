const url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product"

function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Assuming the response is JSON data
      })
      .then(data => {
        // console.log(data);
       getProduct(data);
       
     
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // You can choose to re-throw the error or handle it differently
      });
  }

fetchData(url);

function getProduct(prodData){
    const product = prodData.find((ele)=>{
        return ele.id==5;
    })

    createProductElement(product)

}


function createProductElement(product){
    const body = document.body;
    // console.log(body);
    // create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = "wrapper"
    body.appendChild(wrapper);

    const leftColumn = document.createElement('div');
    leftColumn.className = "left-column";

    
    const previewImg = document.createElement('div');
    previewImg.className = "preview-img";

    const image = document.createElement('img');
    console.log(product.preview);
    // console.log(product);
    const imgURL = product.preview;
    image.src= imgURL;

    previewImg.appendChild(image)


   
    leftColumn.appendChild(previewImg);
    
    // right column section

    const rightColumn = document.createElement('div');
    rightColumn.className = "right-column";

    const prodTitle = document.createElement('h1');
    const prodname =  document.createTextNode(product.name);
    prodTitle.className = "product-name"
    prodTitle.appendChild(prodname);
    // apending procuct name
    rightColumn.appendChild(prodTitle);

    const branddeatils = document.createElement('h4');
    const brandname = document.createTextNode(product.brand);
    branddeatils.appendChild(brandname)
    
    rightColumn.appendChild(branddeatils);

    const priceElement = document.createElement('h3');
    const pricetext = document.createTextNode('Price Rs: ');
    const priceele = document.createElement('span')
    const eleprice = document.createTextNode(product.price);
    priceele.className = "price-color"
    priceele.appendChild(eleprice)
    priceElement.appendChild(pricetext);
    priceElement.appendChild(priceele);
    // append price 
    rightColumn.appendChild(priceElement);

    const description = document.createElement('div');
    description.className = 'description'
    
    const descheading = document.createElement('h3');
    const desctext = document.createTextNode("Description");
    descheading.appendChild(desctext)

    const deatails = document.createElement('p');
    const detailstxt = document.createTextNode(product.description);
    deatails.appendChild(detailstxt)
    
    description.appendChild(descheading)
    description.appendChild(deatails)

    
    rightColumn.appendChild(description)

    const imgcontainer = document.createElement('div');
    imgcontainer.className = "img-container";

    const preview = document.createElement('h3')
    const previewText = document.createTextNode("Product Priview");

    preview.appendChild(previewText);
    imgcontainer.appendChild(preview)

    const imgpreview = document.createElement('div');
    imgpreview.className= 'imag-preview';
    imgcontainer.appendChild(imgpreview)


         let photosI = product.photos.length ;
                for (let i = 0; i < photosI; i++) {
                // Create a new img element
                const imgElement = document.createElement("img");
                
                // Set the src attribute
                imgElement.src = product.photos[i];
                
                
                // Set a unique ID for each image
                imgElement.id = `img${i + 1}`;
          
                imgpreview.appendChild(imgElement);
        }

    rightColumn.appendChild(imgcontainer)

    const  bottonContainer = document.createElement('div');
        bottonContainer.className = "btn";
        
        const button = document.createElement("button");
        button.innerHTML = "Add To Cart";
        button.id = "add-to-cart";

        bottonContainer.appendChild(button);

        rightColumn.appendChild(bottonContainer)
        wrapper.appendChild(leftColumn);
        wrapper.appendChild(rightColumn);


        function changeImage(){
        const imgele = document.querySelectorAll('.imag-preview img')
        console.log(imgele);
        imgele.forEach((element , index)=>{
          element.addEventListener("click", function () {
            // Remove the "active" class from all images
            imgele.forEach((img) => img.classList.remove("active"));
            
            // Add the "active" class to the clicked image
            element.classList.add("active");
            
            // Change the main preview image when a thumbnail is clicked
            image.src = product.photos[index];
        });
        })
        }
        changeImage();
        
  }