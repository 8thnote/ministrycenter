$(document).ready(function(){"use strict";function e(e,n,a){var t;return function(){var i=this,o=arguments,r=function(){t=null,a||e.apply(i,o)},l=a&&!t;clearTimeout(t),t=setTimeout(r,n),l&&e.apply(i,o)}}var n,a,t=!1,i=function(){var e=document.getElementById("mainWrap"),i=window.getComputedStyle(e,null).getPropertyValue("font-size"),o=parseFloat(i),r=window.getComputedStyle(e,null).getPropertyValue("width"),l=parseFloat(r),s=l/o,u=37.5;if(!Modernizr.touch&&s>=u&&!t){var d=new ScrollMagic.Controller;n=new ScrollMagic.Scene({offset:200}).setPin("#mainNav").setClassToggle("body","pinned").addTo(d),a=$('<h3 id="smallLogo"><a href="index.html">the ministry center</a></h3>'),$("#mainNav").prepend(a),$("#mainSun").css("opacity","1"),t=!0}else n&&u>s&&(n.removePin(!0),$("#smallLogo").remove(),t=!1,$("#mainSun").css("opacity","0"))};i();var o=e(i,250);window.addEventListener("resize",o);var r=$("#mainNav ul").clone();r.attr("id","mobileNav"),$("#wrapA").append(r),$("#navToggle").click(function(e){e.preventDefault(),$(this).toggleClass("active"),$("#mobileNav").toggleClass("visible")});var l=$("#mainSun").clone();l.removeAttr("id").attr("id","sunLoader");var s;$("#mainNav").on("click","a",function(e){e.preventDefault(),$("html,body").animate({scrollTop:0},"medium");var n=$("#mainSun");n.fadeOut(),s?l.fadeIn():$("#wrapB").append(l).fadeIn(),$("#mainNav").find(".current").removeClass("current"),$(this).closest("li").addClass("current");var a=$(this).attr("href"),t=a.replace(".html","");return window.location.hash=t,$.ajax({url:a,success:function(e){$("#mainContent, #mainBanner").fadeOut("slow",function(){$("#mainBanner").html($(e).find("#mainBanner")).fadeIn("slow"),$("#mainContent").html($(e).find("#mainContent").html()).fadeIn("slow",function(){l.fadeOut(),n.fadeIn(3e3)})})},error:function(){l.fadeOut(),n.fadeIn(3e3)}}),s=!0,!1})});