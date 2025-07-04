"use client"
import * as THREE from 'three';

import {motion, useScroll, useTransform} from 'framer-motion'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import React, { useEffect, useRef, useState } from 'react';

import type {
  PerspectiveCamera,
  Scene,  
  WebGLRenderer,
  Clock,
  Texture,
  Mesh,
  SphereGeometry,
  DirectionalLight
} from 'three';


import {
  MeshStandardMaterial,
  MeshBasicMaterial
} from 'three'
import { useDarkMode } from '../context/DarkModeContext';

interface EarthProps {
  width?: number;
  height?: number;
  className?:string;
}

export const Earth: React.FC<EarthProps> = ({ width, height, className }) => {
  const ref=useRef<HTMLDivElement>(null)
      const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","end start"]
      })
      const {dark}=useDarkMode()
      const x=useTransform(scrollYProgress,[0,1],[-100,1000])
      const y=useTransform(scrollYProgress,[0,1],[0,100])
      const scale=useTransform(scrollYProgress,[0,1],[1.25,0.3])
  const [size, setSize] = React.useState({ width: width ?? 400, height: height ?? 400 });
  const [mounted, setMounted] = React.useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [color,setColor]=useState<string>("#ffffff");

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (width == null && height == null) {
      setSize({ width: window.innerWidth, height: window.innerHeight });  
    }
  }, [width, height]);

  useEffect(() => {
    if(dark){
      setColor("#ffffff")
    }else{
      setColor("#000000")
    }
    if (!mounted || !containerRef.current) return;
    let camera: PerspectiveCamera;
    let scene: Scene;
    let renderer: WebGLRenderer;
    let controls: OrbitControls;
    let globe: Mesh;
    let clouds: Mesh;
    let clock: Clock;

    function init(container: HTMLDivElement) {
      clock = new THREE.Clock();
      camera = new THREE.PerspectiveCamera(25, size.width / size.height, 0.1, 100);
      camera.position.set(4.5, 2, 3);

      scene = new THREE.Scene();
      scene.background = new THREE.Color(`${color}`); 
      const sun: DirectionalLight = new THREE.DirectionalLight('#ffffff', 20);
      sun.position.set(-5, 1, 3);
      scene.add(sun);

      const textureLoader = new THREE.TextureLoader();
      const dayTexture: Texture = textureLoader.load('./textures/planets/earth_day_4096.jpg');
      dayTexture.colorSpace = THREE.SRGBColorSpace;
      dayTexture.anisotropy = 8;

      const nightTexture: Texture = textureLoader.load('./textures/planets/earth_night_4096.jpg');
      nightTexture.colorSpace = THREE.SRGBColorSpace;
      nightTexture.anisotropy = 8;

      const bumpTexture: Texture = textureLoader.load('./textures/planets/earth_bump_4096.jpg');
      bumpTexture.anisotropy = 8;

      const cloudTexture: Texture = textureLoader.load('./textures/planets/earth_clouds_4096.jpg');
      cloudTexture.anisotropy = 8;
      cloudTexture.colorSpace = THREE.SRGBColorSpace;

      // Globe material with day, night, and bump
      const globeMaterial = new MeshStandardMaterial({
        map: dayTexture,
        emissiveMap: nightTexture,
        emissive: new THREE.Color(0xffffff),
        emissiveIntensity: 10,
        bumpMap: bumpTexture,
        bumpScale: 0.05,
        roughness: 0.3,
        metalness: 0.0
      });

      const sphereGeometry: SphereGeometry = new THREE.SphereGeometry(1, 64, 64);
      globe = new THREE.Mesh(sphereGeometry, globeMaterial);
      scene.add(globe);

      // Clouds: slightly larger transparent sphere
      const cloudMaterial = new THREE.MeshPhongMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
      });
      clouds = new THREE.Mesh(new THREE.SphereGeometry(1.01, 64, 64), cloudMaterial);
      scene.add(clouds);

      // Atmosphere (optional, as before)
      const atmosphereMaterial = new MeshBasicMaterial({ side: THREE.BackSide, transparent: true });
      atmosphereMaterial.color = new THREE.Color('#023e8a');
      atmosphereMaterial.opacity = 0.4;
      const atmosphere = new THREE.Mesh(sphereGeometry, atmosphereMaterial);
      atmosphere.scale.setScalar(1.032);
      scene.add(atmosphere);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(size.width, size.height);
      renderer.setAnimationLoop(animate);
      container.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.minDistance = 0.1;
      controls.maxDistance = 50;
      controls.enableZoom = false; // (default is true)

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    }

    function animate() {
      const delta = clock.getDelta();
      globe.rotation.y += delta * 0.025;
      if (clouds) clouds.rotation.y += delta * 0.03;
      controls.update();
      renderer.render(scene, camera);
    }

    if (containerRef.current) init(containerRef.current);

    // Cleanup function to remove renderer and event listeners
    return () => {
      if (renderer) {
        renderer.setAnimationLoop(null);
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
        renderer.dispose();
      }
      window.removeEventListener('resize', onWindowResize);
    };
  }, [mounted, size.width, size.height,color,dark]);

  if (!mounted) return null;

  const initialRotate = mounted ? Math.random() * 10 : 0;

  return (
    <motion.div
      ref={containerRef }
      style={{ width:"100%", height:height,x,y,scale }}
      className={`max-w-full max-h-full overflow-hidden  ${className}`}
      initial={{ opacity: 0, rotate: initialRotate }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1.5 }}
    />
  );
};