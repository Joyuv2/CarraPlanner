// auth.config.ts — edge-safe, só o essencial pra checagem de rota
import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  pages: { signIn: "/login" },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
      if (isOnDashboard) return isLoggedIn
      return true
    },
  },
  providers: [], // vazio aqui, providers reais ficam no auth.ts
} satisfies NextAuthConfig