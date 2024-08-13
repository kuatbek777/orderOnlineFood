class BodyModel {
    constructor() {
        this.title = 'Lorem Ipsum';
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        this.subDescription = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        this.products = [
            {
                name: 'Pain au Cranberry',
                description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
                imgUrl: 'src/images/cranberry.png',
                price: 25.6
            },
            {
                name: 'Pain au Cranberry',
                description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
                imgUrl: 'src/images/cranberry.png',
                price: 25.6
            },
            {
                name: 'Roasted Pear Danish',
                description: 'A Danish pastry featuring a roasted pear center, complemented by light French vanilla cream and seasonal berries.',
                imgUrl: 'src/images/roastedPearDanish.png',
                price: 25.6
            },
            {
                name: 'Onion Anchovy',
                description: 'A savory pastry combining the rich flavors of onion and anchovy, enhanced with light French vanilla cream.',
                imgUrl: 'src/images/onionAnchovy.png',
                price: 25.6
            },
            {
                name: 'Pain au Cranberry',
                description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
                imgUrl: 'src/images/cranberry.png',
                price: 25.6
            },
            {
                name: 'Pain au Cranberry',
                description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
                imgUrl: 'src/images/cranberry.png',
                price: 25.6
            },
            {
                name: 'Roasted Pear Danish',
                description: 'A Danish pastry featuring a roasted pear center, complemented by light French vanilla cream and seasonal berries.',
                imgUrl: 'src/images/roastedPearDanish.png',
                price: 25.6
            },
            {
                name: 'Onion Anchovy',
                description: 'A savory pastry combining the rich flavors of onion and anchovy, enhanced with light French vanilla cream.',
                imgUrl: 'src/images/onionAnchovy.png',
                price: 25.6
            }
        ];
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getSubDescription() {
        return this.subDescription;
    }

    getProducts() {
        return this.products;
    }
}

export default BodyModel;