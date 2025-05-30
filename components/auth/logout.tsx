"use client"

import { Button } from "../ui/button"
import { handleLogout } from "@/server/actions/logout"

export const Logout = () => {
  return (
    <div>
      <Button onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  )
}