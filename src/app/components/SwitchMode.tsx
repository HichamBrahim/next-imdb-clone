"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function SwitchMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <button
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          >
            <MdLightMode />
          </button>
        ) : (
          <button
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          >
            <BsFillMoonFill />
          </button>
        ))}
    </>
  );
}

export default SwitchMode;
