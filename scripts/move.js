
'use strict';

function move(element) {
   element.style.position = 'fixed'
   
   function moveToCoordinates(left, bottom) {
      element.style.left = left + 'px';
      element.style.bottom = bottom + 'px';
      document.body.append(element);
   }
   return { to: moveToCoordinates };
}

