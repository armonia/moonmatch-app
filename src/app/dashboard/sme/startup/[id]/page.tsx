import { Metadata } from "next"
import { StartupProfileView } from "@/components/dashboard/startup/profile-view"

export const metadata: Metadata = {
  title: "Startup Profile | MoonMatch",
  description: "View detailed startup information",
}

export default async function StartupProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = (await params)
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold">Startup Profile</h1>
        <p className="text-gray-500">View detailed information about this startup</p>
      </div>
      <StartupProfileView startupId={Number(id)} />
    </div>
  )
} 