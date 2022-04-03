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

let images = [
   ['green-character.gif', '100px', '100px'],
   ['pine-tree.png', '450px', '200px'],
   ['tree.png', '200px', '300px'],
   ['pillar.png', '350px', '100px'],
   ['crate.png', '150px', '200px'],
   ['well.png', '500px', '425px']
];

for (i in images) {
   let image = addImage(images[i][0]);
   move(image).to(images[i][1], images[i][2]);
}

let items = [
   ['sword.png', '500px', '405px'],
   ['sheild.png', '165px', '185px'],
   ['staff.png', '600px', '100px']
];

for (i in items) {
   let item = addImage(items[i][0])
   makeElementRemovable(item);
   move(item).to(items[i][1], items[i][2]);
}
