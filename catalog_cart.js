'use strict';

let catalog = {
  catBlock: null,
  cart: null,
  list: [
    {name: 'jacket', price: 1500,},
    {name: 't-shirt', price: 400,},
    {name: 'jeans', price: 900,},
    {name: 'boots', price: 1300,}
	],
  
  init() {
    this.catBlock = document.querySelector('.catalog');
    this.cart = cart;
    this.render();
    this.addEvent();
  },
  
  addEvent() {
  	this.catBlock.addEventListener('click', event => this.fillCart(event));
  },
  
  render() {
  	if (this.list.length > 0) {
    	this.renderCatList();
    } else {
    	alert('Catalog is empty');
    }
  },
  
  fillCart(event) {
  	if (!event.target.classList.contains('item_add-to-cart')) return;
    let name = +event.target.dataset.name;
    let itemToAdd = this.list.find((item) => item.name === name);
    this.cart.fillCart(itemToAdd);
  },
  
  renderCatList() {
  	this.catBlock.innerHTML = '';
    this.list.forEach(good => {
    	this.catBlock.insertAdjacentHTML('beforeend', this.renderCatGood(good));
    });
  },
  
  renderCatGood(good) {
  	return `<span>Item: ${good.name}</span>
            <span>Price per unit: ${good.price}</span><br>
            <button class="item_add-to-cart" data-name="${good.name}">Add to cart</button><br>`;
  },
};

let cart = {
  cartBlock: null,
  goods: [],
	
  bucket(cartBlockClass, cartBtnClass) {
  	this.cartBlock = document.querySelector('.cart');
    this.render();
  },
  
  render() {
  	if (this.goods.length > 0) {
    	this.renderCartList();
    } else {
    	alert('Cart is empry');
    }
  },
  
  fillCart(item) {
  	if (item) {
    	let findInCart = this.goods.find((good) => item.name === good.name);
      if (findInCart) {
      	findInCart.quantity++;
      } else {
      	this.goods.push({...item, quantity: 1});
      }
      this.render();
    } else {
      alert('Error');
    } 
  },
  
  renderCartList() {
  	this.cartBlock.innerHTML = '';
    this.goods.forEach(good => {
    	this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartGood(good));
    });
  },
  
  renderCartGood(good) {
  	return `<span>Item: ${good.name}</span>
            <span>Quantity: ${good.quantity}</span>
            <span>Price per unit: ${good.price}</span><br>`;
  },
};

catalog.init();
cart.bucket();