// ==UserScript==
// @name           larger tasks
// @namespace      org.denknerd.gtasks
// @description    makes the tasks pane in google calendar more usable
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
    divs[i].style.height = window.innerHeight - 300 + "px";
}

/* for Mozilla/Opera9 */
if (document.addEventListener) {
  document.addEventListener("load", stretchTasks, true);
  //we also want this on windowresize:
  window.addEventListener("resize", stretchTasks, true);
}

