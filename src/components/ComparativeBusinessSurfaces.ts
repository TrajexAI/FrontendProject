
import * as THREE from 'three';
import { ComparativeBusiness } from '../types/business';

export const addComparativeBusinessSurfaces = (comparativeBusinesses: ComparativeBusiness[], scene: THREE.Scene) => {
  comparativeBusinesses.forEach((business, index) => {
    const positions = business.positions;
    const color = positions[0].color;
    
    // Create path points for the volume
    positions.forEach((pos, timeIndex) => {
      const width = 1.5;  // Width of the volume
      const height = 1.0; // Height of the volume
      const depth = 1.0;  // Depth of the volume
      
      // Offset the volumes to the sides based on index
      const xOffset = index === 0 ? -5 : (index === 1 ? 5 : 0);
      const zOffset = index === 2 ? 5 : 0;

      // Create box geometry for each position
      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshPhongMaterial({ 
        color: color,
        transparent: true,
        opacity: 0.6
      });
      
      const box = new THREE.Mesh(geometry, material);
      
      // Position the box
      box.position.set(
        pos.sales / 100 + xOffset,
        pos.grossProfit / 100,
        pos.netProfit / 100 + zOffset
      );
      
      scene.add(box);

      // Add connecting lines between boxes
      if (timeIndex > 0) {
        const prevPos = positions[timeIndex - 1];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(
            prevPos.sales / 100 + xOffset,
            prevPos.grossProfit / 100,
            prevPos.netProfit / 100 + zOffset
          ),
          new THREE.Vector3(
            pos.sales / 100 + xOffset,
            pos.grossProfit / 100,
            pos.netProfit / 100 + zOffset
          )
        ]);
        
        const lineMaterial = new THREE.LineBasicMaterial({ color: color });
        const line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
      }
    });

    // Add small spheres for data points
    positions.forEach((pos) => {
      const sphereGeometry = new THREE.SphereGeometry(0.15);
      const sphereMaterial = new THREE.MeshPhongMaterial({ color: pos.color });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      
      // Apply the same offset as the boxes
      const xOffset = index === 0 ? -5 : (index === 1 ? 5 : 0);
      const zOffset = index === 2 ? 5 : 0;
      
      sphere.position.set(
        pos.sales / 100 + xOffset,
        pos.grossProfit / 100,
        pos.netProfit / 100 + zOffset
      );
      scene.add(sphere);
    });
  });
};
