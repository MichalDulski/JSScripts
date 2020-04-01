// ==UserScript==
// @name         Usuwanie tego głupiego znaku wodnego ze strony Dr. Inż. Michała Rena
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Prosty skrypt usuwający znaki wodne ze strony renmich.faculty.wmi.amu.edu.pl
// @author       Michał Dulski
// @match        https://renmich.faculty.wmi.amu.edu.pl/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var list = document.getElementsByClassName("backimage");
    for(var i = list.length - 1; 0 <= i; i--){
        if(list[i] && list[i].parentElement){
            list[i].parentElement.removeChild(list[i]);
        }
    }

})();