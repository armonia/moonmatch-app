import { Metadata } from "next"
import { SMEProfileView } from "@/components/dashboard/sme/profile-view"

export const metadata: Metadata = {
  title: "SME Profile | MoonMatch",
  description: "View detailed SME information",
}

export default function SMEProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">SME Profile</h1>
        <p className="text-gray-500">View detailed information about this SME</p>
      </div>
      <SMEProfileView smeId={Number(params.id)} />
    </div>
  )
} 