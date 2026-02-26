import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isLiteMode, setIsLiteMode] = React.useState(false);

  useEffect(() => {
    const handleLiteModeCheck = () => {
      const isMobile = window.innerWidth < 768;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsLiteMode(isMobile || reduceMotion);
    };

    handleLiteModeCheck();
    window.addEventListener('resize', handleLiteModeCheck);
    return () => window.removeEventListener('resize', handleLiteModeCheck);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || isLiteMode) return;

    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 8);

    const geo = new THREE.PlaneGeometry(12, 8, 80, 60);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x9fa3ad,
      roughness: 0.85,
      metalness: 0.15,
      transparent: true,
      opacity: 0.35
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -0.12;
    scene.add(mesh);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.65);
    directionalLight.position.set(3, 2, 6);
    scene.add(directionalLight);

    let mx = 0, my = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const pos = geo.attributes.position;
    const base = new Float32Array(pos.array);

    let t = 0;
    let animationFrameId: number;

    const animate = () => {
      t += 0.008;

      for (let i = 0; i < pos.count; i++) {
        const ix = i * 3;
        const x = base[ix + 0];
        const y = base[ix + 1];

        const wave =
          Math.sin(t + x * 0.55) * 0.06 +
          Math.cos(t * 0.9 + y * 0.65) * 0.05;

        pos.array[ix + 2] = wave;
      }

      pos.needsUpdate = true;
      geo.computeVertexNormals();

      mesh.rotation.y = mx * 0.08;
      mesh.rotation.x = -0.12 + my * 0.04;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
    };
  }, [isLiteMode]);

  if (isLiteMode) {
    return (
      <div 
        className="fixed inset-0 w-full h-full z-0 opacity-40 pointer-events-none bg-gradient-to-tr from-[#0b0c0f] via-[#1a1b23] to-[#252836]"
        aria-hidden="true"
      />
    );
  }

  return (
    <canvas 
      ref={canvasRef} 
      id="bg3d" 
      className="fixed inset-0 w-full h-full z-0 opacity-[0.38] pointer-events-none"
      aria-hidden="true" 
    />
  );
};
