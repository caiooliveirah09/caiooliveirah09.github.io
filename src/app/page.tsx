"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [form, setForm] = useState(true);
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  const newUser = () => {
    setForm(false);
    if (nickname) {
      localStorage.setItem("nickname", JSON.stringify(nickname));
    }
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
          className="bg-gray-800 w-full my-auto text-center h-3/4 flex flex-col justify-center gap-y-10"
          onSubmit={newUser}
        >
          <p className="text-left px-2 font-extrabold">
            what do you want to be called?
          </p>
          <input
            disabled={false}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="a bg-transparent border-b-2 border-gray-200 w-full px-2 outline-none"
            placeholder="your nickname here!"
          ></input>
          <div className="flex flex-col">
            <button
              className="uppercase"
              type="submit"
              disabled={nickname ? false : true}
            >
              all ready!?
            </button>
            <button className="underline text-sm">
              log in as an anonymous
            </button>
          </div>
        </form>
      )}
      {nickname && !form && (
        <>
          <p>welcome back {nickname}</p>
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
