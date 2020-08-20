// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.yad2.co.il/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var cssId = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];

        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://res.cloudinary.com/dzakwmo2x/raw/upload/v1597961706/TamperMonkey/yad2Style_dqhzul.css';
        link.media = 'all';

        head.appendChild(link);
    }



    function nuke(name) {
       var element = document.querySelector(name);
          if(element !== null) {
              element.style.display = "none";
          }
    }

    function nukeSub(parent, name) {
       var element = parent.querySelector(name);
          if(element !== null) {
              element.style.display = "none";
          }
    }

    window.addEventListener('load', (event) => {

        //nuke("#media_container");
        //nuke("#desktop-top-banners");
        //nuke("#google_image_div");
        //nuke(".top_boxes_row");
        nuke(".yad1_row");
        //nuke(".feed_aside");
        //nuke(".dfp_v2");

        /*
        //catch a click under "feeditem table" and then disable ads
        //bug: it works only on second click that open the card
        var feeditem = document.querySelector(".feeditem");
        feeditem.addEventListener("click", function() {
            alert("Hello World!");

            //nuke(".dfp-slot-container");
            //nuke(".y1_right_side");

            nukeSub(feeditem, ".dfp-slot-container");
            nukeSub(feeditem, ".y1_right_side");

        });*/


        setTimeout(function() {
            nuke(".GoogleActiveViewElement");
            nuke("#google_image_div");
        }, 5000);
    });

})();
