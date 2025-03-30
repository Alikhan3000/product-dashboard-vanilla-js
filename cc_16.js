// Task 2: Fetch Products with .then()

function fetchProductsThen(){                                                       //created a function to fetch data from the  supplier's product API
    const imagesUrl = "https://www.course-api.com/javascript-store-products";
    fetch(imagesUrl).then(response =>{                                              //used fetch() with .then() to get product data from the external API
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();                                             //returning response in JSON

})
.then(products => {
    products.forEach(product => {                   
        console.log(product.fields.name)            //logged each product's name to the console using loop
    });
})
.catch(error => {
    console.error('There was an error with the fetch operation', error);        //used .catch to log an error message if there any errors from previous operations
})};

fetchProductsThen()
