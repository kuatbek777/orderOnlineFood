class HeaderModel {
    constructor() {
        this.menuItems = [
            'Store',
            'About',
            'Shipping',
            'Recipes',
            'Blog'
        ];
    }

    getMenuItems() {
        return this.menuItems;
    }
}

export default HeaderModel;