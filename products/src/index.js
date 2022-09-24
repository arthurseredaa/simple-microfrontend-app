import faker from 'faker';

const products = new Array(5).fill(undefined).reduce((prev, current) => {
	const product = `<p>${faker.commerce.productName()}</p>`;
	return prev + product;
}, '');

document.getElementById('products-list').innerHTML = products;

console.log(products)
