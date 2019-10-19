/* global browser */

class StoryBookStepper {
    static openPageById(type, condition) {
        browser.waitUntil(() => {
            browser.url(`http://localhost:6006/iframe.html?id=${type}--${condition}`);
            return browser.getTitle() === 'Storybook';
        }, 50000, 'expected launch of storybook');
    }
}

export default StoryBookStepper;
