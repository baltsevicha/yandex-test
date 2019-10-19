/* global $ */
class ElementManager {
    static waitForElement(selector) {
        const element = $(selector);

        element.waitForExist(5000);
        element.waitForDisplayed(5000);

        return element;
    }
}


export default ElementManager;
