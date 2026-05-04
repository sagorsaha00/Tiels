import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://tiels-git-main-sagorsaha00s-projects.vercel.app"
})

export const { signIn, signUp, useSession, getSession } = createAuthClient()