"use client"

import { oauthSignIn } from "@/server/actions/oauth"
import { Button } from "../ui/button"

export const Login = () => {
  return (
    <div>
      <Button onClick={() => oauthSignIn("google")}>
        Login
      </Button>
    </div>
  )
}