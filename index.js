const IMAGE_DIR = 'assets/'
const DEFAULT_BG_IMAGE_WIDTH = 50;
const DEFAULT_BG_IMAGE_HEIGHT = 50;
const HORIZON = 501;

function addImage(imageName) {

   let image = document.createElement('img')
   image.src = IMAGE_DIR + imageName;
   image.style.position = 'fixed';
   return image
}

function move(element) {
   function moveToCoordinates(left, bottom) {
      element.style.left = left;
      element.style.bottom = bottom;
      document.body.append(element);
   }

   return { to: moveToCoordinates };
}

function makeElementRemovable(element) {
   element.addEventListener('dblclick', function (e) {
      element.remove();
   });
   return element;
}

function addImagestoScreen(imagesData, actionCallback){
   let data = imagesData;
   for (i in data) {
      let url = data[i][0];
      let left = data[i][1];
      let bottom = data[i][2];
   
      let image = addImage(url)
      move(image).to(left, bottom);

      if (actionCallback !== null && actionCallback !== undefined)  {
         actionCallback(image);
      }
   }
}

let getClient = function () {
   return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
   }
}

// Attaching the event listener function to window's resize event
// window.addEventListener("resize", renderBackground);

function renderBackground() {
   let client = getClient();

   let yPosition = 0;
   while (yPosition < client.height) {
      let bgImageName = yPosition < HORIZON ? 'grass.png' : 'sky.png';
      var xPosition = 0;
      while (xPosition < client.width) {
         let bgImage = addImage(bgImageName);
         move(bgImage).to(xPosition + 'px', yPosition + 'px');
         xPosition = xPosition + DEFAULT_BG_IMAGE_WIDTH;
      }
      yPosition = yPosition + DEFAULT_BG_IMAGE_HEIGHT;
   }
}



renderBackground();

let imagesData = [
   ['green-character.gif', '100px', '100px'],
   ['pine-tree.png', '450px', '200px'],
   ['tree.png', '200px', '300px'],
   ['pillar.png', '350px', '100px'],
   ['crate.png', '150px', '200px'],
   ['well.png', '500px', '425px']
];

addImagestoScreen(imagesData);

let itemsData = [
   ['sword.png', '500px', '405px'],
   ['sheild.png', '165px', '185px'],
   ['staff.png', '600px', '100px']
];

addImagestoScreen(itemsData, makeElementRemovable)
