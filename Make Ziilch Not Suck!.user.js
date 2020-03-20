// ==UserScript==
// @name         Make Ziilch Not Suck!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Open item detail pages in new window!
// @author       Paul
// @match        https://au.ziilch.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function openWindow(url) {
        return (function() {
            window.open(url, '_blank');
        });
    };

    function htmlreplace(a, b, element) {
        if (!element) element = document.body;
        var nodes = element.childNodes;

        for (var n=0; n<nodes.length; n++) {
            if (nodes[n].nodeType == Node.ELEMENT_NODE) {
                if(nodes[n].tagName == 'DIV' && nodes[n].className == 'itemIcon') {
                    var oldLink = nodes[n].attributes.onClick.value;
                    var url = "https://www.google.com";
                    var myArray = /'([^']+)'/.exec(oldLink);

                    var newLink = myArray[1];
                    console.log(newLink);
                    nodes[n].removeAttribute('onClick');
                    nodes[n].addEventListener('click', openWindow(newLink))
                }
                htmlreplace(a, b, nodes[n]);
            }
        }
    }

    htmlreplace('a', 'r');
})();