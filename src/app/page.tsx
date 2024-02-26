"use client"
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from 'flubber';
import { useState } from "react";
import React from "react";
import { combinedGeometricShapes } from "@/constants/geometrics-svgs";
import UnOrderedMorphing from "../components/UnOrderedMorphing";
export default function Home() {

  const [counter,setCounter] = useState(0)
  const progress = useMotionValue(counter); // must use (useMotionValue) to be used in useTransform function

  // Animation function on initializing component to increment the value as time passes to change between svgs
  React.useEffect(() => {
    const animation = animate(progress, counter, {
      duration: 1.8,
      ease: "easeInOut",
      onComplete: () => {
        if (counter === 4) {
          progress.set(0);
          setCounter(1);
        } else {
          setCounter(counter + 1);
        }
      }
    });
    return () => animation.stop();
  }, [counter,progress]);

  const useTransformWithFlubber = (paths: string[]) => {
    return useTransform(progress, [0,1,2,3,4], paths, {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1000 })
    });
  }

  const useTransformWithoutFlubber = (paths: string[]) => {
    return useTransform(progress, [0,1,2,3,4], paths);
  }

  // morphing using flubber

  const path1 = useTransformWithFlubber(combinedGeometricShapes.paths1);
  const path2 = useTransformWithFlubber(combinedGeometricShapes.paths2);
  const path3 = useTransformWithFlubber(combinedGeometricShapes.paths3);
  const path4 = useTransformWithFlubber(combinedGeometricShapes.paths4);
  const path5 = useTransformWithFlubber(combinedGeometricShapes.paths5);
  const path6 = useTransformWithFlubber(combinedGeometricShapes.paths6);

  const paths = [path1,path2,path3,path4,path5,path6];


  // Morphing without flubber 

  const pathx1 = useTransformWithoutFlubber(combinedGeometricShapes.paths1);
  const pathx2 = useTransformWithoutFlubber(combinedGeometricShapes.paths2);
  const pathx3 = useTransformWithoutFlubber(combinedGeometricShapes.paths3);
  const pathx4 = useTransformWithoutFlubber(combinedGeometricShapes.paths4);
  const pathx5 = useTransformWithoutFlubber(combinedGeometricShapes.paths5);
  const pathx6 = useTransformWithoutFlubber(combinedGeometricShapes.paths6);


   const pathsX = [pathx1,pathx2,pathx3,pathx4,pathx5,pathx6];

  return (
    <main className="flex min-h-screen items-center justify-around bg-black flex-wrap flex-col">
      <div className="flex-row flex items-center space-around w-full">
        <div className="flex flex-1 flex-col items-center justify-center flex-wrap">
          <h1 className="text-[white] text-[40px] font-bold mb-10 pr-[80px]">Using Flubber</h1>
          <motion.svg
            width={200}
            height={200}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="flex items-center justify-center"
          >
            {paths.map((path, index) => (
              <motion.path key={index} fill='white' d={path} />
            ))}
          </motion.svg>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="text-[white] text-[40px] font-bold mb-10 pr-[80px]">Without Flubber</h1>

          <motion.svg
            width={200}
            height={200}
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
          >
            {pathsX.map((path, index) => (
              <motion.path key={index} fill='white' d={path} />
            ))}
          </motion.svg>
        </div>
      </div>
      <UnOrderedMorphing />

    </main>
  );
}
