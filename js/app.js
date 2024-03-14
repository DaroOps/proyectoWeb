function createProduct(data) {
    const productsContainer = document.getElementById('product-grid');

    data.forEach(productData => {

        const product = document.createElement('div');
        product.setAttribute('class', 'product-item')
        
        const productImg = document.createElement('div');
        productImg.setAttribute('class', 'product-img')

        const productImgSrc = document.createElement('img');
        productImgSrc.setAttribute('src', productData.imagen)

        const productInfo = document.createElement('section');
        productInfo.setAttribute('class', 'product-info')

        const title = document.createElement('h3');
        title.textContent = productData.nombre;

        const price = document.createElement('p');
        price.textContent = productData.precio;

        const button = document.createElement('button');
        button.textContent = "Agregar";

        productImg.appendChild(productImgSrc)

        productInfo.appendChild(title);

        productInfo.appendChild(price);

        productInfo.appendChild(button);


        product.appendChild(productImg);

        product.appendChild(productInfo)

        productsContainer.appendChild(product);
    });
};

async function fetchData() {
    try {
        const response = await fetch('https://file.notion.so/f/f/eaa1771c-fc19-40d4-8527-37ca1caab8fa/8f181ea0-47f7-49a5-9b85-48db35d8ec38/Documentos_DB.json?id=a21b973c-4a2b-4e71-b3f3-1b6e38a01f05&table=block&spaceId=eaa1771c-fc19-40d4-8527-37ca1caab8fa&expirationTimestamp=1710482400000&signature=7OllRGKhZSI5MbC_vrGVSkrvHhGQUr5iLqqyM0MIJTE&downloadName=Documentos_DB.json');
        const data = await response.json();

        

        console.log(data);
        // data.forEach(element => {

        // });(productData => {
        //     const product = document.createElement('div');
        //     product.setAttribute('class', 'product-item')
        //     product.classList.add('product-item');

        //     const title = document.createElement('h3');
        //     title.textContent = cardData.titulo;

        //     const description = document.createElement('p');
        //     description.textContent = cardData.descripcion;

        //     card.appendChild(title);
        //     card.appendChild(description);

        //     cardContainer.appendChild(card);
        // }
        // );
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


const abrigo = [
    {
      "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Azul'",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_787280-MCO51843885132_102022-F.webp",
      "precio": 93900,
      "id": 1
    },
    {
      "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Negro'",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_904140-MCO51843801912_102022-F.webp",
      "precio": 93900,
      "id": 2
    },
    {
      "nombre": "Chaqueta Impermeable En Gabán Para Dama 'Blanco'",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_930447-MCO71410142210_092023-F.webp",
      "precio": 93900,
      "id": 3
    },
    {
      "nombre": "Chaqueta Hombre Cuero Sintético",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_712593-MCO41606376126_052020-F.webp",
      "precio": 102000,
      "id": 4
    },
    {
      "nombre": "Calidad Chaqueta Hombre Algodon Colombiano Buso Ropa Buzos",
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_2X_829630-MCO31080337339_062019-F.webp",
      "precio": 77900,
      "id": 5
    }
  ]




window.onload = createProduct(abrigo);