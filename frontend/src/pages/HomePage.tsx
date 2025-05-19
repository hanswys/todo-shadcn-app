import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"




const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
    <div className="flex flex-col items-center space-y-2">
      <Button>Sign In</Button>
      </div>
    <Label className="text-lg font-bold">To-Do List</Label>
    <div className="flex flex-row items-center space-y-2 gap-0.5">
    <Input className="w-64" />
    <Button variant="outline">+</Button>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox />
      <Button variant="destructive">X</Button>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox />
      <Button variant="destructive">X</Button>
    </div>
  </div>
  )
}

export default Homepage