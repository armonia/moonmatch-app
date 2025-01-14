"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MOCK_STARTUPS } from "@/data/mock-profiles"

export function StartupProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "",
    industry: "",
    description: "",
    foundedYear: "",
    teamSize: ""
  })

  useEffect(() => {
    // Initialize with mock data after mount
    setProfile({
      name: "TechStartup Inc.",
      industry: "Fintech",
      description: "We are a fintech startup focused on revolutionizing payments...",
      foundedYear: "2023",
      teamSize: "10-20"
    })
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-medium">Company Details</h3>
          <p className="text-sm text-gray-500">Update your startup information</p>
        </div>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Save Changes" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label>Company Name</Label>
          <Input 
            value={profile.name}
            onChange={e => setProfile({...profile, name: e.target.value})}
            disabled={!isEditing} 
          />
        </div>
        <div className="space-y-2">
          <Label>Industry</Label>
          <Input 
            value={profile.industry}
            onChange={e => setProfile({...profile, industry: e.target.value})}
            disabled={!isEditing} 
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label>Description</Label>
          <Textarea 
            value={profile.description}
            onChange={e => setProfile({...profile, description: e.target.value})}
            disabled={!isEditing}
            className="h-24"
          />
        </div>
        <div className="space-y-2">
          <Label>Founded Year</Label>
          <Input 
            value={profile.foundedYear}
            onChange={e => setProfile({...profile, foundedYear: e.target.value})}
            disabled={!isEditing} 
          />
        </div>
        <div className="space-y-2">
          <Label>Team Size</Label>
          <Input 
            value={profile.teamSize}
            onChange={e => setProfile({...profile, teamSize: e.target.value})}
            disabled={!isEditing} 
          />
        </div>
      </div>
    </div>
  )
} 