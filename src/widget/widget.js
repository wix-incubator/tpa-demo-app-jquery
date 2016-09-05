require('./widget.scss')

var Wix = require('Wix')
var $ = require('jquery')

Wix.addEventListener(Wix.Events.SETTINGS_UPDATED, onSettingsUpdate);
// You can get the style params programmatically, un-comment the following snippet to see how it works:
/*Wix.Styles.getStyleParams(style => {
 console.log(style);
 });*/

// You can also get the style every time it changes, try this:
/*Wix.addEventListener(Wix.Events.STYLE_PARAMS_CHANGE, style => {
 console.log(style);
 });*/

function onSettingsUpdate(update) {
    update = stringify(update);
    $('.json').html(update);
    updateCompHeight();
}

function updateCompHeight(height) {
    const desiredHeight = height || document.documentElement.scrollHeight;
    Wix.setHeight(desiredHeight);
}

function stringify(input) {
    try {
        return JSON.stringify(input, null, 4);
    } catch (err) {
        return input;
    }
}
