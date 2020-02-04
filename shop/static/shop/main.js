/// find out the cart items in local storage

if (localStorage.getItem('cart') == null) {
    var cart = {}
}
else {
    cart = JSON.parse(localStorage.getItem('cart'))
    //for updation of the cart whn initialize the site
    // var sum=0;
    // for(var item in cart){
    //     sum=sum+cart[item]
    //     document.getElementById('cart').innerHTML = sum;

    // }
    updateCart(cart)
}



// Add to item clicked then increment the count of cart
// $('.cart').click(function () {
    $('.divpr').on('click','button.cart', function(){
    var idstr = this.id.toString(); //id item pr[item_id]
    if (cart[idstr] != undefined) {
        cart[idstr] = cart[idstr] + 1
    }
    else {
        cart[idstr] = 1
    }
    updateCart(cart)

});




function updateCart(cart) {
    var sum=0;
    for (var item in cart) {
        sum=sum+cart[item]
        document.getElementById('div' + item).innerHTML = "<button id='minus" + item + "' class='btn btn-primary minus'>-</button> <span id='val" + item + "''>" + cart[item] + "</span> <button id='plus" + item + "' class='btn btn-primary plus'> + </button>";
    }
    localStorage.setItem('cart', JSON.stringify(cart)) //it parses the key to string
    // document.getElementById('cart').innerHTML = Object.keys(cart).length;// to show in real time change on cart
    document.getElementById('cart').innerHTML=sum;
    updatePopover(cart)
}



updatePopover(cart)

//Addto cart popover
function updatePopover() {
    console.log('we are inside popover')
    popStr = ""
    popStr = popStr + "<h5>Your item in Shopping cart</h5><div class= mx-2 my-2>"
    var i = 1;
    for (var item in cart) {
        popStr = popStr + "<b>" + i + "</b>. "
        popStr = popStr + document.getElementById('name' + item).innerHTML + "   Qty " + cart[item] + "</br>"
        console.log(item)

        console.log(cart[item])
        i++
    }
    //TODO: Check BUtton tag not working
    popStr = popStr + "</div>"
    // console.log(popStr)
        document.getElementById('popovercart').setAttribute('data-content', popStr);
        $('#popovercart').popover()

}

function clearCart() {
    cart = JSON.parse(localStorage.getItem('cart'));
    for (var item in cart) {
        document.getElementById('div'+item).innerHTML='<button id=">'+item+'"class="btn btn-primary cart">Add To Cart</button>'
    }
    localStorage.clear()
    cart = {}
    updateCart(cart);
}


// if plus or minus clicked change cart accordingly
// button.minu or plus is the id of button
$('.divpr').on('click', "button.minus", function () {
    product_id = this.id.slice(7)
    cart['pr' + product_id] = cart['pr' + product_id] - 1;// this create the new updated cart by using minus btn
    cart['pr' + product_id] = Math.max(0, cart['pr' + product_id])
    document.getElementById('valpr' + product_id).innerHTML = cart['pr' + product_id];
    updateCart(cart)


    //TO UNDERSTANDIN
    // cart={    to this value and do the operations accordingly
    //     pr7:7,
    //     pr8:9
    // }

});

$('.divpr').on("click", "button.plus", function () {
    product_id = this.id.slice(6)
    cart['pr' + product_id] = cart['pr' + product_id] + 1;// this create the new updated cart by using plus btn
    document.getElementById('valpr' + product_id).innerHTML = cart['pr' + product_id];
    updateCart(cart)
})