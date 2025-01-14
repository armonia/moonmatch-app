import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DocumentManager } from "@/components/dashboard/startup/document-manager"

export const metadata: Metadata = {
  title: "Documents | Startup Dashboard",
  description: "Manage your startup documents and files",
}

export default function DocumentsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Document Management</CardTitle>
        </CardHeader>
        <CardContent>
          <DocumentManager />
        </CardContent>
      </Card>
    </div>
  )
} 