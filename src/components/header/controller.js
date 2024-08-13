import HeaderModel from "./model.js";
import HeaderView from "./view.js";

class HeaderController {
    constructor() {
        this.model = new HeaderModel();
        this.view = new HeaderView();
    }

    render(parentElement) {
        if (!parentElement) {
            return;
        }
        const menuItems = this.model.getMenuItems();
        this.view.render(parentElement, menuItems);
    }
}

export default HeaderController;