/* global describe, it, ScreenshotManager, ElementManager */

import chai from 'chai';
import StoryBookStepper from 'TESTS/Steppers/StoryBookStepper';
import App from 'TESTS/PageObject/App';

describe('App', () => {
    it('test', async () => {
        StoryBookStepper.openPageById('app', 'test');
        ElementManager.waitForElement(App.container);

        const isIdentical = ScreenshotManager.compareScreenshots({
            screenshotPath: '/App/test'
        });

        chai.expect(isIdentical).equal(true);
    });
});
