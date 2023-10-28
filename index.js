let products  = [];
function init (){
    document.addEventListener('DOMContentLoaded',function(event){
        onBodyLoaded(event)
    });
}
function onBodyLoaded(documentEvent){
    products = productList;
    // console.log(productList);
    const body = document.querySelector('body');
  
    createProductBody(body);
}
function createProductBody(body){
const sectionData = [
    {
        key :'clothes',
        id  : 'clothesSection',
        heading : 'Clothing for Men and Women',
        isAccesories : false
    },
    {
        key :'accesories',
        id  : 'accesoriesSection',
        heading :'Accessories for Men and Women', 
        isAccesories : true

    }
];
for (let i=0 ; i< sectionData.length; i++){
    const sectionHtml = createSection(sectionData[i].id,sectionData[i].key);
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper')
    // sectionHtml.append(cardWrapper)

    if(!sectionData[i].isAccesories){
        const clothes = products.filter((prod)=>{
            return !prod.isAccessory;
        });
       const headingClothes = document.createElement('h1');
       headingClothes.innerHTML = sectionData[i].heading;
        sectionHtml.append(headingClothes,cardWrapper)

        for(let i = 0 ; i< clothes.length;i++){
            // clothes section
            const clothCard = createClothesCard(clothes[i])
            cardWrapper.append(clothCard);
        }
    }else{
        const accesories = products.filter((prod)=>{
            return prod.isAccessory;
        });
        const headingAccesories = document.createElement('h1');
       headingAccesories.innerHTML = sectionData[i].heading;
        sectionHtml.append(headingAccesories,cardWrapper)
        for(let i=0;i<accesories.length;i++){
            // accesories section
            const accesoriesCard = createAccesoriesCard(accesories[i])
            cardWrapper.append(accesoriesCard);
        }
    }
    body.append(sectionHtml)
    }
    
}

function createSection(sectionId , sectionKey){
    const section = document.createElement('section');
    section.id = sectionId;
    section.classList.add(`section-${sectionKey}`);
    
    
    return section;
}
function createClothesCard(clothesData){

    const cardElement = createCard(clothesData.preview,clothesData.name,clothesData.brand,clothesData.price);
    console.log(cardElement)
    return cardElement;
}
function createAccesoriesCard(accesoriesData){
    const cardElement = createCard(accesoriesData.preview,accesoriesData.name,accesoriesData.brand,accesoriesData.price);
    return cardElement; 
}
function createCard(img, name,brand, price){
    const card = document.createElement('div');
    card.classList.add('card-content');
    
    // image container
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img');

    const previewImage = document.createElement('img')
    previewImage.src = img;
    previewImage.classList.add('preview-image');

    imageContainer.appendChild(previewImage)
    
    // product details
    const  details = document.createElement('div');
    details.setAttribute('class','details');
    // creating product name
    const prodTitle = document.createElement('h3');
    const prodname =  document.createTextNode(name);
    prodTitle.appendChild(prodname);
    // apending procuct name
    details.appendChild(prodTitle);

    // creating brand name
    const branddeatils = document.createElement('h4');
    const brandname = document.createTextNode(brand);
    branddeatils.appendChild(brandname)
    // appending brand details
    details.appendChild(branddeatils);

    // creating price element
    const priceElement = document.createElement('h5');
    const pricetext = document.createTextNode('Rs: ');
    const prodPrice = document.createTextNode(price);

    priceElement.appendChild(pricetext);
    priceElement.appendChild(prodPrice);
    // append price 
    details.appendChild(priceElement);

    card.appendChild(imageContainer);
    card.appendChild(details);
    return card;

}
init();


