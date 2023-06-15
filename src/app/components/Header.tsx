"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import SwitchMode from "./SwitchMode";

function Header() {
  return (
    <header className="p-4">
      <div className="md:mx-24 flex items-center justify-between">
        <nav>
          <ul className="hidden md:flex items-center space-x-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
          <ul className="md:hidden flex items-center space-x-6 text-2xl">
            <li>
              <Link href={"/"}>
                <AiFillHome />
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <BsFillInfoCircleFill />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-6">
          <SwitchMode />
          <div className="brand">
            <Link href={"/"} className="space-x-2">
              <span className="inline-block text-2xl font-bold p-3 py-1 rounded-md bg-amber-500">
                IMDB
              </span>
              <span className="hidden md:inline">Clone</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
