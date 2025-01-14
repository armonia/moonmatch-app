"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface RegisterFormProps {
  type: "startup" | "sme"
}

export function RegisterForm({ type }: RegisterFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    password: "",
    industry: "",
    size: ""
  })

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate registration - replace with actual authentication
    setTimeout(() => {
      router.push(`/dashboard/${type}`)
    }, 1000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="company">Company Name</Label>
        <Input 
          id="company" 
          value={formData.company}
          onChange={e => setFormData({...formData, company: e.target.value})}
          required 
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="name@example.com" 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          required 
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input 
          id="password" 
          type="password" 
          value={formData.password}
          onChange={e => setFormData({...formData, password: e.target.value})}
          required 
        />
      </div>
      {type === "startup" && (
        <div className="grid gap-2">
          <Label htmlFor="industry">Industry</Label>
          <Input 
            id="industry" 
            placeholder="e.g., Fintech, Healthcare" 
            value={formData.industry}
            onChange={e => setFormData({...formData, industry: e.target.value})}
            required 
          />
        </div>
      )}
      {type === "sme" && (
        <div className="grid gap-2">
          <Label htmlFor="size">Company Size</Label>
          <Input 
            id="size" 
            placeholder="e.g., 50-100 employees" 
            value={formData.size}
            onChange={e => setFormData({...formData, size: e.target.value})}
            required 
          />
        </div>
      )}
      <Button className="w-full" disabled={isLoading}>
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin" />
        )}
        Create Account
      </Button>
    </form>
  )
} 