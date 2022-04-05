
'use strict';

function createImage(imageName) {
   let image = document.createElement('img')
   image.src = imageName;
   document.body.append(image);
   return image
}



