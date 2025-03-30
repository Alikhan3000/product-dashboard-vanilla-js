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


// Task 3: Fetch Products with async/await

async function fetchProductsAsync() {               //declared an async function 
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');   //fetched the data from external API 
        if (!response.ok) {
            throw new Error('Product is not available');    //created error handling using throw new Error (further code execution should stop if there is an error)
        }

        const products = await response.json();           //parsed data to jason using await for the async function 

        displayProducts(products);                  //async function calls this function to render products on the page

}catch(error){                                       //used catch to handle errors if there any from previous operations
    
    handleError(error)                          
}}

//created displayProducts function to be used in task #4 
function displayProducts(products){             
    
};