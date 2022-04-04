
'use strict';

const DEFAULT_BG_IMAGE_WIDTH = 100;
const DEFAULT_BG_IMAGE_HEIGHT = 100;
const HORIZON_POSITION = 501;

function renderBackground() {
   let client = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
   };

   let yPosition = 0;
   while (yPosition < client.height) {
      let bgImageName = yPosition < HORIZON_POSITION ? 'assets/grass.png' : 'assets/sky.png';
      var xPosition = 0;
      while (xPosition < client.width) {
         let bgImage = createImage(bgImageName);
         move(bgImage).to(xPosition + 'px', yPosition + 'px');
         xPosition = xPosition + DEFAULT_BG_IMAGE_WIDTH;
      }
      yPosition = yPosition + DEFAULT_BG_IMAGE_HEIGHT;
   }
}