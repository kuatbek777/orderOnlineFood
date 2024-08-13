class ProductView {
    constructor() {

    }

    createProductImageHtml(imgUrl) {
        return `
            <div class='product-image-wrapper'>
                <img class='product-image' src='${imgUrl}'>
            </div>
        `;
    }

    createProductInfoHtml(name, description) {
        return `
            <div class='product-info'>
                <div class='product-title'>${name}</div>
                <div class='product-description'>${description}</div>
            </div>
            `;
    }

    createBuyOptionsHtml(totalPrice, count) {
        return `
            <div class='buy-options-wrapper'>
                <div class='product-action-buttons'>
                    <div class='product-pack'>
                        <div class='link-small-text'>
                            Pack of 6
                        </div>
                        <img class='product-image' src='src/images/arrow-down.svg'>
                    </div>
                    <div class='product-count'>
                        <div class='product-count-image-wrapper btn-remove-count'>
                            <img src='src/images/count-down.svg'>
                        </div>
                        <div class='link-small-text product-count-text'>
                            ${count}
                        </div>
                        <div class='product-count-image-wrapper btn-add-count'>
                            <img class='product-count-image' src='src/images/count-up.svg'>
                        </div>
                    </div>
                </div>
                <div class='product-price'>
                    $${totalPrice}
                </div>
            </div>
        `;
    }

    createAddToCartHtml() {
        return `
            <div class='add-to-cart'>
                <img class='product-image' src='src/images/addToCart.svg'>
                <div class='link-small-text'>
                    Add To Cart
                </div>
            </div>
        `;
    }

    render(parentElement, { name, description, imgUrl, totalPrice, count}) {
        parentElement.innerHTML = `
            ${this.createProductImageHtml(imgUrl)}
            ${this.createProductInfoHtml(name, description)}
            ${this.createBuyOptionsHtml(totalPrice, count)}
            ${this.createAddToCartHtml()}
        `;
    }

    renderCount(parentElement, count) {
        const countWrapper = parentElement.querySelector('.product-count-text');
        if (countWrapper) {
            countWrapper.innerHTML = count;
        }
    }

    renderTotalPrice(parentElement, totalPrice) {
        const priceWrapper = parentElement.querySelector('.product-price');
        if (priceWrapper) {
            priceWrapper.innerHTML = `$${totalPrice}`;
        }
    }
}

export default ProductView;