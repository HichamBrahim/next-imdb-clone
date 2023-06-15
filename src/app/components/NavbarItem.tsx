"use client";

import Link from "next/link";

import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  param: string;
};

export default function NavbarItem({ title, param }: Props) {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  return (
    <div>
      <Link
        className={`m-4 hover:text-amber-600 font-semibold p-2 ${
          option &&
          option === param &&
          "underline underline-offset-8 decoration-4  decoration-amber-500 rounded-lg"
        }`}
        href={`/?option=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
