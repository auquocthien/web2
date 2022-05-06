function addEL(id, name, quantity, price){
    const  productId = document.createElement('td');
    productId.classList.add('tt_data')
    productId.hidden = true
    productId.innerText = id

    const parentCheckbox = document.createElement('td');
    parentCheckbox.classList.add('tt_data')

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'

    const productName = document.createElement('td');
    productName.innerText = name;
    productName.classList.add('tt_data') 

    const prarentQuantity = document.createElement('td')
    prarentQuantity.classList.add('tt_data')
    const productQuantity = document.createElement('input')
    productQuantity.type = 'number'
    productQuantity.value = quantity
    productQuantity.classList.add('number_quantity')
    prarentQuantity.appendChild(productQuantity)

    const productPrice = document.createElement('td');
    productPrice.innerText = price;
    productPrice.classList.add('tt_data')

    const tr = document.createElement('tr');
    tr.classList.add('tt_row')

    parentCheckbox.appendChild(checkbox)
    tr.appendChild(productId)
    tr.appendChild(parentCheckbox)
    tr.appendChild(productName)
    tr.appendChild(prarentQuantity)
    tr.appendChild(productPrice)

    const table = document.getElementById('tt_table')
    table.appendChild(tr)
}

function showItems(cart){
    const cartValues = Object.values(cart)
    const price = cartValues[2].slice(0, cartValues[2].indexOf(' ') + 1)
    addEL(cartValues[0], cartValues[1], cartValues[3], cartValues[3] * price);
}
window.addEventListener('load', function(event) {
    const cart = JSON.parse(localStorage.getItem('cart_items'))
    if(cart.length !== 0){
        var sum = 0;
        document.getElementById('tt_text').hidden = true;
        document.getElementById('tt_table').hidden = false
        for(i = 0; i < cart.length; i++){
                showItems(cart[i]);
                const cartValues = Object.values(cart[i])
                const price = cartValues[2].slice(0, cartValues[2].indexOf(' ') + 1)
                // console.log(price * cartValues[3])
                sum += (price * cartValues[3])
        }
        const text = document.createElement('td')
        text.colSpan = 3
        text.innerText = "tong cong"
        text.classList.add('tt_data')
        const sumPrice = document.createElement('td')
        sumPrice.classList.add('tt_data')
        sumPrice.innerText = sum + "VND"
        const tr = document.createElement('tr')
        tr.appendChild(text)
        tr.appendChild(sumPrice)
        document.getElementById('tt_table').appendChild(tr)
    }
})
function updateQuantity(){
    const arrValue = []
    const newquantity = 0
    const data = document.getElementsByClassName('tt_data')
    console.log(data)
}
updateQuantity()

