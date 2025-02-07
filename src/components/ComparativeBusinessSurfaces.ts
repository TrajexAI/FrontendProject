
import * as THREE from 'three';
import { ComparativeBusiness } from '../types/business';

export const addComparativeBusinessSurfaces = (comparativeBusinesses: ComparativeBusiness[], scene: THREE.Scene) => {
  comparativeBusinesses.forEach((business, index) => {
    const positions = business.positions;
    const color = positions[0].color;
    
    const generateSurface = (u: number, v: number, target: THREE.Vector3) => {
      const timeSpan = positions.length - 1;
      const t = v * timeSpan;
      const timeIndex = Math.floor(t);
      const alpha = t - timeIndex;
      
      const pos1 = positions[timeIndex];
      const pos2 = positions[Math.min(timeIndex + 1, positions.length - 1)];
      
      const x = (pos1.sales + (pos2.sales - pos1.sales) * alpha) / 100;
      const y = (pos1.grossProfit + (pos2.grossProfit - pos1.grossProfit) * alpha) / 100;
      const z = (pos1.netProfit + (pos2.netProfit - pos1.netProfit) * alpha) / 100;
      
      const width = index === 0 ? 1 : 2;
      const waveHeight = 0.5;
      const frequency = 2;
      const offset = Math.sin(u * Math.PI * frequency) * waveHeight;
      
      target.set(
        x + Math.cos(u * Math.PI * 2) * width,
        y + offset,
        z
      );
    };

    const geometry = new THREE.ParametricGeometry(generateSurface, 50, 50);
    const material = new THREE.MeshPhongMaterial({ 
      color: color,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    
    const surface = new THREE.Mesh(geometry, material);
    scene.add(surface);

    // Add small spheres for data points
    positions.forEach((pos) => {
      const sphereGeometry = new THREE.SphereGeometry(0.15);
      const sphereMaterial = new THREE.MeshPhongMaterial({ color: pos.color });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        pos.sales / 100,
        pos.grossProfit / 100,
        pos.netProfit / 100
      );
      scene.add(sphere);
    });
  });
};
