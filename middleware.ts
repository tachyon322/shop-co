import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_REDIRECT, publicRoutes, apiRoute, authRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!auth;
  console.log("IS LOGGED IN:", isLoggedIn);

  const isApi = nextUrl.pathname.startsWith(apiRoute);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isDefault = nextUrl.pathname === DEFAULT_REDIRECT;

  if ( isAuthRoute ){
    if (isLoggedIn){
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
    }
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
