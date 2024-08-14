"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { MdSmsFailed } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { TbReload } from "react-icons/tb";

const ErrorBox = () => {
  const errorParams = useSearchParams();
  const router = useRouter();

  const error = errorParams.get("error");

  return (
    <div className="py-16 rounded-lg mt-16 w-96 mx-auto flex flex-col items-center gap-10">
      <MdSmsFailed className="text-primary-red h-20 w-20" />
      <div className="flex flex-col items-center mb-4">
        <span className="text-2xl">{error}</span>
        <span className="mt-2 text-gray-500 dark:text-gray-500">
          Please contact the admin and try again.
        </span>
      </div>
      <Button
        color="danger"
        variant="bordered"
        startContent={<TbReload />}
        onClick={() => router.push("/admin/auth")}
      >
        Retry
      </Button>
    </div>
  );
};

export default ErrorBox;
