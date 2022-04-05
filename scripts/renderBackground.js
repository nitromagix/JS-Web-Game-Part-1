'use strict';

const DEFAULT_BG_IMAGE_WIDTH = 100;
const DEFAULT_BG_IMAGE_HEIGHT = 100;
const HORIZON_POSITION = 650;

function renderBackground() {
   let client = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
   };

   let yPosition = 0;
   let horizonSet = false;
   while (yPosition < client.height) {
      let bgImageName = yPosition < HORIZON_POSITION ? 'assets/images/grass.png' : 'assets/images/sky.png'

      if (yPosition > HORIZON_POSITION && horizonSet == false) {
            yPosition = HORIZON_POSITION;
            horizonSet = true;
      }
      var xPosition = 0;
      while (xPosition < client.width) {
         let bgImage = createImage(bgImageName);
         move(bgImage).to(xPosition, yPosition);
         xPosition = xPosition + DEFAULT_BG_IMAGE_WIDTH;
      }
      yPosition = yPosition + DEFAULT_BG_IMAGE_HEIGHT;
   }
}