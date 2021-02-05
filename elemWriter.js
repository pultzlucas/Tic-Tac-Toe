const wf = require('elements.dom')

const config = {
    ignore: {
        classes: ['row','container'],
    }
}

wf('index', './src/scripts/elements.js', config)