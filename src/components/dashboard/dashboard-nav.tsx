"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Building2,
  Handshake,
  Menu,
} from "lucide-react"
import { Notifications } from "@/components/dashboard/notifications"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardNavProps {
  type: "startup" | "sme"
}

const startupNavItems = [
  {
    title: "Overview",
    href: "/dashboard/startup",
    icon: LayoutDashboard,
  },
  {
    title: "SME Matches",
    href: "/dashboard/startup/matches",
    icon: Handshake,
  },
  {
    title: "Documents",
    href: "/dashboard/startup/documents",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/dashboard/startup/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    href: "/dashboard/startup/messages",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/startup/profile",
    icon: Building2,
  },
]

const smeNavItems = [
  {
    title: "Overview",
    href: "/dashboard/sme",
    icon: LayoutDashboard,
  },
  {
    title: "Search Startups",
    href: "/dashboard/sme/search",
    icon: Users,
  },
  {
    title: "Interactions",
    href: "/dashboard/sme/interactions",
    icon: Handshake,
  },
  {
    title: "Analytics",
    href: "/dashboard/sme/analytics",
    icon: BarChart3,
  },
  {
    title: "Messages",
    href: "/dashboard/sme/messages",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    href: "/dashboard/sme/profile",
    icon: Building2,
  },
]

export function DashboardNav({ type }: DashboardNavProps) {
  const pathname = usePathname()
  const navItems = type === "startup" ? startupNavItems : smeNavItems
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = () => (
    <>
      {navItems.map((item, index) => {
        const Icon = item.icon
        return (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              pathname === item.href ? "bg-accent" : "transparent",
            )}
            onClick={() => setIsOpen(false)}
          >
            <Icon className="mr-2 h-4 w-4" />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </>
  )

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 z-30 w-full bg-background border-b">
        <div className="flex h-16 items-center justify-between px-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] max-w-[300px] p-6" title="Navigation Menu">
              <div className="flex flex-col h-full">
                <div className="font-semibold mb-4">
                  {type === "startup" ? "Startup Dashboard" : "SME Dashboard"}
                </div>
                <nav className="flex flex-col space-y-2">
                  <NavLinks />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <Notifications />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed left-0 z-20 h-screen w-64 flex-col border-r bg-gray-100/40">
        <div className="flex h-full flex-col p-4">
          <div className="flex h-14 items-center">
            <span className="font-semibold">
              {type === "startup" ? "Startup Dashboard" : "SME Dashboard"}
            </span>
          </div>
          <nav className="flex-1 space-y-2">
            <NavLinks />
          </nav>
          <div className="pt-4">
            <Notifications />
          </div>
        </div>
      </div>
    </>
  )
} 