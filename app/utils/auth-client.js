import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://tiels.vercel.app"
})

export const { signIn, signUp, signOut, useSession, getSession } = createAuthClient()