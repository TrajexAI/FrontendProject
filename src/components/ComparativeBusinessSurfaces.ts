
import * as THREE from 'three';
import { ComparativeBusiness } from '../types/business';

export const addComparativeBusinessSurfaces = (comparativeBusinesses: ComparativeBusiness[], scene: THREE.Scene) => {
  // Define common dimensions
  const width = 4.0;
  const height = 3.0;
  const depth = 3.0;

  comparativeBusinesses.forEach((business, index) => {
    const position = business.positions[0];
    
    if (index === 0) {
      // Create steeper diagonal volume for hypergrowth area starting from origin
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        // Front face - made steeper by increasing y values and starting from 0
        0, 0, 0,     // Starting from origin
        13, 10, 7,   // Increased height (y) for steeper slope
        -2, 0, -2,   // Starting from origin
        11, 10, 5,   // Increased height (y) for steeper slope
        // Add more vertices for volume
        2, 0, 2,     // Starting from origin
        13, 10, 9,   // Increased height (y) for steeper slope
        0, 0, 0,     // Starting from origin
        11, 10, 7    // Increased height (y) for steeper slope
      ]);

      const indices = new Uint16Array([
        0, 1, 2,
        1, 3, 2,
        4, 5, 6,
        5, 7, 6,
        0, 4, 1,
        4, 5, 1,
        2, 3, 6,
        3, 7, 6,
        0, 2, 4,
        2, 6, 4,
        1, 5, 3,
        5, 7, 3
      ]);

      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      geometry.setIndex(new THREE.BufferAttribute(indices, 1));
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({
        color: '#FEC6A1',
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });

      const volume = new THREE.Mesh(geometry, material);
      volume.position.set(0, 0, 0); // Position at origin
      scene.add(volume);

    } else {
      // Create box geometry for other business areas      
      const xOffset = index === 1 ? 5 : 0;
      const zOffset = index === 2 ? 5 : 0;
      const yOffset = index === 1 ? 5 : 0; // Added y-offset for steady state area

      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshPhongMaterial({ 
        color: index === 1 ? '#C8C8C9' : '#DAA520',
        transparent: true,
        opacity: 0.6
      });
      
      const box = new THREE.Mesh(geometry, material);
      box.position.set(
        position.sales / 100 + xOffset,
        position.netProfit / 100 + yOffset, // Added yOffset for steady state
        position.grossProfit / 100 + zOffset
      );
      
      scene.add(box);
    }

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
      
      // Position the label - bringing hypergrowth label closer to volume
      const xPos = index === 0 ? 2 : (index === 1 ? position.sales / 100 + 5 : position.sales / 100);
      const yPos = index === 0 ? 6 : (index === 1 ? position.netProfit / 100 + height/2 + 6 : position.netProfit / 100 + height/2 + 1); // Adjusted label heights
      const zPos = index === 0 ? 2 : (index === 2 ? position.grossProfit / 100 + 5 : position.grossProfit / 100);
      
      sprite.position.set(xPos, yPos, zPos);
      sprite.scale.set(5, 1.25, 1);
      scene.add(sprite);
    }
  });
};

