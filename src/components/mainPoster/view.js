class MainPosterView {
    constructor() {

    }

    createContentHtml(title, description) {
        return `
            <div class='content'>
                <div class='sub-title'>
                    <img src = "src/images/dash.svg"/>
                    <div class='sub-title-text'>bonjour</div>
                    <img src = "src/images/dash.svg"/>
                </div>

                <div class='title'>
                    ${title}
                </div>
                <div class='description'>
                    ${description}
                </div>
                <button class='btn-shop-now'>
                    <div class='btn-shop-now-text'>Shop Now</div>
                    <img src = "src/images/arrow-right.svg"/>
                </button>
            </div>
        `;
    }

    createFoodPicsHtml() {
        return `
            <img id='bg-item-1' class='bg-food' src='src/images/food-1.png'>
            <img id='bg-item-2' class='bg-food' src='src/images/food-2.png'>
            <img id='bg-item-3' class='bg-food' src='src/images/food-3.png'>
            <img id='bg-item-4' class='bg-food' src='src/images/food-4.png'>
            <img id='bg-item-5' class='bg-food' src='src/images/food-5.png'>
        `;
    }

    createOrderNowHtml() {
        return `
            <div class='order-now-wrapper'>
                <div class='order-now'>
                    Order Now
                </div>
            </div>
        `;
    }

    render(parentElement, { title, description }) {
        parentElement.innerHTML = `
            ${this.createContentHtml(title, description)}
            ${this.createFoodPicsHtml()}
            ${this.createOrderNowHtml()}
        `;
    }
}

export default MainPosterView;