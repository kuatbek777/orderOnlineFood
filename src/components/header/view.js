class HeaderView {
    constructor() {

    }

    createLogoHtml() {
        return `
            <img id='logo' class='logo' src='src/images/logo.png'>
        `;
    }

    createNavbarHtml(menuItems = []) {
        let html = `<div class='navbar'>`;

        menuItems.forEach(menuItem => {
            html += `<div class='navbar-item'>${menuItem}</div>`;
        })

        html += `</div>`;

        return html
    }

    createBasketHtml() {
        return `
            <div class='basket-wrapper'>
                <div class='basket'>
                    <img src='src/images/basket.svg'>
                </div>
                <div class='basket-count'>
                    8
                </div>
            </div>
        `;
    }

    render(parentElement, menuItems) {
        parentElement.innerHTML = `
            ${this.createLogoHtml()}
            ${this.createNavbarHtml(menuItems)}
            ${this.createBasketHtml()}
        `;
    }
}

export default HeaderView;