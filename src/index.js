import BodyController from "./components/body/controller.js";
import HeaderController from "./components/header/controller.js";
import MainPosterController from "./components/mainPoster/controller.js";

(function () {
    // Header part
    const headerWrapper = document.getElementById('header');
    const header = new HeaderController();
    header.render(headerWrapper);

    // Main poster part
    const mainPosterWrapper = document.getElementById('main-poster');
    const mainPoster = new MainPosterController();
    mainPoster.render(mainPosterWrapper);

    // Body part
    const bodyWrapper = document.getElementById('body');
    const body = new BodyController();
    body.render(bodyWrapper);
})();