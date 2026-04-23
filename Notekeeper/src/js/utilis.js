/**
 * @copyright codewithsadee 2023
 */

'use strict';
/**
 * Attaches ana event listner to a collection of DOM elements
 * @param {Array<HTMLElement>} $elements-An array of DOM elemets to attach the 
    the event listener to
 * @param {string} eventType -The type of event to listen for (e.g 'click')
    ''mouseover').
 *@param {Function} callback-the function to be executed when the event
  occurs
 */
const addEventOnElements=function ($elements,eventType,callback){
  $elements.forEach($element => $element.addEventListener(eventType,callback)
    
  );
}
export {
    addEventOnElements
}