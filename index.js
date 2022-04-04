
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
   ['assets/green-character.gif', 100, 250],
   ['assets/pine-tree.png', 450, 350],
   ['assets/tree.png', 200, 450],
   ['assets/pillar.png', 350, 250],
   ['assets/crate.png', 150, 350],
   ['assets/well.png', 500, 575]
];

addElementsFromDataArray(imagesData);

let itemImagesData = [
   ['assets/sword.png', 500, 555],
   ['assets/sheild.png', 165, 335],
   ['assets/staff.png', 600, 250]
];

addElementsFromDataArray(itemImagesData, makeInventoryable)
