import ProductController from "../product/controller.js";

class BodyView {
    constructor() {

    }

    createContentHtml(title, description, subDescription) {
        return `
            <div class='about'>
                <div class='content'>
                    <div class='sub-title'>
                        <img src = "src/images/dash.svg"/>
                        <div class='sub-title-text'>patisserie</div>
                        <img src = "src/images/dash.svg"/>
                    </div>

                    <div class='title'>
                        <img class='title-bg' src = "src/images/title-bg.png" />
                        <div class='title-text'>${title}</div>
                    </div>
                    <div class='description'>
                        ${description}
                    </div>
                    <div class='description'>
                        ${subDescription}
                    </div>
                    <div class='contacts'>
                        <div class='follow-us-text'>
                            Follow Us
                        </div>
                        <img class='follow-us-dash' src = "src/images/follow-us-dash.svg"/>
                        <img class='follow-us-fb' src = "src/images/fb.png"/>
                        <img class='follow-us-ig' src = "src/images/ig.png"/>
                    </div>
                </div>
            </div>
        `;
    }

    createProductsParentHtml(products) {
        let html = `<div class='products'>`;

        products.forEach((product, index) => {
          html += `<div class='product-wrapper' id=product-${index}></div>`        
        })

        html += `</div>`;
        
        return html;
    }

    renderProducts(products) {
        products.forEach((product, index) => {
            const parentElement = document.getElementById(`product-${index}`);
            const productInstance = new ProductController(product);
            productInstance.render(parentElement);
            productInstance.addEventListener(parentElement);
        })
    }


    render(parentElement, { title, description, subDescription, products }) {
        parentElement.innerHTML = `
            ${this.createContentHtml(title, description, subDescription)}
            ${this.createProductsParentHtml(products)}
        `;
        this.renderProducts(products);
    }
}

export default BodyView;