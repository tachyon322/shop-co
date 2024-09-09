export const publicRoutes = [
    {
        path: "/",
        component: "Home",
    },
    {
        path: "/login",
        component: "Login",
    },
    {
        path: "/register",
        component: "Register",
    },
]

export const authRoutes = [
    "/settings"
]

export const apiRoute = "/api/auth"

export const DEFAULT_REDIRECT = "/"