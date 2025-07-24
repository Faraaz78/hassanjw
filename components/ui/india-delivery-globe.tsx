"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const IndiaDeliveryGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // Indian delivery locations with coordinates
  const deliveryLocations = [
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
    { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
    { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
    { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
    { name: 'Kochi', lat: 9.9312, lng: 76.2673 },
    { name: 'Mysore', lat: 12.2958, lng: 76.6394 },
    { name: 'Srinagar', lat: 34.0837, lng: 74.7973 },
    { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714 },
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Kolkata', lat: 22.5726, lng: 88.3639 },
    { name: 'Pune', lat: 18.5204, lng: 73.8567 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Lucknow', lat: 26.8467, lng: 80.9462 },
    { name: 'Kanpur', lat: 26.4499, lng: 80.3319 },
    { name: 'Nagpur', lat: 21.1458, lng: 79.0882 },
    { name: 'Indore', lat: 22.7196, lng: 75.8577 }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000011);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      40,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 6);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create Earth sphere
    const earthGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x1a1a2e,
      shininess: 10,
      transparent: true,
      opacity: 0.9
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    // Add continent wireframe
    const wireframeGeometry = new THREE.SphereGeometry(1.52, 32, 32);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 1000;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2,
      transparent: true,
      opacity: 0.8
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Function to convert lat/lng to 3D coordinates
    const latLngToVector3 = (lat: number, lng: number, radius = 1.53) => {
      const phi = (lat * Math.PI) / 180; // Convert to radians
      const theta = ((lng - 180) * Math.PI) / 180; // Convert to radians, adjust for Three.js coordinate system

      const x = radius * Math.cos(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.sin(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Create marker and label groups
    const markerGroup = new THREE.Group();
    scene.add(markerGroup);

    // Create markers and labels
    deliveryLocations.forEach((location, index) => {
      const position = latLngToVector3(location.lat, location.lng);

      // Create marker pin (elongated sphere)
      const markerGeometry = new THREE.SphereGeometry(0.025, 8, 8);
      const markerMaterial = new THREE.MeshBasicMaterial({
        color: 0xff3333,
        transparent: true,
        opacity: 1
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(position);
      markerGroup.add(marker);

      // Create pin stick
      const stickGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.1);
      const stickMaterial = new THREE.MeshBasicMaterial({ color: 0xff3333 });
      const stick = new THREE.Mesh(stickGeometry, stickMaterial);
      const stickPosition = position.clone().multiplyScalar(1.05);
      stick.position.copy(stickPosition);
      stick.lookAt(0, 0, 0);
      markerGroup.add(stick);

      // Create glow effect
      const glowGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.3
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      glow.position.copy(position);
      markerGroup.add(glow);

      // Create text label using HTML canvas
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      if (context) {
        canvas.width = 256;
        canvas.height = 64;

        context.fillStyle = 'rgba(0, 0, 0, 0.8)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = 'white';
        context.font = 'bold 20px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(location.name, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.CanvasTexture(canvas);
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 0
        });

        const labelGeometry = new THREE.PlaneGeometry(0.4, 0.1);
        const label = new THREE.Mesh(labelGeometry, labelMaterial);

        const labelPosition = position.clone().multiplyScalar(1.2);
        label.position.copy(labelPosition);
        label.lookAt(camera.position);
        markerGroup.add(label);

        // Store references for animation
        (glow as any).userData = {
          originalOpacity: 0.3,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          marker: marker,
          label: label,
          labelMaterial: labelMaterial
        };
      }
    });

    // Animation control variables
    let animationPhase = 'spinning'; // 'spinning', 'positioning', 'stopped'
    let spinTime = 0;
    let positionTime = 0;
    const spinDuration = 2000; // 2 seconds of spinning
    const positionDuration = 1500; // 1.5 seconds to position to India

    // Calculate target rotation to center India facing the camera
    const indiaLat = 20.5937; // Geographic center of India
    const indiaLng = 78.9629;

    // Fixed rotation calculations to make India face the camera
    const targetRotationY = -(indiaLng * Math.PI / 180) +5.1; // Add π to flip to face camera
    const targetRotationX = (indiaLat * Math.PI / 180) +6.1; // Positive to tilt correctly

    let startRotationY = 0;
    let startRotationX = 0;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const currentTime = Date.now();

      if (animationPhase === 'spinning') {
        // Fast spinning phase
        earth.rotation.y += 0.02;
        earth.rotation.x += 0.005;

        spinTime += 16; // Approximate frame time
        if (spinTime >= spinDuration) {
          animationPhase = 'positioning';
          positionTime = 0;
          // Store the current rotation as starting point
          startRotationY = earth.rotation.y;
          startRotationX = earth.rotation.x;
        }
      } else if (animationPhase === 'positioning') {
        // Smooth transition to India facing the camera
        positionTime += 16;
        const progress = Math.min(positionTime / positionDuration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        // Interpolate from current position to target position
        earth.rotation.y = startRotationY + (targetRotationY - startRotationY) * easeProgress;
        earth.rotation.x = startRotationX + (targetRotationX - startRotationX) * easeProgress;

        if (progress >= 1) {
          animationPhase = 'stopped';
          // Lock the rotation to India position
          earth.rotation.y = targetRotationY;
          earth.rotation.x = targetRotationX;

          // Show labels with fade-in effect
          markerGroup.children.forEach((child) => {
            if ((child as any).userData && (child as any).userData.labelMaterial) {
              (child as any).userData.showLabel = true;
              (child as any).userData.labelFadeTime = 0;
            }
          });
        }
      } else if (animationPhase === 'stopped') {
        // Globe is stopped, showing India facing the camera
        // Keep the globe completely stationary
        
        // Fade in labels
        markerGroup.children.forEach((child) => {
          if ((child as any).userData && (child as any).userData.showLabel) {
            (child as any).userData.labelFadeTime = Math.min((child as any).userData.labelFadeTime + 16, 1000);
            const labelOpacity = Math.min((child as any).userData.labelFadeTime / 1000, 1);
            (child as any).userData.labelMaterial.opacity = labelOpacity;

            // Update label orientation to face camera
            if ((child as any).userData.label) {
              (child as any).userData.label.lookAt(camera.position);
            }
          }
        });
      }

      // Sync wireframe and markers with earth
      wireframe.rotation.copy(earth.rotation);
      markerGroup.rotation.copy(earth.rotation);

      // Animate marker glows
      markerGroup.children.forEach((child) => {
        if ((child as any).userData && (child as any).userData.originalOpacity !== undefined) {
          const time = Date.now() * (child as any).userData.pulseSpeed;
          const opacity = (child as any).userData.originalOpacity + Math.sin(time) * 0.2;
          (child as any).material.opacity = Math.max(0.1, opacity);

          const scale = 1 + Math.sin(time * 1.5) * 0.1;
          child.scale.setScalar(scale);
        }
      });

      // Rotate stars slowly
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (containerRef.current && camera && renderer) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden rounded-xl">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
};

export default IndiaDeliveryGlobe;