/**
 * @copyright codewithsadee 2023
 */

'use strict';

/**Module import */
import { addEventOnElements, getGreetingMsg } from "./utilis.js";
/**Togle sidebar in small screen */
/**Html element */
const $sidebar=document.querySelector('[data-sidebar]');
/* {Array<HtmlElement}*/
const $sidebarTogglers=document.querySelectorAll('[data-sidebar-toggler');
/* {Array<HtmlElement}*/
const $overlay=document.querySelector('[data-sidebar-overlay]');

addEventOnElements($sidebarTogglers,'click',function(){
    $sidebar.classList.toggle('active');
    $overlay.classList.toggle('active');
});

/**
 * show greeting message on homepage
 */
const $greetElem=document.querySelector('[data-greeting]');
const current=new Date().getHours();
$greetElem.textContent=getGreetingMsg(currentHour);

/**
 * show current date on homepage
 */
const $currentDateElement=document.querySelector('[data-current-date]');
$currentDateElement.textContent=new Date().toDateString()
                                           .relplace(' ',' ',' ');

