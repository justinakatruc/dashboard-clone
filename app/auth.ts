import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"

// Extend the Session type to include username and img
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       isAdmin: boolean;
//       name?: string | null;
//       email?: string | null;
//       image?: string | null;
//       username?: string;
//       img?: string;
//     };
//   }
// }


 
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
                console.log("credentials", credentials);
                // Server-side authentication => muse use process.env.NEXTAUTH_URL
                const user = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username: credentials.username, password: credentials.password }),
                });

                if (!user.ok) throw new Error("Invalid credentials");

                return user.json();
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