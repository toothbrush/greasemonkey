// ==UserScript==
// @name           larger tasks
// @namespace      org.denknerd.gtasks
// @description    makes the tasks pane in google calendar more usable
// @include        https://www.google.com/calendar/*
// @include        http://www.google.com/calendar/*
// ==/UserScript==
//

window.stretchTasks = function () {
    divs = document.getElementsByTagName("div");
    count = 0 ;
    for(i = 0; i < divs.length; i++)
    {
        if(divs[i].className == 'sng-content')
        {
            count++;
            indexWeWant = i; 
            break;
        }
    }

    //set the Tasks height:
    divs[i].style.height = window.innerHeight - 270 + "px";

    var tipsBox = document.getElementById('funbox');
    tipsBox.style.display = "none";
}

/* for Mozilla/Opera9 */
if (document.addEventListener) {
  document.addEventListener("load", stretchTasks, true);
  //we also want this on windowresize:
  window.addEventListener("resize", stretchTasks, true);
}

