"use client"; // This tells Next.js that this component will run on the client-side
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";  // This loads all the features of tsparticles

export default function ParticlesComponent() {
  const [init, setInit] = useState(false); // State to track when particles are initialized

  // This effect runs once when the component is mounted
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Initialize tsparticles with all features
      await loadFull(engine);
    }).then(() => {
      // Set the state to true once particles are initialized
      setInit(true);
    });
  }, []); // Empty dependency array means this effect will run only once

  // This function runs once the particles are loaded
  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container); // Log the container object to console for debugging
  };

  // Options for particles - These define how particles behave and look
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000", // Set background color to black
        },
      },
      fpsLimit: 120, // Limit frames per second to 120
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Particles will be pushed on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Particles will repulse on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Push 4 particles on click
          },
          repulse: {
            distance: 200, // Repulsion distance on hover
            duration: 0.4, // Duration of repulsion effect
          },
        },
      },
      particles: {
        color: {
          value: "#ff0000", // Particles will be red
        },
        links: {
          color: "#ea7575", // Links between particles will be this color
          distance: 150, // Distance between particles for links
          enable: true, // Links between particles are enabled
          opacity: 0.5, // Links opacity
          width: 1, // Width of the links
        },
        move: {
          direction: MoveDirection.none, // No specific direction for particles
          enable: true, // Particles will move
          outModes: {
            default: OutMode.out, // Particles will go out of screen if they reach the edge
          },
          random: false,
          speed: 6, // Speed of particle movement
          straight: false,
        },
        number: {
          density: {
            enable: true, // Density of particles enabled
          },
          value: 80, // Total number of particles
        },
        opacity: {
          value: 0.5, // Opacity of particles
        },
        shape: {
          type: "circle", // Particles will be circular in shape
        },
        size: {
          value: { min: 1, max: 5 }, // Particles size range from 1px to 5px
        },
      },
      detectRetina: true, // Ensure retina screens are supported
    }),
    [] // Empty dependency array ensures options are only calculated once
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded} // Callback when particles are loaded
        options={options} // Particle options
        className="absolute z-[-1] top-0 left-0 w-full h-full " // Make particles fill the entire screen
      />
    );
  }

  return <></>; // Return nothing while particles are initializing
}
