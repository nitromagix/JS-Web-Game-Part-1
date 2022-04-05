
'use strict';

function createImagesFromData(dataArray, actionCallback){
   let data = dataArray;
   for (let i in data) {
      let url = data[i][0];
      let left = data[i][1];
      let bottom = data[i][2];
   
      let image = createImage(url)
      move(image).to(left, bottom);

      if (actionCallback !== null && actionCallback !== undefined)  {
         actionCallback(image);
      }
   }
}