"use client";

import { signIn } from "next-auth/react";
import { Button } from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";

const AuthForm = () => {
  return (
    <form
      action={async () => {
        await signIn("google");
      }}
      className="flex justify-center"
    >
      <Button
        type="submit"
        startContent={<FcGoogle className="h-6 w-6" />}
        variant="bordered"
        size="lg"
      >
        Continue with Google
      </Button>
    </form>
  );
};

export default AuthForm;
