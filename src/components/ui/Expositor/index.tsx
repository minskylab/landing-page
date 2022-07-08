import { useNotifications } from "@mantine/notifications";
import { Anchor } from "@mantine/core";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LivingIdeaBlob from "components/future/LivingBlob";
import React from "react";
import { Bulb } from "tabler-icons-react";

// const AVAILABLE_CA = [132, 133, 142, 244, 262, 263, 264, 271].map(
//   num => `/MinskyVideo${num}WithOpacity.mp4`
// );

const AVAILABLE_CA = [244, 1000].map(num => `/MinskyVideo${num}WithOpacity.mp4`);

const randomBlobVideoSrc = (): string => {
  return AVAILABLE_CA[~~(Math.random() * AVAILABLE_CA.length)];
};

export default function MinskyExpositor() {
  const notifications = useNotifications();

  return (
    <Canvas dpr={[1, 2]} style={{ maxHeight: 520, height: "40vh" }}>
      <LivingIdeaBlob
        videoSrc={randomBlobVideoSrc()} // "/MinskyVideo244WithOpacity.mp4"
        onTap={() => {
          // notifications.cleanQueue();
          notifications.clean();
          setTimeout(
            () =>
              notifications.showNotification({
                title: "What is that?",
                // autoClose: false,
                message: (
                  <div>
                    I represent an <b>idea</b>, a mental object. If you want to know more about me,
                    you can{" "}
                    <Anchor href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" size="sm">
                      watch this video
                    </Anchor>
                    .
                  </div>
                ),
                icon: <Bulb />,
              }),
            100
          );
        }}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
