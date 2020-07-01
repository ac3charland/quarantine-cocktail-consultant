const backstop = require('./backstop')
const cs = backstop.scenario

const viewport = 'viewport'

module.exports = backstop.config({
    id: 'main',
    fileNameTemplate: '{scenarioLabel}_{viewportLabel}',
    viewports: [
        {
            label: 'large-view',
            width: 1400,
            height: 1000
        },
        {
            label: 'small-view',
            width: 320,
            height: 568
        },
    ],
    scenarios: [
        cs({label: 'home-page'}),
        cs({label: 'secondary', onReadyScript: 'navigate-to-secondary.js'}),
    ]
})