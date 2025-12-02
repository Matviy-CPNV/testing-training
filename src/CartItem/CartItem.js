"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    #articleId;
    #name;
    #quantity;
    #price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        this.#validateArticleId(articleId);
        this.#articleId = articleId;
        this.#name = name;
        this.#validateQuantity(quantity);
        this.#quantity = quantity;
        this.#validatePrice(price);
        this.#price = price;
    }

    get articleId() {
        return this.#articleId;
    }

    get name() {
        return this.#name;
    }

    get quantity() {
        return this.#quantity;
    }

    set quantity(value) {
        this.#validateQuantity(value);
        this.#quantity = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#validatePrice(value);
        this.#price = value;
    }

    get total() {
        return this.#quantity * this.#price;
    }
    //endregion public methods

    //region private methods
    set articleId(value) {
        this.#articleId = value;
    }

    set name(value) {
        this.#name = value;
    }

    #validateArticleId(articleId) {
        if (typeof articleId !== 'number' || articleId < 1 || !Number.isInteger(articleId)) {
            throw new InvalidArticleIdException('Article ID must be a positive integer greater than or equal to 1');
        }
    }

    #validateQuantity(quantity) {
        if (typeof quantity !== 'number' || quantity < 1 || !Number.isInteger(quantity)) {
            throw new InvalidQuantityException('Quantity must be an integer greater than or equal to 1');
        }
    }

    #validatePrice(price) {
        if (typeof price !== 'number' || price < 10) {
            throw new InvalidPriceException('Price must be a number greater than or equal to 10');
        }
    }
    //endregion private methods
}