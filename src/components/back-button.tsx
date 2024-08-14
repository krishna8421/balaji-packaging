"use client";

import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="flex items-center gap-2 text-sm hover:underline text-neutral-500 cursor-pointer pb-6"
    >
      <IoArrowBack className="h-4 w-4" />
      <span className="font-medium">Back</span>
    </div>
  );
};

export default BackButton;
