const fork = require('child_process').fork;
const Launcher = require('@wdio/cli').default

const storyBookProcess = fork('./node_modules/.bin/start-storybook', ['-p', '6006', '--ci']);

storyBookProcess.on('message', function(message) {
    console.log('completed: ' + message);
});

const wdio = new Launcher('./wdio.conf.js');

wdio.run().then((code) => {
    storyBookProcess.kill();
    process.exit(code);
}, (error) => {
    console.error('Launcher failed to start the test', error.stacktrace)
    storyBookProcess.kill();
    process.exit(1)
});