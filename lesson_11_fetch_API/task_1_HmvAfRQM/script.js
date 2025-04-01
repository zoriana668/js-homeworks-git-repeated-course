// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(({carts}) => {
        carts.forEach(cart => {
            let cartBlock =  document.createElement('div');
            cartBlock.classList.add('cart');

            let id_info = document.createElement('div');
            id_info.classList.add('cart-id');
            id_info.innerText = `CART ID: ${cart.id}`;

            document.body.append(cartBlock);
            cartBlock.appendChild(id_info);

            let {products} = cart;

            products.forEach(product => {
               let product_id = document.createElement('div');
               let product_title = document.createElement('h4');
               let product_price = document.createElement('p');
               let product_quantity = document.createElement('p');
               let product_total__price = document.createElement('p');
               let product_discount__percentage = document.createElement('p');
               let product_discounted__total = document.createElement('p');

               let productImage = document.createElement('img');

               product_id.innerText = `Product ID: ${product.id}`;
               product_title.innerText = `Product Title: ${product.title}`;
               product_price.innerText = `Product Price: ${product.price}`;
               product_quantity.innerText = ` Product quantity - ${product.quantity}`;
               product_total__price.innerText = `Product Total: ${product.total}`;
               product_discount__percentage.innerText =  `Discount percentage: ${product.discountPercentage}`;
               product_discounted__total.innerText = `Discounted total: ${product.discountedTotal}`;
               productImage.src = product.thumbnail;
               productImage.classList.add('product-image');


                let productBlock =  document.createElement('div');
                productBlock.classList.add('product');
                cartBlock.append(productBlock);
                productBlock.append(product_id, product_title, product_price, product_quantity, product_total__price, product_discount__percentage,product_discounted__total, productImage);
            });

        })
    });