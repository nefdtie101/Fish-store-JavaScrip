// This function will pass generate a product;
function load(){
    let itemValue = localStorage.getItem("ItemValue");
    let itemName = localStorage.getItem(itemValue+"name");
    let itemImg = localStorage.getItem(itemValue+"img");
    let itemPrice = localStorage.getItem(itemValue+"price");
    let itemLong = localStorage.getItem(itemValue+"long");

//Generate page
    let divId = document.getElementById("product");
    divId.innerHTML ="<h1>"+itemName+"</h1>" +
        "<img  class='img1' src='"+itemImg+"'>"+
        "<p>"+itemLong+"</p>" +
        "<h3>R"+itemPrice+"</h3>" +
        "<button  type='button' onclick='addToCArt("+itemValue+")'>ADD TO CART</button>"

}
// This function will add item to cart
function addToCArt(x){
    localStorage.setItem("cartValue",x);
    window.location.href = "../pages/cart.html"
}

// This is a fun animation It is going to work wit jquery
$(document).ready(function () {
    $("#Fun").prepend($('<img>',{id:'Fish',src:'../img/redFish.gif'}));
    //I hope this counts as mu chained effect
    $("#Fish").css("width","100px").css("marginTop","10px").css("textAline","centre").click(function (){
        $("#Fish").hide('slow')
    }).mouseover(function (){
        $("#Fish").slideUp('slow');
    }).mouseleave(function(){
        $("#Fish").slideDown('slow')
    }) ;



});
