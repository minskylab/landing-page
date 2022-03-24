import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef, ReactElement } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
  useAspect,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { Mesh } from "three";

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function BlobOfLife({}) {
  const sphere = useRef<Mesh>(null!);
  const light = useRef<Mesh>();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  const size = useAspect(1800, 1000);

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/MinskyAutomata.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    // video.autoplay = true;
    return vid;
  });

  useEffect(() => void video.play(), [video]);

  // Change cursor on hovered state
  // useEffect(() => {
  //   document.body.style.cursor = hovered
  //     ? 'none'
  //     : `url('data:image/svg+xml;base64,${btoa(
  //         '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
  //       )}'), auto`
  // }, [hovered])

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame(state => {
    if (light?.current) {
      light.current.position.x = state.mouse.x * 20;
      light.current.position.y = state.mouse.y * 20;
    }

    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 2.4 : hovered ? 2.4 : 2,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: "#FB8857", // hovered ? '#E8B059' : mode ? '#202020' : 'white',
      // config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75}>
        {/* @ts-ignore-line */}
        <a.ambientLight intensity={ambient} />
        <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            // setBg({
            //   background: !mode ? "#202020" : "#f0f0f0",
            //   fill: !mode ? "#f0f0f0" : "#202020",
            // });
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={0.01}
            clearcoatRoughness={0}
            metalness={0.1}
            toneMapped={false}
          >
            <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
          </AnimatedMaterial>
        </a.mesh>
        <Environment preset="warehouse" />
        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}
