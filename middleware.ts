import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { DEFAULT_REDIRECT, publicRoutes, apiRoute, authRoutes } from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("IS LOGGED IN:", isLoggedIn);

  const isApi = req.nextUrl.pathname.startsWith(apiRoute);
  const isPublic = publicRoutes.includes(req.nextUrl.pathname);
  const isAuth = authRoutes.includes(req.nextUrl.pathname);
  const isDefault = req.nextUrl.pathname === DEFAULT_REDIRECT;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
