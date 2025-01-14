"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit2, Save, X, Plus, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MOCK_STARTUPS } from "@/data/mock-profiles"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Industry, StartupProfile } from "@/types/profiles"

// Technology categories with subcategories
const TECH_CATEGORIES = {
  "AI & Machine Learning": [
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning",
    "Predictive Analytics",
    "Neural Networks",
    "Machine Learning Operations",
  ],
  "Cloud & Infrastructure": [
    "Cloud Computing",
    "Microservices",
    "Containerization",
    "Serverless",
    "Edge Computing",
  ],
  "Data & Analytics": [
    "Big Data",
    "Data Engineering",
    "Business Intelligence",
    "Data Visualization",
    "Real-time Analytics",
  ],
  "Security & Privacy": [
    "Cybersecurity",
    "Encryption",
    "Blockchain",
    "Identity Management",
    "Privacy Tech",
  ],
  "Development Tools": [
    "DevOps",
    "CI/CD",
    "Version Control",
    "Testing Tools",
    "API Management",
  ]
}

interface StartupProfileViewProps {
  startupId?: number
}

export function StartupProfileView({ startupId }: StartupProfileViewProps) {
  const [profile, setProfile] = useState<StartupProfile | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState<StartupProfile | null>(null)
  const [newTechnology, setNewTechnology] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  useEffect(() => {
    // If startupId is provided, find that specific startup, otherwise use first one
    const initialProfile = startupId 
      ? MOCK_STARTUPS.find(s => Number(s.id) === startupId) || MOCK_STARTUPS[0]
      : MOCK_STARTUPS[0]
    setProfile(initialProfile)
    setEditedProfile(initialProfile)
  }, [startupId])

  if (!profile || !editedProfile) return null

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const addTechnology = () => {
    if (newTechnology && !editedProfile.technologies.includes(newTechnology)) {
      setEditedProfile({
        ...editedProfile,
        technologies: [...editedProfile.technologies, newTechnology]
      })
      setNewTechnology("")
    }
  }

  const removeTechnology = (tech: string) => {
    setEditedProfile({
      ...editedProfile,
      technologies: editedProfile.technologies.filter(t => t !== tech)
    })
  }

  return (
    <div className="space-y-6">
      {/* Header with Edit/Save buttons */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <p className="text-gray-500">{profile.description}</p>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
              <Button onClick={handleSave}>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)}>
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Company Name</Label>
              {isEditing ? (
                <Input
                  value={editedProfile.name}
                  onChange={e => setEditedProfile({...editedProfile, name: e.target.value})}
                />
              ) : (
                <p className="text-gray-700">{profile.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Industry</Label>
              {isEditing ? (
                <Select
                  value={editedProfile.industry}
                  onValueChange={value => setEditedProfile({...editedProfile, industry: value as Industry})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Fintech">Fintech</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="Clean Energy">Clean Energy</SelectItem>
                    <SelectItem value="Biotechnology">Biotechnology</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Badge>{profile.industry}</Badge>
              )}
            </div>

            <div className="space-y-2">
              <Label>Development Stage</Label>
              {isEditing ? (
                <Select
                  value={editedProfile.stage}
                  onValueChange={value => setEditedProfile({...editedProfile, stage: value as StartupProfile["stage"]})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Seed">Seed</SelectItem>
                    <SelectItem value="Series A">Series A</SelectItem>
                    <SelectItem value="Series B">Series B</SelectItem>
                    <SelectItem value="Growth">Growth</SelectItem>
                    <SelectItem value="Scale-up">Scale-up</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Badge variant="outline">{profile.stage}</Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Location</Label>
              {isEditing ? (
                <Input
                  value={editedProfile.location}
                  onChange={e => setEditedProfile({...editedProfile, location: e.target.value})}
                />
              ) : (
                <p className="text-gray-700">{profile.location}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Website</Label>
              {isEditing ? (
                <Input
                  value={editedProfile.website}
                  onChange={e => setEditedProfile({...editedProfile, website: e.target.value})}
                />
              ) : (
                <a href={profile.website} className="text-blue-600 hover:underline">
                  {profile.website}
                </a>
              )}
            </div>

            <div className="space-y-2">
              <Label>Contact Email</Label>
              {isEditing ? (
                <Input
                  value={editedProfile.contactEmail}
                  onChange={e => setEditedProfile({...editedProfile, contactEmail: e.target.value})}
                />
              ) : (
                <p className="text-gray-700">{profile.contactEmail}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Technology Stack */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {isEditing && (
                <div className="flex gap-2">
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(TECH_CATEGORIES).map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={newTechnology}
                    onValueChange={setNewTechnology}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Select Technology" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedCategory && TECH_CATEGORIES[selectedCategory as keyof typeof TECH_CATEGORIES].map(tech => (
                        <SelectItem key={tech} value={tech}>
                          {tech}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={addTechnology}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {(isEditing ? editedProfile : profile).technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={isEditing ? "pr-2" : ""}
                  >
                    {tech}
                    {isEditing && (
                      <button
                        onClick={() => removeTechnology(tech)}
                        className="ml-2 hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    )}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Details */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Business Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Development Focus</Label>
              {isEditing ? (
                <Textarea
                  value={editedProfile.developmentFocus}
                  onChange={e => setEditedProfile({...editedProfile, developmentFocus: e.target.value})}
                  className="h-24"
                />
              ) : (
                <p className="text-gray-700">{profile.developmentFocus}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Target Market</Label>
              {isEditing ? (
                <Textarea
                  value={editedProfile.targetMarket}
                  onChange={e => setEditedProfile({...editedProfile, targetMarket: e.target.value})}
                  className="h-24"
                />
              ) : (
                <p className="text-gray-700">{profile.targetMarket}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Business Model</Label>
              {isEditing ? (
                <Textarea
                  value={editedProfile.businessModel}
                  onChange={e => setEditedProfile({...editedProfile, businessModel: e.target.value})}
                  className="h-24"
                />
              ) : (
                <p className="text-gray-700">{profile.businessModel}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(isEditing ? editedProfile : profile).team.map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    {isEditing ? (
                      <div className="space-y-2">
                        <Input
                          value={member.name}
                          onChange={e => {
                            const newTeam = [...editedProfile.team]
                            newTeam[index].name = e.target.value
                            setEditedProfile({...editedProfile, team: newTeam})
                          }}
                          placeholder="Name"
                        />
                        <Input
                          value={member.role}
                          onChange={e => {
                            const newTeam = [...editedProfile.team]
                            newTeam[index].role = e.target.value
                            setEditedProfile({...editedProfile, team: newTeam})
                          }}
                          placeholder="Role"
                        />
                        <Input
                          value={member.linkedin || ""}
                          onChange={e => {
                            const newTeam = [...editedProfile.team]
                            newTeam[index].linkedin = e.target.value
                            setEditedProfile({...editedProfile, team: newTeam})
                          }}
                          placeholder="LinkedIn URL"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.role}</p>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            LinkedIn Profile
                          </a>
                        )}
                      </>
                    )}
                  </div>
                  {isEditing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-red-600"
                      onClick={() => {
                        const newTeam = editedProfile.team.filter((_, i) => i !== index)
                        setEditedProfile({...editedProfile, team: newTeam})
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {isEditing && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setEditedProfile({
                      ...editedProfile,
                      team: [
                        ...editedProfile.team,
                        { name: "", role: "", linkedin: "" }
                      ]
                    })
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Team Member
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 