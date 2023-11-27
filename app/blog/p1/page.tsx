"use client";
import React from "react";
import styles from "./p1.module.css";
import Link from "next/link";
import { CopyBlock, dracula } from "react-code-blocks";

export default function Post1() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          src="https://placekitten.com/800/400"
          alt="Blog Post Image"
          className={styles.image}
        />
        <h1 className={styles.title}>Creating ThreeJS Apps With React</h1>
        <p className={styles.date}>Published on October 30, 2023</p>
        <div className={styles.content}>
          <p>
            Building immersive 3D web applications has become easier with the
            integration of React, JSX, and Three.js. Let's dive into creating a
            basic Three.js scene within a React app.
          </p>
          <br />
          <p>
            Start by setting up your React app and installing the Three.js
            library:
          </p>
          <br />
          <CopyBlock
            language="jsx"
            text={`
              npx create-react-app my-threejs-app 
              cd my-threejs-app 
              npm install three@latest
            `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <br />
          <p>
            Create a new component, <code>ThreeScene.js</code>, to contain your
            Three.js scene logic. We will pass this to the root to be rendered.
            I will provide the native Three JS approach first, and then{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/pmndrs/react-three-fiber"
            >
              React Three Fiber
            </a>{" "}
            JSX.
          </p>
          <br />
          <CopyBlock
            language="jsx"
            text={`
            // ThreeScene.js
            import * as THREE from 'three';

            const ThreeScene: React.FC = () => {
                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
                const renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                // Assuming sceneRef is declared somewhere
                // sceneRef.current.appendChild(renderer.domElement);

                // Add a cube to the scene
                const geometry = new THREE.BoxGeometry();
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
                const cube = new THREE.Mesh(geometry, material);
                scene.add(cube);

                // Position the camera
                camera.position.z = 5;

                // Animation loop
                const animate = () => {
                  requestAnimationFrame(animate);

                  // Rotate the cube
                  cube.rotation.x += 0.01;
                  cube.rotation.y += 0.01;

                  renderer.render(scene, camera);
                };

                animate();
                
                return <div ref={/* ref to be assigned */} />;
            };

            export default ThreeScene;
            `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          {/* Assuming sceneRef is declared somewhere */}
          <br />
          <p>
            Now, the React Three Fiber approach. Here we are using helper
            functions for interaction and <code>requestAnimationFrame()</code>{" "}
            from PMNDRS Dev Collective - <code>@react-three/fiber</code>. The
            R3F ecosystem offers remarkably convenient hooks for various tasks,
            including physics, shadows, selective rendering, and HDR support —
            all essential elements for a high-performing 3D application. The app
            is then rendered at the root or passed into <code>App.js</code>.
          </p>
          <br />
          <CopyBlock
            language="jsx"
            text={`
            // PMNDRS + Paul Henschel, App.jsx
            import { useRef, useState } from 'react'
            import { Canvas, useFrame } from '@react-three/fiber'
            import { OrbitControls } from '@react-three/drei'

            function Box(props) {
              // This reference gives us direct access to the THREE.Mesh object
              const ref = useRef()
              // Hold state for hovered and clicked events
              const [hovered, hover] = useState(false)
              const [clicked, click] = useState(false)
              // Subscribe this component to the render-loop, rotate the mesh every frame
              useFrame((state, delta) => (ref.current.rotation.x += delta))
              // Return the view, these are regular Threejs elements expressed in JSX
              return (
                <mesh
                  {...props}
                  ref={ref}
                  scale={clicked ? 1.5 : 1}
                  onClick={(event) => click(!clicked)}
                  onPointerOver={(event) => (event.stopPropagation(), hover(true))}
                  onPointerOut={(event) => hover(false)}>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
                </mesh>
              )
            }

            const App: React.FC = () => {
              return (
                <Canvas>
                  <ambientLight intensity={Math.PI / 2} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                  <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                  <Box position={[-1.2, 0, 0]} />
                  <Box position={[1.2, 0, 0]} />
                  <OrbitControls />
                </Canvas>
              )
            }

            export default App;
            `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <br />
          <p>
            Finally, embed your <code>ThreeScene</code> component in your main
            application, or render it at the root:
          </p>
          <br />
          <CopyBlock
            language="jsx"
            text={`
            // App.js
            import React from 'react';
            import ThreeScene from './ThreeScene';

            const App: React.FC = () => {
              return (
                <div className="App">
                  <header className="App-header">
                    <h1>My Three.js App</h1>
                  </header>
                  <main>
                    <ThreeScene />
                  </main>
                </div>
              );
            }

            export default App;
            `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <br />
          <CopyBlock
            language="jsx"
            text={`
            import { createRoot } from 'react-dom/client'
            import './styles.css'
            import App from './App'

            createRoot(document.getElementById('root')).render(<App />)
            `}
            codeBlock
            theme={dracula}
            showLineNumbers={false}
          />
          <br />
          <p>
            Personally, I recommend using the{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://github.com/pmndrs"
            >
              PMNDRS
            </a>{" "}
            R3F + JSX approach for readability and performance. It behaves
            really well when you fully understand how the browser repaints, how
            React's component tree updates, and how Three JS properties interact
            with the rendering context is essential for updating the scene,
            camera, and other elements. How you want to add features to your app
            is up to you, but I prefer to scope essential features as
            Higher-order Components (HOCs), 're-usables' as Stateless Functional
            Components, and use Pure Components for components that need finer
            control over when to re-render. Once you're finished scoping your
            components, Customize the styling of your app using CSS, and when
            you're ready, use <code>npm run build</code> to generate the files
            needed to deploy on hosting providers like Github Pages.
          </p>
        </div>
      </div>
      <div className={styles.backButton}>
        <Link href="/blog">Back to Blog</Link>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 NSP Blog</p>
      </footer>
    </div>
  );
}
