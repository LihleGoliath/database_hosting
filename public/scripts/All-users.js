


 let users = [];
   
 async function getUsers(){
     const res = await fetch("http://localhost:8081/users");
     const data = await res.json();
     let url_data = data;    
     users = url_data
     displayUsers(users)            
     }
     getUsers();
 
 console.log(users);

     function displayUsers(usersArray){
         document.querySelector(".users").innerHTML = `
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
         users.forEach(user => {
         document.querySelector(".users").innerHTML += `
         <tr>
         <td class="border border-dark">${user.user_id}</td>
         <td class="border border-dark">${user.full_name}</td>
         <td class="border border-dark">${user.email}</td>
         <td class="border border-dark">${user.password}</td>
         <td class="border border-dark">${user.user_type}</td>
         <td class="border border-dark">${user.phone}</td>
         <td class="border border-dark">${user.country}</td>
         <td class="border border-dark">${user.billing_address}</td>
         <td class="border border-dark">${user.default_shipping_address}</td>
         `;
         });
   
     }