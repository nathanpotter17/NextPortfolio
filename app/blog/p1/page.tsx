"use client";
import React from "react";
import styles from "./p1.module.css";
import Link from "next/link";

export default function Post1() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img
          src="/serenity2.png"
          alt="Blog Post Image"
          className={styles.image}
        />
        <h1 className={styles.title}>Creating ThreeJS Apps With React</h1>
        <p className={styles.date}>Published on October 30, 2023</p>
        <div className={styles.content}>
          <p>
            Building immersive 3D web applications has become easier with the
            help of Three.js. In this post, we'll focus on the powerful
            capabilities of React Three Fiber for creating 3D scenes within a
            React app.
          </p>
          <br />
          <p>
            Start by setting up your React app and installing the React Three
            Fiber library, this will default to rendering you app contents at
            the root, which will need to change to <code>{"<ThreeScene>"}</code>
            . This approach can be adapted for Typescript.
          </p>
          <br />
          <pre>
            <code>
              npx create-react-app my-threejs-app cd my-threejs-app npm install
              @react-three/fiber@latest
            </code>
          </pre>
          <br />
          <p>
            Create a new component, <code>ThreeScene.jsx</code>, to contain your
            3D scene logic using React Three Fiber.
          </p>
          <br />
          <pre>
            <code>
              {`// ThreeScene.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState, useRef } from 'react';

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += delta));

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
  );
}

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;`}
            </code>
          </pre>
          <br />
          <p>
            To maximize readability, consider using the React Three Fiber
            approach. If you're concerned striclty about performance, consider
            plain ThreeJS with React or SolidJS. Understanding how the browser
            repaints, how React's component tree updates, and how React Three
            Fiber properties interact with the rendering context is essential
            for creating high-performing 3D applications. As you design your
            app, consider scoping essential features as Higher-order Components
            (HOCs), declaring 're-usables' as Stateless Functional Components,
            and implementing Pure Components for components that require finer
            control over re-rendering. Once your components are scoped,
            customize the styling of your app using CSS, and when ready, use{" "}
            <code>npm run build</code> to generate the necessary files for
            deployment on hosting providers like Github Pages.
          </p>
        </div>
      </div>
      <br />
      <a
        style={{ textDecoration: "underline", color: "#acacac50" }}
        href="https://github.com/pmndrs/react-three-fiber"
      >
        Source: React Three Fiber
      </a>
      <div className={styles.backButton}>
        <Link href="/blog">Back to Blog</Link>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2023 NSP Blog</p>
      </footer>
    </div>
  );
}
