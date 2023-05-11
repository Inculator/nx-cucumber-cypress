const nxPreset = require('@nx/jest/preset').default;
const cucumber = require('cypress-cucumber-preprocessor').default 
module.exports = { ...nxPreset };

module.exports = (on, config) => {

      on('file:preprocessor', cucumber())
    
    }