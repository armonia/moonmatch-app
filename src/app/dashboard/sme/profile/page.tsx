import { Metadata } from "next"
import { SMEProfileView } from "@/components/dashboard/sme/profile-view"

export const metadata: Metadata = {
  title: "Profile | SME Dashboard | MoonMatch",
  description: "View and manage your SME profile",
}

export default function SMEProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Company Profile</h1>
        <p className="text-gray-500">
          Manage your SME's profile and preferences for startup matching
        </p>
      </div>

      <SMEProfileView />
    </div>
  )
} 