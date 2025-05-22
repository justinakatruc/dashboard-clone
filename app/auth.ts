import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { connectToDB } from "@/app/lib/utils"
import { User } from "@/app/lib/models"
import bcrypt from "bcrypt"

// Extend the Session type to include username and img
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string;
      img?: string;
    };
  }
}

const login = async (credentials : any) => {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("User not found");

    const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrectPassword) throw new Error("Incorrect password");

    return user;
}
 
export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
        name: "Credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "username" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            try {
                const user = await login(credentials);
                return user;
            }
            catch(error) {
                return null;
            }
        },
        }),
    ],
    callbacks: {
        // async jwt({ token, user }) {
        //     if (user && typeof user === 'object') {
        //         return {
        //             ...token,
        //             username: 'username' in user && typeof user.username === 'string' ? user.username : undefined,
        //             img: 'img' in user && typeof user.img === 'string' ? user.img : undefined,
        //         };
        //     }
        //     return token;
        // },
        // async session({ session, token }) {
        //     if (token && session.user) {
        //         session.user.username = typeof token.username === "string" ? token.username : undefined;
        //         session.user.img = typeof token.img === "string" ? token.img : undefined;
        //     }
        //     return session;
        // }
    }

})