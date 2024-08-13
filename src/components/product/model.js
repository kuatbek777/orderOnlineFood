class ProductModel {
    constructor({ name, description, imgUrl, price, count = 5}) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
        this.count = count;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getImgUrl() {
        return this.imgUrl;
    }

    getPrice() {
        return this.price;
    }

    getCount() {
        return this.count;
    }

    getTotalPrice() {
        return Math.round(this.getPrice() * this.getCount());
    }

    increaseCount() {
        this.count += 1; 
    }

    decreaseCount() {
        if (this.getCount() > 0) {
            this.count -= 1;
        } 
    }
}

export default ProductModel;