"use client"
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from 'flubber';
import { useState } from "react";
import React from "react";
import { combinedGeometricShapes } from "@/constants/geometrics-svgs";
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
  }, [counter]);

  const useFlubber = (paths: string[] , ) => {
    return useTransform(progress, [0,1,2,3,4], paths, {
      mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1000 })
    });
  }

  const dontUseFlubber = (paths: string[] , ) => {
    return useTransform(progress, [0,1,2,3,4], paths);
  }

  // morphing using flubber

  const path1 = useFlubber(combinedGeometricShapes.paths1);
  const path2 = useFlubber(combinedGeometricShapes.paths2);
  const path3 = useFlubber(combinedGeometricShapes.paths3);
  const path4 = useFlubber(combinedGeometricShapes.paths4);
  const path5 = useFlubber(combinedGeometricShapes.paths5);
  const path6 = useFlubber(combinedGeometricShapes.paths6);

  const paths = [path1,path2,path3,path4,path5,path6];


  // Morphing without flubber 

  const pathx1 = dontUseFlubber(combinedGeometricShapes.paths1);
  const pathx2 = dontUseFlubber(combinedGeometricShapes.paths2);
  const pathx3 = dontUseFlubber(combinedGeometricShapes.paths3);
  const pathx4 = dontUseFlubber(combinedGeometricShapes.paths4);
  const pathx5 = dontUseFlubber(combinedGeometricShapes.paths5);
  const pathx6 = dontUseFlubber(combinedGeometricShapes.paths6);


   const pathsX = [pathx1,pathx2,pathx3,pathx4,pathx5,pathx6];

  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-[white] text-[40px] font-bold mb-24 pr-[80px]">Using Flubber</h1>
        <motion.svg
          width={400}
          height={400}
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
        <h1 className="text-[white] text-[40px] font-bold mb-24 pr-[80px]">Without Flubber</h1>

        <motion.svg
          width={400}
          height={400}
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          {pathsX.map((path, index) => (
            <motion.path key={index} fill='white' d={path} />
          ))}
        </motion.svg>
      </div>
    </main>
  );
}
