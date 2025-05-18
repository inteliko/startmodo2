
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface LocationPoint {
  name: string;
  latitude: number;
  longitude: number;
}

const NetworkGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Major cities/regions around the world with more coverage in key regions
  const locations: LocationPoint[] = [
    // North America
    { name: 'New York', latitude: 40.7128, longitude: -74.0060 },
    { name: 'San Francisco', latitude: 37.7749, longitude: -122.4194 },
    { name: 'Toronto', latitude: 43.6532, longitude: -79.3832 },
    { name: 'Mexico City', latitude: 19.4326, longitude: -99.1332 },
    { name: 'Chicago', latitude: 41.8781, longitude: -87.6298 },
    
    // Europe
    { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Berlin', latitude: 52.5200, longitude: 13.4050 },
    { name: 'Paris', latitude: 48.8566, longitude: 2.3522 },
    { name: 'Rome', latitude: 41.9028, longitude: 12.4964 },
    { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
    { name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041 },
    
    // Asia
    { name: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
    { name: 'Singapore', latitude: 1.3521, longitude: 103.8198 },
    { name: 'Mumbai', latitude: 19.0760, longitude: 72.8777 },
    { name: 'Dhaka', latitude: 23.8103, longitude: 90.4125 },
    { name: 'Beijing', latitude: 39.9042, longitude: 116.4074 },
    { name: 'Seoul', latitude: 37.5665, longitude: 126.9780 },
    
    // Australia & Oceania
    { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    { name: 'Melbourne', latitude: -37.8136, longitude: 144.9631 },
    { name: 'Auckland', latitude: -36.8509, longitude: 174.7645 },
    
    // Africa
    { name: 'Cairo', latitude: 30.0444, longitude: 31.2357 },
    { name: 'Lagos', latitude: 6.5244, longitude: 3.3792 },
    { name: 'Cape Town', latitude: -33.9249, longitude: 18.4241 },
    
    // South America
    { name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
    { name: 'São Paulo', latitude: -23.5558, longitude: -46.6396 },
    { name: 'Buenos Aires', latitude: -34.6037, longitude: -58.3816 }
  ];

  useEffect(() => {
    // Intersection Observer to load the globe only when it's in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup with wider field of view for better visibility
    const camera = new THREE.PerspectiveCamera(
      70, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 200;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Globe geometry with more segments for better detail
    const globeRadius = 100;
    const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
    const globeMaterial = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.3  // More visible
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    
    // Add connection lines and points
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);
    
    // Point material - brighter green for better visibility
    const pointMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      transparent: true,
      opacity: 0.8
    });
    
    const points: THREE.Mesh[] = [];
    
    // Create points for each location
    locations.forEach((location) => {
      const point = createPointAtLocation(location, globeRadius, pointMaterial);
      points.push(point);
      networkGroup.add(point);
    });
    
    // Connect points with lines - more connections for denser network
    for (let i = 0; i < points.length; i++) {
      // Connect to 3-5 other points (varied)
      const connectionsCount = Math.floor(Math.random() * 3) + 3;
      
      for (let c = 0; c < connectionsCount; c++) {
        // Select a random point to connect to
        const j = Math.floor(Math.random() * points.length);
        if (i === j) continue; // Don't connect to self
        
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x00ff88,
          transparent: true,
          opacity: 0.2
        });
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          points[i].position,
          points[j].position
        ]);
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        networkGroup.add(line);
      }
    }
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate globe slowly
      globe.rotation.y += 0.001;
      networkGroup.rotation.y += 0.001;
      
      // Pulse effect for points
      const time = Date.now() * 0.001;
      points.forEach((point, index) => {
        // Different phase for each point
        const phase = index * 0.2;
        point.scale.setScalar(1 + 0.15 * Math.sin(time + phase));
        
        // Color variation with brighter glow
        const hue = (0.3 + 0.1 * Math.sin(time + phase)) % 1;
        (point.material as THREE.MeshBasicMaterial).color.setHSL(hue, 1, 0.6);
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);
  
  // Make the container taller to fill the footer section
  return <div ref={containerRef} className="w-full h-full absolute inset-0" />;
};

// Helper function to convert lat/long to 3D coordinates
function createPointAtLocation(location: LocationPoint, radius: number, material: THREE.Material): THREE.Mesh {
  const phi = (90 - location.latitude) * (Math.PI / 180);
  const theta = (location.longitude + 180) * (Math.PI / 180);
  
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  
  // Larger points for better visibility
  const pointGeometry = new THREE.SphereGeometry(2, 16, 16);
  const point = new THREE.Mesh(pointGeometry, material.clone());
  
  point.position.set(x, y, z);
  
  return point;
}

export default NetworkGlobe;
