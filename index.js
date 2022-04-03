const IMAGE_DIR = 'assets/'
const DEFAULT_BG_IMAGE_WIDTH = 100;
const DEFAULT_BG_IMAGE_HEIGHT = 100;
const HORIZON = 525

function addImage(imageName, left, bottom) {

   let image = document.createElement('img')
   image.src = IMAGE_DIR + imageName;
   image.style.position = 'fixed';
   image.style.left = left;
   image.style.bottom = bottom;
   document.body.append(image);
   return image
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

   let ypos = 0;
   while (ypos < client.height) {
      let bgImageName = ypos < HORIZON ? 'grass.png' : 'sky.png';
      var xpos = 0;
      while (xpos < client.width) {
         addImage(bgImageName, xpos + 'px', ypos + 'px');
         xpos = xpos + DEFAULT_BG_IMAGE_WIDTH;
      }
      ypos = ypos + DEFAULT_BG_IMAGE_HEIGHT;
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
   addImage(images[i][0], images[i][1], images[i][2])
}

let items = [
   ['sword.png', '500px', '405px'],
   ['sheild.png', '165px', '185px'],
   ['staff.png', '600px', '100px']
]

for (i in items) {
   let item = addImage(items[i][0], items[i][1], items[i][2])
   makeElementRemovable(item)
}
