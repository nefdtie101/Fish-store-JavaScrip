// jquery and normal javascript shard valuables
let shipping ;
let total = 0;
let fullTotal;
let discount ;
//This is the start of the jquery for this page
$(document).ready(function () {
    //This is for the accordion menu
    $("#accordion").accordion();
    $('#NextBtn').click(function () {
        let coupon = $('#couponCode').val();
        if (coupon === ''){
            discount = false;
        }
        else{
            discount = true;
        }
        console.log(discount)
        shipping = $('input[name=Shipping]:checked').val();
        if (shipping === 'Deliver') {
            $("#accordion").html("<h4>Please choose a shipping option?</h4>" +
                "<div>" +
                "<label for=\"Deliver\">Deliver</label><br>" +
                "<h3>Please select your location</h3>" +
                "</div>" +
                "<div>" +
                "<input type='radio' id='Johannesburg' name='location' value='Johannesburg' >" +
                "<label for='Johannesburg'>Johannesburg</label><br>" +
                "<input type='radio' id='Gauteng' name='location' value='Gauteng' >" +
                "<label for='Gauteng'>Gauteng</label><br>" +
                "<input type='radio' id='Rest of south Africa' name='location' value='Rest of south Africa' >" +
                "<label for='Gauteng'>Rest of south Africa</label><br>" +
                "<button onclick='SubmitFinely()' id='locationBtn' type='button'>Next</button>" +
                "</div>").accordion();
        }
        else{
            $("#accordion").html("<h4>Almost done!!!</h4>" +
                "<button onclick='submitFinelyCollect()' id='locationBtn' type='button'>Next</button>")

        }
    });



});
// submit get final price
function submitFinelyCollect(){
    let Vat = 15/100;
    let amountOfVat= total * Vat;
    fullTotal = total + amountOfVat;
    $("#accordion").html("<h4>Your Total is R"+fullTotal+" <h4>" +
        "<button onclick='confirmOrder()' type='button' id='confirmOrder'>confirm order</button>")
    $('#Total').html('<h3>Have a nice day <h/>')
}
function SubmitFinely() {
    let location = document.querySelector('input[name="location"]:checked').value;
    console.log(location)
    if (location === "Johannesburg"){
        let Vat = 15/100;
        total+= 50;
        let amountOfVat= total * Vat;
         fullTotal = total + amountOfVat;
        $("#accordion").html("<h4>Your Total is R"+fullTotal+" <h4>" +
            "<button onclick='confirmOrder()' type='button' id='confirmOrder'>confirm order</button>")
        $('#Total').html('<h3>Have a nice day <h/>')
    }
    else if(location === "Gauteng"){
        let Vat = 15/100;
        total+= 100;
        let amountOfVat= total * Vat;
         fullTotal = total + amountOfVat;
        $("#accordion").html("<h4>Your Total is R"+fullTotal+" <h4>" +
            "<button onclick='confirmOrder()'type='button' id='confirmOrder'>confirm order</button>")
        $('#Total').html('<h3>Have a nice day <h/>')

    }
    else if(location === "Rest of south Africa") {
        let Vat = 15/100;
        total += 200;
        let amountOfVat = total * Vat;
        fullTotal = total + amountOfVat;
        $("#accordion").html("<h4>Your Total is R" + fullTotal + " <h4>" +
            "<button onclick='confirmOrder()' type='button' id='confirmOrder'>confirm order</button>")
        $('#Total').html('<h3>Have a nice day <h/>')
    }


}


//This is the final function of the program
function confirmOrder(){
    // This if statement will apply discount
    if (discount===true){
        let referenceNumber =  Math.random() *100000000000000000
        let discountPes = 5/100;
        let discountMoney = fullTotal * discountPes;
        fullTotal = fullTotal - discountMoney;
        alert("Oder successful\n"+"Reference Number is "+ referenceNumber+"\nPlease pay R"+fullTotal)
        localStorage.clear();
        window.location.href = "../index.html"

    }
    else{
        let referenceNumber =  Math.random() *100000000000000000
        console.log(referenceNumber)
        alert("Oder successful\n"+"Reference Number is "+ referenceNumber+"\nPlease pay R"+fullTotal)
        localStorage.clear();
        window.location.href = "../index.html"

    }

}


//This is part of the remove a item from the cart
let removeCart ;
let ToolPLusVat;



// This will get the cart value so ypu can start to pull the key value pair
function load() {
    let cart = localStorage.getItem("cartValue");
    let items = localStorage.getItem("items")
    console.log(items)
    if (items === null) {
        items = []
        //turing a array into string
        localStorage.setItem("items", JSON.stringify(items));
    }

    // This returns jason as a array
    let itemArray = JSON.parse(localStorage.getItem("items"));
    removeCart = itemArray;
    if (itemArray[0] === "-1") {
        delete itemArray[0];
        itemArray.splice(0, 1);
        console.log(itemArray)

    }
    itemArray.push(cart);
    localStorage.setItem("items", JSON.stringify(itemArray));
    let arrayLength = itemArray.length;
    let itemNumber
    //This generates the items on your store
    if (cart <= -1) {
        alert("Your cart is empty")
    } else {
        for (let x = 0; x < arrayLength; x++) {

            if (itemNumber === itemArray[x]) {

            } else {
                let id = document.getElementById("cartItems");
                let itemName = localStorage.getItem(itemArray[x] + "name");
                let itemPrice = localStorage.getItem(itemArray[x] + "price");
                id.innerHTML += "<div style='text-align: center' >" +
                    "<h3>" + itemName + "<h3>" +
                    "<h4>R" + itemPrice + "</h4>" +
                    "<button onclick=remove(" + x + ") type='button'>Remove</button>" +
                    "</div>"
                total += parseInt(itemPrice);
                itemNumber = itemArray[x];
            }
        }
    }
    alert("Your total no VAT is R" + total);
    //This will disply the total on the bottom of the cart page

    let Vat = 15 / 100;
    let divTotal = document.getElementById("Total");
    let amountOfVat = total * Vat;
    ToolPLusVat = total + amountOfVat;
    divTotal.innerHTML = " <h6>Total with VAT R" + ToolPLusVat + "</h6>"


}
//This function will take you back to the store page
function toStore(){
    localStorage.removeItem("cartValue")
    window.location.href = "../pages/store.html"
}

//This function will remove item from cart
function remove(x){
    // Linked to how i did this https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
    let removeDuplicates = [...new Set(removeCart)];
    delete removeDuplicates[x];
    removeDuplicates.splice(x, 1)
    console.log(removeDuplicates)
    console.log(x);
    localStorage.setItem("items", JSON.stringify(removeDuplicates));
    if (removeDuplicates.length <= 0){
        localStorage.setItem("cartValue", -1);
    }
    window.location.href = "../pages/cart.html"
}


