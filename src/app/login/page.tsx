import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Login | MoonMatch",
  description: "Login to your MoonMatch account",
}

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/" className="text-2xl font-bold">MoonMatch</Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;MoonMatch has revolutionized how we connect with innovative startups, 
              leading to multiple successful collaborations.&rdquo;
            </p>
            <footer className="text-sm">Sofia Chen, CEO of TechGrowth Solutions</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <Card>
            <CardHeader>
              <CardTitle>Welcome back</CardTitle>
              <CardDescription>
                Login to your MoonMatch account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 