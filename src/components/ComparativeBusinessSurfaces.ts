
import * as THREE from 'three';
import { ComparativeBusiness } from '../types/business';

export const addComparativeBusinessSurfaces = (comparativeBusinesses: ComparativeBusiness[], scene: THREE.Scene) => {
  comparativeBusinesses.forEach((business, index) => {
    const position = business.positions[0];
    
    // Create larger volume for each business area
    const width = 4.0;  // Width of the volume
    const height = 3.0; // Height of the volume
    const depth = 3.0;  // Depth of the volume
    
    // Offset positions for each business area
    const xOffset = index === 0 ? -5 : (index === 1 ? 5 : 0);
    const zOffset = index === 2 ? 5 : 0;

    // Create box geometry for each business area
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshPhongMaterial({ 
      color: position.color,
      transparent: true,
      opacity: 0.6
    });
    
    const box = new THREE.Mesh(geometry, material);
    
    // Position the box
    box.position.set(
      position.sales / 100 + xOffset,
      position.netProfit / 100,  // Swapped from previous
      position.grossProfit / 100  // Swapped from previous
    );
    
    scene.add(box);

    // Add text label for business name
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (context) {
      canvas.width = 512;
      canvas.height = 128;
      context.fillStyle = '#000000';
      context.font = 'bold 40px Arial';
      context.textAlign = 'center';
      context.fillText(business.name, 256, 64);
      
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(spriteMaterial);
      
      // Position the label above the box
      sprite.position.set(
        box.position.x,
        box.position.y + height/2 + 1,
        box.position.z
      );
      
      sprite.scale.set(5, 1.25, 1);
      scene.add(sprite);
    }
  });
};
