
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

    // Grid helper
    const gridHelper = new THREE.GridHelper(20, 20, '#8E9196', '#C8C8C9');
    scene.add(gridHelper);

    // Axes
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    // Add floating axis labels
    const createAxisLabel = (text: string, position: THREE.Vector3) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = '#000000'; // Changed to black
        context.font = 'bold 64px Arial'; // Increased font size for better visibility
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 128, 64);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(5, 2.5, 1); // Increased scale for better visibility
        scene.add(sprite);
      }
    };

    // Add axis labels with positions adjusted for better visibility
    createAxisLabel('Sales', new THREE.Vector3(11, 0, 0));
    createAxisLabel('Gross Profit', new THREE.Vector3(0, 11, 0));
    createAxisLabel('Net Profit', new THREE.Vector3(0, 0, 11));

    // Add current business position markers
    positions.forEach((pos) => {
      const geometry = new THREE.SphereGeometry(0.3);
      const material = new THREE.MeshPhongMaterial({ color: pos.color });
      const sphere = new THREE.Mesh(geometry, material);
      
      // Scale positions to fit in the visible area
      sphere.position.set(
        pos.sales / 100,
        pos.grossProfit / 100,
        pos.netProfit / 100
      );
      
      scene.add(sphere);

      // Add label
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        context.font = '48px Arial';
        context.fillStyle = '#000000'; // Changed to black
        context.fillText(pos.year, 0, 48);
        
        const texture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(labelMaterial);
        sprite.position.set(
          sphere.position.x + 0.5,
          sphere.position.y + 0.5,
          sphere.position.z
        );
        sprite.scale.set(2, 1, 1);
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
