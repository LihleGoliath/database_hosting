

 
        
        let products = [];
   
        async function getProducts(){
            const res = await fetch("http://localhost:8081/products");
            const data = await res.json();    
            products = data
            console.log(products);
            displayProducts(products)            
            }
            getProducts();
        
        console.log(products);
     
            function displayProducts(productsArray){
                document.querySelector(".products").innerHTML = `
                <tr class="bg-dark text-white">
                <th class="border border-white">#</th>
                <th class="border border-white">Name</th>
                <th class="border border-white">email</th>
                <th class="border border-white">password</th>
                <th class="border border-white">user_type</th>
                <th class="border border-white">phone</th>
                <th class="border border-white">country</th>
                <th class="border ">billing_address</th>
                <th >default_shipping_address</th>
                </tr>
                `;
                products.forEach(product => {
                document.querySelector(".products").innerHTML += `
                <tr>
                <td class="border border-dark">${product.product_id}</td>
                <td class="border border-dark">${product.name}</td>
                <td class="border border-dark">${product.price}</td>
                <td class="border border-dark">${product.weight}</td>
                <td class="border border-dark">${product.name}</td>
                <td class="border border-dark">${product.name}</td>
                <td class="border border-dark">${product.name}</td>
                <td class="border border-dark">${product.name}</td>
                <td class="border border-dark">${product.name}</td>
                `;
                });
          
            }