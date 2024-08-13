import MainPosterModel from "./model.js";
import MainPosterView from "./view.js";

class MainPosterController {
    constructor() {
        this.model = new MainPosterModel();
        this.view = new MainPosterView();
    }

    render(parentElement) {
        if (!parentElement) {
            return;
        }
        
        const options = {
            title: this.model.getTitle(),
            description: this.model.getDescription()
        }

        this.view.render(parentElement, options);
    }
}

export default MainPosterController;