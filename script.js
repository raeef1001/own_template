
fetch("https://randomuser.me/api/?results=20")
        .then(res=>res.json())
        .then(data=>server(data))

function server(data){

   data=data.results 
   console.log(data)
   var htmlBucket =''
   data.forEach(user => {
    
    
    htmlBucket=htmlBucket+`
    <div class="col-md-3 child">
            <img src="${user.picture.large}" alt="">
            <h3>${user.name.first} <span>(f)</span></h3>
            <p>${user.city}</p>
            <p>${user.email}</p>

        </div>
    
    `

    document.getElementById('box').innerHTML=htmlBucket
   });
    }
