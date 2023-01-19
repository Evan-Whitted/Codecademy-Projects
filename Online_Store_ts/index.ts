import products from './products';

const productName: string = 'fanny pack';

const product: any = products.find(product => product.name === productName);


if (product.preOrder === 'true') {
  console.log('We will send you a message when your product is on its way.')
};

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '575 Broadway, New York City, New York';

if (Number(product.price) > 25) {
  console.log('This item will recieve free shipping');
    shipping = 0; 
    } else {
      shipping = 5;      
    }

    if (shippingAddress.match('New York')) {
      taxPercent = 0.1;
      console.log('uh oh! Tax man cometh!');
    } else {
      taxPercent = 0.05;
      console.log('We goooood.')
    }

 taxTotal = Number(product.price) * taxPercent;
 total = Number(product.price) + taxTotal + shipping;

 console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);
