import Image from "next/image";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center">
      <Image src="spinner.svg" alt="loading..." height={384} width={400} />
    </div>
  );
}

export default Loading;
