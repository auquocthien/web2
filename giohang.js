
window.addEventListener('load', function(event) {
    const cart = JSON.parse(localStorage.getItem('cart_items'))
    if(cart.length !== 0){
        document.getElementById("sc_text").hidden = true;
        document.getElementById("sup_cart_items").hidden = false;
        document.getElementById("cart_btn").hidden = false;
        for(i = 0; i < cart.length; i++){
            const cartValues = Object.values(cart[i]);
            addEL(cartValues[1], cartValues[3])
        }
    }
})
function exitItems(item, cart_items){
    let flag = -1;
    cart_items.forEach((itemCart, index) => {
        if(itemCart.id == item.id){
            flag = index;
        }
    });
    return flag;
}

function addEL(name, quantity){
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const tr = document.createElement('tr');
    td1.innerText = name;
    td2.innerText = quantity;
    
    tr.classList.add('remove')
    tr.appendChild(td1);
    tr.appendChild(td2);
    
    const table = document.getElementById("cart_items_table")
    table.appendChild(tr);
}

function showItems(){
    const tb = document.getElementById('cart_items_table')
    const show = JSON.parse(localStorage.getItem('cart_items'));
    if(tb.childElementCount > 1){
        do{
            tb.deleteRow(1);
        }
        while(tb.childElementCount > 1)
    }
    for(i = 0; i < show.length; i++){
        addEL(show[i].id, show[i].quantity);
    }
}

const add_cart = document.getElementsByClassName('add_items');
const cart_items = [];

for (i = 0; i < add_cart.length; i++) {
    var button = add_cart[i];
    button.addEventListener('click', function(event) {
        
        var itemsSelect = event.target;
        let item = {
            id: itemsSelect.parentElement.children[3].innerText,
            itemsName: itemsSelect.parentElement.children[2].innerText,
            price: itemsSelect.parentElement.children[1].children[0].innerText,
            quantity: 1
        };
        // window.location.reload();
        if((flag = exitItems(item, cart_items)) >= 0){
            cart_items[flag].quantity++;
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
            
        }
        else{
            cart_items.push(item);
            localStorage.setItem('cart_items', JSON.stringify(cart_items));
            
        }
        const items = JSON.parse(localStorage.getItem('cart_items')).length;
        if(items !== null){
            document.getElementById("sc_text").hidden = true;
            document.getElementById("sup_cart_items").hidden = false;
            document.getElementById("cart_btn").hidden = false;
        }
        
        showItems()
        
    });
}


