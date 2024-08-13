import BodyModel from "./model.js";
import BodyView from "./view.js";

class BodyController {
    constructor() {
        this.model = new BodyModel();
        this.view = new BodyView();
    }

    render(parentElement) {
        if (!parentElement) {
            return;
        }
        
        const options = {
            title: this.model.getTitle(),
            description: this.model.getDescription(),
            subDescription: this.model.getSubDescription(),
            products: this.model.getProducts()
        }

        this.view.render(parentElement, options);
    }
}

export default BodyController;