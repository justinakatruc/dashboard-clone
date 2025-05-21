import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "@/app/lib/utils";
import { User } from "@/app/lib/models"
import bcrypt from "bcrypt"


const login = async (credentials : any) => {
  connectToDB();
  const user = await User.findOne({ username: credentials.username });

  if (!user) throw new Error("User not found");

  const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);
  if (!isCorrectPassword) throw new Error("Incorrect password");

  return user;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        return login(credentials);
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy, // or "database"
  },
  pages: {
    signIn: "/login",
  },
}
