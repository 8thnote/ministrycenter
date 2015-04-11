/* jshint devel:true */
$(document).ready(function() {
    if (!Modernizr.touch) {
        // init controller
        var controller = new ScrollMagic.Controller();
        
        // create a scene
        new ScrollMagic.Scene({
                offset: 200      // start this scene after scrolling for 50px
            })
            .setPin("nav")
            .setClassToggle("body", "pinned")// pins the element for the the scene's duration
            .addTo(controller); // assign the scene to the controller
    }
});