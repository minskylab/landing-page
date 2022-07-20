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
import { Mesh, RepeatWrapping } from "three";

const AnimatedMaterial = a(MeshDistortMaterial);

type LivingIdeaBlobProps = {
  videoSrc: string;
  onTap?: () => void;
  tapCountToOverflow?: number;
};

const LivingIdeaBlob = ({ onTap, videoSrc, tapCountToOverflow = 2 }: LivingIdeaBlobProps) => {
  const sphere = useRef<Mesh>(null!);
  const light = useRef<Mesh>();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);

  const [tapCount, setTapCount] = useState(0);

  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = videoSrc;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    // video.autoplay = true;
    return vid;
  });

  useEffect(() => void video.play(), [video]);

  useEffect(() => {
    if (tapCount > tapCountToOverflow) {
      setTapCount(0);
      onTap?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tapCount, tapCountToOverflow]);

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

  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 2.8 : hovered ? 2.8 : 2.5,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: "#FB8857", // #202020' 'white'
      config: {
        mass: 1,
        tension: 100,
        friction: 8,
      },
      // config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
    },
    [mode, hovered, down]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75}>
        {/* @ts-ignore-line */}
        <a.ambientLight intensity={ambient} />
        {/* Change intensity value if you don't use enviorments or lights */}
        {/* <a.directionalLight position={[10, 10, 5]} intensity={3.5} /> */}
        {/* <a.pointLight intensity={3.5} position={[0, -10, 5]} /> */}
        {/* <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" /> */}
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          // ref={sphere}
          scale={wobble}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            setMode(!mode);
            setTapCount(tapCount + 1);
          }}
        >
          {/* ------------------------ Code lines for try new ways to render ------------------------------- */}
          {/* <Environment preset="studio" /> */}
          <a.directionalLight position={[10, 10, 5]} intensity={1} />
          <a.pointLight intensity={1} position={[0, -10, 5]} />
          {/* ------------------------ Code lines for try new ways to render ------------------------------- */}

          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={0.005}
            // clearcoatRoughness={0}
            metalness={0.001}
            toneMapped={false}
            distort={0.4}
            speed={1.3}
            factor={1}
            roughness={0}
            // wireframe={false}
          >
            <videoTexture
              attach="map"
              args={[video]}
              encoding={THREE.sRGBEncoding}
              magFilter={THREE.NearestFilter}
              minFilter={THREE.NearestFilter}
              wrapS={THREE.RepeatWrapping}
              wrapT={THREE.RepeatWrapping}
              anisotropy={2048}
            />
            {/* <videoTexture attach="emissiveMap" args={[video]} /> */}
          </AnimatedMaterial>
        </a.mesh>

        {/* <Environment files="studio_small_08_1k.hdr" /> */}
        {/* <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        /> */}
      </Suspense>
    </>
  );
};

export default LivingIdeaBlob;
