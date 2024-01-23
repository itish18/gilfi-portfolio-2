"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Columns = ({ images, value }) => {
  const ref = useRef();
  const [windowHeight, setWindowHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, windowHeight * value]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-5 w-full h-full text-white"
    >
      {images.map((item, index) => (
        <motion.div style={{ y }} key={index}>
          <Image
            alt="img"
            src={`/${item}`}
            className="object-contain w-full h-fit"
            width={500}
            height={100}
            key={index}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
