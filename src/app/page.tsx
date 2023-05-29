"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [form, setForm] = useState(true);
  const [nickname, setNickname] = useState("");
  const anonymous = "stranger";
  const router = useRouter();

  const newUser = () => {
    if (nickname) {
      localStorage.setItem("nickname", JSON.stringify(nickname));
    }
    setForm(false);
    console.log("novoo convidado");
  };

  useEffect(() => {
    if (localStorage.getItem("nickname")) {
      setForm(false);
      setNickname(JSON.parse(localStorage.getItem("nickname") as string));
    }
  }, []);
  return (
    <div className="flex h-screen text-gray-200">
      {form && (
        <form
          className="bg-gray-800 w-full my-auto text-center h-fit py-20 flex flex-col justify-center gap-y-10 sm:w-4/12 m-auto rounded-md"
          onSubmit={newUser}
        >
          <p className="text-left px-2 font-extrabold">
            what do you want to be called?
          </p>
          <input
            disabled={false}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="bg-transparent border-b-2 border-gray-200 px-2 outline-none w-full sm:w-11/12 mx-auto"
            placeholder="your nickname here!"
          ></input>
          <div className="flex flex-col">
            <button
              className="uppercase"
              type="submit"
              disabled={nickname ? false : true}
              style={
                nickname
                  ? {
                      background:
                        "linear-gradient(90deg, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000, #ffff00, #00ff00, #0099ff, #001aff, #a200ff, #ff0055, #ff0000)",
                      backgroundSize: "200%",
                      WebkitTextFillColor: "transparent",
                      WebkitBackgroundClip: "text",
                      animation: "rgb 4s linear infinite",
                    }
                  : { color: "black" }
              }
            >
              all ready!?
            </button>
            <button className="underline text-sm">
              log in as an anonymous
            </button>
          </div>
        </form>
      )}
      {!form && (
        <>
          <p>welcome back {nickname || anonymous}</p>
          <button
            onClick={() => {
              localStorage.clear();
              router.push("/menu");
              console.log("sei la");
            }}
          >
            logout
          </button>
        </>
      )}
    </div>
  );
}
