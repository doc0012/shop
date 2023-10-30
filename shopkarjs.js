







/* color change */
const fav = Array.from(document.getElementsByClassName("fa fa-heart"));

for (let i = 0; i < fav.length; i++) {
    fav[i].addEventListener("click", function() {
        if (fav[i].style.color === "red") {
            fav[i].style.color = "black";
        } else {
            fav[i].style.color = "red";
        }
    });
}

/* count quantity and sum */
document.addEventListener("DOMContentLoaded", function() {
    const quantities = document.getElementsByClassName("quantity");
    const prices = document.getElementsByClassName("product-price");

    for (let quantitie of quantities) {
        quantitie.addEventListener("input", somme);
    }

    function somme() {
        let sum = 0;
        for (let i = 0; i < quantities.length; i++) {
            sum += quantities[i].value * parseFloat(prices[i].innerHTML);
        }
        document.getElementById("cart-total").innerHTML = sum;
    }

    /* delete product */
    const butdelete = Array.from(document.getElementsByClassName("remove-product"));
    const pro = Array.from(document.getElementsByClassName("product"));

    for (let i = 0; i < butdelete.length; i++) {
        butdelete[i].addEventListener("click", function() {
            pro[i].remove();
            somme(); // Recalculate the total sum after removing a product
        });
    }

    /* confirm order */
    
    const Order = document.getElementById("checkout");

    Order.addEventListener('click', function() {
      var sum = 0;
        for (let i = 0; i < quantities.length; i++) {
            sum += quantities[i].value * parseFloat(prices[i].innerHTML);
        }
      
      

        if ( sum > 0) {
            alert("Order confirmed");
        } else {
            alert("Please choose at least one article and enter valid quantities.");
            
        }
    });
});
































