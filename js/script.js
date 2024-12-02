var AllBtn = document.querySelectorAll(".btn");
var content = document.querySelector("#content");
var showprice = document.querySelector("#showprice");
var price = document.querySelector("#price");
var totalprice = 0;
var clear = document.querySelector("#clear")


AllBtn.forEach(function (item) {
  item.onclick = function () {
    content.innerHTML += item.getAttribute("product") + "<br>";
    if(content.innerHTML !=""){
        showprice.style.display ="block"
        clear.style.display = "block"
    }
    totalprice += +item.getAttribute("price");
  
  };
});




showprice.onclick = function () {
  price.innerHTML = totalprice;
};
clear.onclick = function(){
    content.innerHTML = " "
    clear.style.display ="none"
    showprice.style.display ="none"
    price.innerHTML = "";
}
