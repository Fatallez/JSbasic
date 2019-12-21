'use strict';

const catalog = {
    catalogBlock: null,
    cart: {},
    list: [
    {id_product: 1, name: 't-shirt', price: 1000, img: 'img/1.jpg'},
    {id_product: 2, name: 'x-shirt', price: 1500, img: 'img/2.jpg'},
    {id_product: 3, name: 'y-shirt', price: 800,  img: 'img/3.jpg'},
    {id_product: 4, name: 'b-shirt', price: 2800, img: 'img/4.jpg'},
    ],

    init(catalogBlockClass, cart) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.cart = cart;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    getCatalogListLength() {
      return this.list.length;
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (!event.target.classList.contains('product__add-to-cart')) return;
        const id_product = +event.target.dataset.id_product;
        this.cart.addToBasket(id_product);
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
      return `<div class="item">
                <div class="item__name">${item.name}</div>
                <img src="${item.img}" alt="#" class="item__img">
                <div class="item__price">${item.price} руб.</div>
                <button class="product__add-to-cart" data-id_product="${item.id_product}">Добавить в корзину</button>
              </div>`;
    },

    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
    },
};

const cart = {
    cartBlock: null,
    clrCartButton: null,
    catalogList: [],
    goods: [],

    init(cartBlockClass, clrCartButton, catalogList) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.catalogList = catalogList;

        this.addEventHandlers();
        this.render();
        this.removeEventHandlers();
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
            this.totalCartPrice();
        } else {
            this.renderEmptyCart();
        }
    },

    findProduct(id_product) {
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProduct(id_product);

        if (product) {
            this.goods.push(product);
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    getCartGoodsLength() {
        return this.goods.length;
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', '<p>Корзина пуста.</p>');
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    renderCartItem(item) {
        return `<div class="item">
                <div class="item__name">${item.name}</div>
                <img src="${item.img}" alt="#" class="item__img">
                <div class="item__price">${item.price} руб.</div>
                <button class="remove__item" data-id_product="${item.id_product}">Удалить из корзины</button>
              </div>`;
    },

    countCartPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.goods.length; i++) {
            totalPrice += this.goods[i].price;
        }
        return totalPrice;
    },

    totalCartPrice() {
        let cart = document.querySelector('.cart');
        let totalPrice = this.countCartPrice();
        cart.insertAdjacentHTML('beforeend', '<div class="totalCartPrice"></div>');
        let total = document.querySelector('.totalCartPrice');

        if (this.goods.length > 0) {
            total.innerHTML = 'Итого: ' + totalPrice + 'руб.';
        } else {
            cart.removeChild(total);
        }
    },

    removeEventHandlers() {
        this.cartBlock.addEventListener('click', event => this.removeFromBasket(event));
    },

    removeFromBasket(event) {
        if (!event.target.classList.contains('remove__item')) return;
        const id_product = +event.target.dataset.id_product;
        const product = this.findProduct(id_product);

        if (product) {
            this.goods.splice(this.goods.indexOf(product), 1);
            this.render();
        }
    },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart', catalog.list);