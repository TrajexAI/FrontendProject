
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
      // Create triangular diagonal volume for hypergrowth area
      const geometry = new THREE.BufferGeometry();
      const vertices = new Float32Array([
        // Base triangle
        0, 0, 0,      // Origin point
        15, 0, 0,     // Point along sales axis
        0, 0, 15,     // Point along gross profit axis
        
        // Top triangle
        0, 15, 0,     // Point at top of net profit axis
        15, 15, 0,    // Top point above sales axis
        0, 15, 15,    // Top point above gross profit axis
      ]);

      const indices = new Uint16Array([
        // Base triangle
        0, 1, 2,
        // Top triangle
        3, 4, 5,
        // Sides
        0, 1, 4,
        0, 4, 3,
        0, 2, 5,
        0, 5, 3,
        1, 2, 5,
        1, 5, 4
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
      volume.position.set(0, 0, 0);
      scene.add(volume);

    } else {
      // Create box geometry for steady state area      
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshPhongMaterial({ 
        color: '#C8C8C9',
        transparent: true,
        opacity: 0.6
      });
      
      const box = new THREE.Mesh(geometry, material);
      box.position.set(
        position.sales / 100,
        position.netProfit / 100 + 5, // Elevated position for steady state
        position.grossProfit / 100
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
      
      // Position the label
      const xPos = index === 0 ? 2 : position.sales / 100;
      const yPos = index === 0 ? 6 : (position.netProfit / 100 + height/2 + 6);
      const zPos = index === 0 ? 2 : position.grossProfit / 100;
      
      sprite.position.set(xPos, yPos, zPos);
      sprite.scale.set(5, 1.25, 1);
      scene.add(sprite);
    }
  });
};
