import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
const Viewer3D = () => {
    const containerRef = useRef();

    useEffect(() => {
        // Création de la scène
        const scene = new THREE.Scene();

        // Création de la caméra
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Création du renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Chargement des matériaux
        const mtlLoader = new MTLLoader();
        mtlLoader.load('../../../public/avatars/Coupe PLAN.mtl', (materials) => {
            materials.preload();

            // Chargement du modèle .obj avec les matériaux
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('../../../public/avatars/Coupe PLAN.obj', (object) => {
                scene.add(object);
                animate();
            });
        });

        
        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // Gestion des redimensionnements de fenêtre
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });

        return () => {
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} />;
};

export default Viewer3D;
