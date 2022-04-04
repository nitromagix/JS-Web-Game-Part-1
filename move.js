
'use strict';

function move(element) {
   element.style.position = 'fixed'
   
   function moveToCoordinates(left, bottom) {
      element.style.left = left;
      element.style.bottom = bottom;
      document.body.append(element);
   }
   return { to: moveToCoordinates };
}

