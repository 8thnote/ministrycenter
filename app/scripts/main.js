/* jshint devel:true */
$(document).ready(function() {
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this,
				args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}; //debounce fn
 
    var initialized = false;
    var myScene;
    
	var myResize = function() {
	    var el = document.getElementById('mainWrap');
    	var fontPx = window.getComputedStyle(el, null).getPropertyValue('font-size');
    	var fontSizeNum = parseFloat(fontPx);
    	var widthPx = window.getComputedStyle(el, null).getPropertyValue('width');
    	var layoutWidthNum = parseFloat(widthPx);
    	var layoutEmNum = layoutWidthNum / fontSizeNum;
    	var mobileBreakpoint = 35.85;
	    
		if (!Modernizr.touch && layoutEmNum >= mobileBreakpoint && !initialized) {
			// init controller
			var controller = new ScrollMagic.Controller();
 
			// create a scene
			myScene = new ScrollMagic.Scene({
				offset: fontSizeNum * 10 // start this scene after scrolling for X distance in px
			})
				.setPin("#mainNav")
				.setClassToggle("body", "pinned") // pins the element for the the scene's duration
			.addTo(controller); // assign the scene to the controller
			initialized = true;
		} else {
		    if (myScene && layoutEmNum < mobileBreakpoint) {
			    myScene.removePin(true);
			    initialized = false;
		    }
		}
	}; //myResize
	myResize();
	var myResizeDebounced = debounce(myResize, 250);
	window.addEventListener('resize', myResizeDebounced);
	
	//Mobile Nav
	var mobileNav = $("#mainNav ul").clone();
	mobileNav.attr("id", "mobileNav");
	$("#wrapA").append(mobileNav);
	$("#navToggle").click(function(e) {
		e.preventDefault();
		$("#mobileNav").toggleClass("visible");
	});

});