import { redirect } from "next/navigation";
import AuthForm from "./auth-form";
import { getServerAuthSession } from "@/lib/auth";

const AuthPage = async () => {
  const session = await getServerAuthSession();
  if (session) return redirect("/admin");

  console.log(session);
  return <AuthForm />;
};

export default AuthPage;
