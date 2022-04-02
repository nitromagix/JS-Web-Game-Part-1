
const IMAGE_DIR = 'assets/'
const DEFAULT_BG_IMAGE_WIDTH = 100;
const DEFAULT_BG_IMAGE_HEIGHT = 100;
const GRASS_STOP_SKY_START_POS = 500

function createImageElement(source) {
   let image = document.createElement('img')
   image.src = source;
   return image;
}

function addFixedElementToBody(element, left, bottom) {
   element.style.position = 'fixed';
   element.style.left = left;
   element.style.bottom = bottom;
   document.body.append(element);
   return element;
}

function newInteractiveItem(element) {
   element.addEventListener('dblclick', function(e) {
      element.remove();
   });
   return element;
}

   
// Attaching the event listener function to window's resize event
// window.addEventListener("resize", renderBackground);

function renderBackground() {
   let clientWidth = document.documentElement.clientWidth;
   let clientHeight = document.documentElement.clientHeight;

   let heightMultiplier = parseInt(clientHeight / DEFAULT_BG_IMAGE_HEIGHT);
   let heightMod = GRASS_STOP_SKY_START_POS % DEFAULT_BG_IMAGE_HEIGHT;

   let bgImageWidth = DEFAULT_BG_IMAGE_WIDTH;
   let i = 0;
   for (i; i <= heightMultiplier; i++) {
      let bgImageHeight = ((i === heightMultiplier) && (heightMod > 0)) ? heightMod : DEFAULT_BG_IMAGE_HEIGHT;
      ypos = i * bgImageHeight;
      let bgSource = ypos >= GRASS_STOP_SKY_START_POS ? 'sky.png' : 'grass.png';
      var xpos = 0
      while (xpos  < clientWidth) {
         let bg = createImageElement(IMAGE_DIR + bgSource);
         bg.height = bgImageHeight;
         addFixedElementToBody(bg, xpos + 'px', ypos + 'px');
         xpos = xpos + bgImageWidth;
      }
   }
}


renderBackground();

let greenGuy = createImageElement(IMAGE_DIR + 'green-character.gif');
addFixedElementToBody(greenGuy, '100px', '100px');

let pineTree = createImageElement(IMAGE_DIR + 'pine-tree.png');
addFixedElementToBody(pineTree, '450px', '200px');

let tree = createImageElement(IMAGE_DIR + 'tree.png');
addFixedElementToBody(tree, '200px', '300px');

let pillar = createImageElement(IMAGE_DIR + 'pillar.png');
addFixedElementToBody(pillar, '350px', '100px');

let crate = createImageElement(IMAGE_DIR + 'crate.png');
addFixedElementToBody(crate, '150px', '200px');

let well = createImageElement(IMAGE_DIR + 'well.png');
addFixedElementToBody(well, '500px', '425px');

let sword = createImageElement(IMAGE_DIR + 'sword.png');
addFixedElementToBody(newInteractiveItem(sword), '500px', '405px');

let shield = createImageElement(IMAGE_DIR + 'sheild.png');
addFixedElementToBody(newInteractiveItem(shield), '165px', '185px');

let staff = createImageElement(IMAGE_DIR + 'staff.png');
addFixedElementToBody(newInteractiveItem(staff), '600px', '100px');


