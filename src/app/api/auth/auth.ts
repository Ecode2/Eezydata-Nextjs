import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const authOptions: NextAuthOptions = {

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log('authorize callback');
        // Add logic here to look up the user from the credentials supplied
        const formData: FormData = new FormData();
        
        formData.append('username', credentials?.username ?? '');
        formData.append('password', credentials?.password ?? '');

        const response = await axios.post(`${apiUrl}/auth/token`, 
          formData,
          {
              headers: {
              "Content-Type": 'application/x-www-form-urlencoded',
              }
          }
        );

        const user = response.data;

        const token = response.data.access_token; 
  
        if (response.status == 200 && token) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ],
  
  /* pages: {
    signIn: '/api/auth/signin',
    signOut: '/api/auth/signout',
    error: '/api/auth/error',
    verifyRequest: '/api/auth/verify-request',
    newUser: '/api/auth/new-user'
  }, */

  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt callback');
      // Persist the OAuth access_token to the token right after signin
      return { ...token, ...user };
    },
    async session({ session, token }) {
      console.log('session callback');
      // Send properties to the client, like an access_token from a provider.
      session.user = token as any;
      return session;
    }
  }
}

/* import type {GetServerSidePropsContext} from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

  
  // Use it in server contexts
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return{
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    }
  }
} */