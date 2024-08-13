import ProductModel from "./model.js";
import ProductView from "./view.js";

class ProductController {
    constructor(options) {
        this.model = new ProductModel(options);
        this.view = new ProductView();
    }

    render(parentElement) {
        if (!parentElement) {
            return;
        }

        const options = {
            name: this.model.getName(),
            description: this.model.getDescription(),
            imgUrl: this.model.getImgUrl(),
            totalPrice: this.model.getTotalPrice(),
            count: this.model.getCount()
        }
        this.view.render(parentElement, options);
    }

    addEventListener(parentElement) {
        const increaseButton = parentElement.querySelector('.btn-add-count');
        const decreaseButton = parentElement.querySelector('.btn-remove-count');
        if (increaseButton) {
            increaseButton.addEventListener('click', () => {
                this.model.increaseCount();
                this.renderCountAndTotalPrice(parentElement);
            })
        }

        if (decreaseButton) {
            decreaseButton.addEventListener('click', () => {
                this.model.decreaseCount();
                this.renderCountAndTotalPrice(parentElement);
            })
        }

    }

    renderCountAndTotalPrice(parentElement) {
        const count = this.model.getCount();
        const totalPrice = this.model.getTotalPrice();
        this.view.renderCount(parentElement, count);
        this.view.renderTotalPrice(parentElement, totalPrice)
    }


}

export default ProductController;