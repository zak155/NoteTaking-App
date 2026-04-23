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

/**
 * Genetaes a greeting message based on the current hour of the day
 * @param {number} currentHour-The current hour(0-23) to determine the appropriate greetng
 * @returns {string} A greeting message with a saluation corresponding to the time of day
 * 
 * 
 */
const getGreetingMsg=function(currentHour){
   
   const greeting=
   currentHour<5 ?'Night':
   currentHour<12 ?'Morning':
   currentHour<15 ? 'Noon':
   currentHour <17 ? 'Afternoon':
   currentHour <20 ? 'Evening':
   'Night';

   return `Good${greeting}`;
}

export {
    addEventOnElements,
    getGreetingMsg
}