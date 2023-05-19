const form = document.querySelector('#form');
const products = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(products.value);
    console.log(quantity.value);

    const newLi = document.createElement('li');
    newLi.innerText = products.value;
    newLi.innerText = quantity.value;
    newLi.innerText = `${quantity.value} ${products.value}`;
    list.append(newLi);


    form.reset();
})


