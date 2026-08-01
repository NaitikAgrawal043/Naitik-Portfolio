import React, { useCallback, memo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = memo(function Particle() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 1200,
            },
          },
          links: {
            enable: false,
          },
          move: {
            direction: "right",
            speed: 0.2,
          },
          size: {
            value: 1.2,
          },
          opacity: {
            value: 0.35,
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
});

export default Particle;
