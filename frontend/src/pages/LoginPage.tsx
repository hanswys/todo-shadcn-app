import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"


const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
    <Label className="text-2xl font-bold">Log In</Label>
    <div className="flex flex-col items-center space-y-2 gap-0.5">
    <Label className="text-lg font-bold">Username</Label>
    <Input className="w-64" />
    </div>
    <div className="flex flex-col items-center space-y-2 gap-0.5">
    <Label className="text-lg font-bold">Password</Label>
    <Input className="w-64" />
    </div>
  </div>
  )
}

export default LoginPage