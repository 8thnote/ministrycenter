/* jshint devel:true */

/*! getEmPixels  | Author: Tyson Matanich (http://matanich.com), 2013 | License: MIT */
(function (document, documentElement) {
    // Enable strict mode
    "use strict";

    // Form the style on the fly to result in smaller minified file
    var important = "!important;";
    var style = "position:absolute" + important + "visibility:hidden" + important + "width:1em" + important + "font-size:1em" + important + "padding:0" + important;

    window.getEmPixels = function (element) {

        var extraBody;

        if (!element) {
            // Emulate the documentElement to get rem value (documentElement does not work in IE6-7)
            element = extraBody = document.createElement("body");
            extraBody.style.cssText = "font-size:1em" + important;
            documentElement.insertBefore(extraBody, document.body);
        }

        // Create and style a test element
        var testElement = document.createElement("i");
        testElement.style.cssText = style;
        element.appendChild(testElement);

        // Get the client width of the test element
        var value = testElement.clientWidth;

        if (extraBody) {
            // Remove the extra body element
            documentElement.removeChild(extraBody);
        }
        else {
            // Remove the test element
            element.removeChild(testElement);
        }

        // Return the em value in pixels
        return value;
    };
}(document, document.documentElement));

$(document).ready(function() {
    // Get the em value of the #mainWrap element
    // Still working on this
    var mainWrapWidth = getEmPixels(document.getElementById('wrapA'));
    console.log(mainWrapWidth);
    
    if (!Modernizr.touch) {
        // init controller
        var controller = new ScrollMagic.Controller();

        // create a scene
        new ScrollMagic.Scene({
                offset: 220      // start this scene after scrolling for 50px
            })
            .setPin("#mainNav")
            .setClassToggle("body", "pinned")// pins the element for the the scene's duration
            .addTo(controller); // assign the scene to the controller
    }
});