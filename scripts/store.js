// This is the javascript for the store
// This is the item number counter
let counter = 0;
//This function will reset thw counter to 0 every time the page lodes
function reset(){
    counter = 0;
    loadProducts()
}


//This is a function for creating a object
function createItem(name,img,shortDescription,price,longDescription){
    this.name=name;
    this.img=img;
    this.shortDescription=shortDescription;
    this.price=price;
    this.longDescription=longDescription;
}


//This function will add the items to the store
function addItem(name,img,shortDescription,price,longDescription){
    let newItem = new createItem(name,img,shortDescription,price,longDescription);
    let productDiv = document.getElementById("products");
    productDiv.innerHTML+="<div style='text-align: center'>" +
        "<h2>"+newItem.name+"</h2>" +
        "<img  class='img1' src='"+newItem.img+"'>" +
        "<p>"+newItem.shortDescription+"</p>" +
        "<h3>R"+newItem.price+"</h3>" +
        "<button onclick='moreButton("+counter+")' type='button' class='moreBtn'>more</button>" +
        "<button style='margin-left: 5px' onclick='adToCart("+counter+")' type='button' class='moreBtn'>ADD TO CART</button>"+
        "</div>"
    //storing item in local storage
    let itemNameKey = counter+"name";
    let itemNameValue = newItem.name;
    let itemImgKey = counter+"img";
    let itemImgValue = newItem.img;
    let itemPriceKey = counter+"price";
    let itemPriceValue = newItem.price;
    let itemShortKey = counter+"short";
    let itemShortValue = newItem.shortDescription;
    let itemLongKey = counter+"long";
    let itemLongValue = newItem.longDescription;

    localStorage.setItem(itemNameKey,itemNameValue);
    localStorage.setItem(itemImgKey,itemImgValue);
    localStorage.setItem(itemPriceKey,itemPriceValue);
    localStorage.setItem(itemShortKey,itemShortValue);
    localStorage.setItem(itemLongKey,itemLongValue);
    counter++
}

//This is the function where you describe the product
function loadProducts(){
    addItem("Canister Filter","../img/canister.jpg","This is used to filter the water",5000,"This is used to filter the water keeps ammonia out of the water")
    addItem("Air pump","../img/airpump.jpg","This is a pump that pumps air into the aquarium",200,"This is a pump that pumps air into the aquarium to keep the fish safe.")
    addItem("Heater","../img/heater.jpg","This heats up the water for the fish",1000,"This heats up the water so that the fish have a nice time")
    addItem("Temperature","../img/tempreture.jfif","This measures the temperature of your water",'50',"This measures the temperature of your waterMakes sure fish is in the optimal water temperature")
    addItem("Light","../img/light.jfif","This is an aquarium light",2000,"This is an aquarium light this helps your plants to grow and keep your tank healthy." )
}

//This will pass the value over to a another page
function moreButton(x){
    localStorage.setItem("ItemValue",x);
    window.location.href = "../pages/products.html"

}

//This is the function to add it to the cart
function adToCart(x){
    localStorage.setItem("cartValue",x);
    window.location.href = "../pages/cart.html"

}
