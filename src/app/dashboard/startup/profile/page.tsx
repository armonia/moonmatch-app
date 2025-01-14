import { Metadata } from "next"
import { StartupProfileView } from "@/components/dashboard/startup/profile-view"

export const metadata: Metadata = {
  title: "Profile | Startup Dashboard | MoonMatch",
  description: "View and manage your startup profile",
}

export default function StartupProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Company Profile</h1>
        <p className="text-gray-500">
          Manage your startup's profile and information visible to potential SME partners
        </p>
      </div>

      <StartupProfileView />
    </div>
  )
} 