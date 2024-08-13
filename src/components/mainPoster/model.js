class MainPosterModel {
    constructor() {
        this.title = 'Serving Baked Goods <strong> Every Day </strong>';
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }
}

export default MainPosterModel;