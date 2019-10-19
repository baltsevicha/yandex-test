/* global browser, $ */

import StoryBookPage from 'TESTS/PageObject/StoryBookPage';

const DEFAULT_COMPARE_OPTIONS = {
    ignoreNothing: true
};

class ScreenshotManager {
    static compareScreenshots({
        screenshotPath,
        compareOptions = DEFAULT_COMPARE_OPTIONS,
        elementPath = StoryBookPage.captureArea
    }) {
        const result = browser.checkElement($(elementPath), screenshotPath, compareOptions);

        return result === 0;
    }
}

export default ScreenshotManager;
