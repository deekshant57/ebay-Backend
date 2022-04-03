// document.querySelector("form").addEventListener("submit",signin);
// var email_data=JSON.parse(localStorage.getItem("login_Datas"));
// var count=0;
// function signin(event){
//     event.preventDefault();
//     var email=document.getElementById("email").value;
  
//     for(var i=0;i<email_data.length;i++){
//         if(email_data[i].mail==email){
            
//             window.location.href="password.html";
//         }
//         else{
//             count++;
//         }
//     }
//     if(count==email_data.length){
//         alert("invalid Credentials")
//     }
// }


let sumbit = document.getElementById("submit");
submit.addEventListener("click", signin);

async function signin() {
  console.log("hello!!!");

  let data = {
      email : document.getElementById('email').value,
      pass : document.getElementById('password').value,
  };

  data = JSON.stringify(data);
  console.log(data);

  let result = await fetch("http://localhost:4000/login", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let response = await result.json();

  console.log(response);
   if(response.status==0){
   alert("Please Registered First");
   window.location.href="personalAc.html";
   }
  else if(response.status==1){
    alert("Please enter valid email or password");
   }
   else if(response.status==2){
    alert("You are sucessfulley log in");
    window.location.href="home.html";
  localStorage.setItem("user",JSON.stringify(response.user))
    console.log(response.user);
   }
};  
