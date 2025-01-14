"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit2, Save, X, Plus, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MOCK_SMES } from "@/data/mock-profiles"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Industry, SMEProfile } from "@/types/profiles"

const STARTUP_STAGES = ["Seed", "Series A", "Series B", "Growth", "Scale-up"] as const

export function SMEProfileView({ smeId }: { smeId?: number }) {
  const [profile, setProfile] = useState<SMEProfile>(() => {
    if (smeId) {
      const foundSME = MOCK_SMES.find(s => Number(s.id) === smeId)
      return foundSME || MOCK_SMES[0]
    }
    return MOCK_SMES[0]
  })
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState<SMEProfile>(profile)

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
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
            <CardTitle>Company Information</CardTitle>
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
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="AI & Machine Learning">AI & Machine Learning</SelectItem>
                    <SelectItem value="Fintech">Fintech</SelectItem>
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
              <Label>Established Year</Label>
              {isEditing ? (
                <Input
                  type="number"
                  value={editedProfile.established}
                  onChange={e => setEditedProfile({...editedProfile, established: parseInt(e.target.value)})}
                />
              ) : (
                <p className="text-gray-700">{profile.established}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Annual Revenue (USD)</Label>
              {isEditing ? (
                <Input
                  type="number"
                  value={editedProfile.annualRevenue}
                  onChange={e => setEditedProfile({...editedProfile, annualRevenue: parseInt(e.target.value)})}
                />
              ) : (
                <p className="text-gray-700">${profile.annualRevenue.toLocaleString()}</p>
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

        {/* Startup Preferences */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Startup Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Technologies of Interest</Label>
              {isEditing ? (
                <Input
                  value={editedProfile.interests.technologies.join(", ")}
                  onChange={e => setEditedProfile({
                    ...editedProfile,
                    interests: {
                      ...editedProfile.interests,
                      technologies: e.target.value.split(",").map(t => t.trim())
                    }
                  })}
                  placeholder="e.g., AI, Blockchain, IoT"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Industries of Interest</Label>
              {isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {[
                    "Software Development",
                    "AI & Machine Learning",
                    "Manufacturing",
                    "Healthcare",
                    "Fintech",
                    "Cybersecurity",
                    "Clean Energy",
                    "Biotechnology",
                    "E-commerce"
                  ].map((industry) => (
                    <Badge
                      key={industry}
                      variant={editedProfile.interests.industries.includes(industry as Industry) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => {
                        const industries = editedProfile.interests.industries.includes(industry as Industry)
                          ? editedProfile.interests.industries.filter(i => i !== industry)
                          : [...editedProfile.interests.industries, industry as Industry]
                        setEditedProfile({
                          ...editedProfile,
                          interests: {
                            ...editedProfile.interests,
                            industries
                          }
                        })
                      }}
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.industries.map((industry, index) => (
                    <Badge key={index}>{industry}</Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Preferred Startup Stages</Label>
              {isEditing ? (
                <div className="flex flex-wrap gap-2">
                  {STARTUP_STAGES.map((stage) => (
                    <Badge
                      key={stage}
                      variant={editedProfile.interests.stages.includes(stage) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => {
                        const stages = editedProfile.interests.stages.includes(stage)
                          ? editedProfile.interests.stages.filter(s => s !== stage)
                          : [...editedProfile.interests.stages, stage]
                        setEditedProfile({
                          ...editedProfile,
                          interests: {
                            ...editedProfile.interests,
                            stages
                          }
                        })
                      }}
                    >
                      {stage}
                    </Badge>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.interests.stages.map((stage, index) => (
                    <Badge key={index} variant="outline">{stage}</Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Requirements */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Collaboration Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(isEditing ? editedProfile : profile).requirements.map((req, index) => (
                <Card key={index} className="p-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      {isEditing ? (
                        <Input
                          value={req.category}
                          onChange={e => {
                            const newReqs = [...editedProfile.requirements]
                            newReqs[index].category = e.target.value
                            setEditedProfile({...editedProfile, requirements: newReqs})
                          }}
                        />
                      ) : (
                        <p className="font-medium">{req.category}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      {isEditing ? (
                        <div className="flex gap-2">
                          <Textarea
                            value={req.description}
                            onChange={e => {
                              const newReqs = [...editedProfile.requirements]
                              newReqs[index].description = e.target.value
                              setEditedProfile({...editedProfile, requirements: newReqs})
                            }}
                            className="flex-1"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-red-600"
                            onClick={() => {
                              const newReqs = editedProfile.requirements.filter((_, i) => i !== index)
                              setEditedProfile({...editedProfile, requirements: newReqs})
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <p className="text-gray-700">{req.description}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
              {isEditing && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setEditedProfile({
                      ...editedProfile,
                      requirements: [
                        ...editedProfile.requirements,
                        { category: "", description: "" }
                      ]
                    })
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Requirement
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Previous Collaborations */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Previous Collaborations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {(isEditing ? editedProfile : profile).previousCollaborations?.map((collab, index) => (
                <Card key={index} className="p-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Startup Name</Label>
                      {isEditing ? (
                        <Input
                          value={collab.startupName}
                          onChange={e => {
                            const newCollabs = [...(editedProfile.previousCollaborations || [])]
                            newCollabs[index].startupName = e.target.value
                            setEditedProfile({...editedProfile, previousCollaborations: newCollabs})
                          }}
                        />
                      ) : (
                        <p className="font-medium">{collab.startupName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label>Year</Label>
                      {isEditing ? (
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            value={collab.year}
                            onChange={e => {
                              const newCollabs = [...(editedProfile.previousCollaborations || [])]
                              newCollabs[index].year = parseInt(e.target.value)
                              setEditedProfile({...editedProfile, previousCollaborations: newCollabs})
                            }}
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="hover:text-red-600"
                            onClick={() => {
                              const newCollabs = (editedProfile.previousCollaborations || []).filter((_, i) => i !== index)
                              setEditedProfile({...editedProfile, previousCollaborations: newCollabs})
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <p className="text-gray-700">{collab.year}</p>
                      )}
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label>Outcome</Label>
                      {isEditing ? (
                        <Textarea
                          value={collab.outcome}
                          onChange={e => {
                            const newCollabs = [...(editedProfile.previousCollaborations || [])]
                            newCollabs[index].outcome = e.target.value
                            setEditedProfile({...editedProfile, previousCollaborations: newCollabs})
                          }}
                          className="h-24"
                        />
                      ) : (
                        <p className="text-gray-700">{collab.outcome}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
              {isEditing && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setEditedProfile({
                      ...editedProfile,
                      previousCollaborations: [
                        ...(editedProfile.previousCollaborations || []),
                        { startupName: "", year: new Date().getFullYear(), outcome: "" }
                      ]
                    })
                  }}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Collaboration
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 