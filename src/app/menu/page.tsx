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
      className="h-screen flex flex-col justify-center items-center"
      onClick={start}
      onKeyDown={start}
      tabIndex={0}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <header>
        <h2
          className="text-white font-playfairDisplay text-3xl font-extrabold"
          style={{
            textShadow:
              "0 0 5px #fe00fe, 0 0 10px #fe00fe, 0 0 15px #fe00fe, 0 0 20px #fe00fe, 0 0 25px #fe00fe",
          }}
        >
          welcome to my
        </h2>
        <h1
          className="text-white font-minecraft text-9xl mt-8 mb-36 tracking-widest"
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
      <main>
        <h3 className="text-[#defe47] font-mono animate-bounce text-xl">
          press any button to start
        </h3>
      </main>
    </motion.div>
  );
}
