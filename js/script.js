var allproducts = document.querySelectorAll(".card figcaption");
var content = document.querySelector("#content");
var cardprice = document.querySelector("#cardprice")
var btn = document.querySelector("#addtocard");
var totalprice = 0;

allproducts.forEach(function(item){
    item.onclick = function(){
        totalprice += parseInt(item.getAttribute("price")) 
        content.innerHTML += item.textContent + " ";
        if(content.innerHTML !=""){
            btn.style = "block"
        }
    }
})

btn.onclick = function(){
    cardprice.innerHTML += totalprice;
}

// window.onload = function(){
//     alert ("hallo my heart randa")
// }

window.onload = prompt("enter your name") = function(){
    alert("hello my heart randa")
}