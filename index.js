
'use strict';

function makeInventoryable(element) {
   element.addEventListener('dblclick', function (e) {
      let target = e.target;
      let src = target.src;
      let inventoryItem = createImage(src);
      inventory.append(inventoryItem);
      e.target.remove();
   });
   return element;
}


renderBackground();

const inventory = newInventory();
move(inventory).to(0, 0);

let imagesData = [
   // ['assets/images/green-character.gif', 100, 250],
   ['assets/images/pine-tree.png', 450, 350],
   ['assets/images/tree.png', 200, 450],
   ['assets/images/pillar.png', 350, 250],
   ['assets/images/crate.png', 150, 350],
   ['assets/images/well.png', 500, 575]
];

createImagesFromData(imagesData);

let itemImagesData = [
   ['assets/images/sword.png', 500, 555],
   ['assets/images/sheild.png', 165, 335],
   ['assets/images/staff.png', 600, 250]
];

createImagesFromData(itemImagesData, makeInventoryable)

const character = createImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

