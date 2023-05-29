"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Menu() {
  const router = useRouter();
  const start = (): void => {
    router.push("/");
  };
  return (
    <motion.div
      className="h-screen overflow-hidden flex flex-col justify-center items-center"
      onClick={start}
      onKeyDown={start}
      tabIndex={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="h-3/4 flex flex-col justify-center w-fit">
        <h2
          className="text-white font-playfairDisplay font-extrabold text-xl md:text-4xl"
          style={{
            textShadow:
              "0 0 5px #fe00fe, 0 0 10px #fe00fe, 0 0 15px #fe00fe, 0 0 20px #fe00fe, 0 0 25px #fe00fe",
          }}
        >
          welcome to my
        </h2>
        <h1
          className="text-white font-minecraft text-6xl md:text-9xl tracking-wides pt-8 text-center"
          style={{
            textShadow:
              "0px 0px 3px #03bcf4, 0 0 5px #03bcf4, 0 0 20px #03bcf4, 0 0 30px #03bcf4",
            WebkitBoxReflect: "below 1px linear-gradient(transparent, #0008)",
            lineHeight: "0.60em",
            animation: "cyberpunk 5s linear infinite",
          }}
        >
          website
        </h1>
      </header>
      <main className="">
        <h3 className="text-[#defe47] font-mono animate-bounce text-base md:text-xl">
          press any button to start!
        </h3>
      </main>
    </motion.div>
  );
}
