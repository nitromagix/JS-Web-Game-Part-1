
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
move(inventory).to('0px', '0px');

let imagesData = [
   ['assets/green-character.gif', '100px', '100px'],
   ['assets/pine-tree.png', '450px', '200px'],
   ['assets/tree.png', '200px', '300px'],
   ['assets/pillar.png', '350px', '100px'],
   ['assets/crate.png', '150px', '200px'],
   ['assets/well.png', '500px', '425px']
];

addElementsFromDataArray(imagesData);

let itemImagesData = [
   ['assets/sword.png', '500px', '405px'],
   ['assets/sheild.png', '165px', '185px'],
   ['assets/staff.png', '600px', '100px']
];

addElementsFromDataArray(itemImagesData, makeInventoryable)
