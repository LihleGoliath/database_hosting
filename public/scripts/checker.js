
let token = window.localStorage.getItem("userToken")

let link = document.querySelector(".link").addEventListener("click",async function UserChecker(){
        const response = await fetch("http://localhost:8081/users/users/verify",{
            method:"GET",
            headers:{
                'x-auth-token': `${token}`
                 }
    
        })
       const data = await response.json();
        console.log(data);
     
})