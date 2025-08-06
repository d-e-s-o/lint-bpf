const core = require('@actions/core');
const linter = require('./linter');

try {
    linter.main();
} catch (error) {
    core.setFailed(error.message);
}
