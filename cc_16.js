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



//Task 5: Reusable Error Handler

function handleError(error){                                //created a function that logs error message
    console.error("An error occurred:", error.message);
}

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

// Task 4: Display the Products

function displayProducts(products){                             //created a function that loops through the first 5 products       
    
    const id = document.getElementById("product-container");    

    id.innerHTML = "";                                          //set HTML structure to be empty 

    try{
    products.slice(0,5).forEach((product) => {              //selected first 5 products using slice

    const name = product.fields.name;                       //I took the product object properties and assigned them as variables to be used in this function
    const price = (product.fields.price).toFixed(2);
    //I think that's a very expensive furniture shop; rounded prices to 2 decimal places
    const image = product.fields.image[0].url;

        const div = document.createElement('div');
        div.classList.add("productElements");                   //assigned class id to be styled in style.css          
        div.innerHTML = `
        <img src ="${image}" alt = "${name}"/>              
        <h3>${name}</h3>
        <p>$${price}</p>`;

        id.appendChild(div)                                 //appnded the elements
    });

} catch(error){                                             //used catch to handle any accuring errors; the HTML tructure is changed as well when there is an error                          
    id.innerHTML = 
    `<p style = "color:red;">There was an error when loading products: ${error}</p>`;

}}


// Task 6: Call Your Fetch Functions

fetchProductsThen();
fetchProductsAsync();
