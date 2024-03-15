let allProducts = []
let coats = []
let tShirths = []
let pants = []
let car = []

const view = document.getElementById("view")

const productContainer = document.getElementById("product-grid")

const buttonAll = document.getElementById("all");
const buttonCoats = document.getElementById("coats");
const buttonShirts = document.getElementById("shirts");
const buttonPants = document.getElementById("pants");
const buttonCar = document.getElementById("car");


buttonAll.addEventListener("click", function (event) {
    activateTabIndex(event);
    view.textContent = "Todos los productos"
    cleanView()
    createProduct(allProducts)
    document.getElementById("nothing")?document.getElementById("nothing").remove():null
});

buttonCoats.addEventListener("click", function (event) {
    activateTabIndex(event);
    view.textContent = "Abrigos"
    cleanView()
    createProduct(coats)
    document.getElementById("nothing")?document.getElementById("nothing").remove():null
});

buttonShirts.addEventListener("click", function (event) {
    activateTabIndex(event);
    view.textContent = "Camisetas"
    cleanView()
    createProduct(tShirths)
    document.getElementById("nothing")?document.getElementById("nothing").remove():null
});

buttonPants.addEventListener("click", function (event) {
    activateTabIndex(event);
    view.textContent = "Pantalones"
    cleanView()
    createProduct(pants)
    
    document.getElementById("nothing")?document.getElementById("nothing").remove():null
});

buttonCar.addEventListener("click", function (event) {
    cleanView()
    
    const empty = document.createElement("h3");
    empty.setAttribute("id", "nothing");
    empty.textContent = "Tu carrito esta vacio :("
    
    activateTabIndex(event);
    
   
    if(checkEmptynes("product-grid")){
      
    }
    else{
        if(!document.getElementById("nothing")){
            productContainer.appendChild(empty)
        }
        hideElement("car-manager")
    }
    view.textContent = "Carrito"
});

function createProduct(data) {
    const productsContainer = document.getElementById('product-grid');
    const fragment = document.createDocumentFragment();

    data.forEach(productData => {
        const product = document.createElement('div');
        product.classList.add('product-item');
        product.id = productData.id

        const productImg = document.createElement('div');
        productImg.classList.add('product-img');

        const productImgSrc = document.createElement('img');
        productImgSrc.src = productData.imagen;

        const productInfo = document.createElement('section');
        productInfo.classList.add('product-info');

        const title = document.createElement('h3');
        title.textContent = productData.nombre;

        if(productData.nombre.includes("Camiseta")){
            product.classList.add("camiseta")
        }
        else if(productData.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes("pantalon")){
            product.classList.add("pantalon")
        }
        else if(productData.nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes("chaqueta")){
            product.classList.add("chaqueta")
        }

        const infoFoo = document.createElement('div');
        infoFoo.classList.add('info-foo');

        const price = document.createElement('p');
        price.textContent = `$ ${productData.precio}`;

        const button = document.createElement('button');
        button.classList.add('add-button')
        button.textContent = "Agregar";

        button.addEventListener("click", function(event){
            console.log("click add");
            alert(event.target.parentNode.parentNode.id);

            // event.target.
           
        }); 

        productImg.appendChild(productImgSrc);
        productInfo.append(title, infoFoo);
        infoFoo.append(price, button);
        product.append(productImg, productInfo);
        fragment.appendChild(product);
    });

    productsContainer.appendChild(fragment);
}

async function fetchData() {
    // console.log(allProducts);
    try {
        const response = await fetch('https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1710482400000&signature=7OllRGKhZSI5MbC_vrGVSkrvHhGQUr5iLqqyM0MIJTE&downloadName=Documentos_DB.json');
        const data = await response.json();

        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                if (category != "carrito") {
                    data[category].forEach(item => allProducts.push(item));
                }

                switch (category) {
                    case "abrigo":
                        data[category].forEach(item => coats.push(item));
                        break;
                    case "camiseta":
                        data[category].forEach(item => tShirths.push(item));
                        break;
                    case "pantalon":
                        data[category].forEach(item => pants.push(item));
                        break;
                    case "carrito":
                        data[category].forEach(item => car.push(item));
                        break;
                    default:
                        break;
                }
            }
        }
        createProduct(allProducts)
        hideElement("car-manager")

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function activateTabIndex(event) {
    event.preventDefault();

    var listItem = event.target.closest('li');

    var listItems = document.querySelectorAll('ul > li');
    listItems.forEach(function (item) {
        item.removeAttribute('tabindex');
    });

    listItem.setAttribute('tabindex', '1');

    listItem.focus();
}

function checkEmptynes(elementId){
    const selected = document.getElementById(elementId);
    const item = document.getElementById("product-item");
    const carItem = document.getElementById("cart-item");
    
    return selected.contains(item);
}   

function hideElement(elementId){
    const selected = document.getElementById(elementId);

    selected.style.display= 'none';
}

function showElement(elementId){
    const selected = document.getElementById(elementId);

    selected.style.display= 'block';
}

function cleanView() {
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        product.remove();
    });
}


window.onload = fetchData();