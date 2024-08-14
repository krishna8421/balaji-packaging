import { getServerSession, type NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import { Adapter } from "next-auth/adapters";
import { ADMIN_EMAILS } from "@/constants";
import { redirect } from "next/navigation";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    error: "/auth/error",
  },
  callbacks: {
    async signIn({ account, profile }) {
      if (
        account?.provider === "google" &&
        ADMIN_EMAILS.includes(profile?.email!)
      ) {
        return true;
      }
      throw new Error("Authentication failed");
    },
  },
};

export const getServerAuthSession = async () =>
  await getServerSession(authOptions);

export async function authenticate() {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/auth");
}
