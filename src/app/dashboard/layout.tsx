"use client"

import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { usePathname } from "next/navigation"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const type = pathname.startsWith("/dashboard/sme") ? "sme" : "startup"

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <DashboardNav type={type} />

      {/* Main Content */}
      <div className="md:pl-64">
        <main className="container mx-auto px-4 pt-20 md:pt-8">
          {children}
        </main>
      </div>
    </div>
  )
} 