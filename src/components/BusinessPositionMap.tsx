import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

interface Position {
  year: string;
  sales: number;
  grossProfit: number;
  netProfit: number;
  color: string;
  isCurrent?: boolean;
}

interface ComparativeBusiness {
  name: string;
  positions: Position[];
}

interface BusinessPositionMapProps {
  positions: Position[];
  comparativeBusinesses: ComparativeBusiness[];
}

const BusinessPositionMap = ({ positions, comparativeBusinesses }: BusinessPositionMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#F1F0FB');

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 15, 15);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Create a custom grid that shows negative values only for z-axis (net profit)
    const gridSize = 30;
    const divisions = 30;
    const gridGeometry = new THREE.BufferGeometry();
    const gridMaterial = new THREE.LineBasicMaterial({ color: '#C8C8C9' });
    
    const vertices = [];
    
    // Create vertical lines (parallel to z-axis)
    for (let i = 0; i <= gridSize; i++) {
      vertices.push(i, 0, -gridSize/2); // Start from negative z
      vertices.push(i, 0, gridSize/2);  // End at positive z
    }
    
    // Create horizontal lines (parallel to x-axis)
    for (let i = -gridSize/2; i <= gridSize/2; i++) { // Allow negative z values
      vertices.push(0, 0, i);
      vertices.push(gridSize, 0, i);
    }
    
    gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const grid = new THREE.LineSegments(gridGeometry, gridMaterial);
    scene.add(grid);

    // Axes
    const axesHelper = new THREE.AxesHelper(15);
    scene.add(axesHelper);

    // Add floating axis labels with numbers
    const createAxisLabel = (text: string, position: THREE.Vector3) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = '#000000';
        context.font = '32px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 128, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(4, 2, 1);
        scene.add(sprite);
      }
    };

    // Add numeric labels along axes
    const addNumericLabel = (value: number, position: THREE.Vector3) => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = '#000000';
        context.font = '24px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(value.toString(), 64, 32);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(2, 1, 1);
        scene.add(sprite);
      }
    };

    // Add axis labels with positions adjusted for better visibility
    createAxisLabel('Sales', new THREE.Vector3(16, 0, 0));
    createAxisLabel('Gross Profit', new THREE.Vector3(0, 16, 0));
    createAxisLabel('Net Profit', new THREE.Vector3(0, 0, 16));

    // Add numeric labels along axes (every 500 units)
    for (let i = 5; i <= 25; i += 5) {
      addNumericLabel(i * 100, new THREE.Vector3(i, -0.5, 0)); // Sales axis
      addNumericLabel(i * 100, new THREE.Vector3(0, i, -0.5)); // Gross Profit axis
    }

    // Add negative and positive labels for net profit axis
    for (let i = -15; i <= 25; i += 5) {
      if (i !== 0) { // Skip zero to avoid duplicate label
        addNumericLabel(i * 100, new THREE.Vector3(-0.5, 0, i));
      }
    }

    // Add current business position markers with consistent bright orange color
    positions.forEach((pos) => {
      const geometry = new THREE.SphereGeometry(0.4); // Slightly larger spheres
      const material = new THREE.MeshPhongMaterial({ 
        color: '#F97316', // Bright orange for all company markers
        emissive: '#F97316',
        emissiveIntensity: 0.2 // Add slight glow
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      sphere.position.set(
        pos.sales / 100,
        pos.grossProfit / 100,
        pos.netProfit / 100
      );
      
      scene.add(sphere);

      // Add year label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        context.font = '24px Arial';
        context.fillStyle = '#000000';
        context.fillText(pos.year, 0, 24);
        
        const texture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(labelMaterial);
        sprite.position.set(
          sphere.position.x + 0.5,
          sphere.position.y + 0.5,
          sphere.position.z
        );
        sprite.scale.set(1.5, 0.75, 1);
        scene.add(sprite);
      }
    });

    // Add comparative business trajectories
    comparativeBusinesses.forEach((business) => {
      // Create line geometry for trajectory
      const points = business.positions.map(pos => 
        new THREE.Vector3(pos.sales / 100, pos.grossProfit / 100, pos.netProfit / 100)
      );
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: business.positions[0].color });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);

      // Add smaller spheres for each point in trajectory
      business.positions.forEach((pos) => {
        const geometry = new THREE.SphereGeometry(0.15);
        const material = new THREE.MeshPhongMaterial({ color: pos.color });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(
          pos.sales / 100,
          pos.grossProfit / 100,
          pos.netProfit / 100
        );
        scene.add(sphere);
      });
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [positions, comparativeBusinesses]);

  return <div ref={containerRef} className="w-full h-[600px] rounded-lg shadow-lg" />;
};

export default BusinessPositionMap;
