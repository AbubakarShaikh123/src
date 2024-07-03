console.log("hello");
let body = document.querySelector(".index")

async function fun(){
    const resp = await fetch("https://fakestoreapi.com/products")
    const data = await resp.json()
    data.map(function (item) {
        let card = document.createElement('div')
        card.classList.add("card")
        card.innerHTML= `<img src="${item.image}" >
                         <div class="info" >  
                           <h1>${item.title}</h1>
                           <p>$ ${item.price}</p>
                         </div> `
        body.appendChild(card)
    })
}

fun()
